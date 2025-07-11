import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Banknote, CheckCircle, ShieldCheck, CreditCard, ArrowRight, Smartphone, PieChart, Clock, Star, Gift, Zap, Globe } from "lucide-react"
import Footer from "@/components/Footer"

const CheckingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid-16" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mx-auto">
              <Star className="w-3 h-3 mr-1" />
              Award-Winning Banking
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Personal 
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> Checking</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
              Experience next-generation banking with accounts designed for your lifestyle and financial ambitions
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>FDIC Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Checking Accounts?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for the modern world with cutting-edge technology and unmatched security
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Military-Grade Security</h3>
              <p className="text-muted-foreground leading-relaxed">256-bit encryption, biometric authentication, and real-time fraud monitoring protect every transaction.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Mobile App</h3>
              <p className="text-muted-foreground leading-relaxed">Smart spending insights, voice commands, and predictive financial planning at your fingertips.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Everything</h3>
              <p className="text-muted-foreground leading-relaxed">Real-time transfers, instant notifications, and immediate access to funds worldwide.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-destructive to-destructive/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart className="h-8 w-8 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">Advanced spending categorization, budgeting tools, and personalized financial recommendations.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-muted/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/5 to-muted/10" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <Banknote className="h-6 w-6 text-primary-foreground" />
                </div>
                <Badge variant="outline">Essential</Badge>
              </div>
              <CardTitle className="text-2xl font-bold">Basic Checking</CardTitle>
              <CardDescription className="text-base">Perfect foundation for your financial journey</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="text-center py-6 bg-gradient-to-r from-muted/20 to-muted/10 rounded-xl">
                <div className="text-3xl font-bold">$0</div>
                <div className="text-sm text-muted-foreground">Monthly Fee</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">No minimum balance</div>
                    <div className="text-sm text-muted-foreground">Start with any amount</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Mobile-first banking</div>
                    <div className="text-sm text-muted-foreground">Award-winning app included</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Contactless debit card</div>
                    <div className="text-sm text-muted-foreground">Tap to pay everywhere</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg">
                Open Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-primary bg-gradient-to-br from-card to-primary/5 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-2 text-sm font-semibold">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
            <CardHeader className="relative pt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-accent-foreground" />
                </div>
                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">Premium</Badge>
              </div>
              <CardTitle className="text-2xl font-bold">Premium Checking</CardTitle>
              <CardDescription className="text-base">Elevated banking for ambitious goals</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="text-center py-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <div className="text-3xl font-bold">$15</div>
                <div className="text-sm text-muted-foreground">Monthly Fee*</div>
                <div className="text-xs text-muted-foreground mt-1">*Waived with $5,000 balance</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">0.25% APY on balances</div>
                    <div className="text-sm text-muted-foreground">Earn while you bank</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Unlimited ATM rebates</div>
                    <div className="text-sm text-muted-foreground">Worldwide fee refunds</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Premium travel benefits</div>
                    <div className="text-sm text-muted-foreground">Insurance & concierge</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">$300 welcome bonus</div>
                    <div className="text-sm text-muted-foreground">Limited time offer</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-lg">
                Open Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/10" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-secondary-foreground" />
                </div>
                <Badge variant="secondary">Student</Badge>
              </div>
              <CardTitle className="text-2xl font-bold">Student Checking</CardTitle>
              <CardDescription className="text-base">Built for your academic journey</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="text-center py-6 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl">
                <div className="text-3xl font-bold">$0</div>
                <div className="text-sm text-muted-foreground">Monthly Fee</div>
                <div className="text-xs text-muted-foreground mt-1">For up to 5 years</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">No maintenance fees</div>
                    <div className="text-sm text-muted-foreground">Throughout college</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Student financial tools</div>
                    <div className="text-sm text-muted-foreground">Budgeting & planning</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Rewards program</div>
                    <div className="text-sm text-muted-foreground">Earn on purchases</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground shadow-lg">
                Open Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="relative py-20 bg-gradient-to-r from-muted/50 via-background to-muted/50 rounded-3xl border border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Account Includes Premium Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                World-class banking benefits come standard, no matter which account you choose
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center">
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-10 w-10 text-primary-foreground" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </div>
                <h3 className="font-bold text-lg mb-3">Contactless Debit Card</h3>
                <p className="text-muted-foreground leading-relaxed">Premium metal card with tap-to-pay technology and global acceptance</p>
              </div>
              
              <div className="group text-center">
                <div className="relative w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-10 w-10 text-accent-foreground" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </div>
                <h3 className="font-bold text-lg mb-3">Zero Fraud Liability</h3>
                <p className="text-muted-foreground leading-relaxed">Advanced AI monitoring with instant alerts and complete protection</p>
              </div>
              
              <div className="group text-center">
                <div className="relative w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Banknote className="h-10 w-10 text-secondary-foreground" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </div>
                <h3 className="font-bold text-lg mb-3">Instant Mobile Deposits</h3>
                <p className="text-muted-foreground leading-relaxed">Deposit checks in seconds with AI-powered processing</p>
              </div>
              
              <div className="group text-center">
                <div className="relative w-20 h-20 bg-gradient-to-br from-destructive to-destructive/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-destructive-foreground" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </div>
                <h3 className="font-bold text-lg mb-3">Smart Bill Pay</h3>
                <p className="text-muted-foreground leading-relaxed">Automated scheduling with intelligent payment optimization</p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                <Star className="w-5 h-5 text-primary" />
                <span className="font-medium">FDIC insured up to $250,000</span>
                <Separator orientation="vertical" className="h-6" />
                <span className="font-medium">Member FDIC</span>
                <Star className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CheckingPage
