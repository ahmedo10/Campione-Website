const features = [
  {
    name: 'Tout-en-Un',
    description: 'Trouvez le terrain idéal, invitez vos amis, et payez directement via l\'application de manière sécurisée.',
    icon: 'fa-solid fa-layer-group',
  },
  {
    name: 'Temps réel',
    description: 'Visualisez les disponibilités instantanément. Fini les appels téléphoniques sans réponse et les attentes interminables.',
    icon: 'fa-solid fa-bolt',
  },
  {
    name: 'Paiement partagé',
    description: 'Divisez automatiquement le prix du créneau entre tous les participants pour éviter les soucis de remboursement.',
    icon: 'fa-solid fa-credit-card',
  },
  {
    name: 'Gestion d\'équipe',
    description: 'Organisez vos matchs, relancez les retardataires et gagnez du temps grâce aux alertes automatisées.',
    icon: 'fa-solid fa-users-gear',
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 tracking-wide uppercase">Pourquoi Campione</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Toutes les fonctionnalités dont vous avez besoin
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-light">
            Une interface intuitive conçue pour la rapidité. Plus de frictions, juste le plaisir de jouer et de se retrouver.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 group hover:-translate-y-1 transition-transform duration-300">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-blue-100">
                    <i className={feature.icon + " text-xl"}></i>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </div>
  );
}
