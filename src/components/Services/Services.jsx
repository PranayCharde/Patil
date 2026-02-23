import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Target, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'Business Planning',
    description: 'Developing clear strategies to achieve your long-term business goals.',
    link: '/services/planning'
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-primary" />,
    title: 'Consulting Service',
    description: 'Expert advice to optimize your business operations and performance.',
    link: '/services/consulting'
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: 'Inventory Management',
    description: 'Efficient tracking and management of your business assets and stock.',
    link: '/services/inventory'
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Sales & Marketing',
    description: 'Boosting your market presence and driving revenue growth.',
    link: '/services/marketing'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">What We Do</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {services.map((service, index) => (
             <motion.div 
               key={index} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="group p-8 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 text-center border-b-4 border-transparent hover:border-primary"
             >
               <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                 {service.icon}
               </div>
               
               <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
               
               <Link to={service.link} className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all uppercase text-sm tracking-wider">
                 Read More <ArrowRight className="w-4 h-4 ml-2" />
               </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
