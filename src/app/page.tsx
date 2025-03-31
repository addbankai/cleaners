"use client";

import React, { useState } from 'react'; // Removed useEffect
import Image from "next/image";
import cardanoLogo from '@/img/cardano.png'; // Import the cardano image
import sidebarLogo from '@/img/logo.png'; // Import the sidebar logo image
import supercellLogo from '@/img/supercell.png'; // Import Supercell logo
import sinestervcLogo from '@/img/sinestervc.png'; // Import Sinester VC logo
import tencentgamesLogo from '@/img/tencentgames.png'; // Import Tencent Games logo
import { useWallet } from '@/context/WalletContext';
import { useRouter } from 'next/navigation';
import WalletConnectionModal from '../components/WalletConnectionModal'; // Corrected import path
import TokenomicsSection from '../components/TokenomicsSection'; // Import the new component

export default function Home() {
  const { isConnected } = useWallet();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Removed connectionTriggeredByDashboard state

  const handleDashboardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isConnected) {
      router.push('/dashboard');
    } else {
      setIsModalOpen(true); // Just open the modal
    }
  };

  // Removed the useEffect for redirection

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // --- Add onClick handler for Play Now button ---
  const handlePlayNowClick = () => {
    if (isConnected) {
      // TODO: Implement actual "Play Now" action (e.g., navigate to game page)
      console.log("User is connected, proceeding to play...");
      alert("Play Now action (not implemented yet)");
    } else {
      setIsModalOpen(true); // Open connection modal if not connected
    }
  };
  // --- End Add onClick handler ---

  return (
    <>
      <div className="page-layout">
        <aside className="sidebar">
          <div className="sidebar-logo">
             {/* Replace div with Image component */}
             <Image src={sidebarLogo} alt="Logo" width={150} height={40} /> {/* Adjust width/height as needed */}
             {/* Removed SEED GO text */}
          </div>
          <nav className="sidebar-nav">
            <a href="/dashboard" onClick={handleDashboardClick}>Dashboard</a>
            <a href="#" className="marketplace-dropdown">
              Marketplace
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            {/* Update href to point to the new whitepaper page */}
            <a href="/whitepaper">Whitepaper</a>
            {/* Removed SEED Dao link */}
          </nav>
        </aside>

        <div className="content-wrapper">
          <header className="header content-header">
             {/* Buttons removed */}
          </header>

          <main className="main-background">
            <div className="game-logo">Slithermon</div>
            {/* Added onClick handler to Play Now button */}
            <button className="play-now-button" onClick={handlePlayNowClick}>PLAY NOW</button>
          </main>

          <section className="partners-section">
            <h2 className="section-title">Our Partner</h2>
            <div className="partners-logos">
              {/* Replace placeholders with actual logos */}
              <Image src={supercellLogo} alt="Supercell Logo" width={300} height={100} className="partner-logo-img" /> {/* Adjust width/height */}
              <Image src={sinestervcLogo} alt="Sinester VC Logo" width={300} height={100} className="partner-logo-img" /> {/* Adjust width/height */}
              <Image src={tencentgamesLogo} alt="Tencent Games Logo" width={300} height={100} className="partner-logo-img" /> {/* Adjust width/height */}
            </div>
          </section>

          {/* Duplicated and modified section */}
          <section className="partners-section">
            <h2 className="section-title">Blockchain</h2>
            <div className="partners-logos">
              {/* Using imported image object for the Cardano logo */}
              <Image src={cardanoLogo} alt="Cardano Logo" width={300} height={150} /> {/* Adjust width/height as needed */}
            </div>
          </section>

          {/* Replace old tokenomics section with the new component */}
          <TokenomicsSection />

        </div>

        {/* Removed Meet the Community button */}
      </div>

      {/* Wallet Connection Modal - Removed onConnectSuccess prop */}
      <WalletConnectionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
