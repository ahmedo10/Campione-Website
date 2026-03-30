import Link from 'next/link';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'Tarifs | Campione',
  description: 'Découvrez nos plans tarifaires pour joueurs et clubs sportifs.',
};

export default function PricingPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/booster-assets/img/breadcrumb-bg.jpg')" }}>
        <div className="container">
          <div className="gt-page-heading">
            <div className="gt-breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Nos <span>Tarifs</span>
              </h1>
            </div>
            <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li><Link href="/">Accueil</Link></li>
              <li><i className="fa-solid fa-chevron-right"></i></li>
              <li>Tarifs</li>
            </ul>
          </div>
        </div>
      </div>

      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
