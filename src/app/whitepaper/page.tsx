import React from 'react';
import Link from 'next/link'; // Use Link for internal navigation

const WhitepaperPage = () => {
  // Define sections based on the provided whitepaper text
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'original-concept', title: 'I. Original Concept: Venom Chronicles' },
    { id: 'original-concept-game', title: 'A. Game Concept', parent: 'original-concept', level: 2 },
    { id: 'original-concept-blockchain', title: 'B. Blockchain Integration', parent: 'original-concept', level: 2 },
    { id: 'original-concept-gameplay', title: 'C. Gameplay Mechanics', parent: 'original-concept', level: 2 },
    { id: 'original-concept-economy', title: 'D. Economic Model', parent: 'original-concept', level: 2 },
    { id: 'original-concept-security', title: 'E. Security and Fairness', parent: 'original-concept', level: 2 },
    { id: 'new-concept', title: 'II. New Concept: Slithermon Saga' },
    { id: 'new-concept-game', title: 'A. Game Concept', parent: 'new-concept', level: 2 },
    { id: 'new-concept-blockchain', title: 'B. Blockchain Integration', parent: 'new-concept', level: 2 },
    { id: 'new-concept-gameplay', title: 'C. Gameplay Mechanics', parent: 'new-concept', level: 2 },
    { id: 'new-concept-economy', title: 'D. Economic Model', parent: 'new-concept', level: 2 },
    { id: 'new-concept-security', title: 'E. Security and Fairness', parent: 'new-concept', level: 2 },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  // Helper to render nested navigation
  const renderNav = (parentId: string | null = null) => {
    return (
      <ul>
        {(sections as Array<{ id: string; title: string; parent?: string; level?: number }>).filter(s => s.parent === parentId).map((section: { id: string; title: string; parent?: string; level?: number }) => (
          <li key={section.id} style={{ paddingLeft: section.level === 2 ? '15px' : '0' }}>
            <a href={`#${section.id}`}>{section.title}</a>
            {renderNav(section.id)} {/* Recursive call for nested sections if any */}
          </li>
        ))}
      </ul>
    );
  };


  return (
    <div className="whitepaper-layout">
      <aside className="whitepaper-sidebar">
        <div className="whitepaper-sidebar-header">
          <Link href="/" className="back-home-link">← Back to Home</Link>
          <h4>Whitepaper</h4>
        </div>
        <nav>
           {/* Render top-level sections */}
           <ul>
            {(sections as Array<{ id: string; title: string; parent?: string; level?: number }>).filter(s => !s.parent).map((section: { id: string; title: string; parent?: string; level?: number }) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
                {renderNav(section.id)} {/* Render child sections */}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="whitepaper-content">
        {/* --- Disclaimer --- */}
        <div className="whitepaper-disclaimer">
          <p><strong>Note:</strong> This document serves as a Lite Paper. Details outlined herein are subject to change based on development progress and community feedback leading up to the official game release.</p>
        </div>

        {/* --- Overview --- */}
        <section id="overview">
          <h2>Overview</h2>
          <p>Slithermon is a next-generation, blockchain-enabled gaming ecosystem that combines engaging gameplay, true digital ownership, and a dynamic, player-driven economy. Built on the Cardano blockchain, all transactions leverage ADA for gas fees, ensuring efficiency and low costs. The ecosystem employs a dual-token model:</p>
          <ul>
            <li><strong>Governance Token (SLITH):</strong> Empowers community decision-making on game development, storyline progression, and ecosystem upgrades.</li>
            <li><strong>Utility Token (VENOM):</strong> Used for in-game transactions such as purchasing equipment, upgrading abilities, and accessing exclusive missions.</li>
          </ul>
        </section>

        {/* --- I. Original Gameplay Concept: &quot;Venom Chronicles&quot; --- */}
        <section id="original-concept">
          <h2>I. Original Gameplay Concept: &quot;Venom Chronicles&quot;</h2>

          <section id="original-concept-game">
            <h3>A. Game Concept</h3>
            <p>Venom Chronicles is envisioned as an immersive action-adventure game set in a dystopian future. Players assume the roles of bio-enhanced operatives known as “Slithers.” Tasked with navigating treacherous landscapes and uncovering hidden truths, these operatives work to restore balance to a fractured world.</p>
          </section>

          <section id="original-concept-blockchain">
            <h3>B. Blockchain Integration</h3>
            <h4>Tokens:</h4>
            <ul>
              <li><strong>SLITH (Governance Token):</strong> Grants holders voting rights over key game development decisions.</li>
              <li><strong>VENOM (Utility Token):</strong> Fuels all in-game purchases and upgrades.</li>
            </ul>
            <h4>Gas Fees:</h4>
            <p>All transactions are executed on the Cardano blockchain using ADA, ensuring security, transparency, and cost efficiency.</p>
          </section>

          <section id="original-concept-gameplay">
            <h3>C. Gameplay Mechanics</h3>
            <ul>
              <li><strong>Dynamic Missions:</strong> Procedurally generated missions adapt to player choices and performance, ensuring a unique gameplay experience each session.</li>
              <li><strong>NFT Assets:</strong> In-game assets—including weapons, armor, and vehicles—are minted as NFTs. This provides players with true ownership, allowing them to trade or sell these assets on decentralized marketplaces.</li>
              <li><strong>Skill Progression:</strong> A flexible skill tree system lets players customize their operative’s abilities, fostering diverse playstyles and strategic depth.</li>
            </ul>
            <h4>Modes:</h4>
            <ul>
              <li><strong>PvP:</strong> Competitive player-versus-player modes where strategy and NFT asset management determine outcomes.</li>
              <li><strong>PvE:</strong> Cooperative and solo missions where players combat AI-controlled adversaries.</li>
            </ul>
          </section>

          <section id="original-concept-economy">
            <h3>D. Economic Model</h3>
            <ul>
              <li><strong>Play-to-Earn:</strong> Players earn VENOM tokens through mission completions, achievements, and participation in community events.</li>
              <li><strong>Staking:</strong> SLITH token holders can stake their tokens to receive a share of the game’s revenue, encouraging long-term engagement.</li>
              <li><strong>Marketplace:</strong> A decentralized marketplace allows players to trade NFT assets and tokens, ensuring a vibrant and sustainable in-game economy.</li>
            </ul>
          </section>

          <section id="original-concept-security">
            <h3>E. Security and Fairness</h3>
            <ul>
              <li><strong>Transparent Transactions:</strong> Utilizing the Cardano blockchain ensures all transactions are secure, transparent, and immutable.</li>
              <li><strong>Fairness in Gameplay:</strong> The integration of verifiable random functions (VRFs) guarantees fair distribution of loot and randomness in mission outcomes, bolstering trust in the ecosystem.</li>
            </ul>
          </section>
        </section>

        {/* --- II. New Gameplay Concept: &quot;Slithermon Saga&quot; --- */}
        <section id="new-concept">
          <h2>II. New Gameplay Concept: &quot;Slithermon Saga&quot;</h2>

          <section id="new-concept-game">
            <h3>A. Game Concept</h3>
            <p>Slithermon Saga reimagines the Web3 gaming experience by immersing players in a fantasy world where digital creatures (the Slithermons) are central to both the narrative and gameplay. Players capture, train, and battle these mystical beings while exploring a vast, interconnected world shaped by decentralized governance.</p>
          </section>

          <section id="new-concept-blockchain">
            <h3>B. Blockchain Integration</h3>
            <h4>Tokens:</h4>
            <ul>
              <li><strong>SLITH (Governance Token):</strong> Enables holders to vote on everything from creature evolution paths to global in-game events.</li>
              <li><strong>VENOM (Utility Token):</strong> Used for summoning Slithermons, acquiring rare items, and facilitating upgrades.</li>
            </ul>
            <h4>Gas Fees:</h4>
            <p>All smart contract transactions and NFT exchanges are processed on the Cardano blockchain using ADA, ensuring high security and minimal fees.</p>
          </section>

          <section id="new-concept-gameplay">
            <h3>C. Gameplay Mechanics</h3>
            <ul>
              <li><strong>Creature Collection & Evolution:</strong> Players discover and capture a diverse range of Slithermons. Each creature has unique abilities and can evolve through battles and training.</li>
              <li><strong>Battle Arenas:</strong> Engage in both PvP and PvE battles in diverse arenas. Strategic elements include elemental match-ups and tactical team formations.</li>
              <li><strong>Augmented Reality Integration:</strong> For an immersive experience, optional AR features allow players to locate Slithermons in real-world settings, blending the digital and physical worlds.</li>
              <li><strong>Guilds and Alliances:</strong> Players can form guilds, pooling resources to challenge larger opponents or compete in exclusive events.</li>
              <li><strong>Interactive Storyline:</strong> The narrative evolves based on collective player decisions. Major plot points are influenced by community voting using SLITH tokens.</li>
            </ul>
          </section>

          <section id="new-concept-economy">
            <h3>D. Economic Model</h3>
            <ul>
              <li><strong>Play-to-Earn Rewards:</strong> Active participation in battles, events, and guild activities results in VENOM token rewards.</li>
              <li><strong>NFT Marketplace:</strong> Unique Slithermons, evolution items, and arena accessories are tradable as NFTs, ensuring each asset’s scarcity and value.</li>
              <li><strong>Staking and Yield Farming:</strong> Beyond gameplay rewards, SLITH token holders can participate in staking programs that yield additional VENOM rewards, incentivizing long-term investment.</li>
            </ul>
          </section>

          <section id="new-concept-security">
            <h3>E. Security and Fairness</h3>
            <ul>
              <li><strong>Immutable Transactions:</strong> Cardano’s blockchain ensures all in-game transactions and NFT trades are secure and transparent.</li>
              <li><strong>Fair Matchmaking:</strong> Using verifiable random functions (VRFs), battle outcomes and loot distributions are verifiably random, ensuring fairness across the ecosystem.</li>
            </ul>
          </section>
        </section>

        {/* --- Conclusion --- */}
        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>Slithermon is designed to revolutionize the gaming experience by merging innovative gameplay mechanics with the reliability and transparency of blockchain technology. Both Venom Chronicles and Slithermon Saga provide diverse gameplay experiences, ensuring that whether you are a strategist, collector, or competitor, the ecosystem offers engaging, rewarding, and secure adventures.</p>
          <p>This comprehensive whitepaper outlines our vision for a future where digital ownership and community governance empower players like never before. Welcome to the new era of gaming—welcome to Slithermon.</p>
        </section>
      </main>
    </div>
  );
};

export default WhitepaperPage;
