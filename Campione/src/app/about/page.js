export const metadata = {
  title: 'À propos | Campione',
  description: 'En savoir plus sur l\'application Campione',
};

export default function About() {
  return (
    <main className="pb-24 bg-gray-50/30">
      <div className="section-wrapper pb-0 relative">
        <div className="section-banner-inner banner-inner-about bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white rounded-b-[3rem] shadow-2xl relative overflow-hidden" style={{ padding: '8rem 0' }}>
          {/* Subtle overlay pattern/shapes */}
          <div className="absolute inset-0 bg-[url('/booster-assets/img/new-add/footer-dot.png')] opacity-20"></div>
          <div className="container relative z-10">
            <div className="d-flex flex-column gspace-2 text-center justify-content-center">
              <h1 className="secondary-accent text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">À Propos</h1>
              <span className="breadcrumb-item text-blue-100 text-lg md:text-xl font-medium tracking-wide">Découvrez notre histoire</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="d-flex flex-column gspace-5 overflow-hidden">
            <div className="welcome-about-wrapper max-w-4xl mx-auto">
              <div className="d-flex flex-column gspace-2 text-center align-items-center mb-16">
                <div>
                  <div className="sub-heading mb-4">
                    <span className="sub-heading-title text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-2 rounded-full">Bienvenue sur Campione</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Où la passion rencontre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">le terrain</span></h2>
              </div>
              <div className="d-flex flex-column justify-content-end h-100 text-center mb-16">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Campione est bien plus qu'une simple application de réservation. Nous sommes une communauté grandissante de passionnés de sport, dédiée à faciliter l'accès aux meilleures infrastructures. Que vous soyez débutant ou professionnel, Campione est votre partenaire sportif de choix.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="col">
                <div className="card card-about-misson bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full text-center group cursor-default">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <i className="fa-solid fa-map-location-dot text-2xl text-blue-600 group-hover:text-white transition-colors"></i>
                  </div>
                  <div className="card-content">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Terrains d'Exception</h4>
                    <p className="text-gray-600 leading-relaxed">Accès à des infrastructures professionnelles pour vos matchs et entraînements.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-about-misson bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full text-center group cursor-default">
                  <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                    <i className="fa-solid fa-user-tie text-2xl text-indigo-600 group-hover:text-white transition-colors"></i>
                  </div>
                  <div className="card-content">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Programmes de Coaching</h4>
                    <p className="text-gray-600 leading-relaxed">Trouvez des coachs pour améliorer votre niveau, du débutant à l'expert.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-about-misson bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full text-center group cursor-default">
                  <div className="w-16 h-16 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-600 transition-all duration-300">
                    <i className="fa-solid fa-users text-2xl text-green-600 group-hover:text-white transition-colors"></i>
                  </div>
                  <div className="card-content">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Communauté & Tournois</h4>
                    <p className="text-gray-600 leading-relaxed">Participez à des événements réguliers et gardez l'esprit de compétition.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-about-misson bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full text-center group">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <i className="fa-solid fa-star text-2xl text-white"></i>
                  </div>
                  <div className="card-content">
                    <h4 className="text-2xl font-bold text-white mb-4">Avantages Exclusifs</h4>
                    <p className="text-blue-100 leading-relaxed">Accès prioritaire, réductions et bien plus encore directement depuis l'application.</p>
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
