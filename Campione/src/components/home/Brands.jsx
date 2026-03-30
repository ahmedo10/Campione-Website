const clubs = [
  { name:'Club Sportif Sfaxien',  city:'Sfax',      sport:'Football',   initials:'CSS', color:'#00D4FF' },
  { name:'Espérance Sportive',    city:'Tunis',     sport:'Multi-sport',initials:'ES',  color:'#FF3366' },
  { name:'Club Africain',         city:'Tunis',     sport:'Football',   initials:'CA',  color:'#F59E0B' },
  { name:'Étoile du Sahel',       city:'Sousse',    sport:'Football',   initials:'ES',  color:'#00E096' },
  { name:'US Monastir',           city:'Monastir',  sport:'Football',   initials:'USM', color:'#A78BFA' },
  { name:'CA Bizertin',           city:'Bizerte',   sport:'Multi-sport',initials:'CAB', color:'#EC4899' },
];

export default function Brands() {
  return (
    <section className="section" style={{background:'#0E1428'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:'56px'}}>
          <div className="section-label" style={{background:'rgba(0,224,150,0.1)',border:'1px solid rgba(0,224,150,0.25)',color:'#00E096',margin:'0 auto 20px'}}>
            Partenaires
          </div>
          <h2 className="section-title" style={{margin:'0 auto 16px'}}>Ils nous font confiance</h2>
          <p className="section-sub" style={{margin:'0 auto'}}>Les plus grands clubs sportifs tunisiens utilisent Campione pour gérer leurs réservations</p>
        </div>

        <div className="grid-3">
          {clubs.map((club, i) => (
            <div key={i} className="card" style={{display:'flex',alignItems:'center',gap:'16px',background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)'}}>
              <div style={{width:'56px',height:'56px',borderRadius:'14px',background:`linear-gradient(135deg,${club.color},${club.color}80)`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'14px',color:'#080C1A',flexShrink:0,boxShadow:`0 8px 20px ${club.color}30`}}>
                {club.initials}
              </div>
              <div style={{flex:1}}>
                <p style={{fontSize:'15px',fontWeight:700,color:'#F0F2F8',marginBottom:'4px'}}>{club.name}</p>
                <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
                  <span style={{fontSize:'12px',color:'#4A5568',display:'flex',alignItems:'center',gap:'4px'}}>
                    <i className="fa-solid fa-location-dot" style={{color:club.color,fontSize:'10px'}} />
                    {club.city}
                  </span>
                  <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'#4A5568'}} />
                  <span style={{fontSize:'12px',color:'#4A5568'}}>{club.sport}</span>
                </div>
              </div>
              <i className="fa-solid fa-circle-check" style={{color:club.color,fontSize:'18px',flexShrink:0}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
