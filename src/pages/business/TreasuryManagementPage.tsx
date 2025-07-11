import BankingPageLayout from "@/components/BankingPageLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Coins, Shield, PieChart, Globe, ArrowUpRight,
  Users, Lock, BarChart, TrendingUp, Clock, Zap 
} from "lucide-react"

const TreasuryManagementPage = () => {
  return (
    <BankingPageLayout
      title="Treasury Management"
      subtitle="Optimize your financial operations with our comprehensive treasury solutions"
    >
      {/* Hero Stats Section */}
      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">$50B+</div>
            <p className="text-muted-foreground">Assets Under Management</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">Real-Time</div>
            <p className="text-muted-foreground">Cash Position Updates</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <p className="text-muted-foreground">Global Banking Partners</p>
          </div>
        </div>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Global Solutions</h3>
            <p className="text-muted-foreground">International payment and currency management tools.</p>
          </CardContent>
        </Card>
        
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Fraud Prevention</h3>
            <p className="text-muted-foreground">Advanced security measures to protect your transactions.</p>
          </CardContent>
        </Card>
        
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <PieChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Cash Forecasting</h3>
            <p className="text-muted-foreground">Predictive analytics for better cash management.</p>
          </CardContent>
        </Card>
        
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <ArrowUpRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Automated Solutions</h3>
            <p className="text-muted-foreground">Streamline operations with intelligent automation.</p>
          </CardContent>
        </Card>
      </div>

      {/* Solutions Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              Cash Flow Management
            </CardTitle>
            <CardDescription className="text-base">Optimize your liquidity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">Essential</span>
              </div>
              <p className="text-sm text-muted-foreground">Core treasury services</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Real-time cash positioning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Payment processing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Basic fraud protection</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Get Started</Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
          <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            Most Popular
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              Advanced Treasury Suite
            </CardTitle>
            <CardDescription className="text-base">Comprehensive financial control</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">Professional</span>
              </div>
              <p className="text-sm text-muted-foreground">Advanced treasury management</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Advanced analytics dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Multi-entity management</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Enhanced security features</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Learn More</Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              Enterprise Solutions
            </CardTitle>
            <CardDescription className="text-base">Custom treasury management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">Enterprise</span>
              </div>
              <p className="text-sm text-muted-foreground">Tailored solutions</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Custom API integration</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Dedicated security team</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">24/7 priority support</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Contact Us</Button>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
};

export default TreasuryManagementPage;
