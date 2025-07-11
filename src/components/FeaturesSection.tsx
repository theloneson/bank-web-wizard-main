
import { useState, useEffect, useRef } from "react";
import { 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Home, 
  Smartphone, 
  PiggyBank,
  ArrowRight,
  BarChart4,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: 'Digital Banking',
    description: 'Experience seamless banking across all devices with our award-winning digital platform.',
    longDescription: 'Our digital banking platform offers a unified experience across desktop, mobile, and tablet devices. Access your accounts, make transfers, pay bills, and manage your finances with intuitive tools designed for maximum efficiency and security.',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Intelligent Cards',
    description: 'Next-generation credit and debit cards with smart controls and real-time analytics.',
    longDescription: 'Our intelligent cards give you unprecedented control over your spending. Set dynamic limits, receive instant transaction notifications, freeze/unfreeze your card with a tap, and gain insights into your spending patterns with AI-powered analytics.',
    icon: CreditCard,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Wealth Builder',
    description: 'Personalized investment strategies driven by advanced algorithms and market analysis.',
    longDescription: 'Our Wealth Builder platform uses sophisticated algorithms to create personalized investment strategies based on your goals, risk tolerance, and time horizon. Access global markets, diversify your portfolio, and track performance in real-time.',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Property Solutions',
    description: 'Innovative mortgage and property financing options with transparent terms.',
    longDescription: 'Our Property Solutions offer competitive mortgage rates with flexible terms designed for various property types. Enjoy streamlined application processes, digital document submission, and personalized guidance from our property finance experts.',
    icon: Home,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    name: 'Smart Savings',
    description: 'Automated savings tools that adapt to your financial habits and goals.',
    longDescription: 'Our Smart Savings technology analyzes your income and spending patterns to automatically set aside the optimal amount for your savings goals. Create multiple savings buckets for different objectives with customizable timelines and target amounts.',
    icon: PiggyBank,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    name: 'Quantum Security',
    description: 'State-of-the-art security protocols that protect your assets and information.',
    longDescription: 'Our Quantum Security framework employs multi-layer encryption, biometric authentication, behavior-based fraud detection, and continuous security monitoring to protect your financial assets and personal information from evolving threats.',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-100',
  },
  {
    name: 'Market Analytics',
    description: 'Real-time market insights and predictive analytics for informed decisions.',
    longDescription: 'Access comprehensive market data, expert analyses, and predictive modeling tools to make informed investment decisions. Our platform aggregates information from multiple sources and presents it in an intuitive, actionable format.',
    icon: BarChart4,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    name: 'Global Access',
    description: 'Borderless banking with multi-currency accounts and favorable exchange rates.',
    longDescription: 'Our Global Access service lets you hold, exchange, and transfer money in multiple currencies with minimal fees. Travel with confidence knowing your banking services work seamlessly across borders with local payment options worldwide.',
    icon: Globe,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-100',
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase animate-fade-in">Advanced Capabilities</h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Banking Technology <span className="text-blue-600 dark:text-blue-400">Redefined</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our suite of advanced financial tools combines cutting-edge technology with intuitive design.
          </p>
        </div>

        <div className="mt-10">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="relative h-[500px] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-white/90 dark:from-gray-800/50 dark:to-gray-900/90"></div>
                
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 flex flex-col justify-center items-center p-10 text-center transition-all duration-700 ease-in-out ${
                      activeFeature === index 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                  >
                    <div className={`rounded-full p-5 mb-6 ${feature.bgColor}`}>
                      <feature.icon className={`h-10 w-10 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.name}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{feature.longDescription}</p>
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeFeature === index 
                          ? 'w-8 bg-blue-600' 
                          : 'w-2 bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-5 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  onClick={() => setActiveFeature(index)}
                  className={`feature-card rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  } ${
                    activeFeature === index 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700'
                  }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    <div className={`mt-3 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium transition-opacity ${
                      activeFeature === index ? 'opacity-100' : 'opacity-0'  
                    }`}>
                      <span>Active</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
