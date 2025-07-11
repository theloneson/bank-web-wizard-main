import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Shield, Wallet, Gift, ArrowRight, Smartphone, Globe, Tag, Star, Zap, TrendingUp, Award } from "lucide-react"
import Footer from "@/components/Footer"

const CreditCardsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="relative bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid-16" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto text-base px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Industry-Leading Rewards
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Credit
              <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent"> Cards</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed">
              Unlock exceptional rewards, premium benefits, and unmatched financial flexibility with our curated collection of credit cards
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-base">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span>Zero Fraud Liability</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                <span>Up to 5% Cashback</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                <span>No Foreign Fees</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                <span>Instant Approval</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our Credit Cards?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience next-generation credit cards with intelligent rewards, premium protection, and exclusive lifestyle benefits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Shield className="h-10 w-10 text-primary-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Military-Grade Security</h3>
              <p className="text-muted-foreground leading-relaxed text-base">Advanced AI fraud detection with real-time transaction monitoring and instant alerts for suspicious activity.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Smartphone className="h-10 w-10 text-accent-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Mobile Experience</h3>
              <p className="text-muted-foreground leading-relaxed text-base">Intuitive app with spending insights, instant notifications, and seamless payment management at your fingertips.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Globe className="h-10 w-10 text-secondary-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Acceptance</h3>
              <p className="text-muted-foreground leading-relaxed text-base">Use your card worldwide with no foreign transaction fees and exclusive travel benefits in 200+ countries.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-destructive to-destructive/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Tag className="h-10 w-10 text-destructive-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Exclusive Rewards</h3>
              <p className="text-muted-foreground leading-relaxed text-base">Earn accelerated rewards on everyday purchases with personalized bonus categories and premium redemption options.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-muted/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                  <CreditCard className="h-7 w-7 text-primary-foreground" />
                </div>
                <Badge variant="outline" className="text-sm">Essential</Badge>
              </div>
              <CardTitle className="text-2xl font-bold mb-2">Cash Rewards Card</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Perfect for everyday spending and simplicity</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="text-center py-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                <div className="text-4xl font-bold mb-2">2%</div>
                <div className="text-lg font-medium mb-1">Cash Back</div>
                <div className="text-sm text-muted-foreground">On all purchases</div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">$200 Welcome Bonus</div>
                    <div className="text-sm text-muted-foreground">After spending $1,000 in 3 months</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">$0 Annual Fee</div>
                    <div className="text-sm text-muted-foreground">No hidden costs, ever</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Zero Fraud Liability</div>
                    <div className="text-sm text-muted-foreground">100% protection on purchases</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-accent bg-gradient-to-br from-card to-accent/5 shadow-3xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-3 scale-105 z-10">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-8 py-3 text-base font-bold shadow-lg">
                <Star className="w-4 h-4 mr-2" />
                Most Rewarding
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <CardHeader className="relative pt-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                  <CreditCard className="h-7 w-7 text-accent-foreground" />
                </div>
                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm">Premium</Badge>
              </div>
              <CardTitle className="text-2xl font-bold mb-2">Travel Rewards Plus</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Designed for travel enthusiasts and lifestyle</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="text-center py-8 bg-gradient-to-r from-accent/15 to-accent/5 rounded-2xl border-2 border-accent/30">
                <div className="text-4xl font-bold mb-2">3X</div>
                <div className="text-lg font-medium mb-1">Points</div>
                <div className="text-sm text-muted-foreground">On travel & dining</div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">80,000 Bonus Points</div>
                    <div className="text-sm text-muted-foreground">Worth $800 in travel</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Premium Travel Insurance</div>
                    <div className="text-sm text-muted-foreground">Trip protection & emergency coverage</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Airport Lounge Access</div>
                    <div className="text-sm text-muted-foreground">Priority Pass membership included</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="text-center text-sm text-muted-foreground mb-4">
                $95 annual fee
              </div>
              
              <Button className="w-full h-12 text-base bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-lg">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-secondary/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center">
                  <CreditCard className="h-7 w-7 text-secondary-foreground" />
                </div>
                <Badge variant="secondary" className="text-sm">Business</Badge>
              </div>
              <CardTitle className="text-2xl font-bold mb-2">Business Rewards</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Optimize your business spending power</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="text-center py-8 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20">
                <div className="text-4xl font-bold mb-2">2X</div>
                <div className="text-lg font-medium mb-1">Points</div>
                <div className="text-sm text-muted-foreground">On business purchases</div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Unlimited Employee Cards</div>
                    <div className="text-sm text-muted-foreground">No additional fees</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Expense Management</div>
                    <div className="text-sm text-muted-foreground">Real-time tracking & reporting</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">QuickBooks Integration</div>
                    <div className="text-sm text-muted-foreground">Seamless accounting sync</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full h-12 text-base bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground shadow-lg">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreditCardsPage
