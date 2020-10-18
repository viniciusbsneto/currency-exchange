import getIOF from './getIOF';

const getOriginalCurrencyWithoutFees = (
  currencyAmount: number,
  stateFee: number,
  paymentType: string,
): number => {
  const IOF = getIOF(paymentType);

  return currencyAmount + stateFee + IOF;
};

export default getOriginalCurrencyWithoutFees;
