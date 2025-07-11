import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, 
  Mail, 
  Smartphone, 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle2,
  AlertTriangle,
  Info
} from "lucide-react";

const NotificationsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const notifications = [
    {
      id: 1,
      type: "transaction",
      title: "Payment Received",
      message: "You received $2,500 from John Smith",
      time: "2 minutes ago",
      unread: true,
      priority: "low",
      icon: CheckCircle2,
      color: "text-green-600"
    },
    {
      id: 2,
      type: "security",
      title: "Security Alert",
      message: "New device login detected from New York",
      time: "1 hour ago",
      unread: true,
      priority: "high",
      icon: Shield,
      color: "text-red-600"
    },
    {
      id: 3,
      type: "investment",
      title: "Portfolio Update",
      message: "Your portfolio increased by 3.2% this week",
      time: "3 hours ago",
      unread: false,
      priority: "medium",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      id: 4,
      type: "billing",
      title: "Statement Ready",
      message: "Your credit card statement is now available",
      time: "1 day ago",
      unread: false,
      priority: "low",
      icon: CreditCard,
      color: "text-purple-600"
    },
    {
      id: 5,
      type: "info",
      title: "Maintenance Notice",
      message: "Scheduled maintenance on Sunday 2:00 AM - 4:00 AM",
      time: "2 days ago",
      unread: false,
      priority: "medium",
      icon: Info,
      color: "text-orange-600"
    }
  ];

  const notificationSettings = [
    {
      category: "Account Activity",
      description: "Transactions, transfers, and balance updates",
      settings: [
        { name: "Transaction alerts", enabled: true },
        { name: "Large transaction alerts", enabled: true },
        { name: "Low balance warnings", enabled: true },
        { name: "Direct deposit notifications", enabled: true }
      ]
    },
    {
      category: "Security",
      description: "Login attempts, password changes, and security alerts",
      settings: [
        { name: "Login notifications", enabled: true },
        { name: "Password change alerts", enabled: true },
        { name: "Suspicious activity alerts", enabled: true },
        { name: "New device notifications", enabled: true }
      ]
    },
    {
      category: "Investment Updates",
      description: "Portfolio performance and market alerts",
      settings: [
        { name: "Portfolio performance", enabled: true },
        { name: "Stock price alerts", enabled: false },
        { name: "Market news", enabled: true },
        { name: "Dividend notifications", enabled: true }
      ]
    },
    {
      category: "Banking Services",
      description: "Statements, offers, and service updates",
      settings: [
        { name: "Monthly statements", enabled: true },
        { name: "Promotional offers", enabled: false },
        { name: "Service updates", enabled: true },
        { name: "Maintenance notices", enabled: true }
      ]
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive" className="text-xs">High</Badge>;
      case "medium":
        return <Badge variant="secondary" className="text-xs">Medium</Badge>;
      case "low":
        return <Badge variant="outline" className="text-xs">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Notifications</h1>
          <p className="text-muted-foreground">Manage your notification preferences and view recent alerts</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Notification Settings */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Delivery Methods */}
                <div className="space-y-4">
                  <h3 className="font-medium">Delivery Methods</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Email</span>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">SMS</span>
                    </div>
                    <Switch
                      checked={smsNotifications}
                      onCheckedChange={setSmsNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Push</span>
                    </div>
                    <Switch
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                    />
                  </div>
                </div>

                <Separator />

                {/* Category Settings */}
                <div className="space-y-4">
                  <h3 className="font-medium">Categories</h3>
                  {notificationSettings.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium">{category.category}</h4>
                        <p className="text-xs text-muted-foreground">{category.description}</p>
                      </div>
                      <div className="space-y-2 ml-4">
                        {category.settings.map((setting, settingIndex) => (
                          <div key={settingIndex} className="flex items-center justify-between">
                            <span className="text-xs">{setting.name}</span>
                            <Switch defaultChecked={setting.enabled} />
                          </div>
                        ))}
                      </div>
                      {index < notificationSettings.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Notifications */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Notifications</CardTitle>
                <Button variant="outline" size="sm">Mark All Read</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border transition-colors ${
                          notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-full bg-white ${notification.color}`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-sm font-medium truncate">{notification.title}</h4>
                              {getPriorityBadge(notification.priority)}
                              {notification.unread && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {notification.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;