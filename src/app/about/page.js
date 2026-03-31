import Link from 'next/link';
import CTA from '@/components/home/CTA';

export const metadata = { title: 'À propos | Campione', description: "Découvrez la mission et l'équipe derrière Campione." };

const values = [
  { icon:'fa-solid fa-bolt',         color:'#00D4FF', title:'Rapidité',    desc:'Réservation en moins de 30 secondes. Chaque seconde compte.' },
  { icon:'fa-solid fa-shield-check', color:'#00E096', title:'Sécurité',    desc:'Paiements cryptés et données protégées. Votre confiance est notre priorité.' },
  { icon:'fa-solid fa-users',        color:'#FF3366', title:'Communauté',  desc:'Connecter les joueurs et les clubs pour créer une vraie communauté sportive.' },
  { icon:'fa-solid fa-chart-line',   color:'#F59E0B', title:'Performance', desc:"Des outils puissants pour maximiser l'occupation de vos terrains." },
];

const team = [
  { initials:'AK', name:'Ahmed Khelifi',   role:'CEO & Co-fondateur',      color:'#00D4FF' },
  { initials:'MB', name:'Mariem Bouzid',   role:'CTO & Co-fondatrice',     color:'#FF3366' },
  { initials:'ST', name:'Sami Trabelsi',   role:'Directeur Produit',       color:'#00E096' },
  { initials:'LB', name:'Leila Ben Amor',  role:'Responsable Marketing',   color:'#F59E0B' },
];

