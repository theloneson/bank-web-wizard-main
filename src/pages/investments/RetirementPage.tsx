
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import BankingPageLayout from "@/components/BankingPageLayout";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Calculator, Target, TrendingUp, DollarSign, Calendar, Shield } from "lucide-react";

const allocationData = [
  { name: "Stocks", value: 60, color: "#2563eb" },
  { name: "Bonds", value: 30, color: "#16a34a" },
  { name: "Real Estate", value: 7, color: "#ca8a04" },
  { name: "Cash", value: 3, color: "#6b7280" },
];

const projectionData = [
  { age: 30, balance: 25000 },
  { age: 35, balance: 75000 },
  { age: 40, balance: 150000 },
  { age: 45, balance: 275000 },
  { age: 50, balance: 450000 },
  { age: 55, balance: 700000 },
  { age: 60, balance: 1050000 },
  { age: 65, balance: 1500000 },
];

const chartConfig = {
  balance: { label: "Retirement Balance", color: "#2563eb" },
};

export default function RetirementPage() {
  return (
    <BankingPageLayout
      title="Retirement Planning"
      subtitle="Build a secure financial future with our comprehensive retirement solutions"
    >
      <div className="space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Balance</p>
                  <p className="text-2xl font-bold">$234,567</p>
                  <p className="text-sm text-green-600">+8.2% this year</p>
                </div>
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Retirement Goal</p>
                  <p className="text-2xl font-bold">$1.5M</p>
                  <p className="text-sm text-blue-600">By age 65</p>
                </div>
                <Target className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Years to Retirement</p>
                  <p className="text-2xl font-bold">22</p>
                  <p className="text-sm text-gray-600">Until age 65</p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Contribution</p>
                  <p className="text-2xl font-bold">$1,200</p>
                  <p className="text-sm text-green-600">On track</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress to Goal */}
        <Card>
          <CardHeader>
            <CardTitle>Progress to Retirement Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$234,567 of $1,500,000</span>
                <span className="text-sm text-gray-500">15.6% Complete</span>
              </div>
              <Progress value={15.6} className="h-3" />
              <p className="text-sm text-gray-600">
                You're on track to reach your retirement goal! Continue your current contributions to stay on schedule.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Retirement Projection</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="balance" fill="#2563eb" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {allocationData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Retirement Accounts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                401(k) Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Current Balance</span>
                  <span className="font-semibold">$156,780</span>
                </div>
                <div className="flex justify-between">
                  <span>Employer Match</span>
                  <span className="text-green-600">6%</span>
                </div>
                <div className="flex justify-between">
                  <span>Contribution Limit</span>
                  <span>$23,000</span>
                </div>
                <Button className="w-full mt-4">Manage 401(k)</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Traditional IRA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Current Balance</span>
                  <span className="font-semibold">$45,230</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Deductible</span>
                  <span className="text-green-600">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span>Contribution Limit</span>
                  <span>$7,000</span>
                </div>
                <Button className="w-full mt-4">Manage IRA</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Roth IRA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Current Balance</span>
                  <span className="font-semibold">$32,557</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax-Free Growth</span>
                  <span className="text-green-600">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span>Contribution Limit</span>
                  <span>$7,000</span>
                </div>
                <Button className="w-full mt-4">Manage Roth IRA</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Optimize Your Savings</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Increase 401(k) contribution to maximize employer match</li>
                  <li>• Consider catch-up contributions if you're over 50</li>
                  <li>• Review and rebalance your portfolio quarterly</li>
                  <li>• Explore tax-loss harvesting opportunities</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Plan for Healthcare</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Open a Health Savings Account (HSA)</li>
                  <li>• Research long-term care insurance options</li>
                  <li>• Budget for Medicare supplement insurance</li>
                  <li>• Consider healthcare cost inflation in planning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
}
