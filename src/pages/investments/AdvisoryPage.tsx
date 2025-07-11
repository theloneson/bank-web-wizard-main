
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BankingPageLayout from "@/components/BankingPageLayout";
import { Users, Award, TrendingUp, MessageCircle, Calendar, Star, PhoneCall, Mail } from "lucide-react";

const advisors = [
  {
    name: "Sarah Johnson, CFA",
    title: "Senior Investment Advisor",
    experience: "15+ years",
    specialties: ["Retirement Planning", "Tax Strategy", "Estate Planning"],
    rating: 4.9,
    clients: 150,
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen, CFP",
    title: "Wealth Management Advisor",
    experience: "12+ years",
    specialties: ["Portfolio Management", "Risk Assessment", "Alternative Investments"],
    rating: 4.8,
    clients: 120,
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez, CPA",
    title: "Tax-Focused Advisor",
    experience: "10+ years",
    specialties: ["Tax Optimization", "Business Planning", "Charitable Giving"],
    rating: 4.9,
    clients: 90,
    image: "/placeholder.svg"
  },
];

const services = [
  {
    title: "Comprehensive Financial Planning",
    description: "Holistic approach to your financial future including retirement, education, and estate planning.",
    features: ["Goal Setting", "Cash Flow Analysis", "Risk Assessment", "Regular Reviews"],
    price: "Starting at $2,500"
  },
  {
    title: "Investment Portfolio Review",
    description: "Professional analysis of your current investments with optimization recommendations.",
    features: ["Portfolio Analysis", "Asset Allocation Review", "Fee Assessment", "Rebalancing Strategy"],
    price: "Starting at $500"
  },
  {
    title: "Retirement Income Planning",
    description: "Strategic planning for sustainable income throughout your retirement years.",
    features: ["Income Projections", "Withdrawal Strategies", "Social Security Optimization", "Healthcare Planning"],
    price: "Starting at $1,500"
  },
];

const insights = [
  {
    title: "Q4 2024 Market Outlook",
    author: "Sarah Johnson, CFA",
    date: "December 1, 2024",
    preview: "Key market trends and opportunities for the fourth quarter, including sector rotation strategies...",
    category: "Market Analysis"
  },
  {
    title: "Tax-Loss Harvesting Strategies",
    author: "Emily Rodriguez, CPA",
    date: "November 28, 2024",
    preview: "Maximize your tax efficiency with strategic harvesting techniques before year-end...",
    category: "Tax Strategy"
  },
  {
    title: "Alternative Investment Opportunities",
    author: "Michael Chen, CFP",
    date: "November 25, 2024",
    preview: "Exploring REITs, commodities, and private equity for portfolio diversification...",
    category: "Investment Strategy"
  },
];

export default function AdvisoryPage() {
  return (
    <BankingPageLayout
      title="Investment Advisory"
      subtitle="Get personalized investment guidance from our team of certified financial professionals"
    >
      {/* Hero Stats Section */}
      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">12.5%</div>
            <p className="text-muted-foreground">Average Annual Returns</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <p className="text-muted-foreground">Certified Advisors</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Certified Advisors</p>
                  <p className="text-3xl font-bold text-primary">25+</p>
                  <p className="text-sm text-primary/80">CFA, CFP, CPA</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Assets Under Management</p>
                  <p className="text-3xl font-bold text-primary">$2.5B</p>
                  <p className="text-sm text-primary/80">Growing +15% YoY</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Client Satisfaction</p>
                  <p className="text-3xl font-bold text-primary">4.9/5</p>
                  <p className="text-sm text-primary/80">Based on 500+ reviews</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advisory Services */}
        <Card>
          <CardHeader>
            <CardTitle>Our Advisory Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t">
                        <p className="font-semibold text-blue-600">{service.price}</p>
                        <Button className="w-full mt-2">Learn More</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meet Our Advisors */}
        <Card>
          <CardHeader>
            <CardTitle>Meet Our Advisory Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((advisor, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                        <Users className="w-12 h-12 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{advisor.name}</h3>
                        <p className="text-sm text-gray-600">{advisor.title}</p>
                        <p className="text-sm text-blue-600">{advisor.experience} experience</p>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{advisor.rating}</span>
                        <span className="text-sm text-gray-500">({advisor.clients} clients)</span>
                      </div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {advisor.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Latest Investment Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{insight.title}</h3>
                        <Badge variant="outline">{insight.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{insight.preview}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>By {insight.author}</span>
                        <span>{insight.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Get Started Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Ready to take control of your financial future? Our advisors are here to help you create a personalized investment strategy.
                </p>
                <div className="space-y-3">
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Call (555) 123-4567
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Advisory Team
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose Our Advisory Services?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Fiduciary Standard</h4>
                    <p className="text-sm text-gray-600">We always act in your best interests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Transparent Fees</h4>
                    <p className="text-sm text-gray-600">No hidden costs or surprise charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Ongoing Support</h4>
                    <p className="text-sm text-gray-600">Regular check-ins and strategy adjustments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Technology-Driven</h4>
                    <p className="text-sm text-gray-600">Advanced tools and real-time reporting</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </BankingPageLayout>
  );
}
