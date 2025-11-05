"use client";

import { useState, useEffect } from 'react';
import { Search, Zap, Battery, Car, Sun, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import Bot from "@/components/AnimateRobot"
export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { name: 'Electric Vehicles', icon: Car, color: 'from-blue-500 to-blue-600' },
    { name: 'Solar Panels', icon: Sun, color: 'from-yellow-500 to-orange-500' },
    { name: 'Batteries', icon: Battery, color: 'from-green-500 to-emerald-600' },
    { name: 'EV Chargers', icon: Zap, color: 'from-purple-500 to-indigo-600' }
  ];

  const slides = [
    {
      title: "Drive the Future",
      subtitle: "Explore Premium Electric Vehicles",
      description: "Zero emissions. Maximum performance. The future is electric.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Solar Power",
      subtitle: "Premium Solar Solutions for Your Home",
      description: "Clean energy. Lower bills. Sustainable living.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Power Storage",
      subtitle: "Advanced Battery Systems",
      description: "Store energy. Stay powered. Go independent.",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative mt-24 flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00b151 1px, transparent 1px), linear-gradient(90deg, #00b151 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: i % 2 === 0 ? '#00b151' : '#1d58af',
              animation: `float-particle ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's',
              opacity: 0.6
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00b151]/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#1d58af]/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative flex-1 flex items-center max-w- mb-2 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00b151]/30 to-[#1d58af]/30 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#00b151]/50">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-[rgb(244,255,249)] to-[#eaf2ff] bg-clip-text text-transparent">
                  Sri Lanka's #1 Green Energy Marketplace
                </span>
              </div>
              
              <h1 className="text-4xl  md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-[#00b151] via-[#1d58af] to-[#00b151] bg-clip-text text-transparent animate-gradient">
                  {slides[currentSlide].title}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white/90">
                {slides[currentSlide].subtitle}
              </h2>
              
           
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-[#00b151] transition-colors duration-200 z-10" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search for Electric Vehicles, Solar Panels, Batteries..."
                  className="w-full pl-12 pr-34 py-5 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 focus:border-[#00b151] focus:outline-none text-lg text-white placeholder-white/50 shadow-2xl focus:shadow-[#00b151]/50 transition-all duration-300"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-8 py-3.5 bg-gradient-to-r from-[#00b151] to-[#1d58af] hover:from-[#009944] hover:to-[#1649a0] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Category Pills */}
        

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-[#00b151] to-[#1d58af] hover:from-[#009944] hover:to-[#1649a0] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#00b151]/50 transition-all duration-300 transform hover:scale-105">
                <span className="text-lg">Browse Products</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <button className="flex items-center justify-center space-x-2 px-10 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl shadow-2xl border-2 border-white/30 hover:border-[#00b151] transition-all duration-300 transform hover:scale-105">
                <span className="text-lg">Post Your Ad</span>
              </button>
            </div>
          </div>

          {/* Right Content - 3D Animated Icons */}
 
            <Bot />
       
        
        
        </div>
      </div>

      {/* Bottom Stats Bar */}
   

      {/* Slide Indicators */}
   

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(50px, -50px) scale(1.5);
            opacity: 0.3;
          }
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(5deg); }
          50% { transform: translate(0, -40px) rotate(0deg); }
          75% { transform: translate(-20px, -20px) rotate(-5deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-25px, 25px) rotate(-5deg); }
          50% { transform: translate(-50px, 0) rotate(0deg); }
          75% { transform: translate(-25px, -25px) rotate(5deg); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, 20px) rotate(10deg); }
          50% { transform: translate(0, 40px) rotate(0deg); }
          75% { transform: translate(-30px, 20px) rotate(-10deg); }
        }

        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-20px, -30px) rotate(-8deg); }
          50% { transform: translate(0, -60px) rotate(0deg); }
          75% { transform: translate(20px, -30px) rotate(8deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }

        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-dash {
          stroke-dasharray: 10;
          animation: dash 20s linear infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}