
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react";
import { marketDataService, RealTimeQuote } from "@/services/marketDataService";

interface MarketTicker {
  symbol: string;
  name: string;
  type: 'stock' | 'forex' | 'crypto';
}

const popularTickers: MarketTicker[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', type: 'stock' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'stock' },
  { symbol: 'TSLA', name: 'Tesla Inc.', type: 'stock' },
  { symbol: 'MSFT', name: 'Microsoft Corp.', type: 'stock' },
  { symbol: 'OANDA:EUR_USD', name: 'EUR/USD', type: 'forex' },
  { symbol: 'OANDA:GBP_USD', name: 'GBP/USD', type: 'forex' },
];

export default function RealTimeMarketDashboard() {
  const [quotes, setQuotes] = useState<Map<string, RealTimeQuote>>(new Map());
  const [isConnected, setIsConnected] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);

  useEffect(() => {
    const loadInitialData = async () => {
      setIsConnected(true);
      setHasApiError(false);
      
      // Load initial quotes for all tickers
      for (const ticker of popularTickers) {
        try {
          const quote = await marketDataService.getQuote(ticker.symbol);
          if (quote) {
            setQuotes(prev => new Map(prev.set(ticker.symbol, quote)));
          } else {
            console.log(`No quote data returned for ${ticker.symbol}`);
            setHasApiError(true);
          }
        } catch (error) {
          console.error(`Error loading quote for ${ticker.symbol}:`, error);
          setHasApiError(true);
        }
      }

      // Connect to real-time updates only if we have valid data
      if (!hasApiError) {
        marketDataService.connect();
        
        // Subscribe to real-time updates for all tickers
        popularTickers.forEach(ticker => {
          marketDataService.subscribe(ticker.symbol, (quote: RealTimeQuote) => {
            if (quote && typeof quote.price === 'number') {
              setQuotes(prev => new Map(prev.set(ticker.symbol, quote)));
            }
          });
        });
      }
    };

    loadInitialData();

    return () => {
      popularTickers.forEach(ticker => {
        marketDataService.unsubscribe(ticker.symbol);
      });
    };
  }, []);

  const formatPrice = (price: number | undefined, type: string) => {
    if (typeof price !== 'number' || isNaN(price)) {
      return '--';
    }
    
    if (type === 'forex') {
      return price.toFixed(5);
    }
    return `$${price.toFixed(2)}`;
  };

  const getChangeColor = (change: number | undefined) => {
    if (typeof change !== 'number') return 'text-gray-500';
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getChangeIcon = (change: number | undefined) => {
    if (typeof change !== 'number') return TrendingUp;
    return change >= 0 ? TrendingUp : TrendingDown;
  };

  const formatChange = (change: number | undefined, changePercent: number | undefined) => {
    if (typeof change !== 'number' || typeof changePercent !== 'number') {
      return '--';
    }
    return `${change >= 0 ? '+' : ''}${change.toFixed(2)} (${changePercent.toFixed(2)}%)`;
  };

  if (hasApiError) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Live Market Data</CardTitle>
            <Badge variant="secondary" className="text-xs">
              <Activity className="w-3 h-3 mr-1" />
              Demo Mode
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-center py-8">
            <div className="text-yellow-600 mb-2">
              <Activity className="w-8 h-8 mx-auto mb-2" />
            </div>
            <p className="text-sm text-gray-600 mb-2">Live market data unavailable</p>
            <p className="text-xs text-gray-500">Using demo data for display purposes</p>
          </div>
          
          {/* Demo data for display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTickers.map((ticker, index) => {
              const demoPrice = ticker.type === 'forex' ? 1.08456 + (index * 0.001) : 175.23 + (index * 5.5);
              const demoChange = (Math.random() - 0.5) * 10;
              const demoChangePercent = (demoChange / demoPrice) * 100;
              const ChangeIcon = getChangeIcon(demoChange);
              
              return (
                <div key={ticker.symbol} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors opacity-75">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium text-sm">{ticker.symbol}</div>
                      <div className="text-xs text-gray-500 truncate">{ticker.name}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {ticker.type.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-lg font-bold">
                      {formatPrice(demoPrice, ticker.type)}
                    </div>
                    <div className={`flex items-center text-sm ${getChangeColor(demoChange)}`}>
                      <ChangeIcon className="w-3 h-3 mr-1" />
                      {formatChange(demoChange, demoChangePercent)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Demo data
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Live Market Data</CardTitle>
          <Badge variant={isConnected ? "default" : "secondary"} className="text-xs">
            <Activity className="w-3 h-3 mr-1" />
            {isConnected ? 'Live' : 'Connecting...'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {popularTickers.map((ticker) => {
            const quote = quotes.get(ticker.symbol);
            const ChangeIcon = quote ? getChangeIcon(quote.change) : TrendingUp;
            
            return (
              <div key={ticker.symbol} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium text-sm">{ticker.symbol}</div>
                    <div className="text-xs text-gray-500 truncate">{ticker.name}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {ticker.type.toUpperCase()}
                  </Badge>
                </div>
                
                {quote ? (
                  <div className="space-y-1">
                    <div className="text-lg font-bold">
                      {formatPrice(quote.price, ticker.type)}
                    </div>
                    <div className={`flex items-center text-sm ${getChangeColor(quote.change)}`}>
                      <ChangeIcon className="w-3 h-3 mr-1" />
                      {formatChange(quote.change, quote.changePercent)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Last updated: {new Date(quote.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
