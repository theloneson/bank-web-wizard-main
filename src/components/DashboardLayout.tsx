import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  LayoutDashboard,
  CreditCard,
  PiggyBank,
  Banknote,
  Home,
  Briefcase,
  Building,
  ShoppingCart,
  Landmark,
  TrendingUp,
  PieChart,
  Shield,
  Users,
  Target,
  Car,
  User,
  MapPin,
  ArrowUpDown,
  History,
  Send,
  Bell,
  Globe,
  Settings,
  LogOut,
  HelpCircle,
  Info
} from "lucide-react";

const menuItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard }
    ]
  },
  {
    title: "Personal",
    items: [
      { title: "Checking", url: "/personal/checking", icon: CreditCard },
      { title: "Savings", url: "/personal/savings", icon: PiggyBank },
      { title: "Credit Cards", url: "/personal/credit-cards", icon: CreditCard },
      { title: "Mortgages", url: "/personal/mortgages", icon: Home }
    ]
  },
  {
    title: "Business",
    items: [
      { title: "Business Checking", url: "/business/checking", icon: Briefcase },
      { title: "Business Credit", url: "/business/credit", icon: Building },
      { title: "Merchant Services", url: "/business/merchant", icon: ShoppingCart },
      { title: "Treasury Management", url: "/business/treasury", icon: Landmark }
    ]
  },
  {
    title: "Investments",
    items: [
      { title: "Investments", url: "/investments", icon: TrendingUp },
      { title: "Portfolio", url: "/investments/portfolio", icon: PieChart },
      { title: "Retirement", url: "/investments/retirement", icon: Shield },
      { title: "Advisory", url: "/investments/advisory", icon: Users },
      { title: "Stocks", url: "/investments/stocks", icon: Target }
    ]
  },
  {
    title: "Loans",
    items: [
      { title: "Auto Loans", url: "/loans/auto", icon: Car },
      { title: "Personal Loans", url: "/loans/personal", icon: User },
      { title: "Home Equity", url: "/loans/home-equity", icon: MapPin },
      { title: "Business Loans", url: "/loans/business", icon: Building }
    ]
  },
  {
    title: "Transactions & Transfers",
    items: [
      { title: "Transaction History", url: "/transactions", icon: History },
      { title: "Send Money", url: "/send-money", icon: Send },
      { title: "Currency Exchange", url: "/currency-exchange", icon: ArrowUpDown }
    ]
  },
  {
    title: "Other",
    items: [
      { title: "Notifications", url: "/notifications", icon: Bell },
      { title: "Settings", url: "/settings", icon: Settings },
      { title: "Support", url: "/support", icon: HelpCircle },
      { title: "About", url: "/about", icon: Info }
    ]
  }
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const AppSidebar = () => {
    const { state } = useSidebar();
    const collapsed = state === "collapsed";

    return (
      <Sidebar className={collapsed ? "w-16" : "w-64"}>
        <SidebarContent>
          {menuItems.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const isActive = location.pathname === item.url;
                    const Icon = item.icon;
                    
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link to={item.url} className="flex items-center gap-3">
                            <Icon className="h-4 w-4" />
                            {!collapsed && <span>{item.title}</span>}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    );
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <header className="h-16 border-b bg-background px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-xl font-bold text-foreground">GlobalBank</h1>
                  <p className="text-sm text-muted-foreground">Dashboard</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">3</Badge>
              </Button>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Español</DropdownMenuItem>
                  <DropdownMenuItem>Français</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="hidden md:inline">{user?.name || user?.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};