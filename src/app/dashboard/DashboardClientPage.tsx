"use client";

import React, { useEffect, useState } from 'react';
// import Link from 'next/link'; // Removed unused import
import { useWallet } from '@/context/WalletContext';
import { useRouter } from 'next/navigation'; // Import useRouter
import { UTxO } from 'lucid-cardano'; // Removed unused Assets, C

// --- Helper Functions ---
// Removed unused hexToString function
/*
const hexToString = (hex: string): string | null => {
  try {
    // Ensure hex is a non-empty string with even length
    if (typeof hex !== 'string' || hex.length === 0 || hex.length % 2 !== 0) return null;
    // Use Buffer for robust hex decoding (assuming Node.js/browser environment with Buffer)
    // If Buffer is not available, C.AssetName might be the intended way, ensure 'C' is imported correctly.
    // For now, let's assume Buffer is available for broader compatibility.
    // If using Lucid's C, ensure 'C' is imported: import { ..., C } from 'lucid-cardano';
    // const bytes = C.AssetName.from_hex(hex).to_original_bytes(); // If using Lucid's C
    const bytes = Buffer.from(hex, 'hex');
    return new TextDecoder().decode(bytes); // Use TextDecoder for UTF-8 decoding
  } catch (e) {
    console.error("Error decoding hex:", e); // Log error for debugging
    return null;
  }
};
*/
// Removed unused ipfsToHttp function
/*
const ipfsToHttp = (ipfsUrl: string): string => { // Keep ipfsToHttp if needed elsewhere, otherwise remove
  // Ensure ipfsUrl is a string before calling methods
  if (typeof ipfsUrl !== 'string' || !ipfsUrl.startsWith('ipfs://')) return ipfsUrl || '';
  const cid = ipfsUrl.substring(7); // .substring is correct for string
  return `https://ipfs.io/ipfs/${cid}`;
};
*/
// Removed unused processImageUrl function
/*
const processImageUrl = (imageData: any): string | null => {
  if (!imageData) return null;
  let url: string | null = null;
  if (Array.isArray(imageData)) { // Use Array.isArray correctly
    // Find the first string starting with ipfs:// or join if no such string found
    url = imageData.find((item): item is string => typeof item === 'string' && item.startsWith('ipfs://')) || imageData.join('');
  } else if (typeof imageData === 'string') {
    url = imageData;
  }
  // Ensure url is a string before passing to ipfsToHttp
  return url ? ipfsToHttp(url) : null;
};
*/
// */ // Removed orphaned comment marker

// --- Component ---

// Removed unused NftInfo interface
/*
interface NftInfo {
  unit: string;
  name: string | null;
  imageUrl: string | null;
}
*/

// Removed unused InventoryTab type
// type InventoryTab = "Slithermon" | "Items";

