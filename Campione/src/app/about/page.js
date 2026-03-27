import Link from 'next/link';

export const metadata = {
  title: 'À Propos | Campione',
  description: 'Découvrez qui nous sommes.',
};

export default function About() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">

        {/* Gt Breadcrumb Section Start */}
        <div className="gt-breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('/booster-assets/img/breadcrumb-bg.jpg')"}}>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">À Propos de <span>Nous</span></h1>
                    </div>
                    <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <Link href="/">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                         À Propos
                        </li>
                    </ul>
                </div>
            </div>
        </div>

         {/* Gt Brand Section Start */}
        <div className="gt-brand-section section-padding pb-0">
            <div className="container">
                <div className="gt-brand-wrapper">
                    <h5 className="color-3 pt-0 char-animation">ILS NOUS FONT CONFIANCE</h5>
                    <div className="swiper gt-brand-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="gt-brand-image text-center hover-2">
                                    <img src="/booster-assets/img/home-1/brand/brand-01.png" alt="img" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gt-brand-image text-center hover-2">
                                    <img src="/booster-assets/img/home-1/brand/brand-02.png" alt="img" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gt-brand-image text-center hover-2">
                                    <img src="/booster-assets/img/home-1/brand/brand-03.png" alt="img" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gt-brand-image text-center hover-2">
                                    <img src="/booster-assets/img/home-1/brand/brand-04.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Gt About Section Start */}
        <section className="gt-about-section fix section-padding pt-0 mt-5">
            <div className="container">
                <div className="gt-about-wrapper-3 section-padding pb-0">
                    <div className="clicp-shape">
                        <img src="/booster-assets/img/new-add/clip-path.png" alt="img" />
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-6">
                            <div className="gt-about-content">
                                <div className="gt-section-title style-3 mb-0">
                                    <h6 className="tt-capitalize wow fadeInUp">Notre Mission</h6>
                                    <h2 className="char-animation">
                                        Offrir des expériences inoubliables
                                    </h2>
                                </div>
                                <p className="gt-text wow fadeInUp" data-wow-delay=".3s">
                                    Campione centralise tout ce dont vous avez besoin pour profiter de votre passion sportive, sans les tracas de la réservation ou de l'organisation. Participez à des parties, gérez vos équipes, et bien plus encore.
                                </p>
                                <ul className="gt-list-items wow fadeInUp" data-wow-delay=".5s">
                                    <li>
                                        <span className="gt-circle-box"></span>
                                        <div className="gt-content">
                                            <h4>Plateforme Tout-en-Un</h4>
                                            <span>
                                                Trouvez le terrain idéal, invitez vos amis, et payez directement via l'application de manière sécurisée.
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="gt-circle-box"></span>
                                        <div className="gt-content">
                                            <h4>Abordable</h4>
                                            <span>
                                               Profitez d'un abonnement adapté pour les clubs et une application 100% gratuite pour les joueurs.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="gt-about-image agn-choose-5-img">
                                <div className="crm-imagewow wow fadeInRight" data-wow-delay=".3s">
                                    <img src="/booster-assets/img/new-add/crm-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Gt Feature Section Start */}
        <section className="gt-feature-section-3 fix section-padding pt-0 mt-5">
            <div className="gt-feature-focus-wrapper section-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="gt-feature-image">
                                <img src="/booster-assets/img/home-3/feature-focus.png" alt="img" className="appear_left" />
                                <div className="bg-shape">
                                    <img src="/booster-assets/img/home-3/focus-bg.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gt-feature-content">
                                <div className="gt-section-title style-3 mb-0">
                                    <h6 className="text-white tt-capitalize wow fadeInUp">Automatisation intelligente</h6>
                                    <h2 className="text-white char-animation">
                                        Automatisez les réservations, concentrez-vous sur le sport
                                    </h2>
                                </div>
                                <div className="gt-counter-items">
                                    <div className="gt-counter wow fadeInUp" data-wow-delay=".3s">
                                        <h2>
                                           <span className="gt-count">92</span> %
                                        </h2>
                                        <p>Amélioration de la satisfaction client</p>
                                    </div>
                                    <div className="gt-counter wow fadeInUp" data-wow-delay=".5s">
                                        <h2>
                                           <span className="gt-count">48</span> %
                                        </h2>
                                        <p>Réduction des coûts opérationnels</p>
                                    </div>
                                </div>
                                <p className="text text-white wow fadeInUp" data-wow-delay=".7s">
                                    Le temps c'est jouer. Grâce à notre algorithme optimisé, les terrains sont toujours alloués de la meilleure façon, maximisant l'occupation globale des clubs de sport partenaires.
                                </p>
                                <div className="gt-btn-all wow fadeInUp" data-wow-delay=".9s">
                                    <Link href="/contact" className="gt-theme-btn style-3">Commencer</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Gt Web App Section Start */}
        <section className="gt-web-app-section fix section-padding section-bg-4">
            <div className="container">
                <div className="gt-web-app-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="gt-web-app-content">
                                <div className="gt-section-title style-3 mb-0">
                                    <h6 className="wow fadeInUp tt-capitalize">Application Web et Mobile</h6>
                                    <h2 className="char-animation">
                                       Tout ce dont vous avez besoin au même endroit
                                    </h2>
                                </div>
                                <p className="web-text wow fadeInUp" data-wow-delay=".3s">
                                    Retrouvez dans votre poche ou sur votre ordinateur votre historique de matchs, votre réseau d'amis et le planning en temps réel.
                                </p>
                                <div className="gt-client-box-items top_view_2 item-hover">
                                    <p>
                                        Gardez tous vos contacts, matchs, et intéractions en un seul lieu. Ne cherchez plus l'information, elle vient à vous.
                                    </p>
                                    <div className="gt-info">
                                        <img src="/booster-assets/img/home-3/client.png" alt="img" />
                                        <span><b>Campione Equipe,</b> Développeurs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="gt-web-app-image agn-choose-5-img">
                                <div className="web-app wow fadeInRight" data-wow-delay=".3s">
                                    <img src="/booster-assets/img/new-add/web-app.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}
