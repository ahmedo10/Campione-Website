import Link from 'next/link';

export const metadata = {
  title: 'Contact | Campione',
  description: 'Nous contacter',
};

export default function Contact() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">

        {/* Gt Breadcrumb Section Start */}
        <div className="gt-breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('/booster-assets/img/breadcrumb-bg.jpg')"}}>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">Contactez-nous</h1>
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
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Contact Info Section Start */}
        <section className="contact-info-section fix section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-info-items text-center active">
                            <div className="icon">
                               <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="content">
                                <h3>Nos Bureaux</h3>
                                <p>
                                    Paris, France <br /> (123 Rue de la République)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                               <i className="fa-solid fa-envelopes"></i>
                            </div>
                            <div className="content">
                                <h3><Link href="mailto:contact@campione.app">contact@campione.app</Link></h3>
                                <p>
                                    Envoyez-nous un message <br />
                                    à tout moment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                               <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="content">
                                <h3>Hotline:<Link href="tel:+33123456789">+33 1 23 45 67 89</Link></h3>
                                <p>
                                    Appelez-nous pour toute <br />
                                    assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section Start */}
        <section className="contact-section-33 fix section-padding pt-0">
            <div className="container">
                <div className="contact-wrapper-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="map-items">
                                <div className="googpemap">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <h2 className="inner-font fw-700 text-header-color">Prêt à démarrer ?</h2>
                                <p>
                                    Une question sur nos services ? Un partenariat ? N'hésitez pas à nous envoyer un message via le formulaire ci-dessous.
                                </p>
                                <form action="#" id="contact-form" method="POST" className="contact-form-items">
                                    <div className="row g-4">
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <span>Votre nom*</span>
                                                <input type="text" name="name" id="name" placeholder="Votre nom" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="form-clt">
                                                <span>Votre Email*</span>
                                                <input type="email" name="email" id="email" placeholder="Votre Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="form-clt">
                                                <span>Votre Message*</span>
                                                <textarea name="message" id="message" placeholder="Votre Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                            <button type="button" className="gt-theme-btn">
                                                Envoyer le message 
                                            </button>
                                        </div>
                                    </div>
                                </form>
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
