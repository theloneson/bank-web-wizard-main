import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Star } from "lucide-react";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
}

export default function WatchList() {
  const stocks: Stock[] = [
    { symbol: "AAPL", name: "Apple Inc.", price: 181.45, change: 2.34, changePercent: 1.31, volume: "45.2M" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 378.92, change: -1.85, changePercent: -0.49, volume: "23.8M" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 2895.67, change: 15.23, changePercent: 0.53, volume: "18.9M" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 248.90, change: -8.45, changePercent: -3.28, volume: "89.3M" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 512.78, change: 12.89, changePercent: 2.58, volume: "67.2M" },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Star className="w-4 h-4" />
          Market Watchlist
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {stocks.map((stock) => (
            <div key={stock.symbol} className="px-4 py-3 hover:bg-muted/50 border-b last:border-b-0 cursor-pointer transition-colors">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="font-medium text-sm">{stock.symbol}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-[120px]">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm">${stock.price.toFixed(2)}</div>
                  <div className={`flex items-center text-xs ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.change >= 0 ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Vol: {stock.volume}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}