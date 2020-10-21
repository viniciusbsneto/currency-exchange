import getIOF from './getIOF';

const getOriginalCurrencyWithFees = (
  currencyAmount: number,
  stateFee: number,
  paymentType: string,
): number => {
  const IOF = getIOF(paymentType);

  return currencyAmount === 0 ? 0 : currencyAmount + stateFee + IOF;
};

export default getOriginalCurrencyWithFees;