export default function DashboardClientPage() {
  const { lucid, isConnected, isLoading: walletLoading, address, error: walletError, disconnectWallet } = useWallet(); // Add disconnectWallet
  const router = useRouter(); // Initialize router

  // Balances State
  const [adaBalance, setAdaBalance] = useState<bigint | null>(null);
  const [snekBalance, setSnekBalance] = useState<bigint | null>(null);
  // const [balanceLoading, setBalanceLoading] = useState<boolean>(false); // Removed unused state again
  // const [balanceError, setBalanceError] = useState<string | null>(null); // Keep balanceError commented for now

  // NFT State REMOVED

  console.log("DashboardClientPage Render - isConnected:", isConnected, "address:", address, "isLoading:", walletLoading);

  // Define Tokens & Policies
  const SNEK_UNIT = "279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b";
  // SLITHERMON_POLICY_ID REMOVED
  // ITEM_POLICY_ID REMOVED
  // const BLOCKFROST_API_KEY = process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY; // Removed unused constant

  // Effect to fetch balance data ONLY
  useEffect(() => {
    const fetchData = async () => {
      // Check only for necessary connection details for balance fetching
      if (!isConnected || !lucid || !address) {
        setAdaBalance(null); setSnekBalance(null);
        // setBalanceLoading(false); // Remove call as state is removed
        return; // Exit if not connected or ready
      }

      // setBalanceLoading(true); // Removed unused state setter
      // setBalanceError(null); // Removed unused state setter
      setAdaBalance(null); setSnekBalance(null);
      // NFT State updates REMOVED

      try {
        console.log("Fetching UTXOs for balance...");
        const utxos: UTxO[] = await lucid.wallet.getUtxos();
        if (!Array.isArray(utxos)) {
          throw new Error("Failed to fetch valid UTXOs. Received non-array.");
        }
        console.log(`Found ${utxos.length} UTXOs. Processing balances...`);
        let totalLovelace = BigInt(0);
        let totalSnek = BigInt(0);
        // Simplified loop for balances only
        utxos.forEach((utxo: UTxO) => {
          totalLovelace += utxo.assets.lovelace ?? BigInt(0);
          const snekValue = utxo.assets[SNEK_UNIT];
          if (typeof snekValue === 'bigint') {
            totalSnek += snekValue;
          }
        });
        console.log("Total Lovelace:", totalLovelace.toString());
        console.log("Total Snek:", totalSnek.toString());
        setAdaBalance(totalLovelace);
        setSnekBalance(totalSnek);

        // NFT fetching logic REMOVED

      } catch (err: unknown) {
        console.error("Error fetching wallet balance data:", err);
        // const errorMessage = err instanceof Error ? err.message : String(err); // Error message construction removed as balanceError is removed
        // setBalanceError(`Fetch error: ${errorMessage}`); // Keep balanceError commented
        setAdaBalance(null); setSnekBalance(null);
        // NFT State updates REMOVED
      } finally {
        // setBalanceLoading(false); // Remove call as state is removed
        // NFT State updates REMOVED
      }
    };
    fetchData();
    // Update dependencies array - remove NFT related constants/state setters
  }, [isConnected, lucid, address, SNEK_UNIT]); // Removed SLITHERMON_POLICY_ID, ITEM_POLICY_ID, BLOCKFROST_API_KEY (if only used for NFTs)

  // Effect for redirecting if not connected
  useEffect(() => {
    // Only redirect if loading is finished and user is not connected
    if (!walletLoading && !isConnected) {
      console.log("DashboardClientPage: Not connected, redirecting to home...");
      router.push('/');
    }
  }, [walletLoading, isConnected, router]);

  // Show loading state while wallet connection status is being determined
  if (walletLoading) {
    // You might want a more styled loading indicator here eventually
    return <div className="dashboard-container disconnected-state"><p>Loading wallet status...</p></div>;
  }

  // If there was a wallet error during context initialization, show it
  if (walletError) {
     return <div className="dashboard-container disconnected-state"><p className="wallet-error">Error initializing wallet connection: {walletError}</p></div>;
  }

  // If still not connected after loading (should have been redirected, but as fallback)
  if (!isConnected) {
     // This state should ideally not be reached due to the redirect effect,
     // but keep it as a fallback or for initial render before redirect triggers.
     return <div className="dashboard-container disconnected-state"><p>Redirecting...</p></div>;
  }

  // ---- Render connected state ----
  // currentNftList REMOVED

  const truncateAddr = (addr: string | null): string => {
    // Ensure addr is a non-empty string before calling methods
    if (typeof addr !== 'string' || addr.length === 0) return 'User Dashboard';
    // Check length before substring to avoid errors on short addresses
    if (addr.length <= 14) return addr; // 8 + ... + 6 = 17 minimum length for truncation
    return `${addr.substring(0, 8)}...${addr.substring(addr.length - 6)}`; // .substring is correct for string
  };

  return (
    <div className="gaming-dashboard">
      <div className="dashboard-header">
        <p className="header-subtitle">SLITHERMONS USER DASHBOARD</p>
        <h1>{truncateAddr(address)}</h1>
        <button onClick={disconnectWallet} className="logout-button" style={{ marginLeft: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Logout</button> {/* Add logout button */}
      </div>

      <div className="dashboard-main-content">
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-box"><span className="stat-label">LEVEL</span><span className="stat-value">0</span></div>
          <div className="stat-box"><span className="stat-label">EXP</span><span className="stat-value">0<span className="stat-value-suffix">/???</span></span></div>
          <div className="stat-box"><span className="stat-label">ENERGY</span><span className="stat-value">0</span></div>
        </div>
        {/* Tokens Section - Use Number() correctly */}
        <div className="tokens-section">
          <div className="token-box">
            <span className="token-label">Token 1 (ADA)</span>
            <span className="token-balance">{(adaBalance !== null ? Number(adaBalance) / 1_000_000 : 0).toLocaleString()}</span>
          </div>
          <div className="token-box">
            <span className="token-label">Token 2 (Snek)</span>
            <span className="token-balance">{(snekBalance !== null ? Number(snekBalance) : 0).toLocaleString()}</span>
          </div>
          <div className="token-box">
            <span className="token-label">Token 3</span>
            <span className="token-balance">--</span>
          </div>
        </div>
      </div>

      {/* Inventory Section REMOVED */}

    </div>
  );
}
