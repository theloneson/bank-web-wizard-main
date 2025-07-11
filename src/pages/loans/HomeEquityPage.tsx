
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BankingPageLayout from "@/components/BankingPageLayout";
import { Home, Calculator, TrendingUp, Shield, DollarSign, CheckCircle } from "lucide-react";

export default function HomeEquityPage() {
  return (
    <BankingPageLayout
      title="Home Equity Solutions"
      subtitle="Unlock the value in your home with flexible equity loans and lines of credit"
    >
      <div className="space-y-8">
        {/* Equity Calculator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-6 h-6 mr-2" />
              Home Equity Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="home-value">Current Home Value</Label>
                <Input id="home-value" placeholder="$400,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mortgage-balance">Remaining Mortgage</Label>
                <Input id="mortgage-balance" placeholder="$250,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ltv">Max LTV Ratio</Label>
                <Input id="ltv" placeholder="80%" readOnly />
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">Available Equity: $70,000</div>
              <div className="text-sm text-gray-600">Current Equity: $150,000 | Max Loan: $320,000</div>
            </div>
          </CardContent>
        </Card>

        {/* Product Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Home Equity Loan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">5.25%</div>
                <div className="text-sm text-gray-600">Fixed APR as low as</div>
                <ul className="space-y-2 text-sm">
                  <li>• Fixed interest rate</li>
                  <li>• Lump sum payment</li>
                  <li>• Predictable monthly payments</li>
                  <li>• Terms up to 20 years</li>
                  <li>• $10,000 - $500,000</li>
                </ul>
                <Button className="w-full">Apply for Home Equity Loan</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-600">
            <div className="absolute -top-3 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Flexible
            </div>
            <CardHeader>
              <CardTitle>Home Equity Line of Credit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">4.99%</div>
                <div className="text-sm text-gray-600">Variable APR as low as</div>
                <ul className="space-y-2 text-sm">
                  <li>• Variable interest rate</li>
                  <li>• Access funds as needed</li>
                  <li>• Interest-only payments available</li>
                  <li>• 10-year draw period</li>
                  <li>• $10,000 - $500,000</li>
                </ul>
                <Button className="w-full">Apply for HELOC</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <DollarSign className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Tax Benefits</h3>
                <p className="text-sm text-gray-600">Interest may be tax deductible</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <TrendingUp className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Competitive Rates</h3>
                <p className="text-sm text-gray-600">Lower rates than credit cards</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Shield className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">No Closing Costs</h3>
                <p className="text-sm text-gray-600">On qualified applications</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Home className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Your Home</h3>
                <p className="text-sm text-gray-600">Use your home's equity</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Uses for Home Equity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Home Improvements</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Kitchen remodeling</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Bathroom upgrades</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />New roof or siding</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />HVAC systems</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Debt Consolidation</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Credit card debt</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Personal loans</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Student loans</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Medical bills</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Major Expenses</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Education costs</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Wedding expenses</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Emergency fund</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Investment opportunities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Qualification Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Basic Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Own your primary residence</li>
                  <li>• Minimum 20% equity in home</li>
                  <li>• Credit score of 680 or higher</li>
                  <li>• Stable income and employment</li>
                  <li>• Debt-to-income ratio below 43%</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Documentation Needed</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Recent pay stubs</li>
                  <li>• Tax returns (2 years)</li>
                  <li>• Bank statements</li>
                  <li>• Property tax records</li>
                  <li>• Homeowners insurance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
}
