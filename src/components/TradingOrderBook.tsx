
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderBookEntry {
  price: number;
  size: number;
  total: number;
}

export default function TradingOrderBook() {
  const bids: OrderBookEntry[] = [
    { price: 181.45, size: 1200, total: 1200 },
    { price: 181.44, size: 850, total: 2050 },
    { price: 181.43, size: 950, total: 3000 },
    { price: 181.42, size: 1100, total: 4100 },
    { price: 181.41, size: 750, total: 4850 },
  ];

  const asks: OrderBookEntry[] = [
    { price: 181.46, size: 900, total: 900 },
    { price: 181.47, size: 1300, total: 2200 },
    { price: 181.48, size: 800, total: 3000 },
    { price: 181.49, size: 1150, total: 4150 },
    { price: 181.50, size: 650, total: 4800 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">Order Book</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-3 gap-2 px-4 py-2 text-xs font-medium text-gray-500 border-b">
          <span>Price</span>
          <span className="text-right">Size</span>
          <span className="text-right">Total</span>
        </div>
        
        {/* Asks */}
        <div className="space-y-1 p-2">
          {asks.reverse().map((ask, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 text-xs hover:bg-red-50 p-1 rounded">
              <span className="text-red-600 font-mono">{ask.price.toFixed(2)}</span>
              <span className="text-right font-mono">{ask.size.toLocaleString()}</span>
              <span className="text-right text-gray-500 font-mono">{ask.total.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-b bg-gray-50 py-2 px-4">
          <div className="text-center text-lg font-bold">181.45</div>
          <div className="text-center text-xs text-gray-500">Last Price</div>
        </div>

        {/* Bids */}
        <div className="space-y-1 p-2">
          {bids.map((bid, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 text-xs hover:bg-green-50 p-1 rounded">
              <span className="text-green-600 font-mono">{bid.price.toFixed(2)}</span>
              <span className="text-right font-mono">{bid.size.toLocaleString()}</span>
              <span className="text-right text-gray-500 font-mono">{bid.total.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
