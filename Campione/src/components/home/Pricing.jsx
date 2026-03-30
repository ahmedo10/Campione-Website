import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 'Gratuit',
    sub: 'pour les joueurs',
    description: 'Réservez des terrains, invitez vos amis et payez votre part.',
    cta: "Télécharger l'app",
    href: '/contact',
    featured: false,
    features: [
      'Réservation en temps réel',
      'Paiement partagé',
      'Invitation des joueurs',
      'Historique des matchs',
      'Notifications push',
    ],
  },
  {
    name: 'Club Pro',
    price: '2 900',
    sub: 'DA / mois',
    description: 'La solution complète pour gérer votre complexe sportif.',
    cta: "Démarrer l'essai gratuit",
    href: '/contact',
    featured: true,
    badge: 'Le plus populaire',
    features: [
      'Tableau de bord en temps réel',
      'Gestion des terrains & créneaux',
      'Paiements en ligne intégrés',
      'Statistiques & rapports',
      'Support prioritaire',
      'Application mobile incluse',
    ],
  },
  {
    name: 'Club Elite',
    price: '5 900',
    sub: 'DA / mois',
    description: 'Pour les grands complexes avec plusieurs terrains et équipes.',
    cta: 'Contacter les ventes',
    href: '/contact',
    featured: false,
    features: [
      'Tout Club Pro inclus',
      'Multi-terrains illimités',
      'API & intégrations',
      'Manager dédié',
      'Personnalisation de la marque',
      'Onboarding sur site',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 tracking-wide uppercase">Tarifs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Un plan pour chaque besoin
          </p>
          <p className="mt-4 text-lg text-gray-600 font-light">
            Gratuit pour les joueurs. Abordable pour les clubs. 14 jours d&apos;essai sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? 'bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-2xl ring-2 ring-blue-500 scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-gray-900 shadow">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold ${plan.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? 'text-blue-200' : 'text-gray-500'}`}>{plan.sub}</span>
                </div>
                <p className={`mt-3 text-sm ${plan.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <i className={`fa-solid fa-circle-check ${plan.featured ? 'text-blue-200' : 'text-blue-500'}`}></i>
                    <span className={plan.featured ? 'text-blue-50' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block text-center rounded-full py-3 px-6 text-sm font-bold transition-all ${
                  plan.featured
                    ? 'bg-white text-blue-700 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
