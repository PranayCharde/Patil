import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, BarChart2, Target } from 'lucide-react';

const services = [
  {
    icon: <Box className="w-8 h-8 text-primary" />,
    title: 'Business planning',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit commodo.',
    link: '/services/planning'
  },
  {
    icon: <Box className="w-8 h-8 text-primary" />, // Using Box as placeholder, can swap
    title: 'Consulting service',
    description: 'Aenean massa. Cum sociis natoque penatibus et magnis dis.',
    link: '/services/consulting'
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Inventory management',
    description: 'Pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
    link: '/services/inventory'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Our Business Services</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Your results are our <br />
            <span className="text-primary">top priority!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              
              <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <Link to={service.link} className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
