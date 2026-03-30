import Link from 'next/link';

const cols = [
  { title:'Produit',    links:[{l:'Fonctionnalités',h:'/#features'},{l:'Tarifs',h:'/pricing'},{l:'Télécharger',h:'/contact'},{l:'Démo',h:'/contact'}] },
  { title:'Entreprise', links:[{l:'À propos',h:'/about'},{l:'Carrières',h:'/contact'},{l:'Blog',h:'/contact'},{l:'Contact',h:'/contact'}] },
  { title:'Support',    links:[{l:'Centre d\'aide',h:'/faq'},{l:'FAQ',h:'/faq'},{l:'Tutoriels',h:'/contact'},{l:'Statut',h:'/contact'}] },
  { title:'Légal',      links:[{l:'Confidentialité',h:'/contact'},{l:'CGU',h:'/contact'},{l:'Mentions légales',h:'/contact'}] },
];

const socials = [
  {icon:'fab fa-facebook-f', href:'#'},
  {icon:'fab fa-twitter',    href:'#'},
  {icon:'fab fa-instagram',  href:'#'},
  {icon:'fab fa-linkedin-in',href:'#'},
];

export default function Footer() {
  return (
    <footer style={{background:'#080C1A',borderTop:'1px solid rgba(255,255,255,0.08)'}}>

      {/* Main grid */}
      <div className="container" style={{padding:'72px 24px 48px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr 1fr 1fr',gap:'48px'}}>

          {/* Brand */}
          <div>
            <Link href="/">
              <img src="/logos/logo campione dark plat.png" alt="Campione" style={{height:'38px',marginBottom:'20px'}} />
            </Link>
            <p style={{fontSize:'14px',color:'#8892A4',lineHeight:1.75,marginBottom:'24px',maxWidth:'260px'}}>
              La plateforme N°1 de réservation de terrains de sport. Simple, rapide, sécurisé.
            </p>
            <div style={{display:'flex',gap:'10px'}}>
              {socials.map((s,i) => (
                <Link key={i} href={s.href} style={{width:'38px',height:'38px',borderRadius:'10px',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',display:'flex',alignItems:'center',justifyContent:'center',color:'#8892A4',fontSize:'14px',transition:'all 0.2s'}}>
                  <i className={s.icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col,i) => (
            <div key={i}>
              <p style={{fontSize:'12px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#F0F2F8',marginBottom:'20px'}}>{col.title}</p>
              <ul style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                {col.links.map((lk,j) => (
                  <li key={j}>
                    <Link href={lk.h} className="footer-link">
                      {lk.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* App store badges */}
      <div style={{borderTop:'1px solid rgba(255,255,255,0.08)',padding:'28px 24px'}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'20px'}}>
          <p style={{fontSize:'13px',color:'#4A5568'}}>© 2026 Campione. Tous droits réservés.</p>

          <div style={{display:'flex',gap:'12px'}}>
            {[
              {icon:'fab fa-apple',      store:'App Store',   sub:'Télécharger sur'},
              {icon:'fab fa-google-play',store:'Google Play', sub:'Disponible sur'},
            ].map((a,i) => (
              <Link key={i} href="#" style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 18px',borderRadius:'12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',transition:'border-color 0.2s'}}>
                <i className={a.icon} style={{fontSize:'22px',color:'#F0F2F8'}} />
                <div>
                  <p style={{fontSize:'10px',color:'#4A5568',lineHeight:1}}>{a.sub}</p>
                  <p style={{fontSize:'14px',fontWeight:700,color:'#F0F2F8',lineHeight:1.4}}>{a.store}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'#00E096',display:'inline-block'}} />
            <span style={{fontSize:'13px',color:'#8892A4'}}>Tous les systèmes opérationnels</span>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          footer .container>div:first-child{grid-template-columns:1fr 1fr 1fr !important;}
        }
        @media(max-width:640px){
          footer .container>div:first-child{grid-template-columns:1fr 1fr !important;}
        }
      `}</style>
    </footer>
  );
}
