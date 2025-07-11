import BankingPageLayout from "@/components/BankingPageLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Store, CreditCard, ShieldCheck, Settings, TrendingUp, Clock, Zap } from "lucide-react"

const MerchantServicesPage = () => {
  return (
    <BankingPageLayout
      title="Merchant Services"
      subtitle="Comprehensive payment solutions for businesses of all sizes"
    >
      {/* Hero Stats Section */}
      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-muted-foreground">Payment Success Rate</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">2 Sec</div>
            <p className="text-muted-foreground">Average Transaction Time</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <p className="text-muted-foreground">Countries Supported</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Store className="h-6 w-6 text-primary" />
              </div>
              Basic Payment Processing
            </CardTitle>
            <CardDescription className="text-base">Perfect for small businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">2.9%</span>
                <span className="text-lg text-muted-foreground">+ $0.30</span>
              </div>
              <p className="text-sm text-muted-foreground">Per transaction fee</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Online & in-store payments</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">PCI compliant</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Basic reporting</span>
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
                <Store className="h-6 w-6 text-primary" />
              </div>
              Advanced Merchant Suite
            </CardTitle>
            <CardDescription className="text-base">Ideal for growing businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">2.6%</span>
                <span className="text-lg text-muted-foreground">+ $0.20</span>
              </div>
              <p className="text-sm text-muted-foreground">Per transaction fee</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Multi-channel payments</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Advanced fraud protection</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Detailed analytics</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Upgrade Now</Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Store className="h-6 w-6 text-primary" />
              </div>
              Enterprise Payment Solutions
            </CardTitle>
            <CardDescription className="text-base">For large enterprises</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">Custom</span>
              </div>
              <p className="text-sm text-muted-foreground">Tailored pricing</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Global payment support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Dedicated security team</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Custom integrations</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Contact Sales</Button>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
};

export default MerchantServicesPage;
