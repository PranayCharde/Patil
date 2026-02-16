import React from 'react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/Services/Services';
import { AboutValues } from '../components/home/AboutValues';
import { ConsultingCTA } from '../components/home/ConsultingCTA';
import { EnterpriseSupport } from '../components/home/EnterpriseSupport';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutValues />
      <ConsultingCTA />
      <EnterpriseSupport />
    </main>
  );
}
