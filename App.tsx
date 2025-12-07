import React, { useState } from 'react';
import InputSection from './components/InputSection';
import SummaryCards from './components/SummaryCards';
import ResultsChart from './components/ResultsChart';
import ResultsTable from './components/ResultsTable';
import InfoSection from './components/InfoSection';
import { CalculationInput, CalculationResult } from './types';
import { calculateCompoundInterest } from './utils/calculations';

const App: React.FC = () => {
  const [inputValues, setInputValues] = useState<CalculationInput>({
    initialValue: 0,
    monthlyValue: 0,
    interestRate: 0.5,
    ratePeriod: 'monthly',
    periodValue: 12,
    periodType: 'months'
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleInputChange = (field: keyof CalculationInput, value: any) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = () => {
    const calcResult = calculateCompoundInterest(inputValues);
    setResult(calcResult);
    // Smooth scroll to results
    setTimeout(() => {
        const resultElement = document.getElementById('results-section');
        if (resultElement) {
            resultElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const handleClear = () => {
    setInputValues({
      initialValue: 0,
      monthlyValue: 0,
      interestRate: 0,
      ratePeriod: 'monthly',
      periodValue: 0,
      periodType: 'months'
    });
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Calculadora de Juros
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Simule seus investimentos e descubra o poder dos juros compostos.
          </p>
        </header>

        <main className="space-y-10">
          {/* Input Section */}
          <section>
            <InputSection
              values={inputValues}
              onChange={handleInputChange}
              onCalculate={handleCalculate}
              onClear={handleClear}
            />
          </section>

          {/* Results Section */}
          {result && (
            <section id="results-section" className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                 <div className="h-1 bg-[#2C3FA5] flex-grow rounded"></div>
                 <h2 className="text-2xl font-bold text-gray-900 px-4">Resultado</h2>
                 <div className="h-1 bg-[#2C3FA5] flex-grow rounded"></div>
              </div>
              
              <SummaryCards
                finalValue={result.summary.finalValue}
                totalInvested={result.summary.totalInvested}
                totalInterest={result.summary.totalInterest}
              />

              <div className="grid lg:grid-cols-1 gap-8">
                <ResultsChart data={result.breakdown} />
                <ResultsTable data={result.breakdown} />
              </div>
            </section>
          )}

          {/* Educational Content */}
          <InfoSection />
        </main>
        
        <footer className="mt-20 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Simulador de Investimentos. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;