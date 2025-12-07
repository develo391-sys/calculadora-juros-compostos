import { CalculationInput, CalculationResult, MonthlyResult } from '../types';

export const calculateCompoundInterest = (input: CalculationInput): CalculationResult => {
  const { initialValue, monthlyValue, interestRate, ratePeriod, periodValue, periodType } = input;

  // Normalize period to months
  const totalMonths = periodType === 'years' ? periodValue * 12 : periodValue;

  // Normalize interest rate to monthly decimal
  // If yearly, formula is: (1 + rate)^1/12 - 1
  // If monthly, formula is: rate / 100
  let monthlyRate = 0;
  if (ratePeriod === 'yearly') {
    monthlyRate = Math.pow(1 + interestRate / 100, 1 / 12) - 1;
  } else {
    monthlyRate = interestRate / 100;
  }

  const breakdown: MonthlyResult[] = [];
  
  let currentBalance = initialValue;
  let totalInvested = initialValue;
  let totalInterest = 0;

  // Initial state (Month 0)
  breakdown.push({
    month: 0,
    interestEarned: 0,
    totalInvested: initialValue,
    totalInterest: 0,
    totalAccumulated: initialValue,
  });

  for (let i = 1; i <= totalMonths; i++) {
    const interestEarned = currentBalance * monthlyRate;
    
    // Add interest
    currentBalance += interestEarned;
    totalInterest += interestEarned;

    // Add monthly contribution
    currentBalance += monthlyValue;
    totalInvested += monthlyValue;

    breakdown.push({
      month: i,
      interestEarned,
      totalInvested,
      totalInterest,
      totalAccumulated: currentBalance,
    });
  }

  return {
    summary: {
      finalValue: currentBalance,
      totalInvested,
      totalInterest,
    },
    breakdown,
  };
};