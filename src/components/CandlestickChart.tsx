
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Bar, Line } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface CandlestickChartProps {
  data: CandlestickData[];
  height?: number;
}

export default function CandlestickChart({ data, height = 400 }: CandlestickChartProps) {
  const chartConfig = {
    candlestick: { label: "Price", color: "#2563eb" },
    volume: { label: "Volume", color: "#64748b" },
  };

  return (
    <ChartContainer config={chartConfig} className={`h-[${height}px]`}>
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
            domain={['dataMin - 5', 'dataMax + 5']}
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
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
