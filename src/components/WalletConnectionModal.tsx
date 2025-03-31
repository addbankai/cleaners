"use client";

import React from 'react';
import { useWallet } from '@/context/WalletContext';
import { useRouter } from 'next/navigation'; // Re-import useRouter

// Interface updated: Removed onConnectSuccess
interface WalletConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Component updated: Removed onConnectSuccess prop
export default function WalletConnectionModal({ isOpen, onClose }: WalletConnectionModalProps) {
  const { availableWallets, connectWallet, isLoading, error } = useWallet();
  const router = useRouter(); // Initialize router

  const handleWalletSelect = async (walletName: string) => {
    try {
      await connectWallet(walletName); // Attempt connection
      // If connectWallet doesn't throw, assume success and redirect
      router.push('/dashboard');
      onClose(); // Close modal after redirect starts
    } catch (err) {
      console.error("Modal connection error:", err);
      // Error is displayed via context state, keep modal open or close? Closing for now.
      // If you want it to stay open on error, remove the onClose() below.
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    // Added modal-overlay class
    <div className="modal-overlay open" onClick={onClose}> {/* Add 'open' class directly based on isOpen prop */}
      {/* Use wallet-selection-modal styles from globals.css */}
      {/* Added modern-modal class for potential specific styling */}
      <div className="wallet-selection-modal modern-modal" onClick={(e) => e.stopPropagation()}>
        <h4>Connect Wallet</h4>
        {isLoading && <p>Connecting...</p>}
        {/* Display error from context */}
        {error && !isLoading && <p className="wallet-error modal-error">{error}</p>}
        {!isLoading && (
          <ul>
            {/* Add Array.isArray check for safety, although TS errors persist */}
            {Array.isArray(availableWallets) && availableWallets.length > 0 ? (
              availableWallets.map((walletName) => (
                <li key={walletName}>
                  <button onClick={() => handleWalletSelect(walletName)}>
                    {window.cardano?.[walletName]?.icon && (
                       <img src={window.cardano[walletName].icon} alt={`${walletName} icon`} width="24" height="24" style={{ marginRight: '10px', verticalAlign: 'middle' }}/>
                    )}
                    <span>{window.cardano?.[walletName]?.name || walletName}</span>
                  </button>
                </li>
              ))
            ) : (
              <li>No compatible wallets found. Please install a Cardano wallet extension.</li>
            )}
          </ul>
        )}
         <button onClick={onClose} className="close-modal-button">Cancel</button>
      </div>
    </div>
  );
}
