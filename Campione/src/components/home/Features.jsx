const features = [
  {
    name: 'Tout-en-Un',
    description: 'Trouvez le terrain idéal, invitez vos amis, et payez directement via l\'application de manière sécurisée.',
    icon: 'fa-solid fa-layer-group',
    color: 'blue',
  },
  {
    name: 'Temps réel',
    description: 'Visualisez les disponibilités instantanément. Fini les appels téléphoniques sans réponse et les attentes interminables.',
    icon: 'fa-solid fa-bolt',
    color: 'yellow',
  },
  {
    name: 'Paiement partagé',
    description: 'Divisez automatiquement le prix du créneau entre tous les participants pour éviter les soucis de remboursement.',
    icon: 'fa-solid fa-credit-card',
    color: 'green',
  },
  {
    name: 'Gestion d\'équipe',
    description: 'Organisez vos matchs, relancez les retardataires et gagnez du temps grâce aux alertes automatisées.',
    icon: 'fa-solid fa-users-gear',
    color: 'indigo',
  },
  {
    name: 'Tableau de bord',
    description: 'Suivez vos revenus, taux d\'occupation et statistiques en temps réel depuis un dashboard intuitif.',
    icon: 'fa-solid fa-chart-line',
    color: 'purple',
  },
  {
    name: 'Notifications push',
    description: 'Rappels automatiques, confirmations de réservation et alertes de paiement pour ne rien manquer.',
    icon: 'fa-solid fa-bell',
    color: 'orange',
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-50',   icon: 'text-blue-600',   hover: 'group-hover:bg-blue-600',   border: 'border-blue-100' },
  yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', hover: 'group-hover:bg-yellow-500', border: 'border-yellow-100' },
  green:  { bg: 'bg-green-50',  icon: 'text-green-600',  hover: 'group-hover:bg-green-600',  border: 'border-green-100' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', hover: 'group-hover:bg-indigo-600', border: 'border-indigo-100' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', hover: 'group-hover:bg-purple-600', border: 'border-purple-100' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', hover: 'group-hover:bg-orange-500', border: 'border-orange-100' },
};

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const c = colorMap[feature.color];
            return (
              <div
                key={feature.name}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center mb-5 ${c.hover} group-hover:text-white transition-colors duration-300`}>
                  <i className={`${feature.icon} text-lg ${c.icon} group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
