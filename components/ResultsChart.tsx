import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { MonthlyResult } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ResultsChartProps {
  data: MonthlyResult[];
}

const ResultsChart: React.FC<ResultsChartProps> = ({ data }) => {
  // To avoid performance issues with too many points, we might filter data if it's too large
  // For standard usage (e.g. 30 years * 12 = 360 points), Recharts handles it fine.
  // We can just pass the data directly.

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
      <h3 className="text-lg font-bold text-red-800 mb-6 text-center">Evolução do Patrimônio</h3>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              label={{ value: 'Mês', position: 'insideBottomRight', offset: -10 }} 
              tickFormatter={(value) => value === 0 ? '0' : value}
              minTickGap={30}
            />
            <YAxis 
              tickFormatter={(value) => {
                 if (value >= 1000) return `${value / 1000}k`;
                 return value;
              }}
            />
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(label) => `Mês ${label}`}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Line
              type="monotone"
              dataKey="totalAccumulated"
              name="Total Acumulado"
              stroke="#991b1b" // red-800
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
             <Line
              type="monotone"
              dataKey="totalInvested"
              name="Valor Investido"
              stroke="#374151" // gray-700
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultsChart;