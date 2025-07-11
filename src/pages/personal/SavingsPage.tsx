
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Wallet, TrendingUp, Target, PiggyBank, ArrowRight, InfoIcon, FileText, Phone, Star, Award, Shield, Zap } from "lucide-react"
import Footer from "@/components/Footer"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const SavingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="relative bg-gradient-to-r from-primary via-primary/95 to-accent text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto text-base px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              High-Yield Savings Leader
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Savings
              <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent"> Accounts</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed">
              Watch your money grow with industry-leading rates, intelligent savings tools, and flexible account options designed for every financial goal
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-base">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                <span>Up to 2.00% APY</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span>FDIC Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                <span>No Minimum Balance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Rate Information */}
        <div className="mb-12 text-center bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Current Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-2">Standard Savings</p>
              <p className="text-3xl font-bold text-bank-blue">0.50%</p>
              <p className="text-sm text-gray-500">Annual Percentage Yield</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 bg-blue-50">
              <p className="text-gray-600 mb-2">High-Yield Savings</p>
              <p className="text-3xl font-bold text-bank-blue">1.75%</p>
              <p className="text-sm text-gray-500">Annual Percentage Yield</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-2">Money Market</p>
              <p className="text-3xl font-bold text-bank-blue">2.00%</p>
              <p className="text-sm text-gray-500">Annual Percentage Yield</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">*Rates effective as of April 17, 2025. Annual Percentage Yields (APY) are subject to change without notice.</p>
        </div>

        {/* Account Options */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="h-6 w-6 text-bank-blue" />
                Standard Savings
              </CardTitle>
              <CardDescription>Start your savings journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-3xl font-bold text-bank-blue">0.50% APY*</div>
                <p className="text-sm text-gray-600">*Annual Percentage Yield</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Low minimum balance requirement of $100</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>No monthly maintenance fees with qualifying balance</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Mobile and online banking access</span>
                </li>
              </ul>
              <div className="space-y-2">
                <Button className="w-full bg-bank-blue hover:bg-bank-navy">Open Account</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <InfoIcon className="w-4 h-4 mr-2" /> More Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Standard Savings Account Details</DialogTitle>
                      <DialogDescription>
                        Our most popular savings option for beginners
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Features</h4>
                        <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                          <li>Minimum opening deposit of $100</li>
                          <li>No monthly maintenance fee with minimum daily balance of $300</li>
                          <li>Maximum of 6 withdrawals per month</li>
                          <li>FDIC insured up to $250,000</li>
                          <li>24/7 account access via online and mobile banking</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Fees</h4>
                        <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                          <li>Monthly maintenance fee: $5 (waived with $300 minimum daily balance)</li>
                          <li>Excessive withdrawal fee: $10 per transaction over the limit</li>
                          <li>Account closure within 90 days: $25</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-bank-blue">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-bank-blue" />
                  High-Yield Savings
                </CardTitle>
                <span className="bg-bank-blue text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">Best Value</span>
              </div>
              <CardDescription>Maximize your earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-3xl font-bold text-bank-blue">1.75% APY*</div>
                <p className="text-sm text-gray-600">*Annual Percentage Yield</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Higher interest rates for balances over $5,000</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>No maintenance fees with qualifying balance</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Free withdrawals up to monthly limits</span>
                </li>
              </ul>
              <div className="space-y-2">
                <Button className="w-full bg-bank-blue hover:bg-bank-navy">Open Account</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <InfoIcon className="w-4 h-4 mr-2" /> More Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>High-Yield Savings Account Details</DialogTitle>
                      <DialogDescription>
                        Our premium savings solution with competitive rates
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Features</h4>
                        <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                          <li>Minimum opening deposit of $5,000</li>
                          <li>No monthly maintenance fee with minimum daily balance of $5,000</li>
                          <li>Maximum of 6 withdrawals per month</li>
                          <li>FDIC insured up to $250,000</li>
                          <li>Tiered interest rates - earn more as your balance grows</li>
                          <li>Complimentary financial planning consultation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Fees</h4>
                        <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                          <li>Monthly maintenance fee: $10 (waived with $5,000 minimum daily balance)</li>
                          <li>Excessive withdrawal fee: $15 per transaction over the limit</li>
                          <li>Account closure within 180 days: $50</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-bank-blue" />
                Money Market
              </CardTitle>
              <CardDescription>Flexible savings with high returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-3xl font-bold text-bank-blue">2.00% APY*</div>
                <p className="text-sm text-gray-600">*Annual Percentage Yield</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Check writing privileges included</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Tiered interest rates based on balance</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>ATM access with qualifying balance</span>
                </li>
              </ul>
              <div className="space-y-2">
                <Button className="w-full bg-bank-blue hover:bg-bank-navy">Open Account</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <InfoIcon className="w-4 h-4 mr-2" /> More Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Money Market Account Details</DialogTitle>
                      <DialogDescription>
                        Combines the benefits of checking and savings accounts
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Features</h4>
                        <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                          <li>Minimum opening deposit of $10,000</li>
                          <li>No monthly maintenance fee with minimum daily balance of $10,000</li>
                          <li>Write up to 6 checks per month</li>
                          <li>ATM card available for qualifying accounts</li>
                          <li>FDIC insured up to $250,000</li>
                          <li>Higher interest rates for higher balances</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Fees</h4>
                        <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                          <li>Monthly maintenance fee: $15 (waived with $10,000 minimum daily balance)</li>
                          <li>Excessive check writing fee: $15 per check over the limit</li>
                          <li>Account closure within 180 days: $50</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Compare Accounts Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Compare Savings Accounts</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-bank-navy text-white">
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">Standard Savings</th>
                  <th className="px-6 py-4 text-center">High-Yield Savings</th>
                  <th className="px-6 py-4 text-center">Money Market</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">APY</td>
                  <td className="px-6 py-4 text-center">0.50%</td>
                  <td className="px-6 py-4 text-center">1.75%</td>
                  <td className="px-6 py-4 text-center">2.00%</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Minimum Opening Deposit</td>
                  <td className="px-6 py-4 text-center">$100</td>
                  <td className="px-6 py-4 text-center">$5,000</td>
                  <td className="px-6 py-4 text-center">$10,000</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Minimum Balance to Avoid Fees</td>
                  <td className="px-6 py-4 text-center">$300</td>
                  <td className="px-6 py-4 text-center">$5,000</td>
                  <td className="px-6 py-4 text-center">$10,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Monthly Maintenance Fee</td>
                  <td className="px-6 py-4 text-center">$5</td>
                  <td className="px-6 py-4 text-center">$10</td>
                  <td className="px-6 py-4 text-center">$15</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Check Writing</td>
                  <td className="px-6 py-4 text-center">No</td>
                  <td className="px-6 py-4 text-center">No</td>
                  <td className="px-6 py-4 text-center">Yes (6 per month)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">ATM Access</td>
                  <td className="px-6 py-4 text-center">No</td>
                  <td className="px-6 py-4 text-center">No</td>
                  <td className="px-6 py-4 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">FDIC Insured</td>
                  <td className="px-6 py-4 text-center">Yes</td>
                  <td className="px-6 py-4 text-center">Yes</td>
                  <td className="px-6 py-4 text-center">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Help and Support Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our financial experts are ready to help you select the right savings account for your needs and goals.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-10 w-10 mx-auto text-bank-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with a savings specialist</p>
                <p className="font-medium">1-800-SECURE-BANK</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <FileText className="h-10 w-10 mx-auto text-bank-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Schedule Consultation</h3>
                <p className="text-gray-600 mb-4">Free personalized advice</p>
                <Button variant="outline" className="mt-2">Book Appointment</Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <ArrowRight className="h-10 w-10 mx-auto text-bank-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Get Started</h3>
                <p className="text-gray-600 mb-4">Open your account online today</p>
                <Button className="bg-bank-blue hover:bg-bank-navy mt-2">Open Account</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SavingsPage;
