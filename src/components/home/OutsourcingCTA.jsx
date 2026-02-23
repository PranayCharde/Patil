import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OutsourcingCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
               alt="Enterprise Meeting" 
               className="rounded-2xl shadow-2xl border-8 border-white/5"
             />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Benefit of outsourcing <br />
              <span className="text-primary-light">enterprise services</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We help you optimize your business processes, reduce costs, and focus on your core competencies. Our team provides tailored solutions to meet your specific needs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Cost Efficiency', 'Access to Talent', 'Focus on Core Business', 'Risk Management'].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-primary/50">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
