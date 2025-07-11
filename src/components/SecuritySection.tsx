
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertCircle, CheckCircle, Eye, Fingerprint, Server, RefreshCw } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption standards.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Multi-factor authentication utilizing fingerprint, facial recognition, and behavioral analysis.",
  },
  {
    icon: Eye,
    title: "24/7 Fraud Monitoring",
    description: "AI-powered surveillance system that detects and prevents suspicious activities in real-time.",
  },
  {
    icon: Server,
    title: "Secure Data Centers",
    description: "Enterprise-grade infrastructure with physical and virtual security protections.",
  },
  {
    icon: CheckCircle,
    title: "Regular Security Audits",
    description: "Continuous system testing by independent cybersecurity experts and compliance checks.",
  },
  {
    icon: RefreshCw,
    title: "Zero Downtime Updates",
    description: "Our systems are always up-to-date with the latest security patches without disruption.",
  },
];

const SecuritySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVisual, setActiveVisual] = useState(0);
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
      setActiveVisual((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-64 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-10">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-0 border border-white/10 rounded"></div>
            </div>
          ))}
        </div>
        
        {/* Animated circles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full border border-white/20"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: '50%',
              left: '75%',
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${5 + i}s infinite ${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase animate-fade-in">Enterprise-Grade Protection</h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Security <span className="text-yellow-400">Without Compromise</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-blue-200 lg:mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our multi-layered security approach employs advanced technologies to safeguard your assets and information.
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="space-y-8 mb-10">
                {securityFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/15"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setActiveVisual(index % 3)}
                  >
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                        <feature.icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        <p className="mt-1 text-blue-200">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="button-gradient px-8 py-6 text-base font-semibold">
                Security Whitepaper
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-7 mt-12 lg:mt-0 flex justify-center">
            <div className={`relative h-[500px] w-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {/* Security Visualization 1 - Shield */}
              <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeVisual === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="relative h-full flex items-center justify-center">
                  <div className="absolute h-80 w-80 bg-blue-600/20 rounded-full blur-3xl"></div>
                  <div className="relative">
                    <Shield className="h-64 w-64 text-yellow-400" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="h-24 w-24 text-white" />
                    </div>
                    
                    {/* Orbiting elements */}
                    {Array.from({ length: 6 }).map((_, i) => {
                      const angle = (i * 60) * (Math.PI / 180);
                      const radius = 150;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <div 
                          key={i}
                          className="absolute h-12 w-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                          style={{ 
                            transform: `translate(${x}px, ${y}px)`,
                            animation: `orbit ${20 + i * 2}s linear infinite ${i}s`
                          }}
                        >
                          <div className="h-5 w-5 bg-yellow-400 rounded-full"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Security Visualization 2 - Network */}
              <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeVisual === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="relative h-full flex items-center justify-center">
                  <div className="relative h-[400px] w-[400px]">
                    {/* Network nodes */}
                    {Array.from({ length: 12 }).map((_, i) => {
                      const isCenter = i === 0;
                      const angle = isCenter ? 0 : ((i - 1) * 30) * (Math.PI / 180);
                      const radius = isCenter ? 0 : 150;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <div 
                          key={i}
                          className={`absolute ${isCenter ? 'h-16 w-16 bg-yellow-400' : 'h-10 w-10 bg-blue-500'} rounded-full flex items-center justify-center`}
                          style={{ 
                            left: `${isCenter ? '50%' : '50%'}`,
                            top: `${isCenter ? '50%' : '50%'}`,
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                            animation: isCenter ? '' : `pulse ${2 + i % 4}s infinite ${i * 0.2}s`
                          }}
                        >
                          {isCenter && <Server className="h-8 w-8 text-gray-900" />}
                        </div>
                      );
                    })}
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      {Array.from({ length: 11 }).map((_, i) => {
                        const angle = ((i) * 30) * (Math.PI / 180);
                        const x = Math.cos(angle) * 150;
                        const y = Math.sin(angle) * 150;
                        
                        return (
                          <line 
                            key={i}
                            x1="50%" 
                            y1="50%" 
                            x2={`calc(50% + ${x}px)`} 
                            y2={`calc(50% + ${y}px)`} 
                            stroke="rgba(219, 234, 254, 0.3)" 
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Security Visualization 3 - Data Protection */}
              <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeVisual === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="relative h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="relative h-80 w-80 border-4 border-yellow-400 rounded-full flex items-center justify-center">
                      <div className="h-64 w-64 border-4 border-blue-400 rounded-full flex items-center justify-center">
                        <div className="h-48 w-48 border-4 border-indigo-400 rounded-full flex items-center justify-center">
                          <div className="h-32 w-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                            <Fingerprint className="h-16 w-16 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated dots on circles */}
                      {Array.from({ length: 3 }).map((_, circleIndex) => {
                        const radius = 40 + circleIndex * 40;
                        
                        return Array.from({ length: 8 }).map((_, dotIndex) => {
                          const angle = ((dotIndex) * 45) * (Math.PI / 180);
                          const x = Math.cos(angle) * radius;
                          const y = Math.sin(angle) * radius;
                          
                          return (
                            <div 
                              key={`${circleIndex}-${dotIndex}`}
                              className="absolute h-2 w-2 rounded-full bg-white"
                              style={{ 
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                                animation: `pulse ${2 + circleIndex}s infinite ${dotIndex * 0.2}s`
                              }}
                            />
                          );
                        });
                      })}
                    </div>
                    
                    {/* Orbiting Lock Icons */}
                    {Array.from({ length: 4 }).map((_, i) => {
                      const angle = (i * 90) * (Math.PI / 180);
                      const radius = 170;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <div 
                          key={i}
                          className="absolute h-12 w-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center"
                          style={{ 
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                            animation: `orbit ${20 + i * 5}s linear infinite ${i * 2}s`
                          }}
                        >
                          <Lock className="h-6 w-6 text-gray-900" />
                        </div>
                      );
                    })}
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
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(0.95); }
          }
          
          @keyframes orbit {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default SecuritySection;
