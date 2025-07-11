import BankingPageLayout from "@/components/BankingPageLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Shield, Wallet, Gift, Award, TrendingUp, Users } from "lucide-react"

const BusinessCreditPage = () => {
  return (
    <BankingPageLayout
      title="Business Credit Cards"
      subtitle="Powerful credit solutions designed to fuel your business growth"
    >
      {/* Hero Stats Section */}
      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">5%</div>
            <p className="text-muted-foreground">Max Cash Back Rate</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
            <p className="text-muted-foreground">Credit Limits Available</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">Business Partners</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              Startup Credit Card
            </CardTitle>
            <CardDescription className="text-base">Perfect for new and emerging businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">1%</span>
                <span className="text-lg text-muted-foreground">Cash Back</span>
              </div>
              <p className="text-sm text-muted-foreground">On all business purchases</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">$100 welcome bonus</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">No personal guarantee</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">No annual fee</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Apply Now</Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
          <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            Most Popular
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              Growth Rewards Card
            </CardTitle>
            <CardDescription className="text-base">Ideal for expanding businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">2%</span>
                <span className="text-lg text-muted-foreground">Cash Back</span>
              </div>
              <p className="text-sm text-muted-foreground">On office and supply purchases</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">$500 welcome bonus</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Travel insurance</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Employee cards</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Apply Now</Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              Enterprise Credit
            </CardTitle>
            <CardDescription className="text-base">For large corporations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">Custom</span>
              </div>
              <p className="text-sm text-muted-foreground">Tailored rewards program</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Advanced expense tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Custom credit limits</span>
              </li>
            </ul>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">Contact Sales</Button>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
};

export default BusinessCreditPage;
