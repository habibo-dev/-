import { useEffect, useRef } from 'react';
import { LangProvider } from './hooks/useLang';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import Services from './components/Services';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import VisaSection from './components/VisaSection';
import UmrahSection from './components/UmrahSection';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function AppContent() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const el = mainRef.current;
    if (el) {
      const reveals = el.querySelectorAll('.reveal');
      reveals.forEach((r) => observer.observe(r));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BookingWidget />
        <div className="h-16 sm:h-20" /> {/* Spacer after booking widget */}
        <Services />
        <Packages />
        <Destinations />
        <VisaSection />
        <UmrahSection />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}
