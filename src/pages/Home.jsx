import React from 'react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/Services/Services';
import { VideoIntro } from '../components/home/VideoIntro';
import { AboutValues } from '../components/home/AboutValues';
import { FunFacts } from '../components/home/FunFacts';
import { OutsourcingCTA } from '../components/home/OutsourcingCTA';
import { EventSchedule } from '../components/home/EventSchedule';
import { Testimonials } from '../components/home/Testimonials';
import { HomeContact } from '../components/home/HomeContact';

export function Home() {
  return (
    <main className="font-sans text-slate-900">
      <Hero />
      <Services />
      <VideoIntro />
      <AboutValues />
      <FunFacts />
      <OutsourcingCTA />
      <EventSchedule />
      <Testimonials />
      <HomeContact />
    </main>
  );
}
