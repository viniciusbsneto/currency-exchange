import axios from 'axios';
import { parseISO } from 'date-fns';

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json',
});

const getCurrencyLastQuoteService = async (
  currency: string,
): Promise<ICurrencyLastQuote> => {
  try {
    const response = await api.get<ICurrencyLastQuoteResponse[]>(
      `/daily/${currency}/1`,
    );

    const [{ code, codein, ask, bid, high, low, create_date }] = response.data;

    const lastQuote: ICurrencyLastQuote = {
      code,
      codein,
      ask: parseFloat(ask),
      bid: parseFloat(bid),
      high: parseFloat(high),
      low: parseFloat(low),
      create_date: parseISO(create_date),
    };

    return lastQuote;
  } catch (err) {
    throw new Error('Could not get currency last quotation.');
  }
};

export { getCurrencyLastQuoteService };
