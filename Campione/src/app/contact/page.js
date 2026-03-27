export const metadata = {
  title: 'Contact | Campione',
  description: 'Nous contacter',
};

export default function Contact() {
  return (
    <main>
      <div className="section-wrapper pb-0">
        <div className="section-banner-inner banner-inner-about" style={{ padding: '4rem 0', backgroundColor: '#171717', color: 'white' }}>
          <div className="container">
            <div className="d-flex flex-column gspace-2 text-center justify-content-center">
              <h1 className="secondary-accent text-white" style={{ fontSize: '3rem', margin: 0 }}>Contactez-Nous</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="row row-cols-md-2 row-cols-1">
            <div className="col mb-5">
              <div className="d-flex flex-column gspace-2">
                <h4 className="secondary-accent">Nos Coordonnées</h4>
                <div className="d-flex flex-column gspace-2 mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="contact-icon" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <div>
                            <h6 style={{ margin: 0, color: '#666' }}>Téléphone</h6>
                            <h5 style={{ margin: 0 }}>+33 1 23 45 67 89</h5>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="contact-icon" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <h6 style={{ margin: 0, color: '#666' }}>Email</h6>
                            <h5 style={{ margin: 0 }}>contact@campione.app</h5>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h3 className="mb-4">Envoyez-nous un message</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nom Complet</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} placeholder="Votre nom" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                    <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} placeholder="Votre email" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                    <textarea rows="5" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} placeholder="Votre demande..."></textarea>
                  </div>
                  <button type="button" className="btn btn-accent" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', padding: '1rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
