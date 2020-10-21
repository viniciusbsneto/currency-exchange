import styled from 'styled-components';

export const LastQuoteContainer = styled.div`
  margin-bottom: 1.6rem;

  h1 {
    margin-bottom: 0.8rem;
  }
`;

export const LastQuote = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: var(--paper-background-color);
  border-radius: 0.5rem;
  padding: 2.4rem;

  > span {
    font-size: 1.4rem;
    margin-top: 1.6rem;
  }
`;

export const MaximumValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 2.8rem;
`;

export const CloseValue = MaximumValue;

export const MinimumValue = MaximumValue;

export const CurrencyExchange = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 0.8rem;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      width: 2.8rem;
      height: 2.8rem;
      margin: 0.8rem 0;
    }
  }
`;

export const InputBlock = styled.fieldset`
  width: 100%;
  margin-right: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.8rem 1.6rem;
  border: 0.1rem solid var(--light-color);
  border-radius: 0.5rem;

  input {
    border: 0;
    background: transparent;
  }

  legend {
    font: 400 1.4rem Roboto;
  }
`;

export const InputBlockGroup = styled.div`
  width: 100%;

  display: flex;

  > div {
    margin-top: 0.8rem;
  }

  @media (max-width: 1230px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const PaymentFieldset = styled.fieldset`
  width: 100%;
  margin: 1.6rem 0 0 0.8rem;

  display: flex;
  flex-direction: column;
  border: 0;

  legend {
    color: var(--text-color);
  }

  .MuiFormControlLabel-label {
    font: 400 1.4rem Roboto;
    color: var(--text-color);
  }
`;

export const CurrencyItemInput = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: var(--paper-background-color);
  border-radius: 0.5rem;
  padding: 2.4rem;

  > div {
    width: 100%;

    display: flex;
    align-items: center;

    img {
      width: 6rem;
      border-radius: 50%;
      margin-right: 1.6rem;

      @media (max-width: 520px) {
        margin-bottom: 0.8rem;
      }
    }

    @media (max-width: 520px) {
      width: 100%;
      flex-direction: column;
    }
  }

  strong {
    margin-left: auto;

    @media (max-width: 520px) {
      margin: 0.8rem auto 0;
    }
  }
`;

export const CurrencyItemOutput = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: var(--paper-background-color);
  border-radius: 0.5rem;
  padding: 2.4rem;

  div {
    display: flex;
    align-items: center;

    img {
      width: 6rem;
      border-radius: 50%;
      margin-right: 1.6rem;
    }
  }

  strong {
    margin-left: auto;
  }
`;

export const ConversionDetailsContainer = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 0.8rem;
  }
`;

export const ConversionDetails = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: var(--paper-background-color);
  border-radius: 0.5rem;
  padding: 2.4rem;
`;

export const CurrencyQuote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 3.2rem;
`;

export const IOFFee = CurrencyQuote;
export const CurrencyWithoutFees = CurrencyQuote;
export const CurrencyWithFees = CurrencyQuote;
export const ConvertedCurrencyWithoutFees = CurrencyQuote;
export const ConvertedCurrencyWithFees = CurrencyQuote;
