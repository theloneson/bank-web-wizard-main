import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  Target,
  Briefcase,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  AlertCircle
} from "lucide-react";

const InvestmentsOverviewPage = () => {
  const portfolioData = {
    totalValue: 485750.32,
    dayChange: 8945.21,
    dayChangePercent: 1.88,
    totalGain: 85750.32,
    totalGainPercent: 21.4
  };

  const holdings = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      shares: 125,
      currentPrice: 175.32,
      value: 21915.00,
      change: 2.4,
      changePercent: 1.39,
      allocation: 4.5
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      shares: 95,
      currentPrice: 342.11,
      value: 32500.45,
      change: -1.2,
      changePercent: -0.35,
      allocation: 6.7
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      shares: 85,
      currentPrice: 138.45,
      value: 11768.25,
      change: 3.8,
      changePercent: 2.82,
      allocation: 2.4
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      shares: 65,
      currentPrice: 248.92,
      value: 16179.80,
      change: -5.2,
      changePercent: -2.05,
      allocation: 3.3
    }
  ];

  const assetAllocation = [
    { type: "Stocks", percentage: 65, value: 315737.71, color: "bg-blue-500" },
    { type: "Bonds", percentage: 25, value: 121437.58, color: "bg-green-500" },
    { type: "Real Estate", percentage: 7, value: 34002.52, color: "bg-purple-500" },
    { type: "Commodities", percentage: 3, value: 14572.51, color: "bg-orange-500" }
  ];

  const performanceMetrics = [
    { label: "1 Day", value: "+1.88%", positive: true },
    { label: "1 Week", value: "+3.42%", positive: true },
    { label: "1 Month", value: "-0.75%", positive: false },
    { label: "3 Months", value: "+12.4%", positive: true },
    { label: "1 Year", value: "+21.4%", positive: true },
    { label: "3 Years", value: "+45.8%", positive: true }
  ];

  const goals = [
    {
      name: "Retirement Fund",
      target: 1000000,
      current: 485750,
      progress: 48.6,
      targetDate: "2035"
    },
    {
      name: "House Down Payment",
      target: 100000,
      current: 75000,
      progress: 75,
      targetDate: "2025"
    },
    {
      name: "Emergency Fund",
      target: 50000,
      current: 50000,
      progress: 100,
      targetDate: "Completed"
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Investment Portfolio</h1>
            <p className="text-muted-foreground">Monitor your investments and track performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">View Reports</Button>
            <Button>Invest More</Button>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Portfolio Value</p>
                  <p className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Change</p>
                  <div className="flex items-center gap-1">
                    <p className={`text-2xl font-bold ${portfolioData.dayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {portfolioData.dayChange >= 0 ? '+' : ''}${portfolioData.dayChange.toLocaleString()}
                    </p>
                    {portfolioData.dayChange >= 0 ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <p className={`text-sm ${portfolioData.dayChangePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {portfolioData.dayChangePercent >= 0 ? '+' : ''}{portfolioData.dayChangePercent}%
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Gain/Loss</p>
                  <p className="text-2xl font-bold text-green-600">+${portfolioData.totalGain.toLocaleString()}</p>
                  <p className="text-sm text-green-600">+{portfolioData.totalGainPercent}%</p>
                </div>
                <Award className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Diversification Score</p>
                  <p className="text-2xl font-bold">8.5/10</p>
                  <p className="text-sm text-green-600">Well Diversified</p>
                </div>
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Top Holdings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holdings.map((holding, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-primary text-sm">{holding.symbol}</span>
                          </div>
                          <div>
                            <p className="font-medium">{holding.symbol}</p>
                            <p className="text-sm text-muted-foreground">{holding.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right mr-4">
                        <p className="font-medium">{holding.shares} shares</p>
                        <p className="text-sm text-muted-foreground">${holding.currentPrice}</p>
                      </div>
                      <div className="text-right mr-4">
                        <p className="font-medium">${holding.value.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{holding.allocation}% allocation</p>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-1 ${holding.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {holding.changePercent >= 0 ? (
                            <ArrowUpRight className="h-3 w-3" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3" />
                          )}
                          <span className="text-sm font-medium">
                            {holding.changePercent >= 0 ? '+' : ''}{holding.changePercent}%
                          </span>
                        </div>
                        <p className={`text-xs ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {holding.change >= 0 ? '+' : ''}${Math.abs(holding.change)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Asset Allocation */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assetAllocation.map((asset, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{asset.type}</span>
                        <span className="text-sm text-muted-foreground">{asset.percentage}%</span>
                      </div>
                      <Progress value={asset.percentage} className="h-2" />
                      <p className="text-xs text-muted-foreground">${asset.value.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="text-center p-2 border rounded">
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                      <p className={`font-semibold ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Investment Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {goals.map((goal, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{goal.name}</h3>
                    {goal.progress === 100 ? (
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    ) : (
                      <Badge variant="outline">{goal.progress}%</Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current: ${goal.current.toLocaleString()}</span>
                      <span>Target: ${goal.target.toLocaleString()}</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Target: {goal.targetDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Alert */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-orange-900">Market Update</h3>
                <p className="text-sm text-orange-700 mb-3">
                  The market is experiencing increased volatility due to recent economic indicators. 
                  Consider reviewing your risk tolerance and diversification strategy.
                </p>
                <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentsOverviewPage;