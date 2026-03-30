import Link from 'next/link';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export const metadata = { title: 'FAQ | Campione', description: 'Réponses aux questions fréquentes sur Campione.' };

export default function FAQPage() {
  return (
    <>
      <div style={{background:'#0E1428',paddingTop:'120px',paddingBottom:'60px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
        <div className="container">
          <p style={{fontSize:'13px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#F472B6',marginBottom:'12px'}}>FAQ</p>
          <h1 style={{fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:900,letterSpacing:'-0.03em',color:'#F0F2F8',marginBottom:'16px'}}>
            Questions <span style={{background:'linear-gradient(135deg,#00D4FF,#FF3366)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>fréquentes</span>
          </h1>
          <nav style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'#4A5568'}}>
            <Link href="/" style={{color:'#8892A4'}}>Accueil</Link>
            <i className="fa-solid fa-chevron-right" style={{fontSize:'10px'}} />
            <span style={{color:'#F0F2F8'}}>FAQ</span>
          </nav>
        </div>
      </div>
      <FAQ />
      <CTA />
    </>
  );
}
