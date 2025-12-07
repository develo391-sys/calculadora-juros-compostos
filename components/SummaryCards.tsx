import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface SummaryCardsProps {
  finalValue: number;
  totalInvested: number;
  totalInterest: number;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ finalValue, totalInvested, totalInterest }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Card 1: Valor Total Final (Highlighted) */}
      <div className="bg-red-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
        <h3 className="text-sm font-medium opacity-90 uppercase tracking-wider mb-2">Valor total final</h3>
        <p className="text-3xl font-bold">{formatCurrency(finalValue)}</p>
      </div>

      {/* Card 2: Valor Total Investido */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
        <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">Valor total investido</h3>
        <p className="text-2xl font-bold text-gray-700">{formatCurrency(totalInvested)}</p>
      </div>

      {/* Card 3: Total em Juros */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
        <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">Total em juros</h3>
        <p className="text-2xl font-bold text-green-700">{formatCurrency(totalInterest)}</p>
      </div>
    </div>
  );
};

export default SummaryCards;