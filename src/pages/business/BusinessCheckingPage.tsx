import BankingPageLayout from "@/components/BankingPageLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, DollarSign, Briefcase, ArrowUpRight, Shield, Users, Wallet, PieChart, TrendingUp, Clock, Zap } from "lucide-react"

const BusinessCheckingPage = () => {
  return (
    <BankingPageLayout
      title="Business Checking Solutions"
      subtitle="Powerful checking accounts designed to help your business grow and succeed"
    >
      {/* Hero Stats Section */}
      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
            <p className="text-muted-foreground">Daily Transaction Volume</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Digital Banking Access</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">Instant</div>
            <p className="text-muted-foreground">Real-Time Transfers</p>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Enhanced Security</h3>
            <p className="text-muted-foreground">Advanced fraud protection and secure transactions for your peace of mind.</p>
          </CardContent>
        </Card>
        
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Multi-User Access</h3>
            <p className="text-muted-foreground">Delegate account access and set custom permissions for your team.</p>
          </CardContent>
        </Card>
        
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Cash Management</h3>
            <p className="text-muted-foreground">Optimize your cash flow with our advanced management tools.</p>
          </CardContent>
        </Card>
        
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <PieChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Real-Time Analytics</h3>
            <p className="text-muted-foreground">Track your business performance with detailed financial insights.</p>
          </CardContent>
        </Card>
      </div>

      {/* Account Types */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              Small Business Basic
            </CardTitle>
            <CardDescription className="text-base">Perfect for growing businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">Monthly maintenance fee with $5,000 minimum balance</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">200 free transactions monthly</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Online & mobile banking included</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Bill pay and mobile deposit</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Open Account</Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
          <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            Most Popular
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              Business Premium
            </CardTitle>
            <CardDescription className="text-base">Ideal for established businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">$20</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">Monthly fee, waived with $25,000 avg. balance</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">500 free transactions monthly</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Enhanced cash management tools</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Priority customer support</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Open Account</Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              Enterprise Solutions
            </CardTitle>
            <CardDescription className="text-base">For large corporations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">Custom</span>
              </div>
              <p className="text-sm text-muted-foreground">Tailored to your business needs</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Unlimited transactions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">API integration & custom solutions</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Contact Sales</Button>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
};

export default BusinessCheckingPage;
