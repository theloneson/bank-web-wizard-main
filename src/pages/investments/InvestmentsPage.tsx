
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, DollarSign, BriefcaseIcon, LineChart } from "lucide-react";
import Footer from "@/components/Footer";

const InvestmentsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bank-lightBlue to-white dark:from-gray-900 dark:to-gray-800">
      <div className="bg-bank-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Investment Solutions</h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-gray-200">
            Grow your wealth with our comprehensive investment products and services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur transition-transform hover:scale-105">
            <CardContent className="pt-6">
              <BarChart3 className="h-12 w-12 text-bank-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Portfolio Management</h3>
              <p className="text-gray-600">Professional management of your investment portfolio.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur transition-transform hover:scale-105">
            <CardContent className="pt-6">
              <PieChart className="h-12 w-12 text-bank-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diversification</h3>
              <p className="text-gray-600">Spread your investments across multiple asset classes.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur transition-transform hover:scale-105">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-bank-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-600">Expert insights and market research at your fingertips.</p>
            </CardContent>
          </Card>
        </div>

        {/* Investment Products */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-bank-blue" />
                Mutual Funds
              </CardTitle>
              <CardDescription>Start investing with experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-3xl font-bold text-bank-blue mb-2">$1,000</div>
                <p className="text-sm text-gray-600">Minimum investment</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-green-500" />
                  <span>Professional management</span>
                </li>
                <li className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5 text-green-500" />
                  <span>Diversified portfolio</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Regular rebalancing</span>
                </li>
              </ul>
              <Button className="w-full bg-bank-blue hover:bg-bank-navy">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-bank-blue transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-3 right-4 bg-bank-blue text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BriefcaseIcon className="h-6 w-6 text-bank-blue" />
                Managed Portfolios
              </CardTitle>
              <CardDescription>Tailored investment strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-3xl font-bold text-bank-blue mb-2">$25,000</div>
                <p className="text-sm text-gray-600">Minimum investment</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-green-500" />
                  <span>Dedicated advisor</span>
                </li>
                <li className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5 text-green-500" />
                  <span>Custom strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Tax optimization</span>
                </li>
              </ul>
              <Button className="w-full bg-bank-blue hover:bg-bank-navy">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-bank-blue" />
                Private Wealth
              </CardTitle>
              <CardDescription>Exclusive wealth management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-3xl font-bold text-bank-blue mb-2">$500,000</div>
                <p className="text-sm text-gray-600">Minimum investment</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-green-500" />
                  <span>Family office services</span>
                </li>
                <li className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5 text-green-500" />
                  <span>Estate planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Concierge service</span>
                </li>
              </ul>
              <Button className="w-full bg-bank-blue hover:bg-bank-navy">Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InvestmentsPage;
