import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function MarketOverview() {
  const marketData = [
    { name: "S&P 500", value: "4,567.32", change: "+1.2%", positive: true },
    { name: "NASDAQ", value: "14,234.56", change: "+0.8%", positive: true },
    { name: "DOW", value: "35,678.90", change: "-0.3%", positive: false },
    { name: "FTSE 100", value: "7,234.12", change: "+0.5%", positive: true },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Market Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {marketData.map((market) => (
          <div key={market.name} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">{market.name}</p>
              <p className="text-xs text-muted-foreground">{market.value}</p>
            </div>
            <div className={`flex items-center text-sm font-medium ${
              market.positive ? 'text-green-600' : 'text-red-600'
            }`}>
              {market.positive ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {market.change}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}