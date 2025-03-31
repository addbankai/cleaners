"use client";

import React, { useState } from 'react'; // Removed unused useEffect import
import { useWallet } from '@/context/WalletContext'; // Adjust path if needed

export const ConnectWallet = () => {
  const {
    isConnected,
    address,
    availableWallets,
    connectWallet,
    disconnectWallet,
    isLoading,
    error,
  } = useWallet();
  const [showWallets, setShowWallets] = useState(false);

  const handleConnectClick = () => {
    // Add checks for availableWallets being an array
    if (Array.isArray(availableWallets)) {
        if (availableWallets.length === 1) {
          // If only one wallet, connect directly
          connectWallet(availableWallets[0]);
        } else if (availableWallets.length > 1) {
          // If multiple wallets, show selection
          setShowWallets(true);
        } else {
          // No wallets found
          alert("No Cardano wallets found. Please install a CIP-0030 compatible wallet (e.g., Nami, Eternl, Lace).");
        }
    } else {
       // Handle case where availableWallets is not an array (shouldn't happen with context setup)
       console.error("availableWallets is not an array:", availableWallets);
       alert("Error detecting available wallets.");
    }
  };

  const handleWalletSelect = (walletName: string) => {
    connectWallet(walletName);
    setShowWallets(false);
  };

  const truncateAddress = (addr: string | null): string => {
    // Add check for addr being a string
    if (typeof addr === 'string' && addr.length > 10) { // Ensure it's long enough to truncate
       return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
    }
    return addr || ""; // Return original if not string or too short
  };

  // Add console log to check state values on re-render
  console.log("ConnectWallet Render - isConnected:", isConnected, "address:", address, "isLoading:", isLoading);

  return (
    <div className="connect-wallet-container">
      {error && <p className="wallet-error">Error: {error}</p>}

      {/* Use standard conditional check */}
      {isConnected && address ? (
        <div className="wallet-connected">
          <span className="wallet-address" title={address || undefined}>
            Connected: {truncateAddress(address)}
          </span>
          <button onClick={disconnectWallet} className="wallet-button disconnect">
            Disconnect
          </button>
        </div>
      ) : (
        /* Render connect button if not connected */
        <button
          onClick={handleConnectClick}
          disabled={isLoading || !Array.isArray(availableWallets) || availableWallets.length === 0}
          className="wallet-button connect"
        >
          {isLoading ? 'Loading...' : 'Connect Wallet'}
        </button>
      )}

      {showWallets && !isConnected && Array.isArray(availableWallets) && ( // Check if array before mapping
        <div className="wallet-selection-modal">
          <h4>Select Wallet</h4>
          <ul>
            {availableWallets.map((walletName: string) => ( // Explicit type for map param
              <li key={walletName}>
                <button onClick={() => handleWalletSelect(walletName)}>
                  {/* Basic check for wallet icon - replace with actual icons if possible */}
                  {window.cardano?.[walletName]?.icon && (
                     <img src={window.cardano[walletName].icon} alt={`${walletName} icon`} width="20" height="20" style={{ marginRight: '8px', verticalAlign: 'middle' }}/>
                  )}
                  {/* Ensure name exists before accessing */}
                  {window.cardano?.[walletName]?.name || walletName}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowWallets(false)} className="close-modal-button">Close</button>
        </div>
      )}
    </div>
  );
};
