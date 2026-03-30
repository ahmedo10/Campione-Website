import Reveal from '@/components/Reveal';

const sports = [
  { icon:'fa-solid fa-futbol',                    color:'#00D4FF', name:'Football',   terrains:48 },
  { icon:'fa-solid fa-table-tennis-paddle-ball',  color:'#FF3366', name:'Padel',      terrains:32 },
  { icon:'fa-solid fa-baseball-bat-ball',         color:'#00E096', name:'Tennis',     terrains:24 },
  { icon:'fa-solid fa-basketball',                color:'#F59E0B', name:'Basketball', terrains:18 },
  { icon:'fa-solid fa-volleyball',                color:'#A78BFA', name:'Volleyball', terrains:14 },
  { icon:'fa-solid fa-person-swimming',           color:'#EC4899', name:'Natation',   terrains:10 },
  { icon:'fa-solid fa-dumbbell',                  color:'#34D399', name:'Fitness',    terrains:22 },
  { icon:'fa-solid fa-circle-dot',                color:'#FB923C', name:'Squash',     terrains:8  },
];

export default function Sports() {
  return (
    <section className="section" style={{background:'#0E1428',position:'relative',overflow:'hidden'}}>

      {/* Decorative spinning rings */}
      <div className="spin-slow" style={{position:'absolute',top:'-60px',right:'-60px',width:'200px',height:'200px',borderRadius:'50%',border:'1px dashed rgba(0,212,255,0.12)',pointerEvents:'none'}} />
      <div className="spin-reverse" style={{position:'absolute',bottom:'-40px',left:'-40px',width:'150px',height:'150px',borderRadius:'50%',border:'1px dashed rgba(255,51,102,0.12)',pointerEvents:'none'}} />

      <div className="container" style={{position:'relative',zIndex:1}}>
        <Reveal type="up" style={{textAlign:'center',marginBottom:'64px'}}>
          <div className="section-label" style={{background:'rgba(255,51,102,0.1)',border:'1px solid rgba(255,51,102,0.25)',color:'#FF3366',margin:'0 auto 20px'}}>
            Sports
          </div>
          <h2 className="section-title" style={{margin:'0 auto 16px'}}>Tous vos sports préférés</h2>
          <p className="section-sub" style={{margin:'0 auto'}}>Réservez des terrains pour tous les sports disponibles en Tunisie</p>
        </Reveal>

        <div className="grid-4">
          {sports.map((s,i)=>(
            <Reveal key={i} type="scale" delay={(i%4)+1}>
              <div className="sport-card hover-lift" style={{
                background:'rgba(255,255,255,0.04)',
                border:'1px solid rgba(255,255,255,0.08)',
                borderRadius:'16px',
                padding:'28px 20px',
                textAlign:'center',
                cursor:'pointer',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'12px',
                height:'100%',
              }}>
                <div className="float" style={{width:'64px',height:'64px',borderRadius:'18px',background:`${s.color}15`,border:`1px solid ${s.color}25`,display:'flex',alignItems:'center',justifyContent:'center',animationDelay:`${i*0.3}s`,animationDuration:`${4+i*0.2}s`}}>
                  <i className={s.icon} style={{color:s.color,fontSize:'26px'}} />
                </div>
                <p style={{fontSize:'16px',fontWeight:700,color:'#F0F2F8'}}>{s.name}</p>
                <p style={{fontSize:'12px',color:'#4A5568'}}>{s.terrains} terrains disponibles</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`.sport-card{transition:border-color 0.25s,transform 0.25s,box-shadow 0.25s;}.sport-card:hover{border-color:rgba(0,212,255,0.4) !important;box-shadow:0 12px 32px rgba(0,212,255,0.12);}`}</style>
    </section>
  );
}
