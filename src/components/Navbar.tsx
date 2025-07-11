import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun, Search, Bell } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const personalBankingLinks = [
    { title: "Checking Accounts", href: "/personal/checking" },
    { title: "Savings Accounts", href: "/personal/savings" },
    { title: "Credit Cards", href: "/personal/credit-cards" },
    { title: "Mortgages", href: "/personal/mortgages" },
  ];

  const businessBankingLinks = [
    { title: "Business Checking", href: "/business/checking" },
    { title: "Business Credit", href: "/business/credit" },
    { title: "Merchant Services", href: "/business/merchant" },
    { title: "Treasury Management", href: "/business/treasury" },
  ];

  const investmentLinks = [
    { title: "Stocks & ETFs", href: "/investments/stocks" },
    { title: "Retirement Planning", href: "/investments/retirement" },
    { title: "Portfolio Management", href: "/investments/portfolio" },
    { title: "Investment Advisory", href: "/investments/advisory" },
  ];

  const loanLinks = [
    { title: "Personal Loans", href: "/loans/personal" },
    { title: "Auto Loans", href: "/loans/auto" },
    { title: "Home Equity", href: "/loans/home-equity" },
    { title: "Business Loans", href: "/loans/business" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2" 
        : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">NexusBank</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group px-3 py-2">
              <button className="flex items-center text-gray-700 dark:text-gray-200 group-hover:text-blue-600 font-medium transition-colors">
                Personal Banking <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-1 bg-white dark:bg-gray-800 p-3">
                    {personalBankingLinks.map((link) => (
                      <Link 
                        key={link.href}
                        to={link.href} 
                        className="flex items-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="ml-3 text-gray-700 dark:text-gray-200">{link.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group px-3 py-2">
              <button className="flex items-center text-gray-700 dark:text-gray-200 group-hover:text-blue-600 font-medium transition-colors">
                Business Banking <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-1 bg-white dark:bg-gray-800 p-3">
                    {businessBankingLinks.map((link) => (
                      <Link 
                        key={link.href}
                        to={link.href} 
                        className="flex items-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="ml-3 text-gray-700 dark:text-gray-200">{link.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group px-3 py-2">
              <button className="flex items-center text-gray-700 dark:text-gray-200 group-hover:text-blue-600 font-medium transition-colors">
                Investments <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-1 bg-white dark:bg-gray-800 p-3">
                    {investmentLinks.map((link) => (
                      <Link 
                        key={link.href}
                        to={link.href} 
                        className="flex items-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="ml-3 text-gray-700 dark:text-gray-200">{link.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group px-3 py-2">
              <button className="flex items-center text-gray-700 dark:text-gray-200 group-hover:text-blue-600 font-medium transition-colors">
                Loans <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-1 bg-white dark:bg-gray-800 p-3">
                    {loanLinks.map((link) => (
                      <Link 
                        key={link.href}
                        to={link.href} 
                        className="flex items-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="ml-3 text-gray-700 dark:text-gray-200">{link.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              About Us
            </Link>
            
            <button className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Link to="/login">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white ml-2">
                Log In
              </Button>
            </Link>
            
            <Link to="/open-account">
              <Button className="button-gradient text-gray-800 font-medium">
                Open Account
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl overflow-hidden transition-all duration-300 max-h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <button className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Banking
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4">
                <Link 
                  to="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Personal Banking
                </Link>
                <Link 
                  to="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Business Banking
                </Link>
              </div>
            </div>
            
            <div className="space-y-1">
              <button className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Investments
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4">
                <Link 
                  to="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Stocks & ETFs
                </Link>
                <Link 
                  to="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Retirement
                </Link>
              </div>
            </div>
            
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Loans
            </Link>
            
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              About Us
            </Link>
            
            <div className="pt-4 flex space-x-3 px-3">
              <Button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white">
                Log In
              </Button>
              
              <Button className="flex-1 button-gradient text-gray-800 font-medium">
                Open Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
