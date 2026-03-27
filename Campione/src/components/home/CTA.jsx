import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à révolutionner vos parties ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 font-light">
            Rejoignez des milliers de sportifs et de clubs qui utilisent déjà Campione au quotidien. L'inscription est gratuite pour les joueurs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-100 hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Télécharger l'application
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors">
              Espace Club <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
