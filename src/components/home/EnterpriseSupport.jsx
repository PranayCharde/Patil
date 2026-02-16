import React from 'react';
import { Link } from 'react-router-dom';

export function EnterpriseSupport() {
  return (
    <section className="relative py-32 bg-white">
       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
         <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Team Support" 
              className="rounded-lg shadow-2xl relative z-10"
            />
            {/* Decorative colored box behind image */}
            <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-accent/20 rounded-lg -z-0"></div>
         </div>
         
         <div className="flex-1 space-y-6">
           <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Outsourcing Services</span>
           <h2 className="text-4xl font-bold text-slate-900 leading-tight">
             Comprehensive enterprise <br />
             services & support
           </h2>
           <p className="text-gray-600">
             Our team provides specific advice and support to enterprise clients, helping them navigate complex business landscapes and achieve sustainable growth.
           </p>
           
           <Link to="/contact" className="inline-block bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-3 rounded font-bold transition-colors">
             Make an Appointment
           </Link>
         </div>
       </div>
    </section>
  );
}
