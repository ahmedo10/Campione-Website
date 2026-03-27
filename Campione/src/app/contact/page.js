export const metadata = {
  title: 'Contact | Campione',
  description: 'Nous contacter',
};

export default function Contact() {
  return (
    <main className="pb-24 bg-gray-50/30">
      <div className="section-wrapper pb-0">
        <div className="section-banner-inner banner-inner-about bg-gray-900 text-white rounded-b-[3rem] shadow-2xl relative overflow-hidden" style={{ padding: '8rem 0' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
          <div className="container relative z-10">
            <div className="d-flex flex-column gspace-2 text-center justify-content-center">
              <h1 className="secondary-accent text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">Contactez-Nous</h1>
              <span className="text-gray-300 text-lg md:text-xl font-medium tracking-wide">Une question ? Un partenariat ? Discutons-en.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-1 gap-y-16 items-center">
            
            <div className="col pr-0 lg:pr-16">
              <div className="d-flex flex-column gspace-2">
                <div className="mb-4">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-2 rounded-full">Assistance</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-10">Nos Coordonnées</h2>
                
                <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                        <div className="contact-icon bg-blue-50 text-blue-600 w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0">
                            <i className="fa-solid fa-phone-volume text-2xl"></i>
                        </div>
                        <div>
                            <h6 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">Téléphone</h6>
                            <h5 className="text-xl font-bold text-gray-900 m-0">+33 1 23 45 67 89</h5>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                        <div className="contact-icon bg-indigo-50 text-indigo-600 w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0">
                            <i className="fa-solid fa-envelope text-2xl"></i>
                        </div>
                        <div>
                            <h6 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">Email</h6>
                            <h5 className="text-xl font-bold text-gray-900 m-0">contact@campione.app</h5>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                        <div className="contact-icon bg-green-50 text-green-600 w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0">
                            <i className="fa-solid fa-location-dot text-2xl"></i>
                        </div>
                        <div>
                            <h6 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">Bureaux</h6>
                            <h5 className="text-xl font-bold text-gray-900 m-0">Paris, France</h5>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10"></div>
                
                <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Envoyez-nous un message</h3>
                
                <form className="flex flex-col gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 ml-1">Nom Complet</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 text-gray-900" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 ml-1">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 text-gray-900" placeholder="jean@exemple.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 ml-1">Message</label>
                    <textarea rows="5" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 text-gray-900 resize-none" placeholder="Comment pouvons-nous vous aider ?..."></textarea>
                  </div>
                  <button type="button" className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full flex justify-center items-center gap-2">
                    Envoyer le Message <i className="fa-solid fa-paper-plane text-sm"></i>
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
