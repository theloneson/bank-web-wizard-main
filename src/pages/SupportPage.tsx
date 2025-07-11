import { useState } from "react";
import BankingPageLayout from "@/components/BankingPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Search,
  FileText,
  Shield,
  CreditCard,
  HelpCircle,
  Send,
  ExternalLink,
  CheckCircle2
} from "lucide-react";

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSubmitTicket = () => {
    toast({
      title: "Support Ticket Submitted",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our support team",
      availability: "24/7 Available",
      action: "Call (555) 123-BANK",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help online",
      availability: "Mon-Fri 8AM-8PM",
      action: "Start Chat",
      primary: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24hrs",
      action: "Send Email",
      primary: false
    }
  ];

  const faqCategories = [
    {
      title: "Account Management",
      icon: Shield,
      questions: [
        "How do I reset my password?",
        "How to update my personal information?",
        "How to close my account?",
        "Setting up two-factor authentication"
      ]
    },
    {
      title: "Transactions & Transfers",
      icon: CreditCard,
      questions: [
        "How to send money internationally?",
        "Transaction limits and fees",
        "How to dispute a transaction?",
        "Setting up automatic transfers"
      ]
    },
    {
      title: "Digital Banking",
      icon: FileText,
      questions: [
        "How to use mobile banking?",
        "Download statements and tax documents",
        "Setting up account alerts",
        "Using the mobile check deposit"
      ]
    }
  ];

  const recentTickets = [
    {
      id: "TK-2024-001",
      subject: "Credit card payment not processing",
      status: "In Progress",
      priority: "High",
      created: "2 hours ago",
      lastUpdate: "1 hour ago"
    },
    {
      id: "TK-2024-002",
      subject: "Question about investment portfolio",
      status: "Resolved",
      priority: "Medium",
      created: "1 day ago",
      lastUpdate: "8 hours ago"
    },
    {
      id: "TK-2024-003",
      subject: "Update contact information",
      status: "Closed",
      priority: "Low",
      created: "3 days ago",
      lastUpdate: "2 days ago"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Badge variant="secondary">In Progress</Badge>;
      case "Resolved":
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case "Closed":
        return <Badge variant="outline">Closed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge variant="destructive">High</Badge>;
      case "Medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "Low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  return (
    <BankingPageLayout
      title="Customer Support"
      subtitle="We're here to help you with all your banking needs, 24/7"
    >
      {/* Contact Methods */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className={`transition-all hover:shadow-lg ${method.primary ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="pt-6 text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    method.primary ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">{method.availability}</span>
                  </div>
                  <Button className={method.primary ? "w-full" : "w-full"} variant={method.primary ? "default" : "outline"}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search FAQ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-6">
                  {faqCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <div key={index}>
                        <div className="flex items-center gap-2 mb-3">
                          <IconComponent className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">{category.title}</h3>
                        </div>
                        <div className="space-y-2 ml-7">
                          {category.questions.map((question, qIndex) => (
                            <button
                              key={qIndex}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left block"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                        {index < faqCategories.length - 1 && <Separator className="mt-4" />}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View All FAQs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Support Tickets */}
            <Card>
              <CardHeader>
                <CardTitle>Your Recent Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTickets.map((ticket, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-sm">{ticket.subject}</h4>
                          <p className="text-xs text-muted-foreground">#{ticket.id}</p>
                        </div>
                        <div className="flex gap-2">
                          {getStatusBadge(ticket.status)}
                          {getPriorityBadge(ticket.priority)}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Created: {ticket.created}</span>
                        <span>Updated: {ticket.lastUpdate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submit Support Ticket */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Submit a Support Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="account">Account Management</SelectItem>
                      <SelectItem value="transactions">Transactions & Transfers</SelectItem>
                      <SelectItem value="cards">Cards & Payments</SelectItem>
                      <SelectItem value="investments">Investments</SelectItem>
                      <SelectItem value="loans">Loans & Credit</SelectItem>
                      <SelectItem value="technical">Technical Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide detailed information about your issue..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button onClick={handleSubmitTicket} className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Ticket
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Additional Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Visit a Branch</p>
                    <p className="text-sm text-muted-foreground">Find locations near you</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Branch Locator <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Help Center</p>
                    <p className="text-sm text-muted-foreground">Browse our knowledge base</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      View Articles <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Service Status</p>
                    <p className="text-sm text-muted-foreground">Check system availability</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Status Page <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </BankingPageLayout>
  );
};

export default SupportPage;