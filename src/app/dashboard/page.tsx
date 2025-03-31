 "use client"; // Add this directive

 import dynamic from 'next/dynamic';
 import React from 'react';

 // Dynamically import the client-side page component with SSR disabled
const DashboardClientPage = dynamic(
  () => import('./DashboardClientPage'),
  {
    ssr: false, // Ensure this component only renders on the client
    loading: () => <div className="dashboard-container"><p>Loading Dashboard...</p></div> // Optional loading indicator
  }
);

// This main page component now just renders the dynamically imported client component
export default function DashboardPage() {
  return <DashboardClientPage />;
}
