"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';
import { Lucid, Blockfrost, WalletApi, Address } from 'lucid-cardano';

// Local storage key
const WALLET_NAME_KEY = 'connectedWalletName';

interface WalletState {
  lucid: Lucid | null;
  walletApi: WalletApi | null;
  address: Address | null;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  availableWallets: string[];
  lastConnectedWallet: string | null; // Store the name of the last connected wallet
  connectWallet: (walletName: string) => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletState | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [lucid, setLucid] = useState<Lucid | null>(null);
  const [walletApi, setWalletApi] = useState<WalletApi | null>(null);
  const [address, setAddress] = useState<Address | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [availableWallets, setAvailableWallets] = useState<string[]>([]);
  const [lastConnectedWallet, setLastConnectedWallet] = useState<string | null>(null);

  // Initialize Lucid, check available wallets, and check localStorage
  useEffect(() => {
    const initialize = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const blockfrostApiKey = process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY;
        if (!blockfrostApiKey) throw new Error("NEXT_PUBLIC_BLOCKFROST_API_KEY not set.");

        const lucidInstance = await Lucid.new(
          new Blockfrost('https://cardano-mainnet.blockfrost.io/api/v0', blockfrostApiKey),
          'Mainnet'
        );
        setLucid(lucidInstance);

        // Check available wallets
        const wallets: string[] = [];
        if (window.cardano) {
          Object.keys(window.cardano).forEach((walletKey: string) => {
            if (window.cardano && typeof window.cardano[walletKey]?.enable === 'function' && window.cardano[walletKey]?.apiVersion) {
               wallets.push(walletKey);
            }
          });
        }
        setAvailableWallets(wallets);
        console.log("Available wallets:", wallets);

        // Check localStorage for last connected wallet
        const storedWalletName = localStorage.getItem(WALLET_NAME_KEY);
        if (storedWalletName && wallets.includes(storedWalletName)) {
          console.log(`Found last connected wallet in storage: ${storedWalletName}`);
          setLastConnectedWallet(storedWalletName);
          // Don't auto-connect here, let the UI prompt for reconnection
        } else {
          setLastConnectedWallet(null); // Clear if stored wallet not available
          localStorage.removeItem(WALLET_NAME_KEY); // Clean up storage
        }

      } catch (err) {
        console.error("Initialization error:", err);
        setError("Failed to initialize connection. Please refresh.");
        localStorage.removeItem(WALLET_NAME_KEY); // Clear storage on init error
      } finally {
        setIsLoading(false);
      }
    };
    initialize();
  }, []);

  const connectWallet = useCallback(async (walletName: string) => {
    if (!lucid || !window.cardano?.[walletName]) {
       setError(`Lucid not initialized or wallet '${walletName}' not found.`);
       return Promise.reject(new Error(`Wallet '${walletName}' not found.`)); // Return rejected promise
    }
    setIsLoading(true); // Set loading true for connection attempt
    setError(null);
    try {
      const walletCardanoApi = window.cardano[walletName];
      if (!walletCardanoApi || typeof walletCardanoApi.enable !== 'function') {
        throw new Error(`Wallet API or enable function for '${walletName}' not found.`);
      }
      const api: WalletApi = await walletCardanoApi.enable();
      lucid.selectWallet(api);
      const walletAddress: Address = await lucid.wallet.address();

      setWalletApi(api);
      setAddress(walletAddress);
      setIsConnected(true);
      setLastConnectedWallet(walletName); // Store connected wallet name
      localStorage.setItem(WALLET_NAME_KEY, walletName); // Save to localStorage
      console.log(`Connected to ${walletName}, Address: ${walletAddress}`);
      // No need to return anything on success
    } catch (err: unknown) {
      console.error(`Failed to connect to ${walletName}:`, err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(`Failed to connect wallet: ${errorMessage}`);
      setIsConnected(false);
      setWalletApi(null);
      setAddress(null);
      setLastConnectedWallet(null); // Clear last connected on error
      localStorage.removeItem(WALLET_NAME_KEY); // Clear storage on error
      throw err; // Re-throw error so modal knows connection failed
    } finally {
      setIsLoading(false);
    }
  }, [lucid]);

  const disconnectWallet = useCallback(() => {
    setWalletApi(null);
    setAddress(null);
    setIsConnected(false);
    setLastConnectedWallet(null); // Clear last connected on disconnect
    localStorage.removeItem(WALLET_NAME_KEY); // Remove from localStorage
    console.log("Wallet disconnected.");
  }, []);

  const value = {
    lucid,
    walletApi,
    address,
    isConnected,
    isLoading,
    error,
    availableWallets,
    lastConnectedWallet, // Expose last connected wallet
    connectWallet,
    disconnectWallet,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export const useWallet = (): WalletState => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

declare global {
  interface Window { cardano?: any; }
}
