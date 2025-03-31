import type { Metadata } from "next";
// Import new fonts: Orbitron for gaming/titles, Poppins for modern body text
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/context/WalletContext"; // Import the provider

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins', // CSS variable for Poppins
  weight: ['400', '500', '600', '700', '800', '900'] // Include necessary weights
});

// Configure Orbitron font
const orbitron = Orbitron({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-orbitron', // CSS variable for Orbitron
  weight: ['400', '500', '600', '700', '800', '900'] // Include necessary weights
});


export const metadata: Metadata = {
  title: "Slithermon", // Updated Title
  description: "Join the Slithermon adventure and explore the world.", // Updated Description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${orbitron.variable}`}>
      {/* Apply font variables to the html tag for global access */}
      <body className={`antialiased`}> {/* Removed old font classes, base font set in globals.css */}
        <WalletProvider> {/* Wrap children with the provider */}
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
