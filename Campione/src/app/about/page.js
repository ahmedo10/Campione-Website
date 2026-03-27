export const metadata = {
  title: 'À propos | Campione',
  description: 'En savoir plus sur l\'application Campione',
};

export default function About() {
  return (
    <main>
      <div className="section-wrapper pb-0">
        <div className="section-banner-inner banner-inner-about" style={{ padding: '6rem 0', backgroundColor: 'var(--primary)', color: 'white' }}>
          <div className="container">
            <div className="d-flex flex-column gspace-2 text-center justify-content-center">
              <h1 className="secondary-accent text-white" style={{ fontSize: '3rem', margin: 0 }}>À Propos</h1>
              <span className="breadcrumb-item text-white" style={{ opacity: 0.8 }}>Découvrez notre histoire</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="d-flex flex-column gspace-5 overflow-hidden">
            <div className="welcome-about-wrapper">
              <div className="d-flex flex-column gspace-2 text-center align-items-center mb-5">
                <div>
                  <div className="sub-heading">
                    <span className="sub-heading-title" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Bienvenue sur Campione</span>
                  </div>
                </div>
                <h2>Où la passion rencontre le terrain</h2>
              </div>
              <div className="d-flex flex-column justify-content-end h-100 text-center mb-5">
                <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
                  Campione est bien plus qu'une simple application de réservation. Nous sommes une communauté grandissante de passionnés de sport, dédiée à faciliter l'accès aux meilleures infrastructures. Que vous soyez débutant ou professionnel, Campione est votre partenaire sportif de choix.
                </p>
              </div>
            </div>

            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 mt-5">
              <div className="col">
                <div className="card card-about-misson" style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '1rem', textAlign: 'center' }}>
                  <div className="card-content">
                    <h4>Terrains d'Exception</h4>
                    <p>Accès à des infrastructures professionnelles pour vos matchs et entraînements.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-about-misson" style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '1rem', textAlign: 'center' }}>
                  <div className="card-content">
                    <h4>Programmes de Coaching</h4>
                    <p>Trouvez des coachs pour améliorer votre niveau, du débutant à l'expert.</p>
                  </div>
                </div>
              </div>
              <div className="col mt-4">
                <div className="card card-about-misson" style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '1rem', textAlign: 'center' }}>
                  <div className="card-content">
                    <h4>Communauté & Tournois</h4>
                    <p>Participez à des événements réguliers et gardez l'esprit de compétition.</p>
                  </div>
                </div>
              </div>
              <div className="col mt-4">
                <div className="card card-about-misson" style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '1rem', textAlign: 'center', backgroundColor: 'var(--primary)', color: 'white' }}>
                  <div className="card-content">
                    <h4 className="text-white">Avantages Exclusifs</h4>
                    <p className="text-white" style={{ color: 'rgba(255,255,255,0.8)' }}>Accès prioritaire, réductions et bien plus encore avec l'application.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
