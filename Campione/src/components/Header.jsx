import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* <!-- Preloader --> */}
      <div className="preloader"></div>

      {/* <!-- GT Back To Top Start --> */}
      <button id="gt-back-top" className="gt-back-to-top color-3">
         <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* <!-- GT MouseCursor Start --> */}
      <div className="mouseCursor cursor-outer color-3"></div>
      <div className="mouseCursor cursor-inner color-3"></div>

      {/* <!-- Offcanvas Area Start --> */}
      <div className="fix-area">
          <div className="offcanvas__info style-3">
              <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                      <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                          <div className="offcanvas__logo">
                              <Link href="/">
                                  <img src="/logos/logo%20campione%20dark%20carre.png" alt="logo-img" />
                              </Link>
                          </div>
                          <div className="offcanvas__close">
                              <button>
                              <i className="fas fa-times"></i>
                              </button>
                          </div>
                      </div>
                      <p className="text d-none d-xl-block">
                          Campione : Réservez vos terrains de sport facilement. Découvrez une nouvelle manière de jouer en équipe, gérer vos paiements et plus encore.
                      </p>
                      <div className="mobile-menu style-2 fix mb-3"></div>
                      <div className="offcanvas__contact pt-5">
                          <Link href="/contact" className="gt-theme-btn">
                             Télécharger l'App
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* <!-- Header Section Start --> */}
      <div className="header-top-3">
          <div className="container">
              <p>
                  Réservez vos terrains avec <Link href="/contact">l'application Campione</Link>
              </p>
          </div>
      </div>
      <header id="header-sticky" className="header-3">
          <div className="container">
              <div className="mega-menu-wrapper">
                  <div className="header-main">
                      <div className="logo">
                          <Link href="/" className="header-logo">
                              <img src="/logos/logo%20campione%20plat%20light.png" alt="logo-img" />
                          </Link>
                      </div>
                      <div className="mean__menu-wrapper">
                          <div className="main-menu">
                              <nav id="mobile-menu">
                                  <ul>
                                      <li>
                                          <Link href="/">
                                              Accueil 
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="/about">À propos</Link>
                                      </li>
                                      <li>
                                          <Link href="/contact">Contact</Link>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                      <div className="header-right d-flex justify-content-end align-items-center">
                          <div className="header-button">
                              <Link href="/contact" className="gt-theme-btn gt-theme-btn style-3 bg-border">Espace Club</Link>
                              <Link href="/contact" className="gt-theme-btn gt-theme-btn style-3 bg-theme">Télécharger</Link>
                          </div>
                          <div className="header__hamburger d-xl-none my-auto">
                              <div className="sidebar__toggle">
                                  <div className="header-bar">
                                      <span></span>
                                      <span></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </>
  );
}
