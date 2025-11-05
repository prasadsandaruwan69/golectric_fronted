"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  User,
  HelpCircle,
  Plus,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "#products",
      dropdown: ["Solar Panels", "Vehicle", "Batteries", "EV Chargers"],
    },
    {
      name: "Services",
      href: "#services",
      dropdown: ["Installation", "Maintenance", "Consultation", "Support"],
    },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* --- Top Bar --- */}
      <div
        className={`bg-gradient-to-r from-[#00b151] to-[#1d58af] text-white transition-all duration-300 ${
          showTopBar ? "h-10 opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="text-sm font-medium">
              <span className="hidden sm:inline">
                Welcome to GoElectric - Power Your Future 🌱
              </span>
              <span className="sm:hidden">GoElectric ⚡</span>
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Nav --- */}
      <nav
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <img
              src="/goelectric.lk_logo.png"
              alt="GoElectric Logo"
              className="w-40 sm:w-48 h-auto object-contain p-2"
            />

            {/* --- Desktop Nav --- */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#00b151] font-medium transition-all duration-200 flex items-center group">
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#00b151] font-medium transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  )}

                  {/* --- Dropdown --- */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0  w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      {item.dropdown.map((subItem) => {
                        // 👇 Define custom routes
                        let link = "#";
                        if (subItem === "Solar Panels") link = "/solorpanel";
                        else if (subItem === "Vehicle") link = "/vehicle";
                        else if (subItem === "Batteries") link = "/batteries";
                        else if (subItem === "EV Chargers") link = "/evchargers";

                        return (
                          <a
                            key={subItem}
                            href={link}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-[#00b151]/10 hover:to-[#1d58af]/10 hover:text-[#00b151] transition-all duration-200"
                          >
                            {subItem}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* --- Right Buttons --- */}
            <div className="flex items-center space-x-2">
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200">
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">Help</span>
              </button>

              <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#00b151] hover:bg-[#009944] text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105">
                <Plus className="w-5 h-5" />
                <span>Post Your Ad</span>
              </button>

              <button className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#1d58af] to-[#0d3d7f] text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105">
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
