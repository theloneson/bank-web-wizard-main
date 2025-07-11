
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BankingPageLayout from "@/components/BankingPageLayout";
import { Award, Users, Globe, Shield, Heart, TrendingUp, Building, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <BankingPageLayout
      title="About NexusBank"
      subtitle="Your trusted financial partner since 1995, committed to empowering your financial future"
    >
      <div className="space-y-12">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional banking services that empower individuals and businesses to achieve their financial goals. 
                We believe in building lasting relationships through trust, innovation, and personalized service that puts our 
                customers first in everything we do.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative financial institution, leading the way in digital banking while 
                maintaining the personal touch that has defined us for decades. We envision a future where banking is 
                seamless, secure, and accessible to everyone.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">29</div>
              <div className="text-sm text-gray-600">Years of Service</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Branch Locations</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$15B+</div>
              <div className="text-sm text-gray-600">Assets Under Management</div>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-6 h-6 mr-2" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Founded in 1995 by a group of financial visionaries, NexusBank began as a small community bank with a 
                simple mission: to provide honest, reliable banking services to hardworking families and growing businesses. 
                What started with a single branch in downtown has grown into a comprehensive financial institution serving 
                communities across the nation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Throughout our journey, we've remained true to our founding principles while embracing innovation and 
                technology to better serve our customers. From introducing online banking in the early 2000s to launching 
                our award-winning mobile app, we've consistently stayed ahead of the curve while never losing sight of the 
                personal relationships that are at the heart of everything we do.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card>
          <CardHeader>
            <CardTitle>Our Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <Shield className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="font-semibold">Integrity</h3>
                <p className="text-sm text-gray-600">
                  We conduct our business with the highest ethical standards and transparency
                </p>
              </div>
              <div className="text-center space-y-4">
                <Users className="w-12 h-12 mx-auto text-green-600" />
                <h3 className="font-semibold">Customer Focus</h3>
                <p className="text-sm text-gray-600">
                  Our customers are at the center of every decision we make
                </p>
              </div>
              <div className="text-center space-y-4">
                <Award className="w-12 h-12 mx-auto text-purple-600" />
                <h3 className="font-semibold">Excellence</h3>
                <p className="text-sm text-gray-600">
                  We strive for excellence in everything we do, from service to innovation
                </p>
              </div>
              <div className="text-center space-y-4">
                <Globe className="w-12 h-12 mx-auto text-orange-600" />
                <h3 className="font-semibold">Community</h3>
                <p className="text-sm text-gray-600">
                  We're committed to strengthening the communities we serve
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership Team */}
        <Card>
          <CardHeader>
            <CardTitle>Leadership Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto"></div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Chief Executive Officer</p>
                  <p className="text-xs text-gray-500 mt-2">
                    25+ years in banking, former VP at Wells Fargo
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto"></div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-gray-600">Chief Technology Officer</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Former Google engineer, fintech innovation expert
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto"></div>
                <div>
                  <h3 className="font-semibold">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-600">Chief Financial Officer</p>
                  <p className="text-xs text-gray-500 mt-2">
                    CPA with 20+ years in financial services
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Awards & Recognition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Awards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Recent Awards</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Best Digital Banking Experience 2024 - FinTech Awards</li>
                  <li>• Top Community Bank 2024 - Banking Excellence</li>
                  <li>• Customer Service Excellence 2023 - J.D. Power</li>
                  <li>• Innovation in Mobile Banking 2023 - TechCrunch</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Certifications</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• FDIC Insured Institution</li>
                  <li>• Equal Housing Lender</li>
                  <li>• SOC 2 Type II Certified</li>
                  <li>• ISO 27001 Information Security</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="w-6 h-6 mr-2" />
              Community Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                At NexusBank, we believe in giving back to the communities that have supported us throughout our journey. 
                Through our Community Impact Program, we've donated over $5 million to local charities, funded scholarships 
                for students, and supported small businesses through microloans and mentorship programs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$5M+</div>
                  <div className="text-sm text-gray-600">Donated to Charity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Scholarships Awarded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">1,200+</div>
                  <div className="text-sm text-gray-600">Small Businesses Supported</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-6 text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to Bank with Us?</h3>
            <p className="text-blue-100">
              Join the NexusBank family and experience banking that puts you first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Open an Account
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Visit a Branch
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </BankingPageLayout>
  );
}
