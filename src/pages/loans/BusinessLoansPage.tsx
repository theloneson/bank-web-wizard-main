
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankingPageLayout from "@/components/BankingPageLayout";
import { Building, TrendingUp, Shield, Clock, DollarSign, Users, Factory, Truck } from "lucide-react";

export default function BusinessLoansPage() {
  return (
    <BankingPageLayout
      title="Business Loans"
      subtitle="Fuel your business growth with flexible financing solutions tailored to your needs"
    >
      <div className="space-y-8">
        {/* Loan Types Tabs */}
        <Tabs defaultValue="term-loans" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="term-loans">Term Loans</TabsTrigger>
            <TabsTrigger value="lines-of-credit">Lines of Credit</TabsTrigger>
            <TabsTrigger value="equipment">Equipment Financing</TabsTrigger>
            <TabsTrigger value="sba">SBA Loans</TabsTrigger>
          </TabsList>

          <TabsContent value="term-loans" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Small Business Term Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-blue-600">6.99%</div>
                    <div className="text-sm text-gray-600">Starting APR</div>
                    <ul className="space-y-2 text-sm">
                      <li>• $10,000 - $500,000</li>
                      <li>• 1-7 year terms</li>
                      <li>• Fixed interest rates</li>
                      <li>• Quick approval process</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <div className="absolute -top-3 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Commercial Term Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-blue-600">5.99%</div>
                    <div className="text-sm text-gray-600">Starting APR</div>
                    <ul className="space-y-2 text-sm">
                      <li>• $100,000 - $5,000,000</li>
                      <li>• 3-25 year terms</li>
                      <li>• Fixed or variable rates</li>
                      <li>• Dedicated relationship manager</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Express Business Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-blue-600">8.99%</div>
                    <div className="text-sm text-gray-600">Starting APR</div>
                    <ul className="space-y-2 text-sm">
                      <li>• $5,000 - $100,000</li>
                      <li>• 6 months - 3 years</li>
                      <li>• 24-hour approval</li>
                      <li>• Minimal documentation</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lines-of-credit" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Line of Credit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-green-600">Prime + 1%</div>
                    <div className="text-sm text-gray-600">Variable rate</div>
                    <ul className="space-y-2 text-sm">
                      <li>• $25,000 - $1,000,000</li>
                      <li>• Revolving credit facility</li>
                      <li>• Pay interest only on what you use</li>
                      <li>• Annual review</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Asset-Based Line of Credit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-green-600">Prime + 2%</div>
                    <div className="text-sm text-gray-600">Variable rate</div>
                    <ul className="space-y-2 text-sm">
                      <li>• $500,000 - $10,000,000</li>
                      <li>• Secured by inventory/receivables</li>
                      <li>• Higher borrowing capacity</li>
                      <li>• Flexible repayment terms</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="equipment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Equipment Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-purple-600">4.99%</div>
                    <div className="text-sm text-gray-600">Starting APR</div>
                    <ul className="space-y-2 text-sm">
                      <li>• $10,000 - $2,000,000</li>
                      <li>• Equipment serves as collateral</li>
                      <li>• Up to 100% financing</li>
                      <li>• Terms up to 10 years</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Equipment Lease</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-purple-600">3.99%</div>
                    <div className="text-sm text-gray-600">Starting rate</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Lower monthly payments</li>
                      <li>• Preserve working capital</li>
                      <li>• Tax advantages</li>
                      <li>• Upgrade options available</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sba" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SBA 7(a) Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-orange-600">Prime + 2.75%</div>
                    <div className="text-sm text-gray-600">Variable rate</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Up to $5,000,000</li>
                      <li>• Government guarantee</li>
                      <li>• Lower down payments</li>
                      <li>• Flexible use of funds</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SBA Express Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-orange-600">Prime + 4.5%</div>
                    <div className="text-sm text-gray-600">Variable rate</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Up to $500,000</li>
                      <li>• 36-hour approval</li>
                      <li>• 50% SBA guarantee</li>
                      <li>• Streamlined process</li>
                    </ul>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Industries We Serve */}
        <Card>
          <CardHeader>
            <CardTitle>Industries We Serve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <Building className="w-12 h-12 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Construction</span>
              </div>
              <div className="text-center space-y-2">
                <Factory className="w-12 h-12 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Manufacturing</span>
              </div>
              <div className="text-center space-y-2">
                <Truck className="w-12 h-12 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Transportation</span>
              </div>
              <div className="text-center space-y-2">
                <Users className="w-12 h-12 mx-auto text-blue-600" />
                <span className="text-sm font-medium">Professional Services</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Clock className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Fast Approval</h3>
                <p className="text-sm text-gray-600">Quick decisions on loan applications</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <DollarSign className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Competitive Rates</h3>
                <p className="text-sm text-gray-600">Market-leading interest rates</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Shield className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Flexible Terms</h3>
                <p className="text-sm text-gray-600">Customized repayment schedules</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <TrendingUp className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Expert Support</h3>
                <p className="text-sm text-gray-600">Dedicated business banking specialists</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </BankingPageLayout>
  );
}
