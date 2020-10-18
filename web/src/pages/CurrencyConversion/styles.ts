import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  height: 100vh;
  max-width: 1120px;

  padding: 64px 0;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;

  align-items: baseline;
  justify-content: space-between;
`;

export const ConverterContainer = styled.div`
  width: 100%;

  margin-right: 32px;

  h1 {
    margin-bottom: 16px;
  }
`;

export const LastQuoteContainer = styled.div`
  margin-bottom: 16px;
`;

export const LastQuote = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 5px;
  padding: 24px;

  > span {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const MaximumValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 24px;
`;

export const CloseValue = MaximumValue;

export const MinimumValue = MaximumValue;

export const CurrencyExchange = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      width: 28px;
      height: 28px;
      margin: 8px 0;
    }
  }
`;

export const CurrencyItem = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 5px;
  padding: 24px;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 60px;
      border-radius: 50%;
      margin-right: 16px;
    }
  }

  strong {
    margin-left: auto;
  }
`;

export const ConversionDetailsContainer = styled.div`
  width: 100%;
  height: 518px;

  h1 {
    margin-bottom: 16px;
  }
`;

export const ConversionDetails = styled.div`
  width: 100%;
  height: 465px;

  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 5px;
  padding: 24px;
`;

export const CurrencyQuote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 32px;
`;

export const IOFFee = CurrencyQuote;
export const CurrencyWithoutFees = CurrencyQuote;
export const CurrencyWithFees = CurrencyQuote;
export const ConvertedCurrencyWithoutFees = CurrencyQuote;
export const ConvertedCurrencyWithFees = CurrencyQuote;
