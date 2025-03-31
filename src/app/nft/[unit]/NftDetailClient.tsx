"use client"; // This component handles rendering and needs client-side features like Link

import React from 'react'; // Removed useState, useEffect
import Link from 'next/link';
import Image from 'next/image';

// Define the expected shape of the NFT data prop
interface NftData {
  unit: string;
  policyId: string;
  assetNameHex: string;
  name: string;
  imageUrl: string | null;
  description: string | null;
  traits: { trait_type: string; value: string }[];
  rawData: any;
}

interface NftDetailClientProps {
  nftData: NftData | null; // Can be null if not found
  error?: string | null;   // Optional error message
}

export default function NftDetailClient({ nftData, error }: NftDetailClientProps) {

  // Handle Error State
  if (error) {
    return <div className="nft-detail-container error-message">Error: {error}</div>;
  }

  // Handle Not Found State
  if (!nftData) {
    // Display loading state while data is fetched by the parent Server Component
    // Or display a more specific "Not Found" if the parent explicitly passes null after fetching
    return <div className="nft-detail-container not-found">Loading NFT details or NFT not found...</div>;
  }

  // Data is available, render the details
  const traitsList = Array.isArray(nftData.traits) ? nftData.traits : [];
  console.log("NftDetailClient: Rendering with traitsList:", traitsList);

  return (
    <div className="nft-detail-container">
      <Link href="/dashboard" className="back-link">&larr; Back to Dashboard</Link>
      <h1>{nftData.name}</h1>
      <div className="nft-detail-content">
        <div className="nft-detail-image-container">
          {nftData.imageUrl ? (
            <Image src={nftData.imageUrl} alt={nftData.name || 'NFT Image'} width={400} height={400} className="nft-detail-image" priority />
          ) : (
            <div className="nft-detail-image-placeholder">?</div>
          )}
        </div>
        <div className="nft-detail-info">
          {nftData.description && (
            <div className="nft-detail-section">
              <h3>Description</h3>
              <p>{nftData.description}</p>
            </div>
          )}
          <div className="nft-detail-section">
            <h3>Traits</h3>
            {traitsList.length > 0 ? (
              <ul className="nft-traits-list">
                {traitsList.map((trait) => (
                  <li key={trait.trait_type} className="nft-trait-item">
                    <span className="trait-type">{trait.trait_type}:</span>
                    <span className="trait-value">{trait.value}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No traits found in metadata.</p>
            )}
          </div>
           <div className="nft-detail-section">
              <h3>Details</h3>
              <p className="detail-item"><strong>Policy ID:</strong> <span title={nftData.policyId}>{nftData.policyId?.substring(0,12)}...</span></p>
              <p className="detail-item"><strong>Asset Name Hex:</strong> {nftData.assetNameHex}</p>
              <p className="detail-item"><strong>Unit:</strong> <span title={nftData.unit}>{nftData.unit?.substring(0,12)}...{nftData.unit?.substring(nftData.unit.length - 6)}</span></p>
           </div>
        </div>
      </div>
    </div>
  );
}
