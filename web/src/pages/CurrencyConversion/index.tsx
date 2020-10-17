/* eslint-disable import/no-duplicates */
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {
  CloseValue,
  Container,
  Content,
  ContentWrapper,
  ConverterContainer,
  LastQuote,
  LastQuoteContainer,
  MaximumValue,
  MinimumValue,
} from './styles';

const CurrencyConversion: React.FC = () => {
  const [
    currencyLastQuote,
    setCurrencyLastQuote,
  ] = useState<ICurrencyLastQuote | null>(null);

  useEffect(() => {
    axios
      .get<ICurrencyLastQuote[]>(
        'https://economia.awesomeapi.com.br/json/daily/USD-BRL/1',
      )
      .then(response => {
        const [lastQuote] = response.data;
        setCurrencyLastQuote(lastQuote);
      })
      .catch(() => {
        throw new Error('Could not get currency last quotation.');
      });
  }, []);

  const currencyLastQuoteDate = useMemo(() => {
    if (currencyLastQuote) {
      const parsedDate = parseISO(currencyLastQuote.create_date);

      const relative = formatRelative(parsedDate, new Date(), {
        locale: pt,
      });

      return relative;
    }

    return null;
  }, [currencyLastQuote]);

  return (
    <Container>
      <Content>
        <ContentWrapper>
          <ConverterContainer>
            <LastQuoteContainer>
              <h1>Última cotação</h1>
              <LastQuote>
                {currencyLastQuote ? (
                  <>
                    <MinimumValue>
                      <strong>Mínimo:</strong>
                      <span>{`R$${currencyLastQuote.low}`}</span>
                    </MinimumValue>
                    <MaximumValue>
                      <strong>Máximo:</strong>
                      <span>{`R$${currencyLastQuote.high}`}</span>
                    </MaximumValue>
                    <CloseValue>
                      <strong>Fechamento</strong>
                      <span>{`R$${currencyLastQuote.bid}`}</span>
                    </CloseValue>
                    <span>{`Atualizado em: ${currencyLastQuoteDate}`}</span>
                  </>
                ) : (
                  <span>Não foi possível obter a cotação.</span>
                )}
              </LastQuote>
            </LastQuoteContainer>
          </ConverterContainer>
        </ContentWrapper>
      </Content>
    </Container>
  );
};

export default CurrencyConversion;
