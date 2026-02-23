import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Clock, Globe } from 'lucide-react';

const stats = [
  { icon: Briefcase, count: 98, label: 'Projects Completed' },
  { icon: Users, count: 65, label: 'Happy Clients' },
  { icon: Clock, count: 10, label: 'Years Experience' },
  { icon: Globe, count: 15, label: 'Offices Worldwide' },
];

export function FunFacts() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2">{stat.count}</h3>
              <p className="text-white/80 font-medium tracking-wider uppercase text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
