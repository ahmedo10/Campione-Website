const steps = [
  { n:'01', icon:'fa-solid fa-map-location-dot', color:'#00D4FF', title:'Trouvez un terrain',  desc:'Parcourez les complexes disponibles près de chez vous. Filtrez par sport, horaire et prix.' },
  { n:'02', icon:'fa-solid fa-calendar-check',   color:'#FF3366', title:'Réservez en 1 clic',  desc:'Sélectionnez votre créneau et confirmez. Paiement sécurisé en ligne ou sur place.' },
  { n:'03', icon:'fa-solid fa-user-group',        color:'#00E096', title:'Invitez vos amis',    desc:'Partagez la réservation, gérez les participants et le paiement partagé automatiquement.' },
];

export default function HowItWorks() {
  return (
    <section className="section" style={{background:'#0E1428',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,right:0,width:'400px',height:'400px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,255,0.07),transparent 70%)',pointerEvents:'none'}} />

      <div className="container" style={{position:'relative',zIndex:1}}>
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <div className="section-label" style={{background:'rgba(255,51,102,0.1)',border:'1px solid rgba(255,51,102,0.25)',color:'#FF3366',margin:'0 auto 20px'}}>
            Comment ça marche
          </div>
          <h2 className="section-title" style={{margin:'0 auto 16px'}}>Simple comme 1, 2, 3</h2>
          <p className="section-sub" style={{margin:'0 auto'}}>De la recherche au coup de sifflet, Campione gère tout</p>
        </div>

        <div className="grid-3" style={{position:'relative',marginBottom:'64px'}}>
          <div style={{position:'absolute',top:'52px',left:'calc(16.67% + 16px)',right:'calc(16.67% + 16px)',height:'1px',background:'linear-gradient(90deg,transparent,rgba(0,212,255,0.3),rgba(255,51,102,0.3),transparent)',display:'none'}} className="connector" />
          {steps.map((s, i) => (
            <div key={i} className="card" style={{position:'relative',paddingTop:'48px'}}>
              <div style={{position:'absolute',top:'-18px',left:'28px',width:'44px',height:'44px',borderRadius:'12px',background:`linear-gradient(135deg,${s.color},${s.color}99)`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:'15px',color:'#080C1A',boxShadow:`0 8px 24px ${s.color}40`}}>
                {s.n}
              </div>
              <div className="icon-box" style={{background:`${s.color}15`,border:`1px solid ${s.color}25`,marginBottom:'16px'}}>
                <i className={s.icon} style={{color:s.color}} />
              </div>
              <h3 style={{fontSize:'18px',fontWeight:700,color:'#F0F2F8',marginBottom:'10px'}}>{s.title}</h3>
              <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.7}}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* App preview banner */}
        <div style={{borderRadius:'24px',background:'linear-gradient(135deg,#0E1428,#141B35)',border:'1px solid rgba(255,255,255,0.08)',padding:'48px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'center',overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',top:0,left:0,width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,51,102,0.07),transparent 70%)',pointerEvents:'none'}} />

          {/* Left text */}
          <div style={{position:'relative',zIndex:1}}>
            <div className="section-label" style={{background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'#00D4FF',marginBottom:'20px'}}>
              Application mobile
            </div>
            <h3 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:900,color:'#F0F2F8',letterSpacing:'-0.025em',lineHeight:1.2,marginBottom:'16px'}}>
              Disponible sur iOS &amp; Android
            </h3>
            <p style={{fontSize:'15px',color:'#8892A4',lineHeight:1.7,marginBottom:'32px'}}>
              Téléchargez l&apos;application Campione et réservez vos terrains où que vous soyez, à tout moment.
            </p>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <button style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 20px',borderRadius:'12px',background:'#F0F2F8',border:'none',cursor:'pointer'}}>
                <i className="fa-brands fa-apple" style={{fontSize:'22px',color:'#080C1A'}} />
                <div style={{textAlign:'left'}}>
                  <p style={{fontSize:'10px',color:'#4A5568',lineHeight:1}}>Télécharger sur</p>
                  <p style={{fontSize:'14px',fontWeight:700,color:'#080C1A',lineHeight:1.3}}>App Store</p>
                </div>
              </button>
              <button style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 20px',borderRadius:'12px',background:'#F0F2F8',border:'none',cursor:'pointer'}}>
                <i className="fa-brands fa-google-play" style={{fontSize:'20px',color:'#080C1A'}} />
                <div style={{textAlign:'left'}}>
                  <p style={{fontSize:'10px',color:'#4A5568',lineHeight:1}}>Disponible sur</p>
                  <p style={{fontSize:'14px',fontWeight:700,color:'#080C1A',lineHeight:1.3}}>Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div style={{display:'flex',justifyContent:'center',position:'relative',zIndex:1}}>
            <div style={{width:'200px',borderRadius:'32px',padding:'3px',background:'linear-gradient(135deg,#00D4FF,#FF3366)',boxShadow:'0 24px 60px rgba(0,0,0,0.5)'}}>
              <div style={{borderRadius:'30px',background:'#080C1A',padding:'20px 16px',minHeight:'360px',display:'flex',flexDirection:'column',gap:'12px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:'11px',fontWeight:700,color:'#F0F2F8'}}>Campione</span>
                  <span style={{fontSize:'10px',color:'#00E096'}}>●</span>
                </div>
                <div style={{background:'rgba(0,212,255,0.08)',borderRadius:'10px',padding:'10px'}}>
                  <p style={{fontSize:'9px',color:'#4A5568',marginBottom:'4px'}}>Prochaine réservation</p>
                  <p style={{fontSize:'12px',fontWeight:700,color:'#F0F2F8'}}>Terrain Padel</p>
                  <p style={{fontSize:'10px',color:'#00D4FF'}}>Demain · 19h00</p>
                </div>
                {['Football · 14h','Tennis · 16h','Padel · 18h'].map((t,i)=>(
                  <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 10px',borderRadius:'8px',background:'rgba(255,255,255,0.04)'}}>
                    <span style={{fontSize:'10px',color:'#8892A4'}}>{t}</span>
                    <span style={{fontSize:'9px',color:'#00E096',background:'rgba(0,224,150,0.1)',padding:'2px 6px',borderRadius:'4px'}}>Libre</span>
                  </div>
                ))}
                <div style={{marginTop:'auto',background:'linear-gradient(135deg,#00D4FF,#00A8CC)',borderRadius:'10px',padding:'10px',textAlign:'center'}}>
                  <span style={{fontSize:'11px',fontWeight:700,color:'#080C1A'}}>Réserver maintenant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(min-width:1024px){.connector{display:block !important;}}`}</style>
    </section>
  );
}
