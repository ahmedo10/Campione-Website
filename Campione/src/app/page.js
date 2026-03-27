export default function Home() {
  return (
    <main>
      {/* Banner Home Section */}
      <div className="section-wrapper pb-0">
        <div className="banner-home-container" id="banner-slideshow">
          <div className="slideshow-container"></div>                  
          <div className="hero-container">
            <div className="banner-content-container">
              
              <div className="banner-home-top">
                <div className="banner-home-title animate-box animate__animated animated" data-animate="animate__fadeInLeft">
                  <div>
                    <div className="sub-heading sub-heading-banner">
                      <span className="sub-heading-title">Réservation de Terrains de Sports</span>
                    </div>
                  </div>
                  <h1 className="secondary-accent">CAMPIONE APP</h1>
                </div>

                <div className="banner-home-network animate-box animate__animated animated" data-animate="animate__fadeInRight">
                  <div className="card card-banner-reviewer">
                    <h4 className="secondary-accent">Débloquez Tout Votre Potentiel</h4>
                    <div className="banner-reviewer-container">
                      <img src="/adelux-assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="banner-avatar" />
                      <img src="/adelux-assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="banner-avatar" />
                      <img src="/adelux-assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="banner-avatar" />
                    </div>
                    <span className="reviewer-card-description">Trouvez et réservez les meilleurs terrains autour de vous, instantanément.</span>
                  </div>
                </div>
              </div>

              <div className="banner-home-bottom">
                <div className="banner-home-community-container animate-box animate__animated animated" data-animate="animate__fadeInLeft">
                  <div className="card banner-home-community">
                    <div className="home-community-img">
                      <img src="/adelux-assets/images/dummy-img-600x500.jpg" alt="Banner Home Community" />
                    </div>
                    <div className="home-community-content">
                      <div className="d-flex flex-row align-items-center gspace-1">
                        <h3 className="home-community-highlight">100+</h3>
                      </div>
                      <div className="d-flex flex-column">
                        <h5 className="secondary-accent mb-0">Terrains Disponibles</h5>
                        <p className="secondary-accent mb-0">Rejoignez la plus grande communauté de sportifs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="banner-home-cta-container animate-box animate__animated animated-delay-slow" data-animate="animate__fadeInRight">
                  <div className="banner-home-cta">
                    <h3 className="secondary-accent">La Meilleure Application de Réservation</h3>
                    <p className="secondary-accent">Campione vous permet de réserver facilement vos terrains de Padel, Foot5, Tennis et bien plus encore.</p>
                    <div className="d-flex flex-row align-items-center gspace-2 gspace-xl-4">
                      <div>
                        <a href="/booking" className="btn btn-accent">
                          <span className="btn-title">Télécharger l'App</span>
                          <span className="icon-circle">
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="section-wrapper py-0">
        <div className="section section-chooseus">
          <div className="hero-container">
            <div className="d-flex flex-column flex-xl-row align-items-center gspace-100">
              
              <div className="chooseus-title-container">
                <div className="d-flex flex-column gspace-2 animate-box animate__animated animated" data-animate="animate__fadeInLeft">
                  <div>
                    <div className="sub-heading">
                      <i className="fa-solid fa-circle accent-color-2"></i>
                      <span className="sub-heading-title">Pourquoi Nous Choisir</span>
                    </div>
                  </div>
                  <h2>Pourquoi les joueurs choisissent Campione.</h2>
                  <p className="mb-0">Découvrez ce qui fait de Campione la destination numéro un pour tous les passionnés de sport.</p>
                </div>
              </div>

              <div className="chooseus-card-container">
                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                  <div className="col">
                    <div className="card card-chooseus animate-box animate__animated animated" data-animate="animate__fadeInRight">
                      <div className="chooseus-icon">
                        <img src="/adelux-assets/images/Icon-1.png" alt="Icon" className="img-fluid" />
                      </div>
                      <h4>Réservation 100% en ligne</h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-chooseus bg-accent-color animate-box animate__animated animated-delay-slow" data-animate="animate__fadeInRight">
                      <div className="chooseus-icon">
                        <img src="/adelux-assets/images/Icon-2.png" alt="Icon" className="img-fluid" />
                      </div>
                      <h4 className="secondary-accent">Paiement partagé</h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-chooseus animate-box animate__animated animated" data-animate="animate__fadeInRight">
                      <div className="chooseus-icon">
                        <img src="/adelux-assets/images/Icon-3.png" alt="Icon" className="img-fluid" />
                      </div>
                      <h4>Organisez vos matchs</h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-chooseus animate-box animate__animated animated-delay-slow" data-animate="animate__fadeInRight">
                      <div className="chooseus-icon">
                        <img src="/adelux-assets/images/Icon-4.png" alt="Icon" className="img-fluid" />
                      </div>
                      <h4>Installations modernes</h4>
                    </div>
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
