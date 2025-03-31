"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Snek.fun Fairlaunch', value: 93, description: 'Launched fairly on the Snek.fun platform.' },
  { name: 'Treasury', value: 4, description: 'Reserved for future development and ecosystem growth.' },
  { name: 'Team', value: 3, description: 'Allocated to the core team.' },
];

// Define vibrant gaming-style colors
const COLORS: string[] = ['#00ff9d', '#ff47a4', '#4d7cff']; // Neon Green, Pink, Blue

// Revert to standard Math
const RADIAN = Math.PI / 180;
// Add explicit types for parameters
interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number; // Explicitly number
  // index: number; // Removed unused index
}
// Removed unused index parameter from destructuring
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: Omit<CustomizedLabelProps, 'index'>) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  // Revert to standard Math
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="12px" fontWeight="bold">
      {/* Explicitly cast to Number before calling toFixed */}
      {`${Number(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Define a more specific type for the tooltip payload
// Define a more specific type for the tooltip payload
interface OriginalDataPoint { // Define the shape of the original data
  name: string;
  value: number;
  description: string;
}

interface TooltipPayload {
  name: string;
  value: number;
  payload: OriginalDataPoint; // Use the specific type for the payload
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    // Use optional chaining for safer access
    const dataPoint = data.find(d => d.name === payload[0]?.name);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].name} : ${payload[0].value}%`}</p>
        {dataPoint && <p className="desc">{dataPoint.description}</p>}
      </div>
    );
  }
  return null;
};


const TokenomicsSection: React.FC = () => {
  return (
    <section className="tokenomics-section-v2">
      <h2 className="section-title">VENOM Tokenomics</h2>
      <div className="tokenomics-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130} // Increased size
                innerRadius={60} // Create a donut chart effect
                fill="#8884d8"
                dataKey="value"
                stroke="#111827" // Background color for separation
                strokeWidth={3}
              >
                {/* Explicitly cast data to Array before map */}
                {(data as Array<{ name: string; value: number; description: string }>).map((entry: { name: string; value: number; description: string }, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}/>
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconType="circle"
                wrapperStyle={{ paddingLeft: '20px' }}
                 // Removed unused 'entry' parameter and typed 'value'
                formatter={(value: string) => <span style={{ color: '#e5e7eb' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="tokenomics-details">
          <h3>Distribution & Utility</h3>
          <ul>
            <li><strong>Fairlaunch:</strong> 93% launched on Snek.fun platform.</li>
            <li><strong>Treasury:</strong> 4% reserved.</li>
            <li><strong>Team:</strong> 3% allocated.</li>
          </ul>
          <div className="utility-info">
            <h4>Token Utility</h4>
            <p>VENOM will be used as an <strong>additional currency for minting</strong> within 48 hours of launch.</p>
            <p>Engage in <strong>minigames to earn SLITH</strong> tokens.</p>
          </div>
           <div className="governance-info">
             <h4>SLITH Governance Token</h4>
             <p>Tokenomics for the SLITH governance token will be announced after the game launch.</p>
             <p>Participate in <strong>Play-to-Airdrop</strong> events!</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
