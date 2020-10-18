import getIOF from './getIOF';

const convertCurrencyAmount = (
  paymentType: string,
  currencyAmount: number,
  stateFee: number,
  currencyLastQuote: number,
): number => {
  const IOF = getIOF(paymentType);

  if (paymentType === 'cash') {
    return (currencyAmount + stateFee / 100) * (currencyLastQuote + IOF);
  }

  if (paymentType === 'card') {
    return (currencyAmount + stateFee / 100 + IOF) * currencyLastQuote;
  }

  return 0;
};

export default convertCurrencyAmount;
