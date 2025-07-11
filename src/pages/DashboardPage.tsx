import { Link } from "react-router-dom";
import { useAuth } from "@/context/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  PiggyBank,
  TrendingUp,
  Send,
  ArrowUpDown,
  Eye,
  Building2,
  DollarSign,
  Activity,
  Users,
  User,
  Wallet,
  Briefcase,
  Target,
  ShieldCheck,
  Globe,
  Zap,
  TrendingDown
} from "lucide-react";
import WatchList from "@/components/WatchList";
import MarketOverview from "@/components/MarketOverview";
import PerformanceChart from "@/components/PerformanceChart";

const DashboardPage = () => {
  const { user } = useAuth();

  const accounts = [
    { name: "Checking Account", balance: 15750.32, type: "checking", change: 2.5 },
    { name: "Savings Account", balance: 45200.00, type: "savings", change: 1.2 },
    { name: "Investment Portfolio", balance: 127500.50, type: "investment", change: 5.8 },
    { name: "Business Account", balance: 85300.75, type: "business", change: -1.1 }
  ];

  const recentTransactions = [
    { id: 1, description: "Salary Deposit", amount: 5500.00, type: "credit", date: "2024-01-05", status: "completed" },
    { id: 2, description: "Rent Payment", amount: -1200.00, type: "debit", date: "2024-01-04", status: "completed" },
    { id: 3, description: "Grocery Store", amount: -87.50, type: "debit", date: "2024-01-03", status: "completed" },
    { id: 4, description: "Investment Dividend", amount: 245.30, type: "credit", date: "2024-01-02", status: "completed" },
    { id: 5, description: "Utility Bill", amount: -156.75, type: "debit", date: "2024-01-01", status: "pending" }
  ];

  const quickActions = [
    { title: "Send Money", icon: Send, link: "/send-money", description: "Transfer funds" },
    { title: "Exchange Currency", icon: ArrowUpDown, link: "/currency-exchange", description: "Convert currencies" },
    { title: "View All Accounts", icon: Eye, link: "/accounts", description: "Account overview" },
    { title: "Investment Portfolio", icon: TrendingUp, link: "/investments/portfolio", description: "Manage investments" }
  ];

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="space-y-8">
      {/* Welcome Section with Enhanced Design */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                <User className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-1">
                  Welcome back, {user?.name || 'User'}
                </h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Here's your financial overview for today
                </p>
              </div>
            </div>
          </div>
          <div className="text-right space-y-2">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <p className="text-sm text-muted-foreground mb-1">Total Net Worth</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-green-600 flex items-center justify-end gap-1 mt-2">
                <TrendingUp className="h-3 w-3" />
                +5.2% from last month
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Account Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {accounts.map((account, index) => {
          const Icon = account.type === 'checking' ? Wallet : 
                     account.type === 'savings' ? PiggyBank :
                     account.type === 'investment' ? TrendingUp : Building2;
          
          const cardGradients = [
            'from-blue-500/10 to-indigo-500/10',
            'from-green-500/10 to-emerald-500/10', 
            'from-purple-500/10 to-violet-500/10',
            'from-orange-500/10 to-amber-500/10'
          ];
          
          return (
            <Card key={index} className={`relative overflow-hidden border-0 bg-gradient-to-br ${cardGradients[index]} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-900/40"></div>
              <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{account.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold mb-2">
                  ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <div className="flex items-center gap-2">
                  {account.change > 0 ? (
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span className="text-sm font-medium">+{account.change}%</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      <span className="text-sm font-medium">{account.change}%</span>
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground">this month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Advanced Analytics Section */}
      <div className="grid gap-6 lg:grid-cols-4">
        <PerformanceChart />
        <MarketOverview />
        <WatchList />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <Button variant="outline" size="sm" asChild className="border-primary/20">
              <Link to="/transactions">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      transaction.type === 'credit' 
                        ? 'bg-gradient-to-br from-green-100 to-green-50 text-green-600 dark:from-green-900/20 dark:to-green-800/10' 
                        : 'bg-gradient-to-br from-red-100 to-red-50 text-red-600 dark:from-red-900/20 dark:to-red-800/10'
                    }`}>
                      {transaction.type === 'credit' ? 
                        <ArrowDownLeft className="h-4 w-4" /> : 
                        <ArrowUpRight className="h-4 w-4" />
                      }
                    </div>
                    <div>
                      <p className="font-medium text-sm">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-foreground'
                    }`}>
                      {transaction.type === 'credit' ? '+' : ''}
                      ${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                    <Badge 
                      variant={transaction.status === 'completed' ? 'default' : 'secondary'} 
                      className={`text-xs ${transaction.status === 'completed' ? 'bg-green-100 text-green-700' : ''}`}
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                const gradients = [
                  'from-blue-500/10 to-blue-600/5',
                  'from-green-500/10 to-green-600/5',
                  'from-purple-500/10 to-purple-600/5',
                  'from-orange-500/10 to-orange-600/5'
                ];
                
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`w-full justify-start gap-3 h-auto p-4 bg-gradient-to-r ${gradients[index]} hover:scale-105 transition-all duration-200 border border-primary/10`}
                    asChild
                  >
                    <Link to={action.link}>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-sm">{action.title}</p>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Service Links */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/personal/checking" className="group">
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/5"></div>
            <CardContent className="relative p-8 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Personal Banking</h3>
              <p className="text-sm text-muted-foreground">Checking & Savings Accounts</p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/business/checking" className="group">
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5"></div>
            <CardContent className="relative p-8 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Business Banking</h3>
              <p className="text-sm text-muted-foreground">Enterprise Solutions</p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/investments/portfolio" className="group">
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/5"></div>
            <CardContent className="relative p-8 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Investments</h3>
              <p className="text-sm text-muted-foreground">Portfolio Management</p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/loans/personal" className="group">
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5"></div>
            <CardContent className="relative p-8 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Loans & Credit</h3>
              <p className="text-sm text-muted-foreground">Personal & Business Loans</p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;