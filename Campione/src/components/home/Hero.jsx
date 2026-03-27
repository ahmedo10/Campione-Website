import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate pt-14 overflow-hidden bg-white">
      {/* Decorative gradient blob */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all cursor-pointer bg-white/50 backdrop-blur-sm">
                Nouveau: Découvrez les abonnements Club.{' '}
                <Link href="/about" className="font-semibold text-blue-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  En savoir plus <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-8 leading-tight drop-shadow-sm">
              La solution complète pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block">vos terrains</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 font-light max-w-2xl mx-auto mb-10">
              Campione centralise tout ce dont vous avez besoin pour profiter de votre passion sportive, sans les tracas de la réservation ou de l'organisation.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <div className="w-full sm:w-auto p-1.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center">
                <input 
                  type="email" 
                  placeholder="Entrez votre email..." 
                  className="w-full sm:w-64 px-4 py-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 focus:ring-0"
                />
                <button type="button" className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex-shrink-0">
                  Démarrer
                </button>
              </div>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-1">
                Espace Club <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-sm">
              <img
                src="/booster-assets/img/home-3/hero/hero-image.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
