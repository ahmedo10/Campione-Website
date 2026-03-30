'use client';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  { q:"Campione est-il gratuit pour les joueurs ?",         a:"Oui, l'application est 100% gratuite pour les joueurs. Réservez, invitez vos amis et utilisez le paiement partagé sans aucun frais." },
  { q:"Comment fonctionne le paiement partagé ?",           a:"Lors de la réservation, invitez vos coéquipiers. Chaque joueur reçoit une notification et paie sa part directement depuis l'app." },
  { q:"Combien de temps dure l'essai gratuit pour les clubs ?", a:"Les clubs bénéficient de 14 jours d'essai complet sans carte bancaire. Accès à toutes les fonctionnalités Club Pro." },
  { q:"Puis-je gérer plusieurs terrains ?",                 a:"Oui. Club Pro permet jusqu'à 10 terrains. Club Elite offre une gestion multi-terrains illimitée." },
  { q:"L'app est disponible sur iOS et Android ?",          a:"Oui, Campione est sur App Store et Google Play. Une version web est aussi disponible pour les gestionnaires de clubs." },
  { q:"Comment les clubs reçoivent leurs paiements ?",      a:"Les paiements sont traités de manière sécurisée. Les fonds sont virés sur le compte bancaire du club chaque semaine." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" style={{background:'#080C1A'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'80px',alignItems:'start'}}>

          {/* Left */}
          <div style={{position:'sticky',top:'100px'}}>
            <div className="section-label" style={{background:'rgba(236,72,153,0.1)',border:'1px solid rgba(236,72,153,0.25)',color:'#F472B6',marginBottom:'20px'}}>
              FAQ
            </div>
            <h2 className="section-title" style={{marginBottom:'16px'}}>Questions fréquentes</h2>
            <p style={{fontSize:'16px',color:'#8892A4',lineHeight:1.7,marginBottom:'32px'}}>
              Vous ne trouvez pas la réponse ?{' '}
              <Link href="/contact" style={{color:'#00D4FF',fontWeight:600}}>Contactez-nous</Link>
            </p>
            <div style={{padding:'20px',borderRadius:'16px',background:'rgba(0,212,255,0.06)',border:'1px solid rgba(0,212,255,0.15)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'8px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'10px',background:'rgba(0,212,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <i className="fa-solid fa-headset" style={{color:'#00D4FF'}} />
                </div>
                <span style={{fontSize:'14px',fontWeight:600,color:'#F0F2F8'}}>Support disponible</span>
              </div>
              <p style={{fontSize:'13px',color:'#8892A4'}}>Réponse en moins de 2h en semaine</p>
            </div>
          </div>

          {/* Right */}
          <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
            {faqs.map((f, i) => (
              <div key={i} style={{borderRadius:'14px',overflow:'hidden',background: open===i ? 'rgba(0,212,255,0.05)' : 'rgba(255,255,255,0.03)',border: open===i ? '1px solid rgba(0,212,255,0.2)' : '1px solid rgba(255,255,255,0.08)',transition:'all 0.2s'}}>
                <button onClick={() => setOpen(open===i ? -1 : i)}
                        style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 20px',textAlign:'left',gap:'16px'}}>
                  <span style={{fontSize:'15px',fontWeight:600,color: open===i ? '#00D4FF' : '#F0F2F8'}}>{f.q}</span>
                  <div style={{width:'28px',height:'28px',borderRadius:'8px',background: open===i ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.05)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transition:'transform 0.3s',transform: open===i ? 'rotate(45deg)' : 'none'}}>
                    <i className="fa-solid fa-plus" style={{color: open===i ? '#00D4FF' : '#4A5568',fontSize:'12px'}} />
                  </div>
                </button>
                {open===i && (
                  <div style={{padding:'0 20px 18px'}}>
                    <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.75}}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.faq-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
