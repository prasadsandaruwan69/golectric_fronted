"use client";

import { Car, Sun, Battery, Zap, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Electric Vehicles",
    description:
      "Discover the latest EVs with zero emissions, cutting-edge technology, and unmatched performance. From compact city cars to luxury SUVs – drive the future today.",
    icon: Car,
    imageSrc: "/electric_vehicle.png",
    alt: "Premium Electric Vehicles in Sri Lanka – Zero Emission Cars & SUVs",
    gradient: "from-blue-500 to-cyan-600",
    cta: "Explore EVs",
  },
  {
    title: "Solar Power",
    description:
      "Harness the sun's energy with premium solar panels and complete home solutions. Reduce bills, gain energy independence, and contribute to a greener planet.",
    icon: Sun,
    imageSrc: "/solor_panel.png",
    alt: "High-Efficiency Solar Panels for Homes & Businesses in Sri Lanka",
    gradient: "from-green-500 to-emerald-600",
    cta: "View Solar Solutions",
  },
  {
    title: "Batteries",
    description:
      "Store excess energy for uninterrupted power. High-capacity, long-life batteries designed for homes, businesses, and off-grid living.",
    icon: Battery,
    imageSrc: "/electric_bettry.png",
    alt: "Lithium Battery Storage for Solar & EV Systems – Long Life, High Capacity",
    gradient: "from-blue-500 to-cyan-600",
    cta: "Shop Batteries",
  },
  {
    title: "EV Chargers",
    description:
      "Fast, reliable, and smart charging stations for home and commercial use. Level 2, DC fast chargers, and portable options – charge anywhere, anytime.",
    icon: Zap,
    imageSrc: "/electric_chargers.png",
    alt: "Fast EV Chargers in Sri Lanka – Home & Public Charging Stations",
    gradient: "from-green-500 to-emerald-600",
    cta: "Find Chargers",
  },
];

export default function MiscSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Green flowing line */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#00b151', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#00b151', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#00b151', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path
            d="M -200 150 Q 200 100, 600 150 T 1400 150 T 2200 150"
            fill="none"
            stroke="url(#greenGradient)"
            strokeWidth="3"
            className="animate-flow-green"
          />
        </svg>

        {/* Blue flowing line */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1d58af', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#1d58af', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#1d58af', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path
            d="M -200 250 Q 300 300, 700 250 T 1500 250 T 2300 250"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="3"
            className="animate-flow-blue"
          />
        </svg>

        {/* Floating particles for extra effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float-1 opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-float-2 opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-green-500 rounded-full animate-float-3 opacity-50"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float-1 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00b151] to-[#1d58af] bg-clip-text text-transparent">
            Our Green Energy Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need for a sustainable lifestyle – all in one place.
          </p>
        </div>

        {/* Product Blocks */}
        <div className="space-y-20 lg:space-y-32">
          {products.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* ---- Image Side with Animated Border ---- */}
                <div
                  className={`${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } relative group`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Image container */}
                    <div className="relative bg-white p-2 rounded-2xl">
                      <div className="aspect-video relative overflow-hidden rounded-xl">
                        <img
                          src={item.imageSrc}
                          alt={item.alt}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---- Content Side ---- */}
                <div
                  className={`${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } space-y-6`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg transform hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <button
                    className={`group flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes flow-green {
          0% {
            transform: translateX(-200px) translateY(0);
          }
          50% {
            transform: translateX(100px) translateY(-20px);
          }
          100% {
            transform: translateX(-200px) translateY(0);
          }
        }

        @keyframes flow-blue {
          0% {
            transform: translateX(-150px) translateY(0);
          }
          50% {
            transform: translateX(150px) translateY(20px);
          }
          100% {
            transform: translateX(-150px) translateY(0);
          }
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 40px);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 25px);
          }
        }

        .animate-flow-green {
          animation: flow-green 15s ease-in-out infinite;
        }

        .animate-flow-blue {
          animation: flow-blue 18s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}