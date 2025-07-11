
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Home, Calculator, Clock, CheckCircle, ArrowRight, Shield, Wallet, PieChart, Star, TrendingDown, Award, Users } from "lucide-react"
import Footer from "@/components/Footer"

const MortgagesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="relative bg-gradient-to-r from-primary via-primary/95 to-accent text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto text-base px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              #1 Mortgage Lender 2024
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              Mortgage
              <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed">
              Turn your homeownership dreams into reality with industry-leading rates, personalized guidance, and streamlined digital processes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-base">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-5 h-5" />
                <span>Rates from 3.25%</span>
              </div>
              <div className="flex items-center gap-3">
                <Calculator className="w-5 h-5" />
                <span>Pre-approval in 24hrs</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span>Expert Loan Officers</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our Mortgage Services?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of home financing with cutting-edge technology, expert guidance, and unmatched customer service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <TrendingDown className="h-10 w-10 text-primary-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Industry-Low Rates</h3>
              <p className="text-muted-foreground leading-relaxed text-base">Access exclusive rates starting from 3.25% with our preferred lender network and volume discounts.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Calculator className="h-10 w-10 text-accent-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Calculations</h3>
              <p className="text-muted-foreground leading-relaxed text-base">AI-powered tools provide instant pre-qualification and payment estimates tailored to your financial profile.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Wallet className="h-10 w-10 text-secondary-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Flexible Options</h3>
              <p className="text-muted-foreground leading-relaxed text-base">From 3.5% down conventional to 0% down VA loans, we have solutions for every financial situation.</p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
            <CardContent className="pt-10 text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-destructive to-destructive/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Users className="h-10 w-10 text-destructive-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Guidance</h3>
              <p className="text-muted-foreground leading-relaxed text-base">Dedicated loan officers with average 15+ years experience guide you from application to closing.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-muted/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                  <Home className="h-7 w-7 text-primary-foreground" />
                </div>
                <Badge variant="outline" className="text-sm">Stable</Badge>
              </div>
              <CardTitle className="text-2xl font-bold mb-2">Fixed Rate Mortgage</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Predictable payments for long-term planning</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="text-center py-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                <div className="text-4xl font-bold mb-2">3.75%</div>
                <div className="text-lg font-medium mb-1">APR*</div>
                <div className="text-sm text-muted-foreground">30-year fixed</div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">15 or 30-year terms</div>
                    <div className="text-sm text-muted-foreground">Choose your timeline</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Predictable payments</div>
                    <div className="text-sm text-muted-foreground">Same payment every month</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Rate lock protection</div>
                    <div className="text-sm text-muted-foreground">No surprise increases</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg group">
                Get Pre-Approved
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-accent bg-gradient-to-br from-card to-accent/5 shadow-3xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-3 scale-105 z-10">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-8 py-3 text-base font-bold shadow-lg">
                <Star className="w-4 h-4 mr-2" />
                Most Popular
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <CardHeader className="relative pt-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                  <Home className="h-7 w-7 text-accent-foreground" />
                </div>
                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm">Flexible</Badge>
              </div>
              <CardTitle className="text-2xl font-bold mb-2">Adjustable Rate Mortgage</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Lower initial rates with adjustment periods</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="text-center py-8 bg-gradient-to-r from-accent/15 to-accent/5 rounded-2xl border-2 border-accent/30">
                <div className="text-4xl font-bold mb-2">3.25%</div>
                <div className="text-lg font-medium mb-1">Starting APR*</div>
                <div className="text-sm text-muted-foreground">5/1 ARM</div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Lower initial payments</div>
                    <div className="text-sm text-muted-foreground">Save more in early years</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Rate caps protection</div>
                    <div className="text-sm text-muted-foreground">Maximum increase limits</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">5/1, 7/1, 10/1 options</div>
                    <div className="text-sm text-muted-foreground">Choose your fixed period</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full h-12 text-base bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-lg group">
                Get Pre-Approved
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-secondary/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center">
                  <Home className="h-7 w-7 text-secondary-foreground" />
                </div>
                <Badge variant="secondary" className="text-sm">Government</Badge>
              </div>
              <CardTitle className="text-2xl font-bold mb-2">FHA Loans</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Government-backed financing options</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="text-center py-8 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20">
                <div className="text-4xl font-bold mb-2">3.5%</div>
                <div className="text-lg font-medium mb-1">Down Payment</div>
                <div className="text-sm text-muted-foreground">Minimum required</div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Flexible credit requirements</div>
                    <div className="text-sm text-muted-foreground">Credit scores from 580</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Lower down payments</div>
                    <div className="text-sm text-muted-foreground">Competitive interest rates</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Government insured</div>
                    <div className="text-sm text-muted-foreground">FHA protection</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full h-12 text-base bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground shadow-lg group">
                Get Pre-Approved
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MortgagesPage
