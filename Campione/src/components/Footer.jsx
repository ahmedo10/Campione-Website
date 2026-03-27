import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section className="gt-footer-section-3 footer-3">
          <div className="footer-dot">
              <img src="/booster-assets/img/new-add/footer-dot.png" alt="img" />
          </div>
          <div className="gt-cta-section-3">
              <div className="container">
                  <div className="gt-cta-wrapper-3 bg-cover" style={{backgroundImage: "url('/booster-assets/img/home-3/cta-bg.jpg')"}}>
                      <div className="gt-section-title style-3 mb-0">
                          <h6 className="wow fadeInUp tt-capitalize">Rejoindre Campione</h6>
                          <h2 className="char-animation">
                              Toute la gestion de vos terrains de sports
                          </h2>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay=".3s">Démarrez votre essai de 14 jours gratuits.</p>
                      <div className="gt-cta-btn wow fadeInUp" data-wow-delay=".5s">
                          <Link href="/contact" className="gt-theme-btn style-3 bg-header">Voir notre Démo</Link>
                          <Link href="/contact" className="gt-theme-btn style-3">Commencer l'Essai</Link>
                      </div>
                      <ul className="wow fadeInUp" data-wow-delay=".7s">
                          <li>
                              <i className="fa-regular fa-circle-check"></i>
                              14 jours d'essai pour les clubs
                          </li>
                          <li>
                              <i className="fa-regular fa-circle-check"></i>
                              Sans engagement
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="gt-footer-widget-wrapper style-2 style-3">
                  <div className="row justify-content-between">
                      <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-8 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                          <div className="gt-footer-widget-items">
                              <div className="gt-widget-head">
                                  <h3>À propos de Campione</h3>
                              </div>
                              <div className="gt-footer-content">
                                  <p>
                                      Campione est la meilleure façon de réserver des terrains de sports en ligne rapidement et de manière sécurisée.
                                  </p>
                                  <div className="gt-social-icon d-flex align-items-center">
                                      <Link href="#">
                                          <img src="/booster-assets/img/home-3/play-store.png" alt="img" />
                                      </Link>
                                      <Link href="#">
                                          <img src="/booster-assets/img/home-3/app-store.png" alt="img" />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="gt-footer-widget-items">
                              <div className="gt-widget-head">
                                  <h3>Notre Entreprise</h3>
                              </div>
                             <ul className="gt-list-area">
                                  <li>
                                      <Link href="/about">À Propos</Link>
                                  </li>
                                  <li>
                                      <Link href="/contact">Carrières</Link>
                                  </li>
                                  <li>
                                      <Link href="/contact">Contactez-nous</Link>
                                  </li>
                                  <li>
                                      <Link href="/contact">Espace Club</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="gt-footer-widget-items">
                              <div className="gt-widget-head">
                                  <h3>Ressources</h3>
                              </div>
                              <ul className="gt-list-area">
                                  <li>
                                      <Link href="#">Fonctionnalités</Link>
                                  </li>
                                  <li>
                                      <Link href="#">Avantages</Link>
                                  </li>
                                  <li>
                                      <Link href="#">Tarifs</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                       <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-8 ps-xxl-5 wow fadeInUp" data-wow-delay=".8s">
                          <div className="gt-footer-widget-items">
                              <div className="gt-widget-head">
                                  <h3>Support</h3>
                              </div>
                               <ul className="gt-list-area">
                                  <li>
                                      <Link href="#">Aide</Link>
                                  </li>
                                  <li>
                                      <Link href="#">FAQ</Link>
                                  </li>
                                  <li>
                                      <Link href="#">Tutoriels</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="gt-footer-bottom-3">
                  <Link href="/" className="footer-logo">
                      <img src="/logos/logo%20campione%20dark%20carre.png" alt="img" style={{maxHeight: '40px'}} />
                  </Link>
                  <p>Copyright 2026 Campione. Tous droits réservés.</p>
                  <div className="gt-social-icon d-flex align-items-center style-home-3">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
