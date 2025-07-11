
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative hero-gradient pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-blue-800 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="relative h-full">
                {Array.from({ length: 12 }).map((_, j) => (
                  <div key={j} className="absolute h-1 w-1 rounded-full bg-white opacity-30" style={{ 
                    top: `${j * 8}%`, 
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${(i + j) * 0.1}s` 
                  }}></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <p className="text-yellow-400 font-medium mb-4 animate-fade-in">The Future of Banking is Here</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Banking Redefined<br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">for the Digital Age</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-200 md:text-xl max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience unparalleled financial services with cutting-edge technology, 
              personalized solutions, and world-class security designed for the way you live.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="px-8 py-6 text-base button-gradient text-gray-800 hover:text-gray-900 font-semibold flex items-center">
                Open Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base bg-transparent text-white border-white hover:bg-white/10 font-medium flex items-center">
                Learn More <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-white text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-white text-sm">Smart Investing</span>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">24/7</span>
                </div>
                <span className="text-white text-sm">Always Available</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* 3D Banking Card Visual */}
            <div className="relative h-80 w-full flex justify-center items-center">
              <div className="absolute w-72 h-44 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl shadow-2xl transform rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-105" style={{ zIndex: 2 }}>
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-blue-800 font-bold text-xs">NEXUS</span>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-white/20 backdrop-blur-sm"></div>
                  </div>
                  
                  <div>
                    <div className="text-yellow-400 text-xs mb-1">Platinum Digital</div>
                    <div className="text-white text-xl font-mono tracking-wider">•••• •••• •••• 4592</div>
                    <div className="flex justify-between mt-3">
                      <div className="text-white text-xs">
                        <div className="opacity-70">Card Holder</div>
                        <div>A. WILSON</div>
                      </div>
                      <div className="text-white text-xs">
                        <div className="opacity-70">Expires</div>
                        <div>05/28</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute w-72 h-44 bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-xl shadow-2xl transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-105" style={{ zIndex: 1 }}>
                <div className="absolute inset-0 opacity-80">
                  <div className="h-full w-full overflow-hidden">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="absolute h-40 w-40 rounded-full border border-indigo-300 opacity-10" 
                        style={{ 
                          top: '50%', 
                          left: '50%', 
                          transform: 'translate(-50%, -50%) scale(' + (i * 0.3 + 0.2) + ')'
                        }}>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-16 -right-4 transform rotate-12 opacity-70">
                <div className="bg-gray-900/20 backdrop-blur-md rounded-xl p-4 w-60">
                  <div className="h-2 w-12 bg-white rounded mb-3"></div>
                  <div className="flex space-x-2 items-center">
                    <div className="h-10 w-10 rounded-md bg-yellow-400/80"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-16 bg-white rounded"></div>
                      <div className="h-2 w-24 bg-white/60 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 left-0 transform -translate-x-1/3 blur-sm opacity-40">
              <div className="animate-spin-slow">
                <div className="h-40 w-40 rounded-full border-t-4 border-l-4 border-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
