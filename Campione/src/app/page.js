import Hero from '@/components/home/Hero';
import Brands from '@/components/home/Brands';
import Stats from '@/components/home/Stats';
import Features from '@/components/home/Features';
import Sports from '@/components/home/Sports';
import HowItWorks from '@/components/home/HowItWorks';
import AppPreview from '@/components/home/AppPreview';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Stats />
      <Features />
      <Sports />
      <HowItWorks />
      <AppPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
