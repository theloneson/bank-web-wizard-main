import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { BarChart3 } from "lucide-react";

const data = [
  { month: 'Jan', balance: 120000 },
  { month: 'Feb', balance: 125000 },
  { month: 'Mar', balance: 135000 },
  { month: 'Apr', balance: 145000 },
  { month: 'May', balance: 165000 },
  { month: 'Jun', balance: 180000 },
  { month: 'Jul', balance: 175000 },
  { month: 'Aug', balance: 185000 },
  { month: 'Sep', balance: 195000 },
  { month: 'Oct', balance: 210000 },
  { month: 'Nov', balance: 225000 },
  { month: 'Dec', balance: 240000 },
];

export default function PerformanceChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Portfolio Performance (12 Months)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                className="text-xs"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                className="text-xs"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Line 
                type="monotone" 
                dataKey="balance" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div>
            <p className="text-sm text-muted-foreground">Total Growth</p>
            <p className="text-lg font-semibold text-green-600">+$120,000 (100%)</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Monthly Avg.</p>
            <p className="text-lg font-semibold">+$10,000</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}