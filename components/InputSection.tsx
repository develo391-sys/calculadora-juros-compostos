import React, { ChangeEvent } from 'react';
import { CalculationInput } from '../types';

interface InputSectionProps {
  values: CalculationInput;
  onChange: (field: keyof CalculationInput, value: any) => void;
  onCalculate: () => void;
  onClear: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({ values, onChange, onCalculate, onClear }) => {
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: keyof CalculationInput) => {
    const val = parseFloat(e.target.value);
    onChange(field, isNaN(val) ? 0 : val);
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLInputElement>, field: keyof CalculationInput) => {
    // Keep only digits
    const rawValue = e.target.value.replace(/\D/g, '');
    // Convert to float (cents -> unit)
    const numberValue = rawValue ? parseFloat(rawValue) / 100 : 0;
    onChange(field, numberValue);
  };

  const formatCurrencyValue = (value: number) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-red-800 mb-6">Simulador de Juros Compostos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Valor Inicial */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">Valor inicial</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">R$</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatCurrencyValue(values.initialValue)}
              onChange={(e) => handleCurrencyChange(e, 'initialValue')}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
              placeholder="0,00"
            />
          </div>
        </div>

        {/* Valor Mensal */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">Valor mensal</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">R$</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatCurrencyValue(values.monthlyValue)}
              onChange={(e) => handleCurrencyChange(e, 'monthlyValue')}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
              placeholder="0,00"
            />
          </div>
        </div>

        {/* Taxa de Juros */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">Taxa de juros</label>
          <div className="flex">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">%</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={values.interestRate || ''}
                onChange={(e) => handleInputChange(e, 'interestRate')}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
                placeholder="0.00"
              />
            </div>
            <select
              value={values.ratePeriod}
              onChange={(e) => onChange('ratePeriod', e.target.value)}
              className="bg-gray-50 border border-l-0 border-gray-300 text-gray-700 py-2 px-3 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="monthly">mensal</option>
              <option value="yearly">anual</option>
            </select>
          </div>
        </div>

        {/* Período */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">Período</label>
          <div className="flex">
            <input
              type="number"
              min="1"
              value={values.periodValue || ''}
              onChange={(e) => handleInputChange(e, 'periodValue')}
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
              placeholder="1"
            />
            <select
              value={values.periodType}
              onChange={(e) => onChange('periodType', e.target.value)}
              className="bg-gray-50 border border-l-0 border-gray-300 text-gray-700 py-2 px-3 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="years">anos</option>
              <option value="months">meses</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={onCalculate}
          className="w-full sm:w-auto bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-8 rounded-md transition duration-200 shadow-sm"
        >
          Calcular
        </button>
        <button
          onClick={onClear}
          className="text-gray-600 hover:text-red-800 font-medium transition duration-200"
        >
          Limpar
        </button>
      </div>
    </div>
  );
};

export default InputSection;