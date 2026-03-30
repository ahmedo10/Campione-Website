const stats = [
  { value: '500+',    label: 'Complexes partenaires', icon: 'fa-solid fa-building',     color: '#00D4FF' },
  { value: '25 000+', label: 'Joueurs actifs',         icon: 'fa-solid fa-users',        color: '#FF3366' },
  { value: '98%',     label: 'Satisfaction client',    icon: 'fa-solid fa-star',         color: '#F59E0B' },
  { value: 'Tunisie', label: 'Notre marché',           icon: 'fa-solid fa-earth-africa', color: '#00E096' },
];

export default function Stats() {
  return (
    <section style={{background:'#0E1428',borderTop:'1px solid rgba(255,255,255,0.08)',borderBottom:'1px solid rgba(255,255,255,0.08)',padding:'64px 0'}}>
      <div className="container">
        <div className="grid-4">
          {stats.map((s, i) => (
            <div key={i} style={{textAlign:'center',padding:'24px 16px'}}>
              <div style={{width:'52px',height:'52px',borderRadius:'14px',background:`${s.color}15`,border:`1px solid ${s.color}30`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
                <i className={s.icon} style={{color:s.color,fontSize:'20px'}} />
              </div>
              <p style={{fontSize:'clamp(2rem,4vw,2.75rem)',fontWeight:900,color:'#F0F2F8',letterSpacing:'-0.03em',lineHeight:1}}>{s.value}</p>
              <p style={{fontSize:'14px',color:'#8892A4',marginTop:'8px',fontWeight:500}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
