
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

const benefits = [
  "No hidden fees or minimum balance requirements",
  "24/7 priority customer service",
  "Advanced security features",
  "Free global ATM withdrawals",
  "Personalized financial insights"
];

const CtaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
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

  return (
    <div 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
        <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute -right-32 bottom-32 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="lg:grid lg:grid-cols-2">
            <div className="relative px-8 py-12 sm:px-12 lg:px-16">
              <div className="md:max-w-lg relative z-10">
                <div className="mb-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-0.5 text-sm font-medium text-blue-800 dark:text-blue-300">
                    Limited Time Offer
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  <span className="block">Ready to experience</span>
                  <span className="block text-blue-600 dark:text-blue-400">next-generation banking?</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Open a premium account today and enjoy exclusive benefits designed for modern financial needs.
                </p>
                
                <div className="mt-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    className="button-gradient px-8 py-6 text-base font-semibold text-gray-900 flex items-center justify-center"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    Open Premium Account
                    <ChevronRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} />
                  </Button>
                  <Button className="bg-white dark:bg-gray-700 text-blue-700 dark:text-blue-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-blue-700 dark:border-blue-500 px-8 py-6 text-base font-medium flex items-center justify-center">
                    Contact a Specialist
                  </Button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${Math.random() * 8 + 2}px`,
                          height: `${Math.random() * 8 + 2}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                          opacity: Math.random() * 0.5 + 0.3
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center p-12 text-center">
                  <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white text-2xl font-bold mb-1">Premium Account</div>
                  <div className="text-white text-opacity-80 mb-6">Advanced Banking Solution</div>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-white text-5xl font-extrabold">$0</span>
                    <span className="text-white text-opacity-70 ml-2">monthly fee</span>
                  </div>
                  
                  <div className="w-full max-w-xs">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                      <div className="text-white text-sm mb-2">Minimum Opening Deposit</div>
                      <div className="text-white text-xl font-bold">$100</div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-white text-sm mb-2">Interest Rate (APY)</div>
                      <div className="text-white text-xl font-bold">Up to 2.5%</div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <Button className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 font-semibold flex items-center">
                      View All Features <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(20px); }
            75% { transform: translateY(10px) translateX(5px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default CtaSection;
