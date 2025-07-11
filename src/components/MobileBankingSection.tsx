
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Smartphone, 
  CreditCard, 
  BarChart, 
  RefreshCw, 
  Bell, 
  LockKeyhole,
  Zap,
  ChevronRight,
  ChevronLeft,
  ArrowDownToLine
} from "lucide-react";

const appFeatures = [
  {
    title: 'Instant Transactions',
    description: 'Send and receive money in seconds with zero fees to any bank worldwide.',
    icon: Zap,
    color: 'bg-yellow-500',
  },
  {
    title: 'Real-time Card Controls',
    description: 'Lock, unlock, and set limits for your cards with a single tap.',
    icon: CreditCard,
    color: 'bg-purple-500',
  },
  {
    title: 'Personalized Insights',
    description: 'AI-powered analysis of your spending habits with actionable recommendations.',
    icon: BarChart,
    color: 'bg-green-500',
  },
  {
    title: 'Automated Savings',
    description: 'Set rules that automatically allocate funds to your savings goals.',
    icon: RefreshCw,
    color: 'bg-blue-500',
  },
  {
    title: 'Smart Notifications',
    description: 'Customizable alerts for transactions, bill payments, and account activity.',
    icon: Bell,
    color: 'bg-red-500',
  },
  {
    title: 'Biometric Security',
    description: 'Multi-factor authentication with fingerprint and facial recognition.',
    icon: LockKeyhole,
    color: 'bg-indigo-500',
  },
];

