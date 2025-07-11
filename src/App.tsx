
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/auth-context";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import OpenAccountPage from "./pages/auth/OpenAccountPage";
import DashboardPage from "./pages/DashboardPage";
import CheckingPage from "./pages/personal/CheckingPage";
import SavingsPage from "./pages/personal/SavingsPage";
import CreditCardsPage from "./pages/personal/CreditCardsPage";
import MortgagesPage from "./pages/personal/MortgagesPage";
import BusinessCheckingPage from "./pages/business/BusinessCheckingPage";
import BusinessCreditPage from "./pages/business/BusinessCreditPage";
import MerchantServicesPage from "./pages/business/MerchantServicesPage";
import TreasuryManagementPage from "./pages/business/TreasuryManagementPage";
import StocksPage from "./pages/investments/StocksPage";
import RetirementPage from "./pages/investments/RetirementPage";
import PortfolioPage from "./pages/investments/PortfolioPage";
import AdvisoryPage from "./pages/investments/AdvisoryPage";
import PersonalLoansPage from "./pages/loans/PersonalLoansPage";
import AutoLoansPage from "./pages/loans/AutoLoansPage";
import HomeEquityPage from "./pages/loans/HomeEquityPage";
import BusinessLoansPage from "./pages/loans/BusinessLoansPage";
import TransactionHistoryPage from "./pages/transactions/TransactionHistoryPage";
import SendMoneyPage from "./pages/transactions/SendMoneyPage";
import CurrencyExchangePage from "./pages/transactions/CurrencyExchangePage";
import AboutPage from "./pages/AboutPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import SupportPage from "./pages/SupportPage";
import InvestmentsOverviewPage from "./pages/investments/InvestmentsOverviewPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/open-account" element={<OpenAccountPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            
            {/* Protected Banking Routes */}
            <Route path="/personal/checking" element={<ProtectedRoute><CheckingPage /></ProtectedRoute>} />
            <Route path="/personal/savings" element={<ProtectedRoute><SavingsPage /></ProtectedRoute>} />
            <Route path="/personal/credit-cards" element={<ProtectedRoute><CreditCardsPage /></ProtectedRoute>} />
            <Route path="/personal/mortgages" element={<ProtectedRoute><MortgagesPage /></ProtectedRoute>} />
            
            <Route path="/business/checking" element={<ProtectedRoute><BusinessCheckingPage /></ProtectedRoute>} />
            <Route path="/business/credit" element={<ProtectedRoute><BusinessCreditPage /></ProtectedRoute>} />
            <Route path="/business/merchant" element={<ProtectedRoute><MerchantServicesPage /></ProtectedRoute>} />
            <Route path="/business/treasury" element={<ProtectedRoute><TreasuryManagementPage /></ProtectedRoute>} />
            
            <Route path="/investments" element={<ProtectedRoute><InvestmentsOverviewPage /></ProtectedRoute>} />
            <Route path="/investments/stocks" element={<ProtectedRoute><StocksPage /></ProtectedRoute>} />
            <Route path="/investments/retirement" element={<ProtectedRoute><RetirementPage /></ProtectedRoute>} />
            <Route path="/investments/portfolio" element={<ProtectedRoute><PortfolioPage /></ProtectedRoute>} />
            <Route path="/investments/advisory" element={<ProtectedRoute><AdvisoryPage /></ProtectedRoute>} />
            
            <Route path="/loans/personal" element={<ProtectedRoute><PersonalLoansPage /></ProtectedRoute>} />
            <Route path="/loans/auto" element={<ProtectedRoute><AutoLoansPage /></ProtectedRoute>} />
            <Route path="/loans/home-equity" element={<ProtectedRoute><HomeEquityPage /></ProtectedRoute>} />
            <Route path="/loans/business" element={<ProtectedRoute><BusinessLoansPage /></ProtectedRoute>} />
            
            {/* Money Movement Pages */}
            <Route path="/transactions" element={<ProtectedRoute><TransactionHistoryPage /></ProtectedRoute>} />
            <Route path="/send-money" element={<ProtectedRoute><SendMoneyPage /></ProtectedRoute>} />
            <Route path="/currency-exchange" element={<ProtectedRoute><CurrencyExchangePage /></ProtectedRoute>} />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="/support" element={<SupportPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
