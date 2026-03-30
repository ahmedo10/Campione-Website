const stats = [
  {
    value: '500+',
    label: 'Complexes partenaires',
    description: 'En Algérie, Maroc et Tunisie',
    icon: 'fa-solid fa-building',
  },
  {
    value: '25 000+',
    label: 'Joueurs actifs',
    description: 'Réservations chaque semaine',
    icon: 'fa-solid fa-users',
  },
  {
    value: '98%',
    label: 'Satisfaction client',
    description: 'Noté 5/5 par nos utilisateurs',
    icon: 'fa-solid fa-star',
  },
  {
    value: '3 clics',
    label: 'Pour réserver',
    description: 'Expérience ultra-rapide',
    icon: 'fa-solid fa-bolt',
  },
];

export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <i className={`${stat.icon} text-white text-lg`}></i>
              </div>
              <p className="text-4xl font-extrabold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-blue-100 sm:text-base">{stat.label}</p>
              <p className="mt-1 text-xs text-blue-200 hidden sm:block">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
