import getIOF from './getIOF';

const getOriginalCurrencyWithFees = (
  currencyAmount: number,
  stateFee: number,
  paymentType: string,
): number => {
  const IOF = getIOF(paymentType);

  return (
    currencyAmount + currencyAmount * (stateFee / 100) + currencyAmount * IOF
  );
};

export default getOriginalCurrencyWithFees;
