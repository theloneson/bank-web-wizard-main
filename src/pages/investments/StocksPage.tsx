import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BankingPageLayout from "@/components/BankingPageLayout";
import CandlestickChart from "@/components/CandlestickChart";
import TradingOrderBook from "@/components/TradingOrderBook";
import TradingInterface from "@/components/TradingInterface";
import WatchList from "@/components/WatchList";
import MarketNews from "@/components/MarketNews";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, Globe, Zap } from "lucide-react";
import RealTimeChart from "@/components/RealTimeChart";
import RealTimeMarketDashboard from "@/components/RealTimeMarketDashboard";

// Enhanced candlestick data
const appleCandlestickData = [
  { time: "09:30", open: 175.23, high: 176.45, low: 174.89, close: 176.12, volume: 2350000 },
  { time: "10:00", open: 176.12, high: 177.23, low: 175.34, close: 175.89, volume: 1890000 },
  { time: "10:30", open: 175.89, high: 178.45, low: 175.12, close: 177.45, volume: 2120000 },
  { time: "11:00", open: 177.45, high: 179.23, low: 176.78, close: 178.23, volume: 2890000 },
  { time: "11:30", open: 178.23, high: 179.89, low: 177.45, close: 177.98, volume: 1750000 },
  { time: "12:00", open: 177.98, high: 180.12, low: 177.23, close: 179.12, volume: 2450000 },
  { time: "12:30", open: 179.12, high: 181.34, low: 178.67, close: 180.34, volume: 3120000 },
  { time: "13:00", open: 180.34, high: 182.67, low: 179.89, close: 179.67, volume: 2780000 },
  { time: "13:30", open: 179.67, high: 181.89, low: 179.12, close: 181.23, volume: 2340000 },
  { time: "14:00", open: 181.23, high: 182.45, low: 180.67, close: 181.45, volume: 1950000 },
];

const forexData = [
  { time: "00:00", open: 1.0845, high: 1.0865, low: 1.0835, close: 1.0850, volume: 450000 },
  { time: "04:00", open: 1.0850, high: 1.0870, low: 1.0840, close: 1.0845, volume: 380000 },
  { time: "08:00", open: 1.0845, high: 1.0885, low: 1.0830, close: 1.0860, volume: 620000 },
  { time: "12:00", open: 1.0860, high: 1.0895, low: 1.0855, close: 1.0875, volume: 780000 },
  { time: "16:00", open: 1.0875, high: 1.0890, low: 1.0865, close: 1.0880, volume: 560000 },
  { time: "20:00", open: 1.0880, high: 1.0885, low: 1.0860, close: 1.0870, volume: 420000 },
];

const futuresData = [
  { time: "18:00", open: 87.23, high: 87.89, low: 86.95, close: 87.45, volume: 125000 },
  { time: "20:00", open: 87.45, high: 88.12, low: 87.15, close: 87.78, volume: 98000 },
  { time: "22:00", open: 87.78, high: 88.45, low: 86.89, close: 87.23, volume: 156000 },
  { time: "00:00", open: 87.23, high: 88.67, low: 87.01, close: 88.12, volume: 189000 },
  { time: "02:00", open: 88.12, high: 89.23, low: 87.89, close: 88.45, volume: 167000 },
  { time: "04:00", open: 88.45, high: 88.78, low: 87.45, close: 87.89, volume: 134000 },
];

export default function StocksPage() {
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [timeframe, setTimeframe] = useState("1D");

  return (
    <BankingPageLayout
      title="Advanced Trading Platform"
      subtitle="Professional-grade tools with real-time market data"
    >
      <div className="space-y-6">
        {/* Real-time Market Overview */}
        <RealTimeMarketDashboard />

        {/* Market Overview Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">S&P 500</p>
                  <p className="text-2xl font-bold">4,542.67</p>
                  <p className="text-green-300 flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +1.2% (+12.45)
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">NASDAQ</p>
                  <p className="text-2xl font-bold">14,123.89</p>
                  <p className="text-green-300 flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +0.8% (+89.23)
                  </p>
                </div>
                <Activity className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Portfolio Value</p>
                  <p className="text-2xl font-bold">$125,430</p>
                  <p className="text-green-300 flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +2.3% (+$2,845)
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-amber-600 to-orange-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm font-medium">Buying Power</p>
                  <p className="text-2xl font-bold">$25,430</p>
                  <p className="text-amber-200 flex items-center text-sm">
                    <Zap className="w-4 h-4 mr-1" />
                    Available Now
                  </p>
                </div>
                <Globe className="w-8 h-8 text-amber-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Trading Interface */}
        <Tabs defaultValue="stocks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1">
            <TabsTrigger value="stocks" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Stocks & ETFs
            </TabsTrigger>
            <TabsTrigger value="forex" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Forex
            </TabsTrigger>
            <TabsTrigger value="futures" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Futures
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stocks" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Main Chart Area */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <Select value={selectedStock} onValueChange={setSelectedStock}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AAPL">Apple (AAPL)</SelectItem>
                      <SelectItem value="GOOGL">Alphabet (GOOGL)</SelectItem>
                      <SelectItem value="TSLA">Tesla (TSLA)</SelectItem>
                      <SelectItem value="MSFT">Microsoft (MSFT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <RealTimeChart 
                  symbol={selectedStock} 
                  title={selectedStock === 'AAPL' ? 'Apple Inc.' : 
                         selectedStock === 'GOOGL' ? 'Alphabet Inc.' :
                         selectedStock === 'TSLA' ? 'Tesla Inc.' : 'Microsoft Corp.'} 
                  type="stock" 
                />

                {/* Stock Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">52.4M</div>
                      <div className="text-sm text-gray-500">Volume</div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$183.45</div>
                      <div className="text-sm text-gray-500">Day High</div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">$179.12</div>
                      <div className="text-sm text-gray-500">Day Low</div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">18.5</div>
                      <div className="text-sm text-gray-500">P/E Ratio</div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Sidebar with Trading Tools */}
              <div className="lg:col-span-4 space-y-6">
                <TradingInterface />
                <TradingOrderBook />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="forex" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RealTimeChart 
                symbol="OANDA:EUR_USD" 
                title="EUR/USD" 
                type="forex" 
              />
              <RealTimeChart 
                symbol="OANDA:GBP_USD" 
                title="GBP/USD" 
                type="forex" 
              />
            </div>
          </TabsContent>

          <TabsContent value="futures" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Futures Trading - Coming Soon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Real-time futures data will be available soon.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <WatchList />
          </div>
          <div className="space-y-6">
            <MarketNews />
          </div>
        </div>
      </div>
    </BankingPageLayout>
  );
}
