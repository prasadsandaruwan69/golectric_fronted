"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, HelpCircle, Plus, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

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
      
      // Hide top bar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Products', 
      href: '#products',
      dropdown: ['Solar Panels', 'Inverters', 'Batteries', 'EV Chargers']
    },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: ['Installation', 'Maintenance', 'Consultation', 'Support']
    },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar with Social Media */}
      <div className={`bg-gradient-to-r from-[#00b151] to-[#1d58af] text-white transition-all duration-300 ${
        showTopBar ? 'h-10 opacity-100' : 'h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="text-sm font-medium">
              <span className="hidden sm:inline">Welcome to GoElectric - Power Your Future 🌱</span>
              <span className="sm:hidden">GoElectric ⚡</span>
            </div>
            
            {/* Social Media Icons */}
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

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative rounded-lg overflow-hidden duration-300">
                <img 
                  src="/goelectric.lk_logo.png" 
                  alt="GoElectric Logo" 
                  className="w-40 sm:w-48 h-auto object-contain p-2"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button
                      className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#00b151] font-medium transition-all duration-200 flex items-center group"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#00b151] font-medium transition-all duration-200 flex items-center group"
                    >
                      {item.name}
                    </a>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-[#00b151]/10 hover:to-[#1d58af]/10 hover:text-[#00b151] transition-all duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Help Button */}
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 group">
                <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">Help</span>
              </button>

              {/* Post Your Ad Button */}
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00b151] to-[#00b151] hover:from-[#009944] hover:to-[#00b151] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Plus className="w-5 h-5" />
                <span>Post Your Ad</span>
              </button>

              {/* Login Button */}
              <button className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#1d58af] to-[#0d3d7f] hover:from-[#1649a0] hover:to-[#1d58af] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#00b151]/10 hover:to-[#1d58af]/10 hover:text-[#00b151] font-medium transition-all duration-200 flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem}
                              href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-4 py-2 rounded-lg text-gray-600 hover:text-[#00b151] text-sm transition-all duration-200"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#00b151]/10 hover:to-[#1d58af]/10 hover:text-[#00b151] font-medium transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                  <HelpCircle className="w-5 h-5" />
                  <span className="font-medium">Help</span>
                </button>
                
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#00b151] to-[#00b151] text-white font-semibold shadow-md transition-all duration-300">
                  <Plus className="w-5 h-5" />
                  <span>Post Your Ad</span>
                </button>
                
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#1d58af] to-[#0d3d7f] text-white font-semibold shadow-md transition-all duration-300">
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </button>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-medium mb-3 px-4">Follow Us</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 rounded-full bg-gradient-to-r from-[#00b151] to-[#1d58af] text-white hover:scale-110 transition-transform duration-200"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}