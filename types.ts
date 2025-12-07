export interface CalculationInput {
  initialValue: number;
  monthlyValue: number;
  interestRate: number;
  ratePeriod: 'monthly' | 'yearly';
  periodValue: number;
  periodType: 'months' | 'years';
}

export interface MonthlyResult {
  month: number;
  interestEarned: number; // Juros do mês
  totalInvested: number; // Total investido até o momento
  totalInterest: number; // Total de juros acumulado
  totalAccumulated: number; // Montante final (Investido + Juros)
}

export interface CalculationResult {
  summary: {
    finalValue: number;
    totalInvested: number;
    totalInterest: number;
  };
  breakdown: MonthlyResult[];
}