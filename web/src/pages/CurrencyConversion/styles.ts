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

export const CloseValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 24px;
`;

export const MinimumValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 24px;
`;

export const MaximumValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 24px;
`;
