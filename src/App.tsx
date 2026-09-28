import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SectorsSection } from './components/SectorsSection';
import { WhyArraSection } from './components/WhyArraSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { RfpModal } from './components/RfpModal';
import { INITIAL_PHONE_NUMBERS } from './data/companyData';
import { PhoneNumber } from './types';

export default function App() {
  // Phone numbers with local persistence
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>(() => {
    try {
      const saved = localStorage.getItem('arra_phone_numbers');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading saved phone numbers:', e);
    }
    return INITIAL_PHONE_NUMBERS;
  });

  const handleUpdatePhoneNumbers = (updated: PhoneNumber[]) => {
    setPhoneNumbers(updated);
    try {
      localStorage.setItem('arra_phone_numbers', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving phone numbers:', e);
    }
  };

  // RFP Modal state
  const [rfpOpen, setRfpOpen] = useState(false);
  const [rfpInitialService, setRfpInitialService] = useState('إنشاء وتطوير الطرق');

  const handleOpenRfp = (serviceName?: string) => {
    if (serviceName) {
      setRfpInitialService(serviceName);
    }
    setRfpOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800 flex flex-col font-['Cairo',sans-serif] selection:bg-[#C5A059]/30 selection:text-[#08321F]">
      {/* Sticky Corporate Header */}
      <Header
        onOpenRfp={() => handleOpenRfp()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenRfp={() => handleOpenRfp()}
        />

        {/* About Us Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection
          onSelectServiceForRfp={(serviceTitle) => handleOpenRfp(serviceTitle)}
        />

        {/* Projects Showcase (Sudan Infrastructure Only) */}
        <ProjectsSection
          onOpenRfpForProject={(projectName) => handleOpenRfp(projectName)}
        />

        {/* Sectors Section */}
        <SectorsSection />

        {/* Why ARRA Section */}
        <WhyArraSection />

        {/* Vision & Mission Section */}
        <VisionMissionSection />

        {/* Contact Section (Exact 4 phone cards, direct call & WhatsApp, no invented info) */}
        <ContactSection
          phoneNumbers={phoneNumbers}
          onUpdatePhoneNumbers={handleUpdatePhoneNumbers}
          onOpenRfp={() => handleOpenRfp()}
        />
      </main>

      {/* Footer */}
      <Footer phoneNumbers={phoneNumbers} />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions
        primaryPhone={phoneNumbers[0] || INITIAL_PHONE_NUMBERS[0]}
      />

      {/* Request Services / RFP Dialog */}
      <RfpModal
        isOpen={rfpOpen}
        onClose={() => setRfpOpen(false)}
        initialService={rfpInitialService}
      />
    </div>
  );
}
