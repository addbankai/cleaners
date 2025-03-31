import React from 'react';
// import NftDetailClient from './NftDetailClient'; // Import the Client Component
// import { C } from 'lucid-cardano'; // Import C for hexToString helper

// --- Helper Functions ---
const hexToString = (hex: string): string | null => {
  try {
    if (!hex || hex.length % 2 !== 0) return null;
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
      const charCode = parseInt(hex.substring(i, i + 2), 16);
      if (isNaN(charCode)) return null;
      if (charCode >= 32 && charCode < 127) {
         str += String.fromCharCode(charCode);
      }
    }
    return str;
  } catch (e) {
    console.error("Failed to decode hex:", hex, e);
    return null;
  }
};

const ipfsToHttp = (ipfsUrl: string): string => {
  if (!ipfsUrl || typeof ipfsUrl !== 'string' || !ipfsUrl.startsWith('ipfs://')) return ipfsUrl || '';
  const cid = ipfsUrl.substring(7);
  return `https://ipfs.io/ipfs/${cid}`;
};

const processImageUrl = (imageData: any): string | null => {
  if (!imageData) return null;
  let url = null;
  if (Array.isArray(imageData)) {
    url = imageData.find(item => typeof item === 'string' && item.startsWith('ipfs://')) || imageData.join('');
  } else if (typeof imageData === 'string') {
    url = imageData;
  }
  if (url) {
    return ipfsToHttp(url);
  }
  return null;
};

// --- Fetch Function ---
async function getNftDetails(unit: string) {
  const apiKey = process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY;
  if (!apiKey) {
    throw new Error("Blockfrost API key not configured.");
  }
  try {
    console.log(`Fetching details for unit: ${unit}`);
    const response = await fetch(`https://cardano-mainnet.blockfrost.io/api/v0/assets/${unit}`, {
      headers: { project_id: apiKey },
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch NFT details (${response.status}): ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`Raw Blockfrost data for ${unit}:`, data);

    const policyId = data?.policy_id;
    const assetNameHex = data?.asset_name;
    const onchainMetadata = data?.onchain_metadata || {};

    let traits: { trait_type: string; value: string }[] = [];
    let name = `Asset ${String(assetNameHex)?.substring(0, 6) || 'N/A'}`;
    let imageUrl = null;
    let description = null;

    // --- Simplified Metadata Parsing Logic ---
    if (onchainMetadata && typeof onchainMetadata === 'object') {
        // Extract common fields directly
        name = onchainMetadata.name || name;
        imageUrl = processImageUrl(onchainMetadata.image);
        description = typeof onchainMetadata.description === 'string' ? onchainMetadata.description : null;

        // Check for traits directly within the metadata object
        if (onchainMetadata.traits && typeof onchainMetadata.traits === 'object') {
            console.log(`Found traits object directly in metadata for ${unit}:`, onchainMetadata.traits);
            traits = Object.entries(onchainMetadata.traits)
                .map(([key, value]) => ({ trait_type: key, value: String(value) }));
        }
        // Fallback: Check for traits at the root level (excluding known keys) if direct traits object not found
        else if (traits.length === 0 && !Array.isArray(onchainMetadata)) {
             console.log(`No direct 'traits' object found, checking root level of metadata for ${unit}...`);
             const standardKeys = ['name', 'image', 'mediaType', 'description', 'files', 'traits', '721', '222'];
             traits = Object.entries(onchainMetadata)
                .filter(([key, value]) =>
                    !standardKeys.includes(key) &&
                    typeof key === 'string' &&
                    (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean')
                )
                .map(([key, value]) => ({ trait_type: key, value: String(value) }));
             if (traits.length > 0) {
                 console.log(`Found traits at root level for ${unit}:`, traits);
             } else {
                 console.log(`No traits found at root level either for ${unit}.`);
             }
        }

    } else {
        console.warn(`Onchain metadata for ${unit} is null or not an object.`);
    }
    // --- End Simplified Metadata Parsing Logic ---

    console.log(`Final processed traits for ${unit}:`, traits);
    return { unit, policyId, assetNameHex, name, imageUrl, description, traits, rawData: data };
  } catch (error) {
    console.error("Error in getNftDetails:", error);
    throw new Error(error instanceof Error ? `Failed to load NFT details: ${error.message}` : "Failed to load NFT details.");
  }
}

// --- Page Component (Server Component) ---
interface NftDetailPageProps {
  params: { unit: string };
  searchParams?: { [key: string]: string | string[] | undefined }; // Make searchParams optional
}

export default async function NftDetailPage({ params }: NftDetailPageProps) { // Remove searchParams destructuring
  // let nftData = null; // Commented out
  let error = null; // Keep error handling for now
  try {
    // nftData = await getNftDetails(params.unit); // Commented out data fetching
  } catch (e) {
    error = e instanceof Error ? e.message : "An unknown error occurred."; // Keep error handling
    console.error(`NFT Detail Page Server Component: Error fetching data for ${params.unit}`, error); // Keep error logging
  }

  // return <NftDetailClient nftData={nftData} error={error} />; // Commented out client component return

  // Add simplified return statement
  return (
    <div>
      <h1>NFT Detail Page (Simplified)</h1>
      <p>Unit: {params.unit}</p>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
