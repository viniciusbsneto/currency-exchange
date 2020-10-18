const getIOF = (paymentType: string): number => {
  switch (paymentType) {
    case 'cash':
      return 0.011;
    case 'card':
      return 0.064;
    default:
      return 0;
  }
};

export default getIOF;
