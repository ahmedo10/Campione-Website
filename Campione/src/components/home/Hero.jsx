import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white pt-14">
      {/* Gradient blobs */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-indigo-400 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
      <div className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px] opacity-40" aria-hidden="true" />

      <div className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text content */}
            <div>
              {/* Badge annonce */}
              <div className="mb-8 inline-flex">
                <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all cursor-pointer bg-white/60 backdrop-blur-sm">
                  <i className="fa-solid fa-bolt text-yellow-500 mr-1.5"></i>
                  Nouveau : Gestion multi-terrains disponible.{' '}
                  <Link href="/pricing" className="font-semibold text-blue-600">
                    Voir les plans <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                Gérez vos terrains.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Jouez sans limites.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600 font-light max-w-xl">
                Campione connecte les complexes sportifs et les joueurs. Réservez, organisez et payez en quelques secondes — sur web et mobile.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <div className="w-full sm:w-auto p-1.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center">
                  <input
                    type="email"
                    placeholder="Votre email professionnel..."
                    className="w-full sm:w-56 px-4 py-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 focus:ring-0 text-sm"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all flex-shrink-0"
                  >
                    Essai gratuit
                  </button>
                </div>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2 py-3"
                >
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fa-solid fa-play text-blue-600 text-xs ml-0.5"></i>
                  </span>
                  Voir la démo
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  14 jours d&apos;essai gratuit
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  Sans carte bancaire
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  Sans engagement
                </span>
              </div>

              {/* Social proof */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['KB', 'SM', 'YT', 'AR'].map((initials) => (
                    <div key={initials} className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-yellow-400 text-xs">
                    {[1,2,3,4,5].map((s) => <i key={s} className="fa-solid fa-star"></i>)}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">+500 complexes nous font confiance</p>
                </div>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative">
              {/* Floating card - top left */}
              <div className="hidden lg:flex absolute -left-6 top-8 z-10 items-center gap-3 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-calendar-check text-green-600"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Nouvelle réservation</p>
                  <p className="text-xs text-gray-500">Terrain 3 · 18h00 - 19h00</p>
                </div>
              </div>

              {/* Floating card - bottom right */}
              <div className="hidden lg:flex absolute -right-6 bottom-12 z-10 items-center gap-3 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-users text-blue-600"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">+4 joueurs invités</p>
                  <p className="text-xs text-gray-500">Paiement partagé activé</p>
                </div>
              </div>

              {/* Revenue floating card */}
              <div className="hidden lg:flex absolute -right-4 top-1/3 z-10 flex-col bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 gap-1">
                <p className="text-xs text-gray-500">Revenus ce mois</p>
                <p className="text-lg font-extrabold text-gray-900">+128 000 DA</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <i className="fa-solid fa-arrow-trend-up"></i> +23% vs mois dernier
                </p>
              </div>

              <div className="-m-2 rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-3xl lg:p-4">
                <img
                  src="/booster-assets/img/home-3/hero/hero-image.png"
                  alt="Aperçu de l'application Campione"
                  className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
