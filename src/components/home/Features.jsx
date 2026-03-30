import Reveal from '@/components/Reveal';

const features = [
  { icon:'fa-solid fa-bolt',        color:'#00D4FF', title:'Réservation instantanée', desc:'Trouvez et réservez votre terrain en moins de 30 secondes. Disponibilités en temps réel.' },
  { icon:'fa-solid fa-wallet',      color:'#00E096', title:'Paiement partagé',        desc:"Divisez automatiquement le coût entre tous les joueurs. Chacun paie sa part depuis l'app." },
  { icon:'fa-solid fa-users-gear',  color:'#FF3366', title:"Gestion d'équipe",        desc:"Invitez vos amis, gérez les présences et communiquez via le chat intégré." },
  { icon:'fa-solid fa-chart-line',  color:'#F59E0B', title:'Tableau de bord',         desc:"Suivez vos revenus, taux d'occupation et statistiques en temps réel." },
  { icon:'fa-solid fa-futbol',      color:'#A78BFA', title:'Multi-sports',            desc:'Football, padel, tennis, basketball... Tous vos sports en un seul endroit.' },
  { icon:'fa-solid fa-bell',        color:'#EC4899', title:'Notifications push',      desc:"Rappels automatiques, confirmations et alertes pour ne jamais manquer un match." },
];

const dashBullets = [
  { icon:'fa-solid fa-chart-pie',    color:'#00D4FF', text:"Statistiques de revenus et taux d'occupation en temps réel" },
  { icon:'fa-solid fa-calendar-days',color:'#FF3366', text:'Calendrier de réservations avec vue journalière, hebdomadaire et mensuelle' },
  { icon:'fa-solid fa-users',        color:'#00E096', text:'Gestion des clients, historique et fidélisation automatique' },
  { icon:'fa-solid fa-gear',         color:'#F59E0B', text:'Configuration des terrains, tarifs et créneaux en quelques clics' },
];

export default function Features() {
  return (
    <section id="features" className="section" style={{background:'#080C1A'}}>
      <div className="container">

        {/* Header */}
        <Reveal type="up" style={{textAlign:'center',marginBottom:'64px'}}>
          <div className="section-label" style={{background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'#00D4FF',margin:'0 auto 20px'}}>
            Fonctionnalités
          </div>
          <h2 className="section-title" style={{margin:'0 auto 16px'}}>Tout ce dont vous avez besoin</h2>
          <p className="section-sub" style={{margin:'0 auto'}}>Une plateforme complète pour gérer vos réservations sportives de A à Z</p>
        </Reveal>

        {/* Cards */}
        <div className="grid-3">
          {features.map((f, i) => (
            <Reveal key={i} type="up" delay={(i % 3) + 1}>
              <div className="card hover-lift" style={{display:'flex',flexDirection:'column',gap:'16px',height:'100%'}}>
                <div className="icon-box" style={{background:`${f.color}15`,border:`1px solid ${f.color}25`,transition:'transform 0.3s'}}>
                  <i className={f.icon} style={{color:f.color}} />
                </div>
                <h3 style={{fontSize:'17px',fontWeight:700,color:'#F0F2F8'}}>{f.title}</h3>
                <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.7}}>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dashboard split */}
        <div style={{marginTop:'80px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'center',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'24px',padding:'48px',overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',top:0,right:0,width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,255,0.07),transparent 70%)',pointerEvents:'none'}} />

          {/* Mock dashboard */}
          <Reveal type="left">
            <div style={{background:'#0E1428',borderRadius:'16px',padding:'24px',border:'1px solid rgba(255,255,255,0.08)',display:'flex',flexDirection:'column',gap:'16px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:'13px',fontWeight:700,color:'#F0F2F8'}}>Vue d&apos;ensemble</span>
                <span style={{fontSize:'11px',color:'#4A5568'}}>Novembre 2024</span>
              </div>
              <div style={{background:'linear-gradient(135deg,rgba(0,212,255,0.1),rgba(0,212,255,0.04))',borderRadius:'12px',padding:'16px',border:'1px solid rgba(0,212,255,0.15)'}}>
                <p style={{fontSize:'11px',color:'#4A5568',marginBottom:'4px'}}>Revenus du mois</p>
                <p style={{fontSize:'28px',fontWeight:900,color:'#00D4FF',letterSpacing:'-0.02em'}}>14 200 DT</p>
                <p style={{fontSize:'12px',color:'#00E096',marginTop:'4px'}}><i className="fa-solid fa-arrow-trend-up" /> +18% vs mois dernier</p>
              </div>
              <div style={{background:'rgba(255,255,255,0.03)',borderRadius:'10px',padding:'12px'}}>
                <p style={{fontSize:'11px',color:'#4A5568',marginBottom:'8px',fontWeight:600}}>Calendrier — Semaine</p>
                <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:'4px'}}>
                  {['L','M','M','J','V','S','D'].map((d,i)=>(
                    <div key={i} style={{textAlign:'center',fontSize:'10px',color:'#4A5568',paddingBottom:'4px'}}>{d}</div>
                  ))}
                  {[12,13,14,15,16,17,18].map((d,i)=>(
                    <div key={i} style={{textAlign:'center',fontSize:'11px',fontWeight:600,padding:'5px 2px',borderRadius:'6px',background:d===15?'#00D4FF':'transparent',color:d===15?'#080C1A':'#8892A4'}}>{d}</div>
                  ))}
                </div>
              </div>
              {[{l:'Football',v:85},{l:'Padel',v:70},{l:'Tennis',v:55}].map((item,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <span style={{fontSize:'11px',color:'#4A5568',width:'55px'}}>{item.l}</span>
                  <div style={{flex:1,height:'5px',borderRadius:'3px',background:'rgba(255,255,255,0.06)'}}>
                    <div style={{width:`${item.v}%`,height:'100%',borderRadius:'3px',background:'linear-gradient(90deg,#00D4FF,#FF3366)',transition:'width 1s ease'}} />
                  </div>
                  <span style={{fontSize:'11px',color:'#8892A4',width:'28px',textAlign:'right'}}>{item.v}%</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Bullets */}
          <Reveal type="right">
            <div style={{position:'relative',zIndex:1}}>
              <div className="section-label" style={{background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'#00D4FF',marginBottom:'20px'}}>
                Pour les clubs
              </div>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Le tableau de bord qui change tout</h2>
              <p style={{fontSize:'15px',color:'#8892A4',lineHeight:1.7,marginBottom:'32px'}}>
                Gérez votre complexe sportif depuis une interface unique, claire et puissante.
              </p>
              <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                {dashBullets.map((b,i)=>(
                  <div key={i} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                    <div style={{width:'40px',height:'40px',borderRadius:'10px',background:`${b.color}15`,border:`1px solid ${b.color}25`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <i className={b.icon} style={{color:b.color,fontSize:'15px'}} />
                    </div>
                    <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.65,paddingTop:'10px'}}>{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
