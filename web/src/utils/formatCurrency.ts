const formatCurrency = (
  currencyCode: string,
  currencyAmount: number,
): string => {
  switch (currencyCode) {
    case 'USD':
      return `$${currencyAmount.toFixed(2)}`;
    case 'BRL':
      return `R$${currencyAmount.toFixed(2)}`;
    default:
      return currencyAmount.toString();
  }
};

export default formatCurrency;
