import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-white">Patil</span>
          </div>
          <p className="mb-4">
            Trusted experts in business matters. We provide comprehensive enterprise services & support.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Our Services</a></li>
            <li><a href="#" className="hover:text-primary">Consulting</a></li>
            <li><a href="#" className="hover:text-primary">Finance</a></li>
          </ul>
        </div>

         <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>47 Bakery Street, London, UK</li>
            <li>+44 123 456 7890</li>
            <li>info@Patil.com</li>
          </ul>
        </div>

        <div>
           <h3 className="text-white font-bold mb-4">Newsletter</h3>
           <p className="mb-4">Subscribe for latest updates.</p>
           <div className="flex">
             <input type="email" placeholder="Email address" className="bg-slate-800 border-none p-2 rounded-l w-full focus:ring-1 focus:ring-primary" />
             <button className="bg-primary hover:bg-primary-dark text-white px-4 rounded-r">Go</button>
           </div>
        </div>
      </div>
      <div className="container mx-auto px-4 border-t border-slate-800 mt-8 pt-8 text-center text-sm">
        © 2024 Patil. All rights reserved.
      </div>
    </footer>
  );
}
