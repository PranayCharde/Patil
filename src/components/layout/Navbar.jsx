import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Shield, Phone, MapPin, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-slate-800 text-gray-300 py-2 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-primary" />
              <span>Mon – Fri 8:00 – 18:00 / Sunday 8:00 – 14:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-primary" />
              <span>1-800-458-56987</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-primary" />
              <span>47 Bakery Street, London, UK</span>
            </div>
          </div>
          <div className="flex gap-4">
             {/* Social placeholders could go here */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gray-800">Patil</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/contacts" className="hover:text-primary transition-colors">Contacts</Link>
          </div>

          {/* Icons */}
          {/* <div className="hidden lg:flex items-center gap-4">
            <button className="hover:text-primary transition-colors relative">
               <ShoppingBag className="w-5 h-5 text-gray-600" />
               <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="hover:text-primary transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-full">
            <Link to="/" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Our Services</Link>
            <Link to="/blog" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contacts" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Contacts</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
