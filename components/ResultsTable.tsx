import React from 'react';
import { MonthlyResult } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ResultsTableProps {
  data: MonthlyResult[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mb-8">
       <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-bold text-[#2C3FA5] text-center">Tabela Detalhada (Mês a Mês)</h3>
      </div>
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                Mês
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                Juros (Mensal)
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                Total Investido
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                Total Juros
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider bg-[#2C3FA5]/10 text-[#2C3FA5]">
                Total Acumulado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.month} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-center font-medium text-gray-900">
                  {row.month}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-gray-600">
                  {formatCurrency(row.interestEarned)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-gray-600">
                  {formatCurrency(row.totalInvested)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-green-600 font-medium">
                  {formatCurrency(row.totalInterest)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-[#2C3FA5] bg-[#2C3FA5]/10">
                  {formatCurrency(row.totalAccumulated)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;