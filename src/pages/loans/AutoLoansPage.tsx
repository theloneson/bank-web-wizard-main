
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BankingPageLayout from "@/components/BankingPageLayout";
import { Car, Calculator, Shield, Clock, DollarSign, Star } from "lucide-react";

export default function AutoLoansPage() {
  return (
    <BankingPageLayout
      title="Auto Loans"
      subtitle="Drive away with competitive rates and flexible terms for new and used vehicles"
    >
      <div className="space-y-8">
        {/* Auto Loan Calculator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-6 h-6 mr-2" />
              Auto Loan Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="vehicle-price">Vehicle Price</Label>
                <Input id="vehicle-price" placeholder="$25,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="down-payment">Down Payment</Label>
                <Input id="down-payment" placeholder="$5,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loan-term">Loan Term</Label>
                <Input id="loan-term" placeholder="60 months" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest-rate">Interest Rate</Label>
                <Input id="interest-rate" placeholder="3.99%" />
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">Monthly Payment: $367</div>
              <div className="text-sm text-gray-600">Total Interest: $2,020 | Total Cost: $22,020</div>
            </div>
          </CardContent>
        </Card>

        {/* Auto Loan Rates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>New Vehicle Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>36 months</span>
                  <span className="font-semibold text-green-600">2.99% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>48 months</span>
                  <span className="font-semibold text-green-600">3.49% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>60 months</span>
                  <span className="font-semibold text-green-600">3.99% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>72 months</span>
                  <span className="font-semibold text-green-600">4.49% APR</span>
                </div>
                <Button className="w-full mt-4">Apply for New Car Loan</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Used Vehicle Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>36 months</span>
                  <span className="font-semibold text-blue-600">3.49% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>48 months</span>
                  <span className="font-semibold text-blue-600">3.99% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>60 months</span>
                  <span className="font-semibold text-blue-600">4.49% APR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>72 months</span>
                  <span className="font-semibold text-blue-600">4.99% APR</span>
                </div>
                <Button className="w-full mt-4">Apply for Used Car Loan</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Clock className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Fast Approval</h3>
                <p className="text-sm text-gray-600">Get pre-approved in minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <DollarSign className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">No Fees</h3>
                <p className="text-sm text-gray-600">No application or prepayment fees</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Shield className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">GAP Insurance</h3>
                <p className="text-sm text-gray-600">Optional protection available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Star className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Flexible Terms</h3>
                <p className="text-sm text-gray-600">Terms up to 84 months</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vehicle Types */}
        <Card>
          <CardHeader>
            <CardTitle>We Finance All Types of Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Cars</span>
              </div>
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Trucks</span>
              </div>
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">SUVs</span>
              </div>
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Motorcycles</span>
              </div>
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">RVs</span>
              </div>
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Boats</span>
              </div>
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">ATVs</span>
              </div>
              <div className="text-center space-y-2">
                <Car className="w-8 h-8 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Classic Cars</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <Card>
          <CardHeader>
            <CardTitle>Simple Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
                <h3 className="font-semibold">Apply Online</h3>
                <p className="text-sm text-gray-600">Complete our simple online application in minutes</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
                <h3 className="font-semibold">Get Pre-Approved</h3>
                <p className="text-sm text-gray-600">Receive your pre-approval decision quickly</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
                <h3 className="font-semibold">Shop & Drive</h3>
                <p className="text-sm text-gray-600">Find your vehicle and finalize your loan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
}
