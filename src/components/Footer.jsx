"use client";

import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Solar Panel Installation', href: '#solar' },
    { name: 'EV Charging Solutions', href: '#ev' },
    { name: 'Energy Consultation', href: '#consultation' },
    { name: 'Maintenance & Support', href: '#support' },
    { name: 'Battery Systems', href: '#battery' },
    { name: 'Smart Home Integration', href: '#smart' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Refund Policy', href: '#refund' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-lg bg-white p-2">
                <img 
                  src="/goelectric.lklogo 5.png" 
                  alt="GoElectric Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00b151] to-[#1d58af] bg-clip-text text-transparent">
                  GoElectric
                </h3>
                <p className="text-xs text-gray-400">Power Your Future</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the green energy revolution in Sri Lanka. Providing sustainable solar solutions and electric vehicle charging infrastructure for a cleaner tomorrow.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-[#00b151] transition-colors duration-200">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Kegalle, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-[#00b151] transition-colors duration-200">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+94 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-[#00b151] transition-colors duration-200">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@goelectric.lk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00b151] to-[#1d58af] bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00b151] transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00b151] to-[#1d58af] bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-[#00b151] transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00b151] to-[#1d58af] bg-clip-text text-transparent">
              Newsletter
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates on green energy solutions and special offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b151] transition-all duration-200"
              />
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#00b151] to-[#1d58af] hover:from-[#009944] hover:to-[#1649a0] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2 rounded-lg bg-gray-800 text-gray-300 ${social.color} transition-all duration-200 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-4">
            {legal.map((item, index) => (
              <span key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-[#00b151] transition-colors duration-200 text-sm"
                >
                  {item.name}
                </a>
                {index < legal.length - 1 && (
                  <span className="ml-4 text-gray-600">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} GoElectric.lk. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" /> for a sustainable future
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-[#00b151] via-[#1d58af] to-[#00b151] animate-gradient-x"></div>
    </footer>
  );
}