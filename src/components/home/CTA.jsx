import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function CTA() {
  return (
    <section className="section" style={{background:'#0E1428',position:'relative',overflow:'hidden'}}>

      {/* Particles */}
      {[
        {size:5, top:'20%', left:'8%',  color:'#00D4FF', dur:'7s',  delay:'0s'},
        {size:4, top:'70%', left:'12%', color:'#FF3366', dur:'9s',  delay:'1s'},
        {size:6, top:'25%', left:'88%', color:'#00E096', dur:'6s',  delay:'2s'},
        {size:4, top:'75%', left:'85%', color:'#F59E0B', dur:'8s',  delay:'0.5s'},
      ].map((p,i)=>(
        <div key={i} className="particle" style={{width:`${p.size}px`,height:`${p.size}px`,top:p.top,left:p.left,background:p.color,boxShadow:`0 0 ${p.size*2}px ${p.color}`,animationDuration:p.dur,animationDelay:p.delay}} />
      ))}

      <div className="container">
        <Reveal type="scale">
          <div style={{
            position:'relative',
            borderRadius:'28px',
            padding:'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 48px)',
            textAlign:'center',
            overflow:'hidden',
            background:'linear-gradient(135deg,rgba(0,212,255,0.1) 0%,rgba(255,51,102,0.08) 100%)',
            border:'1px solid rgba(0,212,255,0.2)',
          }}>
            {/* Animated glow */}
            <div className="float-slow" style={{position:'absolute',top:'-60px',left:'50%',transform:'translateX(-50%)',width:'500px',height:'200px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(0,212,255,0.25),transparent 70%)',filter:'blur(40px)',pointerEvents:'none'}} />

            {/* Spinning rings */}
            <div className="spin-slow" style={{position:'absolute',top:'-80px',right:'-80px',width:'200px',height:'200px',borderRadius:'50%',border:'1px dashed rgba(0,212,255,0.15)',pointerEvents:'none'}} />
            <div className="spin-reverse" style={{position:'absolute',bottom:'-60px',left:'-60px',width:'160px',height:'160px',borderRadius:'50%',border:'1px dashed rgba(255,51,102,0.15)',pointerEvents:'none'}} />

            {/* Grid overlay */}
            <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)',backgroundSize:'28px 28px',pointerEvents:'none'}} />

            <div style={{position:'relative',zIndex:1}}>
              <Reveal type="up">
                <h2 style={{fontSize:'clamp(2rem,5vw,3.25rem)',fontWeight:900,letterSpacing:'-0.03em',lineHeight:1.1,color:'#F0F2F8',marginBottom:'20px'}}>
                  Prêt à jouer ?
                </h2>
              </Reveal>

              <Reveal type="up" delay={1}>
                <p style={{fontSize:'18px',color:'#8892A4',maxWidth:'560px',margin:'0 auto 40px',lineHeight:1.7}}>
                  Rejoignez des milliers de sportifs et de clubs qui utilisent Campione chaque jour
                </p>
              </Reveal>

              <Reveal type="up" delay={2} style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap',marginBottom:'32px'}}>
                <Link href="/contact" className="btn-primary glow-pulse" style={{fontSize:'16px',padding:'16px 36px'}}>
                  <i className="fa-solid fa-mobile-screen-button" />
                  Télécharger maintenant
                </Link>
                <Link href="/contact" className="btn-ghost" style={{fontSize:'16px',padding:'16px 36px'}}>
                  <i className="fa-solid fa-building" style={{color:'#00D4FF'}} />
                  Espace Club
                </Link>
              </Reveal>

              <Reveal type="up" delay={3} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'32px',flexWrap:'wrap'}}>
                {[
                  {icon:'fa-solid fa-circle-check', color:'#00E096', text:'14 jours gratuits'},
                  {icon:'fa-solid fa-circle-check', color:'#00E096', text:'Sans carte bancaire'},
                  {icon:'fa-solid fa-circle-check', color:'#00E096', text:'Sans engagement'},
                ].map((item,i)=>(
                  <span key={i} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'#8892A4'}}>
                    <i className={item.icon} style={{color:item.color}} />
                    {item.text}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
