import Link from 'next/link';

const partners = [
  { initials:'SC', name:'Sport Club',  color:'#00D4FF' },
  { initials:'AS', name:'AS Tunis',    color:'#FF3366' },
  { initials:'CT', name:'Club Tennis', color:'#00E096' },
  { initials:'FC', name:'FC Sousse',   color:'#F59E0B' },
];

export default function Hero() {
  return (
    <section style={{
      minHeight:'100vh', display:'flex', alignItems:'center',
      background:'linear-gradient(160deg,#080C1A 0%,#0E1428 60%,#080C1A 100%)',
      position:'relative', overflow:'hidden', paddingTop:'72px',
    }}>

      {/* ── Animated background orbs ── */}
      <div className="float-slow" style={{position:'absolute',top:'-10%',right:'-5%',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,255,0.12) 0%,transparent 65%)',pointerEvents:'none',filter:'blur(40px)'}} />
      <div className="float" style={{position:'absolute',bottom:'-10%',left:'-5%',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,51,102,0.08) 0%,transparent 65%)',pointerEvents:'none',filter:'blur(40px)'}} />

      {/* ── Dot grid ── */}
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)',backgroundSize:'32px 32px',pointerEvents:'none'}} />

      {/* ── Floating particles ── */}
      {[
        {size:6,  top:'20%', left:'10%', color:'#00D4FF', dur:'7s',  delay:'0s'},
        {size:4,  top:'60%', left:'5%',  color:'#FF3366', dur:'9s',  delay:'1s'},
        {size:8,  top:'35%', left:'85%', color:'#00E096', dur:'6s',  delay:'2s'},
        {size:5,  top:'75%', left:'80%', color:'#F59E0B', dur:'8s',  delay:'0.5s'},
        {size:4,  top:'15%', left:'70%', color:'#A78BFA', dur:'10s', delay:'3s'},
        {size:6,  top:'85%', left:'30%', color:'#00D4FF', dur:'7.5s',delay:'1.5s'},
      ].map((p,i)=>(
        <div key={i} className="particle" style={{
          width:`${p.size}px`, height:`${p.size}px`,
          top:p.top, left:p.left,
          background:p.color,
          boxShadow:`0 0 ${p.size*2}px ${p.color}`,
          animationDuration:p.dur, animationDelay:p.delay,
        }} />
      ))}

      {/* ── Spinning ring decoration ── */}
      <div className="spin-slow" style={{position:'absolute',top:'15%',right:'8%',width:'120px',height:'120px',borderRadius:'50%',border:'1px dashed rgba(0,212,255,0.2)',pointerEvents:'none'}} />
      <div className="spin-reverse" style={{position:'absolute',top:'15%',right:'8%',width:'80px',height:'80px',borderRadius:'50%',border:'1px dashed rgba(255,51,102,0.15)',margin:'20px',pointerEvents:'none'}} />

      <div className="container" style={{position:'relative',zIndex:1,padding:'80px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>

          {/* ── Left content ── */}
          <div>
            <div className="reveal visible section-label" style={{background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'#00D4FF',marginBottom:'24px'}}>
              <span className="blink" style={{width:'6px',height:'6px',borderRadius:'50%',background:'#00D4FF',display:'inline-block',marginRight:'8px'}} />
              Plateforme N°1 en Tunisie
            </div>

            <h1 className="reveal visible d1" style={{fontSize:'clamp(2.5rem,5.5vw,4rem)',fontWeight:900,letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'24px',color:'#F0F2F8'}}>
              Réservez vos{' '}
              <span className="shimmer-text">terrains de sport</span>
              {' '}en un clic
            </h1>

            <p className="reveal visible d2" style={{fontSize:'18px',color:'#8892A4',lineHeight:1.75,marginBottom:'40px',maxWidth:'500px'}}>
              Campione connecte joueurs et complexes sportifs en Tunisie. Réservation instantanée, paiement sécurisé, gestion d&apos;équipe — sur mobile et web.
            </p>

            <div className="reveal visible d3" style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'48px'}}>
              <Link href="/contact" className="btn-primary glow-pulse">
                <i className="fa-solid fa-mobile-screen-button" />
                Télécharger l&apos;app
              </Link>
              <Link href="/contact" className="btn-ghost">
                <i className="fa-solid fa-play" style={{color:'#00D4FF',fontSize:'12px'}} />
                Voir la démo
              </Link>
            </div>

            {/* Trust row */}
            <div className="reveal visible d4" style={{display:'flex',alignItems:'center',gap:'24px',flexWrap:'wrap',marginBottom:'40px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{display:'flex'}}>
                  {['#00D4FF','#FF3366','#00E096','#F59E0B'].map((c,i)=>(
                    <div key={i} className="pop-in" style={{width:'34px',height:'34px',borderRadius:'50%',background:c,border:'2px solid #080C1A',marginLeft:i>0?'-10px':0,display:'flex',alignItems:'center',justifyContent:'center',animationDelay:`${i*0.1}s`}}>
                      <i className="fa-solid fa-user" style={{color:'#080C1A',fontSize:'12px'}} />
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{display:'flex',gap:'2px',marginBottom:'2px'}}>
                    {[1,2,3,4,5].map(i=><i key={i} className="fa-solid fa-star" style={{color:'#F59E0B',fontSize:'11px'}} />)}
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

            {/* Partners */}
            <div className="reveal visible d5" style={{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:'28px'}}>
              <p style={{fontSize:'12px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',color:'#4A5568',marginBottom:'16px'}}>Partenaires</p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                {partners.map((p,i)=>(
                  <div key={i} className="hover-lift" style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px 14px',borderRadius:'12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',animationDelay:`${i*0.1}s`}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'8px',background:`linear-gradient(135deg,${p.color},${p.color}80)`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'11px',color:'#080C1A'}}>
                      {p.initials}
                    </div>
                    <span style={{fontSize:'13px',fontWeight:500,color:'#8892A4'}}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: animated dashboard mockup ── */}
          <div style={{position:'relative'}}>

            {/* Ripple rings behind the card */}
            <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'300px',height:'300px',pointerEvents:'none'}}>
              <div className="ripple-ring" style={{position:'absolute',inset:0}} />
              <div className="ripple-ring" style={{position:'absolute',inset:0}} />
              <div className="ripple-ring" style={{position:'absolute',inset:0}} />
            </div>

            {/* Floating card — reservation */}
            <div className="float-card" style={{position:'absolute',top:'8%',left:'-48px',zIndex:10,background:'rgba(14,20,40,0.95)',border:'1px solid rgba(0,212,255,0.25)',borderRadius:'16px',padding:'14px 18px',backdropFilter:'blur(12px)',boxShadow:'0 8px 32px rgba(0,0,0,0.5)',display:'flex',alignItems:'center',gap:'12px',animationDelay:'0.4s'}}>
              <div style={{width:'40px',height:'40px',borderRadius:'12px',background:'rgba(0,212,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
                <i className="fa-solid fa-calendar-check" style={{color:'#00D4FF'}} />
                <span className="blink" style={{position:'absolute',top:'-3px',right:'-3px',width:'8px',height:'8px',borderRadius:'50%',background:'#00E096'}} />
              </div>
              <div>
                <p style={{fontSize:'11px',color:'#8892A4'}}>Nouvelle réservation</p>
                <p style={{fontSize:'14px',fontWeight:700,color:'#F0F2F8'}}>Terrain 3 · 18h–19h</p>
              </div>
            </div>

            {/* Floating card — revenue */}
            <div className="float-card-slow" style={{position:'absolute',bottom:'12%',right:'-48px',zIndex:10,background:'rgba(14,20,40,0.95)',border:'1px solid rgba(0,224,150,0.25)',borderRadius:'16px',padding:'14px 18px',backdropFilter:'blur(12px)',boxShadow:'0 8px 32px rgba(0,0,0,0.5)',animationDelay:'0.6s'}}>
              <p style={{fontSize:'11px',color:'#8892A4',marginBottom:'4px'}}>Revenus ce mois</p>
              <p style={{fontSize:'22px',fontWeight:900,color:'#F0F2F8',letterSpacing:'-0.02em'}}>12 800 DT</p>
              <p style={{fontSize:'12px',color:'#00E096',display:'flex',alignItems:'center',gap:'4px',marginTop:'4px'}}>
                <i className="fa-solid fa-arrow-trend-up" /> +23% ce mois
              </p>
            </div>

            {/* Floating badge — users */}
            <div className="orbit" style={{position:'absolute',top:'40%',right:'-32px',zIndex:10,background:'rgba(14,20,40,0.95)',border:'1px solid rgba(255,51,102,0.25)',borderRadius:'12px',padding:'10px 14px',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',gap:'8px'}}>
              <i className="fa-solid fa-users" style={{color:'#FF3366',fontSize:'14px'}} />
              <span style={{fontSize:'13px',fontWeight:700,color:'#F0F2F8'}}>847 en ligne</span>
            </div>

            {/* Main frame */}
            <div className="reveal-scale visible glow-pulse" style={{borderRadius:'24px',padding:'3px',background:'linear-gradient(135deg,rgba(0,212,255,0.4),rgba(255,51,102,0.2))',boxShadow:'0 32px 80px rgba(0,0,0,0.6)'}}>
              <div style={{borderRadius:'22px',overflow:'hidden',background:'#0E1428',minHeight:'420px',display:'flex',flexDirection:'column',padding:'24px',gap:'16px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:'14px',fontWeight:700,color:'#F0F2F8'}}>Dashboard Campione</span>
                  <span className="blink" style={{fontSize:'11px',color:'#00E096',background:'rgba(0,224,150,0.1)',padding:'3px 10px',borderRadius:'100px'}}>● En ligne</span>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                  {[{l:'Réservations',v:'142',c:'#00D4FF'},{l:'Revenus',v:'8 400 DT',c:'#00E096'}].map((item,i)=>(
                    <div key={i} style={{background:'rgba(255,255,255,0.04)',borderRadius:'12px',padding:'14px'}}>
                      <p style={{fontSize:'11px',color:'#4A5568',marginBottom:'6px'}}>{item.l}</p>
                      <p style={{fontSize:'18px',fontWeight:800,color:item.c}}>{item.v}</p>
                    </div>
                  ))}
                </div>
                {[{l:'Football',v:80},{l:'Padel',v:55},{l:'Tennis',v:90},{l:'Basket',v:40}].map((item,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'11px',color:'#4A5568',width:'55px'}}>{item.l}</span>
                    <div style={{flex:1,height:'6px',borderRadius:'3px',background:'rgba(255,255,255,0.06)'}}>
                      <div className="anim-bar active" style={{'--bar-w':`${item.v}%`,animationDelay:`${i*0.2}s`}} />
                    </div>
                    <span style={{fontSize:'11px',color:'#8892A4',width:'30px',textAlign:'right'}}>{item.v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .hero-cols{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
