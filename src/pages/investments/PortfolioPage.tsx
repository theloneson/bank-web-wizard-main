
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankingPageLayout from "@/components/BankingPageLayout";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, BarChart3, Briefcase, DollarSign, Activity } from "lucide-react";

const portfolioPerformance = [
  { month: "Jan", value: 100000, benchmark: 100000 },
  { month: "Feb", value: 102500, benchmark: 101200 },
  { month: "Mar", value: 98750, benchmark: 99800 },
  { month: "Apr", value: 105200, benchmark: 103500 },
  { month: "May", value: 108900, benchmark: 106200 },
  { month: "Jun", value: 112300, benchmark: 109800 },
  { month: "Jul", value: 115600, benchmark: 112400 },
  { month: "Aug", value: 119200, benchmark: 115900 },
  { month: "Sep", value: 116800, benchmark: 113600 },
  { month: "Oct", value: 122100, benchmark: 118700 },
  { month: "Nov", value: 125400, benchmark: 121300 },
  { month: "Dec", value: 128750, benchmark: 124500 },
];

const assetAllocation = [
  { name: "Domestic Stocks", value: 45, color: "#2563eb", amount: 57937.50 },
  { name: "International Stocks", value: 25, color: "#16a34a", amount: 32187.50 },
  { name: "Bonds", value: 20, color: "#ca8a04", amount: 25750.00 },
  { name: "REITs", value: 7, color: "#dc2626", amount: 9012.50 },
  { name: "Cash", value: 3, color: "#6b7280", amount: 3862.50 },
];

const holdings = [
  { symbol: "VTSAX", name: "Total Stock Market Index", shares: 450, price: 112.34, value: 50553, allocation: 39.3, change: 1.2 },
  { symbol: "VTIAX", name: "Total International Stock Index", shares: 280, price: 115.67, value: 32387, allocation: 25.2, change: 0.8 },
  { symbol: "VBTLX", name: "Total Bond Market Index", shares: 230, price: 112.89, value: 25965, allocation: 20.2, change: -0.3 },
  { symbol: "VGSLX", name: "REIT Index Fund", shares: 85, price: 106.21, value: 9028, allocation: 7.0, change: 2.1 },
  { symbol: "VMFXX", name: "Money Market Fund", shares: 3800, price: 1.00, value: 3800, allocation: 3.0, change: 0.0 },
];

const chartConfig = {
  value: { label: "Portfolio Value", color: "#2563eb" },
  benchmark: { label: "Benchmark", color: "#16a34a" },
};

export default function PortfolioPage() {
  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalGain = totalValue - 120000; // Assuming initial investment of 120k
  const totalGainPercent = (totalGain / 120000) * 100;

  return (
    <BankingPageLayout
      title="Portfolio Management"
      subtitle="Monitor and optimize your investment portfolio with professional-grade tools"
    >
      <div className="space-y-8">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Value</p>
                  <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
                  <p className="text-sm text-green-600">
                    +${totalGain.toLocaleString()} ({totalGainPercent.toFixed(1)}%)
                  </p>
                </div>
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Change</p>
                  <p className="text-2xl font-bold text-green-600">+$1,234</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +0.96%
                  </p>
                </div>
                <Activity className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">YTD Return</p>
                  <p className="text-2xl font-bold">+12.4%</p>
                  <p className="text-sm text-blue-600">vs S&P 500: +10.8%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cash Available</p>
                  <p className="text-2xl font-bold">$3,800</p>
                  <p className="text-sm text-gray-600">3.0% allocation</p>
                </div>
                <DollarSign className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="holdings">Holdings</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance vs Benchmark</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={portfolioPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#2563eb" 
                        strokeWidth={3}
                        name="Portfolio"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="benchmark" 
                        stroke="#16a34a" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="S&P 500"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={assetAllocation}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {assetAllocation.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Allocation Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assetAllocation.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${item.amount.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">{item.value}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="holdings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Symbol</th>
                        <th className="text-left py-2">Name</th>
                        <th className="text-right py-2">Shares</th>
                        <th className="text-right py-2">Price</th>
                        <th className="text-right py-2">Value</th>
                        <th className="text-right py-2">Allocation</th>
                        <th className="text-right py-2">Day Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holdings.map((holding, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 font-medium">{holding.symbol}</td>
                          <td className="py-3">{holding.name}</td>
                          <td className="py-3 text-right">{holding.shares}</td>
                          <td className="py-3 text-right">${holding.price}</td>
                          <td className="py-3 text-right font-semibold">${holding.value.toLocaleString()}</td>
                          <td className="py-3 text-right">{holding.allocation}%</td>
                          <td className={`py-3 text-right ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {holding.change >= 0 ? '+' : ''}{holding.change}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Portfolio Beta</span>
                      <span className="font-semibold">0.92</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard Deviation</span>
                      <span className="font-semibold">12.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sharpe Ratio</span>
                      <span className="font-semibold">1.18</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max Drawdown</span>
                      <span className="font-semibold text-red-600">-8.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rebalancing Alert</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Your portfolio has drifted from your target allocation. Consider rebalancing:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Domestic Stocks</span>
                        <span className="text-orange-600">45% (Target: 40%)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>International Stocks</span>
                        <span className="text-blue-600">25% (Target: 25%)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Bonds</span>
                        <span className="text-red-600">20% (Target: 25%)</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Rebalance Portfolio</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </BankingPageLayout>
  );
}
