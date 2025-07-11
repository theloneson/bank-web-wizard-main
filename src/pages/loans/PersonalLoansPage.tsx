
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BankingPageLayout from "@/components/BankingPageLayout";
import { Calculator, DollarSign, Clock, CreditCard, Shield, CheckCircle } from "lucide-react";

export default function PersonalLoansPage() {
  return (
    <BankingPageLayout
      title="Personal Loans"
      subtitle="Flexible financing solutions for your personal needs with competitive rates"
    >
      <div className="space-y-8">
        {/* Loan Calculator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-6 h-6 mr-2" />
              Loan Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Loan Amount</Label>
                <Input id="amount" placeholder="$10,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="term">Loan Term</Label>
                <Input id="term" placeholder="36 months" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate">Interest Rate</Label>
                <Input id="rate" placeholder="5.99%" />
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">Monthly Payment: $304</div>
              <div className="text-sm text-gray-600">Total Interest: $934 | Total Cost: $10,934</div>
            </div>
          </CardContent>
        </Card>

        {/* Loan Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Starter Loan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">5.99%</div>
                <div className="text-sm text-gray-600">APR as low as</div>
                <ul className="space-y-2 text-sm">
                  <li>• $1,000 - $15,000</li>
                  <li>• 12-60 months</li>
                  <li>• Fixed rate</li>
                  <li>• No prepayment penalty</li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-600">
            <div className="absolute -top-3 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle>Preferred Loan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">4.99%</div>
                <div className="text-sm text-gray-600">APR as low as</div>
                <ul className="space-y-2 text-sm">
                  <li>• $5,000 - $50,000</li>
                  <li>• 24-84 months</li>
                  <li>• Fixed rate</li>
                  <li>• Rate discount for auto-pay</li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Premium Loan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">3.99%</div>
                <div className="text-sm text-gray-600">APR as low as</div>
                <ul className="space-y-2 text-sm">
                  <li>• $10,000 - $100,000</li>
                  <li>• 36-120 months</li>
                  <li>• Fixed rate</li>
                  <li>• Dedicated support</li>
                </ul>
                <Button className="w-full">Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Clock className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-xl font-semibold">Quick Approval</h3>
                <p className="text-gray-600">Get approved in minutes with our streamlined application process</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Shield className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-xl font-semibold">No Hidden Fees</h3>
                <p className="text-gray-600">Transparent pricing with no origination fees or prepayment penalties</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <DollarSign className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-xl font-semibold">Flexible Terms</h3>
                <p className="text-gray-600">Choose from various loan amounts and repayment terms to fit your budget</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle>What can you use a personal loan for?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Debt Consolidation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Home Improvements</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Medical Expenses</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Wedding Costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Vacation Funding</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Emergency Expenses</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Education Costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Major Purchases</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
}
