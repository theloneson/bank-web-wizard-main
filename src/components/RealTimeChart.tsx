
import { useState, useEffect, useCallback } from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Bar, Line } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { marketDataService, CandleData, RealTimeQuote } from "@/services/marketDataService";

interface RealTimeChartProps {
  symbol: string;
  title: string;
  type: 'stock' | 'forex';
}

export default function RealTimeChart({ symbol, title, type }: RealTimeChartProps) {
  const [data, setData] = useState<CandleData[]>([]);
  const [currentQuote, setCurrentQuote] = useState<RealTimeQuote | null>(null);
  const [timeframe, setTimeframe] = useState('1D');
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  const chartConfig = {
    candlestick: { label: "Price", color: "#2563eb" },
    volume: { label: "Volume", color: "#64748b" },
  };

  const loadHistoricalData = useCallback(async () => {
    setIsLoading(true);
    try {
      const resolution = timeframe === '1D' ? '1' : timeframe === '1W' ? '5' : timeframe === '1M' ? '15' : 'D';
      const days = timeframe === '1D' ? 1 : timeframe === '1W' ? 7 : timeframe === '1M' ? 30 : 365;
      
      const historicalData = await marketDataService.getHistoricalData(symbol, resolution, days);
      setData(historicalData);
      
      const quote = await marketDataService.getQuote(symbol);
      setCurrentQuote(quote);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [symbol, timeframe]);

  useEffect(() => {
    loadHistoricalData();
  }, [loadHistoricalData]);

  useEffect(() => {
    // Connect to real-time data
    marketDataService.connect();
    setIsConnected(true);

    // Subscribe to real-time updates
    marketDataService.subscribe(symbol, (quote: RealTimeQuote) => {
      setCurrentQuote(quote);
      
      // Update the last data point with new price
      setData(prevData => {
        if (prevData.length === 0) return prevData;
        
        const newData = [...prevData];
        const lastIndex = newData.length - 1;
        newData[lastIndex] = {
          ...newData[lastIndex],
          close: quote.price,
          high: Math.max(newData[lastIndex].high, quote.price),
          low: Math.min(newData[lastIndex].low, quote.price)
        };
        
        return newData;
      });
    });

    return () => {
      marketDataService.unsubscribe(symbol);
    };
  }, [symbol]);

  const formatPrice = (price: number | undefined) => {
    if (typeof price !== 'number' || isNaN(price)) {
      return '--';
    }
    return type === 'forex' ? price.toFixed(5) : `$${price.toFixed(2)}`;
  };

  const getPriceChangeColor = (change: number | undefined) => {
    if (typeof change !== 'number') return 'text-gray-500';
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getPriceChangeIcon = (change: number | undefined) => {
    if (typeof change !== 'number') return TrendingUp;
    return change >= 0 ? TrendingUp : TrendingDown;
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <CardTitle className="text-lg font-bold">{title}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant={isConnected ? "default" : "secondary"} className="text-xs">
                  <Activity className="w-3 h-3 mr-1" />
                  {isConnected ? 'Live' : 'Offline'}
                </Badge>
                <span className="text-xs text-gray-500">{symbol}</span>
              </div>
            </div>
            {currentQuote && typeof currentQuote.price === 'number' && (
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {formatPrice(currentQuote.price)}
                </div>
                <div className={`flex items-center text-sm ${getPriceChangeColor(currentQuote.change)}`}>
                  {getPriceChangeIcon(currentQuote.change)({ className: "w-4 h-4 mr-1" })}
                  {typeof currentQuote.change === 'number' ? (
                    <>
                      {currentQuote.change >= 0 ? '+' : ''}{currentQuote.change.toFixed(2)} 
                      ({typeof currentQuote.changePercent === 'number' ? currentQuote.changePercent.toFixed(2) : '0.00'}%)
                    </>
                  ) : (
                    '--'
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            {['1D', '1W', '1M', '1Y'].map((tf) => (
              <Button
                key={tf}
                variant={timeframe === tf ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeframe(tf)}
                className="px-3 py-1 text-xs"
              >
                {tf}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="text-center">
              <Activity className="w-8 h-8 animate-spin mx-auto mb-2" />
              <p className="text-sm text-gray-500">Loading market data...</p>
            </div>
          </div>
        ) : (
          <ChartContainer config={chartConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <YAxis 
                  yAxisId="price"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  domain={['dataMin - 0.01', 'dataMax + 0.01']}
                />
                <YAxis 
                  yAxisId="volume"
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }}
                />
                <Bar 
                  yAxisId="volume"
                  dataKey="volume" 
                  fill="#e2e8f0" 
                  opacity={0.6}
                  radius={[2, 2, 0, 0]}
                />
                <Line
                  yAxisId="price"
                  type="monotone"
                  dataKey="close"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={false}
                  connectNulls={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
