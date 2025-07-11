
import io from 'socket.io-client';

export interface RealTimeQuote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: number;
}

export interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

class MarketDataService {
  private socket: any = null;
  private listeners: Map<string, (data: RealTimeQuote) => void> = new Map();
  private apiKey = 'sandbox_c70g26aad3i8qmmdpbi0'; // Free sandbox key
  
  connect() {
    if (this.socket) return;
    
    this.socket = io('wss://ws.finnhub.io', {
      query: {
        token: this.apiKey
      }
    });

    this.socket.on('data', (data: any) => {
      if (data.type === 'trade') {
        data.data.forEach((trade: any) => {
          const quote: RealTimeQuote = {
            symbol: trade.s,
            price: trade.p,
            change: 0, // Will be calculated
            changePercent: 0, // Will be calculated
            timestamp: trade.t
          };
          
          const listener = this.listeners.get(trade.s);
          if (listener) {
            listener(quote);
          }
        });
      }
    });
  }

  subscribe(symbol: string, callback: (data: RealTimeQuote) => void) {
    this.listeners.set(symbol, callback);
    if (this.socket) {
      this.socket.emit('subscribe', symbol);
    }
  }

  unsubscribe(symbol: string) {
    this.listeners.delete(symbol);
    if (this.socket) {
      this.socket.emit('unsubscribe', symbol);
    }
  }

  async getHistoricalData(symbol: string, resolution: string = 'D', days: number = 30): Promise<CandleData[]> {
    const to = Math.floor(Date.now() / 1000);
    const from = to - (days * 24 * 60 * 60);
    
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${this.apiKey}`
      );
      const data = await response.json();
      
      if (data.s === 'ok') {
        return data.t.map((timestamp: number, index: number) => ({
          time: new Date(timestamp * 1000).toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          }),
          open: data.o[index],
          high: data.h[index],
          low: data.l[index],
          close: data.c[index],
          volume: data.v[index]
        }));
      }
      return [];
    } catch (error) {
      console.error('Error fetching historical data:', error);
      return [];
    }
  }

  async getQuote(symbol: string): Promise<RealTimeQuote | null> {
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${this.apiKey}`
      );
      const data = await response.json();
      
      return {
        symbol,
        price: data.c,
        change: data.d,
        changePercent: data.dp,
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Error fetching quote:', error);
      return null;
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    this.listeners.clear();
  }
}

export const marketDataService = new MarketDataService();
