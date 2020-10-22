import styled from 'styled-components';

export const LastQuote = styled.div`
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
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  overflow: hidden;

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
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  overflow: hidden;

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
