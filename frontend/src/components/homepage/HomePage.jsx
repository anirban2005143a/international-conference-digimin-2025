"use client"
import React from 'react';
import HeroSection from './sections/HeroSection';
import CountdownTimer from './sections/CountdownTimer';
import AboutSection from './sections/AboutSection';
import KeyThemesSection from './sections/KeyThemesSection';
import CallForPapersSection from './sections/CallForPapersSection';
import ImportantDatesSection from './sections/ImportantDatesSection';
import OrganizersSection from './sections/OrganizersSection';

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CountdownTimer />
      <AboutSection />
      <KeyThemesSection />
      <CallForPapersSection />
      <ImportantDatesSection />
      <OrganizersSection />
    </main>
  );
};

export default HomePage;
