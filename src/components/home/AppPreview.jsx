import Reveal from '@/components/Reveal';

const bullets = [
  { icon:'fa-solid fa-bolt',             color:'#00D4FF', text:'Réservation en 30 secondes, paiement sécurisé intégré' },
  { icon:'fa-solid fa-bell',             color:'#FF3366', text:'Notifications en temps réel pour vos matchs et réservations' },
  { icon:'fa-solid fa-user-group',       color:'#00E096', text:'Invitez vos amis et gérez le paiement partagé facilement' },
  { icon:'fa-solid fa-map-location-dot', color:'#F59E0B', text:'Trouvez les terrains disponibles autour de vous sur la carte' },
];

const screens = [
  { title:'Accueil',      sub:'Terrains proches',  accent:'#00D4FF' },
  { title:'Réservation',  sub:'Choisir un créneau',accent:'#FF3366' },
  { title:'Paiement',     sub:'Partager les frais', accent:'#00E096' },
];

export default function AppPreview() {
  return (
    <section className="section" style={{background:'#080C1A',position:'relative',overflow:'hidden'}}>

      {/* Background glow */}
      <div className="float-slow" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'800px',height:'500px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(0,212,255,0.06),rgba(255,51,102,0.04),transparent 70%)',pointerEvents:'none',filter:'blur(60px)'}} />

      {/* Particles */}
      {[
        {size:5, top:'15%', left:'15%', color:'#00D4FF', dur:'8s',  delay:'0s'},
        {size:4, top:'70%', left:'20%', color:'#FF3366', dur:'10s', delay:'2s'},
        {size:6, top:'30%', left:'75%', color:'#00E096', dur:'7s',  delay:'1s'},
        {size:4, top:'80%', left:'70%', color:'#F59E0B', dur:'9s',  delay:'3s'},
      ].map((p,i)=>(
        <div key={i} className="particle" style={{width:`${p.size}px`,height:`${p.size}px`,top:p.top,left:p.left,background:p.color,boxShadow:`0 0 ${p.size*2}px ${p.color}`,animationDuration:p.dur,animationDelay:p.delay}} />
      ))}

      <div className="container" style={{position:'relative',zIndex:1}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>

          {/* LEFT: 3 stacked phone mockups */}
          <Reveal type="left">
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end',gap:'16px',position:'relative',minHeight:'420px'}}>
              {/* Spinning ring */}
              <div className="spin-slow" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'340px',height:'340px',borderRadius:'50%',border:'1px dashed rgba(0,212,255,0.1)',pointerEvents:'none'}} />

              {screens.map((s,i)=>(
                <div key={i} className="float" style={{
                  width:'140px',
                  borderRadius:'28px',
                  padding:'3px',
                  background:`linear-gradient(135deg,${s.accent},${s.accent}60)`,
                  boxShadow:`0 20px 50px rgba(0,0,0,0.5)`,
                  transform: i===1 ? 'translateY(-24px) scale(1.05)' : i===0 ? 'translateY(12px) rotate(-4deg)' : 'translateY(12px) rotate(4deg)',
                  zIndex: i===1 ? 2 : 1,
                  flexShrink:0,
                  animationDelay:`${i*0.8}s`,
                  animationDuration: i===1 ? '4s' : '5s',
                }}>
                  <div style={{borderRadius:'26px',background:'#080C1A',padding:'16px 12px',minHeight:'280px',display:'flex',flexDirection:'column',gap:'10px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <span style={{fontSize:'10px',fontWeight:700,color:'#F0F2F8'}}>{s.title}</span>
                      <span className="blink" style={{fontSize:'9px',color:s.accent}}>●</span>
                    </div>
                    <div style={{background:`${s.accent}12`,borderRadius:'8px',padding:'8px'}}>
                      <p style={{fontSize:'8px',color:'#4A5568',marginBottom:'3px'}}>{s.sub}</p>
                      <p style={{fontSize:'11px',fontWeight:700,color:s.accent}}>Campione</p>
                    </div>
                    {[1,2,3].map(j=>(
                      <div key={j} style={{height:'28px',borderRadius:'6px',background:'rgba(255,255,255,0.04)',display:'flex',alignItems:'center',padding:'0 8px',gap:'6px'}}>
                        <div style={{width:'16px',height:'16px',borderRadius:'4px',background:`${s.accent}20`}} />
                        <div style={{flex:1,height:'4px',borderRadius:'2px',background:'rgba(255,255,255,0.06)'}} />
                      </div>
                    ))}
                    <div style={{marginTop:'auto',background:`linear-gradient(135deg,${s.accent},${s.accent}80)`,borderRadius:'8px',padding:'8px',textAlign:'center'}}>
                      <span style={{fontSize:'9px',fontWeight:700,color:'#080C1A'}}>Continuer</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT: text + bullets + CTAs */}
          <Reveal type="right">
            <div>
              <div className="section-label" style={{background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'#00D4FF',marginBottom:'20px'}}>
                Application mobile
              </div>
              <h2 className="section-title" style={{marginBottom:'16px'}}>
                L&apos;app qui révolutionne le sport en Tunisie
              </h2>
              <p style={{fontSize:'16px',color:'#8892A4',lineHeight:1.75,marginBottom:'36px'}}>
                Disponible sur iOS et Android, Campione met la puissance d&apos;une plateforme professionnelle dans votre poche.
              </p>

              <div style={{display:'flex',flexDirection:'column',gap:'18px',marginBottom:'40px'}}>
                {bullets.map((b,i)=>(
                  <Reveal key={i} type="right" delay={i+1}>
                    <div style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                      <div className="float" style={{width:'40px',height:'40px',borderRadius:'10px',background:`${b.color}15`,border:`1px solid ${b.color}25`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,animationDelay:`${i*0.6}s`,animationDuration:'5s'}}>
                        <i className={b.icon} style={{color:b.color,fontSize:'15px'}} />
                      </div>
                      <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.65,paddingTop:'10px'}}>{b.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                {[
                  {icon:'fa-brands fa-apple',      label:'App Store',   sub:'Télécharger sur'},
                  {icon:'fa-brands fa-google-play', label:'Google Play', sub:'Disponible sur'},
                ].map((btn,i)=>(
                  <button key={i} className="hover-lift" style={{display:'flex',alignItems:'center',gap:'10px',padding:'13px 22px',borderRadius:'12px',background:'#F0F2F8',border:'none',cursor:'pointer'}}>
                    <i className={btn.icon} style={{fontSize:'22px',color:'#080C1A'}} />
                    <div style={{textAlign:'left'}}>
                      <p style={{fontSize:'10px',color:'#4A5568',lineHeight:1}}>{btn.sub}</p>
                      <p style={{fontSize:'14px',fontWeight:700,color:'#080C1A',lineHeight:1.3}}>{btn.label}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
