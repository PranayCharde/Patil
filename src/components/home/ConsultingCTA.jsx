import React from 'react';
import { Link } from 'react-router-dom';

export function ConsultingCTA() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600" 
          alt="Consulting Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="text-sm font-bold tracking-wider text-primary uppercase mb-4 block">Optimize Your Business Growth</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Advanced Business <br />
          Consulting
        </h2>
        <Link to="/services" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg shadow-primary/30">
          Explore Now
        </Link>
      </div>
    </section>
  );
}
