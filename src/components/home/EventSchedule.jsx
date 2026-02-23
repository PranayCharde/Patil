import React from 'react';
import { ArrowRight } from 'lucide-react';

const schedule = [
  {
    time: "10:00 - 12:00",
    period: "am",
    title: 'The lecture "Achieving goals"',
    person: "Ashton Porter",
    role: "Business owner",
    location: "New York",
    venue: "Manhattan club"
  },
  {
    time: "12:00 - 14:00",
    period: "pm",
    title: 'The lecture "Business planning"',
    person: "Ben Carter",
    role: "Business analyst",
    location: "New York",
    venue: "Manhattan club"
  },
  {
    time: "15:00 - 17:00",
    period: "pm",
    title: 'The lecture "Earnings increase"',
    person: "Dylan Byrne",
    role: "Business owner",
    location: "New York",
    venue: "Manhattan club"
  }
];

export function EventSchedule() {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2 block">Calendar</span>
            <h2 className="text-5xl font-bold">Event schedule</h2>
          </div>
          <a href="#" className="text-white hover:text-white/80 font-bold flex items-center gap-2 mt-4 md:mt-0 transition-colors">
            View More <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 border-b border-white/20 mb-12">
          <button className="pb-4 font-bold border-b-2 border-cyan-400 text-cyan-400">
            Day #1 – may 01.2026
          </button>
          <button className="pb-4 font-bold border-b-2 border-transparent hover:text-white/80 transition-colors opacity-60 hover:opacity-100">
            Day #2 – may 02.2026
          </button>
          <button className="pb-4 font-bold border-b-2 border-transparent hover:text-white/80 transition-colors opacity-60 hover:opacity-100">
            Day #3 – may 03.2026
          </button>
        </div>

        {/* Schedule List */}
        <div className="flex flex-col">
          {schedule.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg group">
              
              {/* Time */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <div className="text-xl font-bold">{item.time}</div>
                <div className="text-white/60 text-sm">{item.period}</div>
              </div>

              {/* Title */}
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                 <h3 className="text-xl font-bold">{item.title}</h3>
              </div>

              {/* Speaker */}
              <div className="w-full md:w-1/5 mb-4 md:mb-0">
                <div className="font-bold">{item.person}</div>
                <div className="text-white/60 text-sm">{item.role}</div>
              </div>

              {/* Location */}
              <div className="w-full md:w-1/5 mb-4 md:mb-0">
                 <div className="font-bold">{item.location}</div>
                 <div className="text-white/60 text-sm">{item.venue}</div>
              </div>

              {/* Action */}
              <div className="w-auto ml-auto">
                 <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all">
                   <ArrowRight className="w-5 h-5" />
                 </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
