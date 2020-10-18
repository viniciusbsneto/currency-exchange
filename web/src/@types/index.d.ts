declare interface ICurrencyLastQuoteResponse {
  code: string;
  codein: string;
  ask: string;
  bid: string;
  high: string;
  low: string;
  create_date: string;
}

declare interface ICurrencyLastQuote {
  code: string;
  codein: string;
  ask: number;
  bid: number;
  high: number;
  low: number;
  create_date: Date;
}
