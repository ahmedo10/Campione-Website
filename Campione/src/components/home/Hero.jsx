import Link from 'next/link';

const partners = [
  { initials: 'SC', name: 'Sport Club',    color: '#00D4FF' },
  { initials: 'AS', name: 'AS Tunis',      color: '#FF3366' },
  { initials: 'CT', name: 'Club Tennis',   color: '#00E096' },
  { initials: 'FC', name: 'FC Sousse',     color: '#F59E0B' },
];

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(160deg, #080C1A 0%, #0E1428 60%, #080C1A 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
    }}>
      <div style={{position:'absolute',top:'-10%',right:'-5%',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 65%)',pointerEvents:'none'}} />
      <div style={{position:'absolute',bottom:'-10%',left:'-5%',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle, rgba(255,51,102,0.08) 0%, transparent 65%)',pointerEvents:'none'}} />
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',backgroundSize:'32px 32px',pointerEvents:'none'}} />

      <div className="container" style={{position:'relative',zIndex:1,padding:'80px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>

          {/* Left */}
          <div>
            <div className="section-label" style={{background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'#00D4FF'}}>
              <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#00D4FF',animation:'pulse 2s infinite'}} />
              Plateforme N°1 en Tunisie
            </div>

            <h1 style={{fontSize:'clamp(2.5rem,5.5vw,4rem)',fontWeight:900,letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'24px',color:'#F0F2F8'}}>
              Réservez vos{' '}
              <span style={{background:'linear-gradient(135deg,#00D4FF,#FF3366)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                terrains de sport
              </span>
              {' '}en un clic
            </h1>

            <p style={{fontSize:'18px',color:'#8892A4',lineHeight:1.75,marginBottom:'40px',maxWidth:'500px'}}>
              Campione connecte joueurs et complexes sportifs en Tunisie. Réservation instantanée, paiement sécurisé, gestion d&apos;équipe — sur mobile et web.
            </p>

            <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'48px'}}>
              <Link href="/contact" className="btn-primary">
                <i className="fa-solid fa-mobile-screen-button" />
                Télécharger l&apos;app
              </Link>
              <Link href="/contact" className="btn-ghost">
                <i className="fa-solid fa-play" style={{color:'#00D4FF',fontSize:'12px'}} />
                Voir la démo
              </Link>
            </div>

            {/* Trust row */}
            <div style={{display:'flex',alignItems:'center',gap:'24px',flexWrap:'wrap',marginBottom:'40px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{display:'flex'}}>
                  {['#00D4FF','#FF3366','#00E096','#F59E0B'].map((c,i) => (
                    <div key={i} style={{width:'34px',height:'34px',borderRadius:'50%',background:c,border:'2px solid #080C1A',marginLeft: i > 0 ? '-10px' : 0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <i className="fa-solid fa-user" style={{color:'#080C1A',fontSize:'12px'}} />
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{display:'flex',gap:'2px',marginBottom:'2px'}}>
                    {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star" style={{color:'#F59E0B',fontSize:'11px'}} />)}
                  </div>
                  <p style={{fontSize:'12px',color:'#4A5568'}}><span style={{color:'#F0F2F8',fontWeight:600}}>25 000+</span> utilisateurs</p>
                </div>
              </div>
              <div style={{width:'1px',height:'36px',background:'rgba(255,255,255,0.08)'}} />
              <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <i className="fa-solid fa-shield-check" style={{color:'#00E096',fontSize:'18px'}} />
                <div>
                  <p style={{fontSize:'13px',fontWeight:600,color:'#F0F2F8'}}>Paiement sécurisé</p>
                  <p style={{fontSize:'11px',color:'#4A5568'}}>Cryptage SSL 256-bit</p>
                </div>
              </div>
            </div>

            {/* Partners strip */}
            <div style={{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:'28px'}}>
              <p style={{fontSize:'12px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',color:'#4A5568',marginBottom:'16px'}}>Partenaires</p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                {partners.map((p, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px 14px',borderRadius:'12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'8px',background:`linear-gradient(135deg,${p.color},${p.color}80)`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'11px',color:'#080C1A',flexShrink:0}}>
                      {p.initials}
                    </div>
                    <span style={{fontSize:'13px',fontWeight:500,color:'#8892A4'}}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{position:'relative'}}>
            <div style={{position:'absolute',top:'10%',left:'-40px',zIndex:10,background:'rgba(14,20,40,0.95)',border:'1px solid rgba(0,212,255,0.2)',borderRadius:'16px',padding:'14px 18px',backdropFilter:'blur(12px)',boxShadow:'0 8px 32px rgba(0,0,0,0.4)',display:'flex',alignItems:'center',gap:'12px'}}>
              <div style={{width:'40px',height:'40px',borderRadius:'12px',background:'rgba(0,212,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <i className="fa-solid fa-calendar-check" style={{color:'#00D4FF'}} />
              </div>
              <div>
                <p style={{fontSize:'11px',color:'#8892A4'}}>Nouvelle réservation</p>
                <p style={{fontSize:'14px',fontWeight:700,color:'#F0F2F8'}}>Terrain 3 · 18h–19h</p>
              </div>
            </div>

            <div style={{position:'absolute',bottom:'15%',right:'-40px',zIndex:10,background:'rgba(14,20,40,0.95)',border:'1px solid rgba(0,224,150,0.2)',borderRadius:'16px',padding:'14px 18px',backdropFilter:'blur(12px)',boxShadow:'0 8px 32px rgba(0,0,0,0.4)'}}>
              <p style={{fontSize:'11px',color:'#8892A4',marginBottom:'4px'}}>Revenus ce mois</p>
              <p style={{fontSize:'22px',fontWeight:900,color:'#F0F2F8',letterSpacing:'-0.02em'}}>12 800 DT</p>
              <p style={{fontSize:'12px',color:'#00E096',display:'flex',alignItems:'center',gap:'4px',marginTop:'4px'}}>
                <i className="fa-solid fa-arrow-trend-up" /> +23% ce mois
              </p>
            </div>

            <div style={{borderRadius:'24px',padding:'3px',background:'linear-gradient(135deg,rgba(0,212,255,0.4),rgba(255,51,102,0.2))',boxShadow:'0 32px 80px rgba(0,0,0,0.6)'}}>
              <div style={{borderRadius:'22px',overflow:'hidden',background:'#0E1428',minHeight:'420px',display:'flex',flexDirection:'column',padding:'24px',gap:'16px'}}>
                {/* Mock dashboard */}
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:'14px',fontWeight:700,color:'#F0F2F8'}}>Dashboard Campione</span>
                  <span style={{fontSize:'11px',color:'#00E096',background:'rgba(0,224,150,0.1)',padding:'3px 10px',borderRadius:'100px'}}>En ligne</span>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                  {[{l:'Réservations',v:'142',c:'#00D4FF'},{l:'Revenus',v:'8 400 DT',c:'#00E096'}].map((item,i)=>(
                    <div key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'12px',padding:'14px'}}>
                      <p style={{fontSize:'11px',color:'#4A5568',marginBottom:'6px'}}>{item.l}</p>
                      <p style={{fontSize:'18px',fontWeight:800,color:item.c}}>{item.v}</p>
                    </div>
                  ))}
                </div>
                {[80,55,90,40].map((w,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'11px',color:'#4A5568',width:'60px'}}>Terrain {i+1}</span>
                    <div style={{flex:1,height:'6px',borderRadius:'3px',background:'rgba(255,255,255,0.06)'}}>
                      <div style={{width:`${w}%`,height:'100%',borderRadius:'3px',background:`linear-gradient(90deg,#00D4FF,#FF3366)`}} />
                    </div>
                    <span style={{fontSize:'11px',color:'#8892A4',width:'30px',textAlign:'right'}}>{w}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse {
          0%,100% { opacity:1; }
          50% { opacity:0.4; }
        }
      `}</style>
    </section>
  );
}
