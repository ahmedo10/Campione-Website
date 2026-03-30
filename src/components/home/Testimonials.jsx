const ratingStats = [
  { label:'4.9★ App Store',   icon:'fa-brands fa-apple',       color:'#F0F2F8' },
  { label:'4.8★ Google Play', icon:'fa-brands fa-google-play', color:'#00E096' },
  { label:'+1200 avis',       icon:'fa-solid fa-star',         color:'#F59E0B' },
  { label:'+500 clubs',       icon:'fa-solid fa-building',     color:'#00D4FF' },
];

const items = [
  { initials:'KB', name:'Karim Belhaj',    role:'Gérant, Complex Sport Tunis',   color:'#00D4FF', text:"Depuis Campione, notre taux d'occupation a augmenté de 40%. Les réservations en ligne ont remplacé les appels. Un gain de temps énorme." },
  { initials:'SM', name:'Sonia Mansouri',  role:'Joueuse de padel, Sfax',        color:'#FF3366', text:"Je réserve en 30 secondes. Le paiement partagé avec mes amis est génial. Campione a changé ma façon de jouer." },
  { initials:'YT', name:'Youssef Trabelsi',role:'Coach, Sousse Football Academy',color:'#00E096', text:"Le tableau de bord est très complet. Réservations, revenus, stats en temps réel. Je recommande à tous les clubs." },
];

export default function Testimonials() {
  return (
    <section className="section" style={{background:'#080C1A'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:'48px'}}>
          <div className="section-label" style={{background:'rgba(0,224,150,0.1)',border:'1px solid rgba(0,224,150,0.25)',color:'#00E096',margin:'0 auto 20px'}}>
            Témoignages
          </div>
          <h2 className="section-title" style={{margin:'0 auto 16px'}}>Ils nous font confiance</h2>
          <p className="section-sub" style={{margin:'0 auto'}}>Découvrez ce que nos utilisateurs pensent de Campione</p>
        </div>

        {/* Scrolling stats bar */}
        <div style={{display:'flex',justifyContent:'center',gap:'8px',flexWrap:'wrap',marginBottom:'56px'}}>
          {ratingStats.map((r,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 20px',borderRadius:'100px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
              <i className={r.icon} style={{color:r.color,fontSize:'16px'}} />
              <span style={{fontSize:'14px',fontWeight:700,color:'#F0F2F8'}}>{r.label}</span>
            </div>
          ))}
        </div>

        <div className="grid-3">
          {items.map((t, i) => (
            <div key={i} className="card" style={{display:'flex',flexDirection:'column',gap:'0'}}>
              <div style={{height:'3px',borderRadius:'2px',background:`linear-gradient(90deg,${t.color},transparent)`,marginBottom:'24px'}} />
              <div style={{display:'flex',gap:'3px',marginBottom:'16px'}}>
                {[1,2,3,4,5].map(j => <i key={j} className="fa-solid fa-star" style={{color:'#F59E0B',fontSize:'13px'}} />)}
              </div>
              <p style={{fontSize:'15px',color:'#8892A4',lineHeight:1.75,flex:1,marginBottom:'24px'}}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',paddingTop:'20px',borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                <div style={{width:'44px',height:'44px',borderRadius:'50%',background:`linear-gradient(135deg,${t.color},${t.color}80)`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'14px',color:'#080C1A',flexShrink:0}}>
                  {t.initials}
                </div>
                <div>
                  <p style={{fontSize:'14px',fontWeight:600,color:'#F0F2F8'}}>{t.name}</p>
                  <p style={{fontSize:'12px',color:'#4A5568'}}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
