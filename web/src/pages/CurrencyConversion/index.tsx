/* eslint-disable import/no-duplicates */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { BiTransfer } from 'react-icons/bi';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import {
  CloseValue,
  Container,
  Content,
  ContentWrapper,
  ConversionDetails,
  ConversionDetailsContainer,
  ConvertedCurrencyWithFees,
  ConvertedCurrencyWithoutFees,
  ConverterContainer,
  CurrencyExchange,
  CurrencyItem,
  CurrencyQuote,
  CurrencyWithFees,
  CurrencyWithoutFees,
  IOFFee,
  LastQuote,
  LastQuoteContainer,
  MaximumValue,
  MinimumValue,
} from './styles';

import BRAImg from '../../assets/images/BRA.svg';
import USDImg from '../../assets/images/USD.svg';

import { getCurrencyLastQuoteService } from '../../services/api';

import convertCurrencyAmount from '../../utils/convertCurrencyAmount';
import getOriginalCurrencyWithoutFees from '../../utils/getOriginalCurrencyWithFees';
import getIOF from '../../utils/getIOF';
import getConvertedCurrencyWithoutFees from '../../utils/getConvertedCurrencyWithouFees';
import formatCurrency from '../../utils/formatCurrency';

const CurrencyConversion: React.FC = () => {
  const [
    currencyLastQuote,
    setCurrencyLastQuote,
  ] = useState<ICurrencyLastQuote | null>(null);
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [stateFee, setStateFee] = useState(0);
  const [paymentType, setPaymentType] = useState('cash');

  useEffect(() => {
    getCurrencyLastQuoteService('USD-BRL')
      .then(response => {
        setCurrencyLastQuote(response);
      })
      .catch(err => {
        throw new Error(err);
      });
  }, []);

  const currencyLastQuoteDate = useMemo(() => {
    if (currencyLastQuote) {
      const relative = formatRelative(
        currencyLastQuote.create_date,
        new Date(),
        {
          locale: pt,
        },
      );

      return relative;
    }

    return null;
  }, [currencyLastQuote]);

  const handleCurrencyAmountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrencyAmount(Number(event.target.value));
    },
    [],
  );

  const handleStateFeeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStateFee(Number(event.target.value));
    },
    [],
  );

  const handlePaymentTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentType(event.target.value);
    },
    [],
  );

  const convertedCurrencyAmount = useMemo(() => {
    if (currencyLastQuote) {
      return convertCurrencyAmount(
        paymentType,
        currencyAmount,
        stateFee,
        currencyLastQuote.bid,
      );
    }

    return 0;
  }, [currencyAmount, currencyLastQuote, paymentType, stateFee]);

  const formattedCurrencyLastQuoteLow = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(currencyLastQuote.codein, currencyLastQuote.low);
    }

    return 'Não disponível';
  }, [currencyLastQuote]);

  const formattedCurrencyLastQuoteHigh = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(currencyLastQuote.codein, currencyLastQuote.high);
    }

    return 'Não disponível';
  }, [currencyLastQuote]);

  const formattedCurrencyLastQuoteClose = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(currencyLastQuote.codein, currencyLastQuote.bid);
    }

    return 'Não disponível';
  }, [currencyLastQuote]);

  const formattedCurrencyQuote = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(currencyLastQuote.code, currencyLastQuote.bid);
    }

    return 'Não disponível';
  }, [currencyLastQuote]);

  const formattedIOF = useMemo(() => {
    return `${(getIOF(paymentType) * 100).toFixed(2)}%`;
  }, [paymentType]);

  const formattedCurrencyWithoutFees = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(currencyLastQuote.code, currencyAmount);
    }

    return 'Não disponível';
  }, [currencyLastQuote, currencyAmount]);

  const formattedCurrencyWithFees = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(
        currencyLastQuote.code,
        getOriginalCurrencyWithoutFees(currencyAmount, stateFee, paymentType),
      );
    }

    return 'Não disponível';
  }, [currencyLastQuote, currencyAmount, stateFee, paymentType]);

  const formattedConvertedCurrencyWithoutFees = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(
        currencyLastQuote.codein,
        getConvertedCurrencyWithoutFees(currencyAmount, currencyLastQuote.bid),
      );
    }

    return 'Não disponível';
  }, [currencyLastQuote, currencyAmount]);

  const formattedConvertedCurrencyWithFees = useMemo(() => {
    if (currencyLastQuote) {
      return formatCurrency(currencyLastQuote.codein, convertedCurrencyAmount);
    }

    return 'Não disponível';
  }, [currencyLastQuote, convertedCurrencyAmount]);

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
                      <span>{formattedCurrencyLastQuoteLow}</span>
                    </MinimumValue>
                    <MaximumValue>
                      <strong>Máximo:</strong>
                      <span>{formattedCurrencyLastQuoteHigh}</span>
                    </MaximumValue>
                    <CloseValue>
                      <strong>Fechamento</strong>
                      <span>{formattedCurrencyLastQuoteClose}</span>
                    </CloseValue>
                    <span>{`Atualizado em: ${currencyLastQuoteDate}`}</span>
                  </>
                ) : (
                  <span>Não foi possível obter a cotação.</span>
                )}
              </LastQuote>
            </LastQuoteContainer>
            <CurrencyExchange>
              <h1>Conversor de moeda</h1>
              <div>
                <CurrencyItem>
                  {currencyLastQuote ? (
                    <>
                      <div>
                        <img src={USDImg} alt={currencyLastQuote.code} />
                        <FormControl
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <FormControl variant="outlined">
                            <InputLabel htmlFor="currency_amount">
                              Quantidade do montante
                            </InputLabel>
                            <OutlinedInput
                              id="currency_amount"
                              name="currency_amount"
                              type="number"
                              inputProps={{ min: 0 }}
                              label="Quantidade do montante"
                              required
                              startAdornment={
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              }
                              value={currencyAmount}
                              onChange={handleCurrencyAmountChange}
                              style={{ height: 40, marginRight: 8 }}
                            />
                          </FormControl>
                          <FormControl variant="outlined">
                            <InputLabel htmlFor="state_fee">
                              Taxa do estado
                            </InputLabel>
                            <OutlinedInput
                              id="state_fee"
                              name="state_fee"
                              type="number"
                              inputProps={{ min: 0 }}
                              label="Taxa do estado"
                              required
                              startAdornment={
                                <InputAdornment position="start">
                                  %
                                </InputAdornment>
                              }
                              value={stateFee}
                              onChange={handleStateFeeChange}
                              style={{ height: 40, marginRight: 8 }}
                            />
                          </FormControl>
                          <FormControl
                            component="fieldset"
                            style={{ marginLeft: 8 }}
                          >
                            <FormLabel component="legend">Pagamento</FormLabel>
                            <RadioGroup
                              aria-label="payment_type"
                              name="payment_type"
                              value={paymentType}
                              onChange={handlePaymentTypeChange}
                              row
                            >
                              <FormControlLabel
                                value="cash"
                                control={<Radio />}
                                label="Dinheiro"
                              />
                              <FormControlLabel
                                value="card"
                                control={<Radio />}
                                label="Cartão"
                              />
                            </RadioGroup>
                          </FormControl>
                        </FormControl>
                      </div>
                      <strong>{currencyLastQuote.code}</strong>
                    </>
                  ) : (
                    <span>Moeda não disponível.</span>
                  )}
                </CurrencyItem>
                <BiTransfer />
                <CurrencyItem>
                  {currencyLastQuote ? (
                    <>
                      <div>
                        <img src={BRAImg} alt={currencyLastQuote.codein} />
                        <strong>{formattedConvertedCurrencyWithFees}</strong>
                      </div>
                      <strong>{currencyLastQuote.codein}</strong>
                    </>
                  ) : (
                    <span>Moeda não disponível.</span>
                  )}
                </CurrencyItem>
              </div>
            </CurrencyExchange>
          </ConverterContainer>
          <ConversionDetailsContainer>
            <h1>Resumo</h1>
            <ConversionDetails>
              <CurrencyQuote>
                <strong>
                  {`Cotação ${currencyLastQuote && currencyLastQuote.code}`}
                </strong>
                <span>{formattedCurrencyQuote}</span>
              </CurrencyQuote>
              <IOFFee>
                <strong>IOF</strong>
                <span>{formattedIOF}</span>
              </IOFFee>
              <CurrencyWithoutFees>
                <strong>
                  {`Total ${
                    currencyLastQuote && currencyLastQuote.code
                  } sem impostos`}
                </strong>
                <span>{formattedCurrencyWithoutFees}</span>
              </CurrencyWithoutFees>
              <CurrencyWithFees>
                <strong>
                  {`Total ${
                    currencyLastQuote && currencyLastQuote.code
                  } com impostos`}
                </strong>
                <span>{formattedCurrencyWithFees}</span>
              </CurrencyWithFees>
              <ConvertedCurrencyWithoutFees>
                <strong>
                  {`Total ${
                    currencyLastQuote && currencyLastQuote.codein
                  } sem impostos`}
                </strong>
                <span>{formattedConvertedCurrencyWithoutFees}</span>
              </ConvertedCurrencyWithoutFees>
              <ConvertedCurrencyWithFees>
                <strong>
                  {`Total ${
                    currencyLastQuote && currencyLastQuote.codein
                  } com impostos`}
                </strong>
                <span>{formattedConvertedCurrencyWithFees}</span>
              </ConvertedCurrencyWithFees>
            </ConversionDetails>
          </ConversionDetailsContainer>
        </ContentWrapper>
      </Content>
    </Container>
  );
};

export default CurrencyConversion;
