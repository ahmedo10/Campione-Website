import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section" style={{background:'#0E1428'}}>
      <div className="container">
        <div style={{
          position:'relative',
          borderRadius:'28px',
          padding:'80px 48px',
          textAlign:'center',
          overflow:'hidden',
          background:'linear-gradient(135deg,rgba(0,212,255,0.1) 0%,rgba(255,51,102,0.08) 100%)',
          border:'1px solid rgba(0,212,255,0.2)',
        }}>
          {/* Glow */}
          <div style={{position:'absolute',top:'-60px',left:'50%',transform:'translateX(-50%)',width:'500px',height:'200px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(0,212,255,0.25),transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}} />
          {/* Grid */}
          <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)',backgroundSize:'28px 28px',pointerEvents:'none'}} />

          <div style={{position:'relative',zIndex:1}}>
            <h2 style={{fontSize:'clamp(2rem,5vw,3.25rem)',fontWeight:900,letterSpacing:'-0.03em',lineHeight:1.1,color:'#F0F2F8',marginBottom:'20px'}}>
              Prêt à jouer ?
            </h2>
            <p style={{fontSize:'18px',color:'#8892A4',maxWidth:'560px',margin:'0 auto 40px',lineHeight:1.7}}>
              Rejoignez des milliers de sportifs et de clubs qui utilisent Campione chaque jour
            </p>

            <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap',marginBottom:'32px'}}>
              <Link href="/contact" className="btn-primary" style={{fontSize:'16px',padding:'16px 36px'}}>
                <i className="fa-solid fa-mobile-screen-button" />
                Télécharger maintenant
              </Link>
              <Link href="/contact" className="btn-ghost" style={{fontSize:'16px',padding:'16px 36px'}}>
                <i className="fa-solid fa-building" style={{color:'#00D4FF'}} />
                Espace Club
              </Link>
            </div>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'32px',flexWrap:'wrap'}}>
              {[
                {icon:'fa-solid fa-circle-check', color:'#00E096', text:'14 jours gratuits'},
                {icon:'fa-solid fa-circle-check', color:'#00E096', text:'Sans carte bancaire'},
                {icon:'fa-solid fa-circle-check', color:'#00E096', text:'Sans engagement'},
              ].map((item,i) => (
                <span key={i} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'#8892A4'}}>
                  <i className={item.icon} style={{color:item.color}} />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
