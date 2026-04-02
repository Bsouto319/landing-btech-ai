import { useEffect } from 'react';
import { initializeAnalytics } from '../utils/analytics';
import Hero from './Hero';
import Problems from './Problems';
import Solutions from './Solutions';
import DemoVideo from './DemoVideo';
import Features from './Features';
import Pricing from './Pricing';
import CTA from './CTA';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';

export default function Layout() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Problems />
      <Solutions />
      <DemoVideo />
      <Features />
      <Pricing />
      <CTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
