import Link from 'next/link';

export const metadata = { title: 'Contact | Campione', description: "Contactez l'équipe Campione." };

const subjects = [
  'Demande d\'information générale',
  'Inscription d\'un club',
  'Support technique',
  'Partenariat',
  'Presse & médias',
  'Autre',
];

const socials = [
  { icon:'fa-brands fa-instagram', color:'#EC4899', label:'Instagram', href:'#' },
  { icon:'fa-brands fa-facebook',  color:'#00D4FF', label:'Facebook',  href:'#' },
  { icon:'fa-brands fa-linkedin',  color:'#0EA5E9', label:'LinkedIn',  href:'#' },
  { icon:'fa-brands fa-x-twitter', color:'#F0F2F8', label:'Twitter/X', href:'#' },
];

export default function Contact() {
  return (
    <>
      <div style={{background:'#0E1428',paddingTop:'120px',paddingBottom:'60px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
        <div className="container">
          <nav style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',color:'#4A5568',marginBottom:'24px'}}>
            <Link href="/" style={{color:'#8892A4'}}>Accueil</Link>
            <i className="fa-solid fa-chevron-right" style={{fontSize:'10px'}} />
            <span style={{color:'#F0F2F8'}}>Contact</span>
          </nav>
          <h1 style={{fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:900,letterSpacing:'-0.03em',color:'#F0F2F8',marginBottom:'16px'}}>
            Contactez-<span style={{background:'linear-gradient(135deg,#00D4FF,#FF3366)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>nous</span>
          </h1>
          <p style={{fontSize:'17px',color:'#8892A4'}}>Notre équipe répond en moins de 2h en semaine</p>
        </div>
      </div>

      <section className="section" style={{background:'#080C1A'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'64px',alignItems:'start'}}>

            {/* Info */}
            <div>
              {[
                {icon:'fa-solid fa-location-dot', color:'#00D4FF', title:'Nos bureaux',  text:'Tunis, Tunisie'},
                {icon:'fa-solid fa-envelope',      color:'#FF3366', title:'Email',        text:'contact@campione.app'},
                {icon:'fa-solid fa-phone',         color:'#00E096', title:'Téléphone',    text:'+216 XX XXX XXX'},
              ].map((item,i) => (
                <div key={i} style={{display:'flex',gap:'16px',marginBottom:'32px'}}>
                  <div style={{width:'48px',height:'48px',borderRadius:'14px',background:`${item.color}15`,border:`1px solid ${item.color}25`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <i className={item.icon} style={{color:item.color}} />
                  </div>
                  <div>
                    <p style={{fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'#4A5568',marginBottom:'4px'}}>{item.title}</p>
                    <p style={{fontSize:'16px',color:'#F0F2F8',fontWeight:500}}>{item.text}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div style={{borderRadius:'16px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',marginBottom:'32px',position:'relative',height:'200px',background:'#0E1428',display:'flex',alignItems:'center',justifyContent:'center'}}>
                {/* Grid pattern */}
                <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
                <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:'8px'}}>
                  <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'rgba(255,51,102,0.15)',border:'2px solid #FF3366',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <i className="fa-solid fa-location-dot" style={{color:'#FF3366',fontSize:'18px'}} />
                  </div>
                  <span style={{fontSize:'12px',color:'#4A5568',fontWeight:600}}>Tunis, Tunisie</span>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p style={{fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'#4A5568',marginBottom:'16px'}}>Suivez-nous</p>
                <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                  {socials.map((s,i)=>(
                    <a key={i} href={s.href} style={{display:'flex',alignItems:'center',gap:'8px',padding:'10px 16px',borderRadius:'10px',background:'rgba(255,255,255,0.04)',border:`1px solid ${s.color}40`,color:s.color,fontSize:'13px',fontWeight:500}}>
                      <i className={s.icon} style={{fontSize:'16px'}} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card">
              <h2 style={{fontSize:'22px',fontWeight:800,color:'#F0F2F8',marginBottom:'28px'}}>Envoyez-nous un message</h2>
              <form style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
                  {['Votre nom','Votre email'].map((ph,i) => (
                    <input key={i} type={i===1?'email':'text'} placeholder={ph}
                           style={{padding:'13px 16px',borderRadius:'12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',color:'#F0F2F8',fontSize:'14px',outline:'none',fontFamily:'inherit'}} />
                  ))}
                </div>
                <select style={{padding:'13px 16px',borderRadius:'12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',color:'#8892A4',fontSize:'14px',outline:'none',fontFamily:'inherit',cursor:'pointer'}}>
                  <option value="" style={{background:'#0E1428'}}>Choisir un sujet</option>
                  {subjects.map((s,i)=>(
                    <option key={i} value={s} style={{background:'#0E1428',color:'#F0F2F8'}}>{s}</option>
                  ))}
                </select>
                <textarea placeholder="Votre message..." rows={5}
                          style={{padding:'13px 16px',borderRadius:'12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',color:'#F0F2F8',fontSize:'14px',outline:'none',resize:'vertical',fontFamily:'inherit'}} />
                <button type="button" className="btn-primary" style={{justifyContent:'center',padding:'14px'}}>
                  <i className="fa-solid fa-paper-plane" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
