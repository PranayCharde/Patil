import React from 'react';

// Using simple SVG placeholders for logos to ensure they look clean
// In a real project, these would be actual client logo images
const CompanyLogo = ({ name }) => (
  <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-pointer">
    <span className="text-xl font-bold font-sans">{name}</span>
  </div>
);

export function Clients() {
  return (
    <section className="py-12 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
           <CompanyLogo name="TechCorp" />
           <CompanyLogo name="InnoVate" />
           <CompanyLogo name="GlobalSys" />
           <CompanyLogo name="FutureScale" />
           <CompanyLogo name="DataFlow" />
        </div>
      </div>
    </section>
  );
}
