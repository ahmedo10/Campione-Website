import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Features from '@/components/home/Features';
import Benefits from '@/components/home/Benefits';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
