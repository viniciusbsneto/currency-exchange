import getIOF from './getIOF';

const convertCurrencyAmount = (
  paymentType: string,
  currencyAmount: number,
  stateFee: number,
  currencyLastQuote: number,
): number => {
  const IOF = getIOF(paymentType);

  if (paymentType === 'cash') {
    return (
      (currencyAmount + currencyAmount * (stateFee / 100)) *
      (currencyLastQuote + currencyLastQuote * IOF)
    );
  }

  if (paymentType === 'card') {
    return (
      (currencyAmount + currencyAmount * (stateFee / 100)) * currencyLastQuote +
      (currencyAmount + currencyAmount * (stateFee / 100)) *
        currencyLastQuote *
        IOF
    );
  }

  return 0;
};

export default convertCurrencyAmount;
