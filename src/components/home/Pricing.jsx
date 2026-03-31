import Link from 'next/link';
import Reveal from '@/components/Reveal';

const plans = [
  {
    name:'Joueur', price:'Gratuit', period:'pour toujours',
    desc:'Pour les joueurs qui veulent réserver des terrains',
    cta:"Télécharger l'app", href:'/contact', featured:false,
    features:['Réservation illimitée','Paiement partagé',"Gestion d'équipe",'Historique des matchs','Notifications push'],
  },
  {
    name:'Club Pro', price:'290', period:'DT / mois',
    desc:'Pour les complexes sportifs qui veulent digitaliser',
    cta:'Essai gratuit 14 jours', href:'/contact', featured:true, badge:'Le plus populaire',
    features:['Tableau de bord complet','Gestion multi-terrains','Paiements en ligne','Statistiques avancées','Support prioritaire','API & intégrations'],
  },
  {
    name:'Club Elite', price:'590', period:'DT / mois',
    desc:'Pour les grands complexes multi-sites',
    cta:'Contacter les ventes', href:'/contact', featured:false,
    features:['Tout Club Pro inclus','Multi-sites illimités','Manager dédié','Personnalisation complète','Formation sur site','SLA garanti'],
  },
];

const tableFeatures = [
  { name:'Réservations en ligne', starter:true,  pro:true,  elite:true  },
  { name:'Tableau de bord',       starter:false, pro:true,  elite:true  },
  { name:'Paiements en ligne',    starter:false, pro:true,  elite:true  },
  { name:'Multi-sites',           starter:false, pro:false, elite:true  },
  { name:'Manager dédié',         starter:false, pro:false, elite:true  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section" style={{background:'#0E1428',position:'relative',overflow:'hidden'}}>

      {/* Spinning decoration */}
      <div className="spin-slow" style={{position:'absolute',top:'5%',right:'3%',width:'180px',height:'180px',borderRadius:'50%',border:'1px dashed rgba(167,139,250,0.15)',pointerEvents:'none'}} />
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'800px',height:'400px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(0,212,255,0.06),rgba(255,51,102,0.04),transparent 70%)',pointerEvents:'none'}} />

      <div className="container" style={{position:'relative',zIndex:1}}>
        <Reveal type="up" style={{textAlign:'center',marginBottom:'64px'}}>
          <div className="section-label" style={{background:'rgba(167,139,250,0.1)',border:'1px solid rgba(167,139,250,0.25)',color:'#A78BFA',margin:'0 auto 20px'}}>
            Tarifs
          </div>
          <h2 className="section-title" style={{margin:'0 auto 16px'}}>Un plan pour chaque besoin</h2>
          <p className="section-sub" style={{margin:'0 auto'}}>Gratuit pour les joueurs. Abordable pour les clubs. Sans engagement.</p>
        </Reveal>

        <div className="three-col-pricing" style={{marginBottom:'64px'}}>
          {plans.map((p,i)=>(
            <Reveal key={i} type="up" delay={i+1}>
              <div className="hover-lift" style={{
                position:'relative',
                display:'flex',
                flexDirection:'column',
                borderRadius:'20px',
                padding:'32px',
                background: p.featured ? 'linear-gradient(160deg,rgba(0,212,255,0.1),rgba(255,51,102,0.06))' : 'rgba(255,255,255,0.04)',
                border: p.featured ? '1px solid rgba(0,212,255,0.35)' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: p.featured ? '0 20px 60px rgba(0,212,255,0.15)' : 'none',
                transform: p.featured ? 'scale(1.04)' : 'none',
                height:'100%',
              }}>
                {p.badge && (
                  <span className="pop-in" style={{position:'absolute',top:'-14px',left:'50%',transform:'translateX(-50%)',padding:'5px 16px',borderRadius:'100px',background:'linear-gradient(135deg,#F59E0B,#EF4444)',color:'#080C1A',fontSize:'12px',fontWeight:700,whiteSpace:'nowrap'}}>
                    {p.badge}
                  </span>
                )}
                <p style={{fontSize:'12px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:p.featured?'#00D4FF':'#8892A4',marginBottom:'12px'}}>{p.name}</p>
                <div style={{display:'flex',alignItems:'baseline',gap:'8px',marginBottom:'8px'}}>
                  <span style={{fontSize:'clamp(2rem,4vw,2.75rem)',fontWeight:900,color:'#F0F2F8',letterSpacing:'-0.03em',lineHeight:1}}>{p.price}</span>
                  <span style={{fontSize:'14px',color:'#4A5568'}}>{p.period}</span>
                </div>
                <p style={{fontSize:'14px',color:'#8892A4',marginBottom:'28px',lineHeight:1.6}}>{p.desc}</p>
                <ul style={{display:'flex',flexDirection:'column',gap:'12px',flex:1,marginBottom:'28px'}}>
                  {p.features.map((f,j)=>(
                    <li key={j} style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'14px',color:p.featured?'#F0F2F8':'#8892A4'}}>
                      <i className="fa-solid fa-circle-check" style={{color:p.featured?'#00D4FF':'#00E096',fontSize:'13px',flexShrink:0}} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} style={{
                  display:'block',textAlign:'center',padding:'13px 24px',borderRadius:'12px',fontSize:'14px',fontWeight:700,
                  background:p.featured?'linear-gradient(135deg,#00D4FF,#00A8CC)':'rgba(255,255,255,0.05)',
                  color:p.featured?'#080C1A':'#F0F2F8',
                  border:p.featured?'none':'1px solid rgba(255,255,255,0.1)',
                  boxShadow:p.featured?'0 8px 24px rgba(0,212,255,0.3)':'none',
                }}>
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison table */}
        <Reveal type="up">
          <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',overflow:'hidden'}}>
            <div style={{padding:'24px 32px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
              <h3 style={{fontSize:'18px',fontWeight:700,color:'#F0F2F8'}}>Comparaison des fonctionnalités</h3>
            </div>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse'}}>
                <thead>
                  <tr style={{borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
                    <th style={{padding:'16px 32px',textAlign:'left',fontSize:'13px',color:'#4A5568',fontWeight:600}}>Fonctionnalité</th>
                    {['Starter','Club Pro','Club Elite'].map((h,i)=>(
                      <th key={i} style={{padding:'16px 24px',textAlign:'center',fontSize:'13px',color:i===1?'#00D4FF':'#4A5568',fontWeight:700}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableFeatures.map((row,i)=>(
                    <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)',background:i%2===0?'transparent':'rgba(255,255,255,0.01)'}}>
                      <td style={{padding:'14px 32px',fontSize:'14px',color:'#8892A4'}}>{row.name}</td>
                      {[row.starter,row.pro,row.elite].map((v,j)=>(
                        <td key={j} style={{padding:'14px 24px',textAlign:'center'}}>
                          {v
                            ? <i className="fa-solid fa-check" style={{color:'#00E096',fontSize:'14px'}} />
                            : <i className="fa-solid fa-xmark" style={{color:'#4A5568',fontSize:'14px'}} />
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <p style={{textAlign:'center',marginTop:'40px',fontSize:'13px',color:'#4A5568'}}>
          Tous les plans incluent support technique et mises à jour gratuites
        </p>
      </div>

      <style>{`@media(max-width:900px){.three-col-pricing{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
