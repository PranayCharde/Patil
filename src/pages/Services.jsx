import React from 'react';
import { Box, Target, BarChart2, Briefcase, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    icon: <Box className="w-10 h-10 text-primary" />,
    title: 'Business planning',
    description: 'Comprehensive business planning services to help you chart a clear path to success. We analyze your market, competition, and internal capabilities.',
    link: '/services/planning'
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'Consulting service',
    description: 'Expert consulting to optimize your operations and strategy. We provide actionable insights and hands-on support.',
    link: '/services/consulting'
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: 'Inventory management',
    description: 'Streamline your inventory processes to reduce costs and improve efficiency. Advanced tracking and forecasting solutions.',
    link: '/services/inventory'
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-primary" />,
    title: 'Financial Analysis',
    description: 'In-depth financial analysis to uncover opportunities for growth and profitability. Cash flow management and risk assessment.',
    link: '/services/finance'
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'HR Solutions',
    description: 'Talent acquisition, management, and development strategies to build a high-performing team.',
    link: '/services/hr'
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: 'Global Expansion',
    description: 'Strategies for entering new markets and managing international operations successfully.',
    link: '/services/global'
  }
];

export function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <div className="flex justify-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-wider text-primary uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Solutions tailored to your <br /> business needs
            </h2>
            <p className="text-gray-600">
              We offer a wide range of consulting services designed to help your business grow, optimize, and succeed in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon, { className: "w-8 h-8 group-hover:text-white text-primary transition-colors" })}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <Link to={service.link} className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all group-hover:text-primary-dark">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Our Process" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="flex-1 space-y-8">
              <div>
                <span className="text-sm font-bold tracking-wider text-primary uppercase">Why Choose Us</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
                  We are dedicated to your success
                </h2>
                <p className="text-gray-600">
                  Our approach is collaborative and data-driven. We work closely with you to understand your unique challenges and deliver measurable results.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Expert Team", desc: "Highly skilled professionals with industry experience." },
                  { title: "Tailored Solutions", desc: "Strategies customized to your specific goals." },
                  { title: "Proven Track Record", desc: "History of delivering value to clients worldwide." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 bg-primary text-white text-center">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take your business to the next level?</h2>
           <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Contact us today to schedule a consultation and see how we can help you achieve your goals.</p>
           <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded-md font-bold text-lg transition-colors shadow-lg">
             Get a Quote
           </Link>
         </div>
       </section>
    </div>
  );
}
