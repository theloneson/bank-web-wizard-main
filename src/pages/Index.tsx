
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MobileBankingSection from "@/components/MobileBankingSection";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom cursor */}
      <div 
        className="fixed hidden md:block w-8 h-8 rounded-full pointer-events-none mix-blend-difference z-50"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'white',
          opacity: 0.6,
          transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease',
          width: isClicking ? '24px' : '16px',
          height: isClicking ? '24px' : '16px'
        }}
      ></div>
      
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900 to-transparent z-10"></div>
          <FeaturesSection />
        </div>
        <MobileBankingSection />
        <SecuritySection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
      
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-yellow-400"
          style={{ 
            width: '0%',
            animation: 'progress-animation 1s ease forwards',
          }}
        />
      </div>
      
      <style>
        {`
          @keyframes progress-animation {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