const mobileScreens = [
  {
    title: 'Dashboard',
    bg: 'bg-gradient-to-b from-blue-900 to-blue-800',
    content: (
      <div className="p-5 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="text-xs text-blue-300">Good afternoon,</div>
            <div className="text-white font-bold">Alex Morgan</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center">
            <span className="text-white font-bold">AM</span>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="flex justify-between mb-2">
            <div className="text-xs text-blue-200">Total Balance</div>
            <div className="text-xs text-white bg-green-500/20 px-2 py-0.5 rounded-full">+2.4%</div>
          </div>
          <div className="text-xl text-white font-bold mb-1">$24,562.00</div>
          <div className="flex space-x-2">
            <div className="text-xs text-blue-300">**** 4582</div>
            <div className="text-xs text-white bg-blue-600/30 px-2 py-0.5 rounded-full">Platinum</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                <ArrowDownToLine className="h-4 w-4 text-white" />
              </div>
              <div className="text-xs text-green-400">+$2,500</div>
            </div>
            <div className="text-xs text-blue-200">Income</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                <ArrowDownToLine className="h-4 w-4 text-white transform rotate-180" />
              </div>
              <div className="text-xs text-red-400">-$1,240</div>
            </div>
            <div className="text-xs text-blue-200">Expenses</div>
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="text-sm text-white font-medium mb-3">Recent Transactions</div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white">Amazon</div>
                    <div className="text-xs text-blue-300">Shopping</div>
                  </div>
                </div>
                <div className="text-xs text-white">-$84.50</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Analytics',
    bg: 'bg-gradient-to-b from-purple-900 to-purple-800',
    content: (
      <div className="p-5 h-full flex flex-col">
        <div className="text-lg text-white font-bold mb-4">Spending Analytics</div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-5">
          <div className="mb-3">
            <div className="text-xs text-purple-200 mb-1">Monthly Overview</div>
            <div className="text-white text-sm">You've spent 35% less than last month</div>
          </div>
          
          <div className="h-32 flex items-end justify-between space-x-1">
            {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-purple-600/60 rounded-t-sm" 
                  style={{ height: `${height}%` }}
                ></div>
                <div className="text-purple-300 text-xs mt-1">{String.fromCharCode(65 + i)}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-sm text-white font-medium mb-3">Top Categories</div>
        
        <div className="space-y-3 flex-grow">
          {[
            { name: 'Shopping', amount: '$420.80', percent: '32%', color: 'bg-blue-500' },
            { name: 'Food & Drinks', amount: '$284.50', percent: '22%', color: 'bg-green-500' },
            { name: 'Transportation', amount: '$150.20', percent: '15%', color: 'bg-yellow-500' },
          ].map((category, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full ${category.color} flex items-center justify-center mr-3`}>
                    <span className="text-white text-xs">{i + 1}</span>
                  </div>
                  <div className="text-sm text-white">{category.name}</div>
                </div>
                <div className="text-xs text-white">{category.amount}</div>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${category.color}`}
                  style={{ width: category.percent }}
                ></div>
              </div>
              <div className="text-right text-xs text-purple-300 mt-1">{category.percent}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Investments',
    bg: 'bg-gradient-to-b from-green-900 to-green-800',
    content: (
      <div className="p-5 h-full flex flex-col">
        <div className="text-lg text-white font-bold mb-4">Portfolio</div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-5">
          <div className="flex justify-between mb-2">
            <div className="text-xs text-green-200">Total Value</div>
            <div className="text-xs text-white bg-green-500/20 px-2 py-0.5 rounded-full">+12.4%</div>
          </div>
          <div className="text-xl text-white font-bold mb-3">$86,340.50</div>
          
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-blue-500 rounded-full mr-1"></div>
              <div className="text-xs text-green-200">Stocks</div>
            </div>
            <div className="text-xs text-white">60%</div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-yellow-500 rounded-full mr-1"></div>
              <div className="text-xs text-green-200">Crypto</div>
            </div>
            <div className="text-xs text-white">25%</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-purple-500 rounded-full mr-1"></div>
              <div className="text-xs text-green-200">ETFs</div>
            </div>
            <div className="text-xs text-white">15%</div>
          </div>
        </div>
        
        <div className="text-sm text-white font-medium mb-3">Top Performers</div>
        
        <div className="space-y-3 flex-grow">
          {[
            { name: 'AAPL', fullName: 'Apple Inc.', price: '$182.63', change: '+2.41%', color: 'text-green-400' },
            { name: 'NVDA', fullName: 'NVIDIA Corp.', price: '$853.98', change: '+3.65%', color: 'text-green-400' },
            { name: 'MSFT', fullName: 'Microsoft', price: '$410.34', change: '+1.82%', color: 'text-green-400' },
          ].map((stock, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">{stock.name.substring(0, 1)}</span>
                </div>
                <div>
                  <div className="text-xs text-white font-medium">{stock.name}</div>
                  <div className="text-xs text-green-300">{stock.fullName}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white">{stock.price}</div>
                <div className={`text-xs ${stock.color}`}>{stock.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const MobileBankingSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % mobileScreens.length);
  };
  
  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + mobileScreens.length) % mobileScreens.length);
  };

  return (
    <div 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute -left-64 -top-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase animate-fade-in">Mobile Experience</h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Banking in Your <span className="text-blue-600 dark:text-blue-400">Pocket</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experience the full power of NexusBank on your mobile device with our award-winning app.
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0 order-2 lg:order-1">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Advanced Features at Your Fingertips
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our mobile app combines powerful functionality with intuitive design, giving you complete control over your finances wherever you go.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                {appFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-2 rounded-full ${feature.color} w-10 h-10 flex items-center justify-center mb-3`}>
                      <feature.icon className="text-white h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white text-base py-6 flex-1 flex items-center justify-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 text-base py-6 flex-1">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative mx-auto h-[600px] w-[300px] bg-gray-900 rounded-[40px] shadow-xl overflow-hidden ring-1 ring-gray-900/5">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 flex justify-center z-20">
                  <div className="w-40 h-6 bg-black rounded-b-xl"></div>
                </div>
                
                {/* Phone Content */}
                <div className="absolute inset-0 overflow-hidden mt-6">
                  {mobileScreens.map((screen, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 ${screen.bg} transition-all duration-500 ease-in-out transform ${
                        index === activeScreen 
                          ? 'opacity-100 translate-x-0' 
                          : index < activeScreen 
                            ? 'opacity-0 -translate-x-full' 
                            : 'opacity-0 translate-x-full'
                      }`}
                    >
                      {screen.content}
                    </div>
                  ))}
                  
                  {/* Navigation Controls */}
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-20">
                    {mobileScreens.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveScreen(index)}
                        className={`h-2 rounded-full transition-all ${
                          activeScreen === index 
                            ? 'w-6 bg-white' 
                            : 'w-2 bg-white/40'
                        }`}
                        aria-label={`Go to screen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Screen Controls */}
                <button onClick={prevScreen} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/90 dark:bg-gray-800/90 h-10 w-10 rounded-full shadow-lg flex items-center justify-center z-30 transition-transform hover:scale-110">
                  <ChevronLeft className="h-5 w-5 text-gray-900 dark:text-white" />
                </button>
                <button onClick={nextScreen} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/90 dark:bg-gray-800/90 h-10 w-10 rounded-full shadow-lg flex items-center justify-center z-30 transition-transform hover:scale-110">
                  <ChevronRight className="h-5 w-5 text-gray-900 dark:text-white" />
                </button>
                
                {/* Labels */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full z-20">
                  <span className="text-white text-sm font-medium">{mobileScreens[activeScreen].title}</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-10 -left-10 h-40 w-40 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBankingSection;