const timeline = [
  { year:'2022', title:'Fondation',       desc:"Création de Campione à Tunis avec une vision claire : digitaliser le sport tunisien.", color:'#00D4FF' },
  { year:'2023', title:'Lancement Beta',  desc:'Lancement de la version bêta avec 50 clubs partenaires à Tunis et Sfax.', color:'#FF3366' },
  { year:'2024', title:'500 clubs',       desc:'Franchissement du cap des 500 clubs partenaires et 25 000 utilisateurs actifs.', color:'#00E096' },
  { year:'2025', title:'Expansion',       desc:'Déploiement dans toutes les grandes villes tunisiennes et lancement de nouvelles fonctionnalités.', color:'#F59E0B' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <div style={{background:'linear-gradient(160deg,#080C1A,#0E1428)',paddingTop:'140px',paddingBottom:'80px',borderBottom:'1px solid rgba(255,255,255,0.08)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,right:0,width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,255,0.08),transparent 70%)',pointerEvents:'none'}} />
        <div className="container" style={{position:'relative',zIndex:1}}>
          <nav style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',color:'#4A5568',marginBottom:'24px'}}>
            <Link href="/" style={{color:'#8892A4'}}>Accueil</Link>
            <i className="fa-solid fa-chevron-right" style={{fontSize:'10px'}} />
            <span style={{color:'#F0F2F8'}}>À propos</span>
          </nav>
          <h1 style={{fontSize:'clamp(2.5rem,6vw,4rem)',fontWeight:900,letterSpacing:'-0.03em',lineHeight:1.1,color:'#F0F2F8',marginBottom:'24px',maxWidth:'700px'}}>
            Notre mission : rendre le sport{' '}
            <span style={{background:'linear-gradient(135deg,#00D4FF,#FF3366)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
              accessible à tous
            </span>
          </h1>
          <p style={{fontSize:'18px',color:'#8892A4',lineHeight:1.75,maxWidth:'600px'}}>
            Campione est née d&apos;une frustration simple : pourquoi est-il si difficile de réserver un terrain de sport en Tunisie ? Nous avons décidé de changer ça.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section" style={{background:'#080C1A'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-label" style={{background:'rgba(0,212,255,0.1)',border:'1px solid rgba(0,212,255,0.25)',color:'#00D4FF',marginBottom:'20px'}}>
                Notre mission
              </div>
              <h2 className="section-title" style={{marginBottom:'20px'}}>Connecter la Tunisie par le sport</h2>
              <p style={{fontSize:'16px',color:'#8892A4',lineHeight:1.8,marginBottom:'20px'}}>
                Nous croyons que le sport est un vecteur de lien social et de bien-être. Notre mission est de supprimer toutes les frictions entre les joueurs et les terrains.
              </p>
              <p style={{fontSize:'16px',color:'#8892A4',lineHeight:1.8}}>
                En digitalisant la gestion des complexes sportifs tunisiens, nous permettons aux clubs de se concentrer sur l&apos;essentiel : offrir la meilleure expérience sportive possible.
              </p>
            </div>
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'24px',padding:'40px',display:'flex',flexDirection:'column',gap:'24px'}}>
              {[
                {icon:'fa-solid fa-bullseye',color:'#00D4FF',title:'Vision',text:'Devenir la plateforme de référence du sport en Afrique du Nord.'},
                {icon:'fa-solid fa-rocket',  color:'#FF3366',title:'Mission',text:'Digitaliser 1000 complexes sportifs tunisiens d\'ici 2026.'},
                {icon:'fa-solid fa-heart',   color:'#00E096',title:'Impact', text:'Faciliter 1 million de réservations sportives par an.'},
              ].map((item,i)=>(
                <div key={i} style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
                  <div style={{width:'44px',height:'44px',borderRadius:'12px',background:`${item.color}15`,border:`1px solid ${item.color}25`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <i className={item.icon} style={{color:item.color}} />
                  </div>
                  <div>
                    <p style={{fontSize:'14px',fontWeight:700,color:'#F0F2F8',marginBottom:'4px'}}>{item.title}</p>
                    <p style={{fontSize:'13px',color:'#8892A4',lineHeight:1.6}}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{background:'#0E1428'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'2px',borderRadius:'20px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)'}}>
            {[
              {v:'2022',  l:'Année de création'},
              {v:'Tunisie',l:'Notre marché'},
              {v:'500+',  l:'Complexes partenaires'},
            ].map((s,i) => (
              <div key={i} style={{padding:'48px 32px',textAlign:'center',background:'rgba(255,255,255,0.03)'}}>
                <p style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,color:'#F0F2F8',letterSpacing:'-0.03em',marginBottom:'8px'}}>{s.v}</p>
                <p style={{fontSize:'14px',color:'#8892A4'}}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{background:'#080C1A'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'56px'}}>
            <div className="section-label" style={{background:'rgba(255,51,102,0.1)',border:'1px solid rgba(255,51,102,0.25)',color:'#FF3366',margin:'0 auto 20px'}}>
              Équipe
            </div>
            <h2 className="section-title" style={{margin:'0 auto 16px'}}>L&apos;équipe derrière Campione</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Des passionnés de sport et de technologie au service des clubs tunisiens</p>
          </div>
          <div className="grid-4">
            {team.map((m,i)=>(
              <div key={i} className="card" style={{textAlign:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',background:`linear-gradient(135deg,${m.color},${m.color}80)`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'20px',color:'#080C1A',margin:'0 auto 16px',boxShadow:`0 8px 24px ${m.color}30`}}>
                  {m.initials}
                </div>
                <p style={{fontSize:'16px',fontWeight:700,color:'#F0F2F8',marginBottom:'6px'}}>{m.name}</p>
                <p style={{fontSize:'13px',color:'#4A5568'}}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{background:'#0E1428'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'56px'}}>
            <div className="section-label" style={{background:'rgba(0,224,150,0.1)',border:'1px solid rgba(0,224,150,0.25)',color:'#00E096',margin:'0 auto 20px'}}>
              Histoire
            </div>
            <h2 className="section-title" style={{margin:'0 auto 16px'}}>Notre parcours</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>De l&apos;idée à la réalité, étape par étape</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'0',position:'relative'}}>
            <div style={{position:'absolute',left:'79px',top:'24px',bottom:'24px',width:'2px',background:'linear-gradient(180deg,#00D4FF,#FF3366,#00E096,#F59E0B)',opacity:0.3}} />
            {timeline.map((t,i)=>(
              <div key={i} style={{display:'flex',gap:'32px',alignItems:'flex-start',paddingBottom: i < timeline.length-1 ? '40px' : 0}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'8px',flexShrink:0,width:'80px'}}>
                  <div style={{width:'48px',height:'48px',borderRadius:'50%',background:`${t.color}15`,border:`2px solid ${t.color}`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:'12px',color:t.color,zIndex:1,background:'#0E1428'}}>
                    {t.year}
                  </div>
                </div>
                <div className="card" style={{flex:1,marginTop:'8px'}}>
                  <p style={{fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:t.color,marginBottom:'8px'}}>{t.year}</p>
                  <h3 style={{fontSize:'18px',fontWeight:700,color:'#F0F2F8',marginBottom:'8px'}}>{t.title}</h3>
                  <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.7}}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{background:'#080C1A'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <h2 className="section-title" style={{margin:'0 auto 16px'}}>Nos valeurs</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Ce qui nous guide chaque jour</p>
          </div>
          <div className="grid-4">
            {values.map((v,i) => (
              <div key={i} className="card" style={{textAlign:'center'}}>
                <div className="icon-box" style={{background:`${v.color}15`,border:`1px solid ${v.color}25`,margin:'0 auto 16px'}}>
                  <i className={v.icon} style={{color:v.color}} />
                </div>
                <h3 style={{fontSize:'17px',fontWeight:700,color:'#F0F2F8',marginBottom:'10px'}}>{v.title}</h3>
                <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.7}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
