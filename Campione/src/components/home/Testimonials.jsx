const testimonials = [
  {
    name: 'Karim Benali',
    role: 'Gérant, Complex Sport Alger',
    avatar: 'KB',
    content:
      "Depuis qu'on utilise Campione, notre taux d'occupation a augmenté de 40%. Les réservations en ligne ont complètement remplacé les appels téléphoniques. Un gain de temps énorme.",
    rating: 5,
  },
  {
    name: 'Sofia Mansouri',
    role: 'Joueuse de padel, Casablanca',
    avatar: 'SM',
    content:
      "Je réserve mes terrains en moins d'une minute. Le paiement partagé avec mes amis est une fonctionnalité que j'attendais depuis longtemps. Campione a changé ma façon de jouer.",
    rating: 5,
  },
  {
    name: 'Youssef Trabelsi',
    role: 'Directeur, Tunis Sport Club',
    avatar: 'YT',
    content:
      "Le tableau de bord club est très complet. On voit en temps réel les réservations, les revenus, et on peut gérer les créneaux facilement. Je recommande à tous les complexes.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="fa-solid fa-star text-sm"></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 tracking-wide uppercase">Témoignages</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ils nous font confiance
          </p>
          <p className="mt-4 text-lg text-gray-600 font-light">
            Clubs et joueurs partagent leur expérience avec Campione.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <StarRating count={t.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed flex-1">"{t.content}"</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
