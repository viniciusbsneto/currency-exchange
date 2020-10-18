const getConvertedCurrencyWithoutFees = (
  currencyAmount: number,
  currencyLastQuote: number,
): number => {
  return currencyAmount * currencyLastQuote;
};

export default getConvertedCurrencyWithoutFees;
