export default function Benefits() {
  const steps = [
    {
      id: "01",
      title: "Réservation en 3 clics",
      description: "Choisissez le sport, la date et le lieu. Confirmez, et votre créneau vous est réservé automatiquement !",
    },
    {
      id: "02",
      title: "Invitation des joueurs",
      description: "Ajoutez vos contacts et l'application s'occupe de gérer les participants, les présences et les alertes.",
    },
    {
      id: "03",
      title: "Paiement partagé",
      description: "Ne payez que votre part : le système divise automatiquement le prix du créneau entre tous les participants.",
    }
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-100 rounded-full blur-[80px] opacity-60"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comment ça marche ?</h2>
          <p className="mt-4 text-lg text-gray-600 font-light">
            De la création de l'événement jusqu'au coup de sifflet final, Campione gère tout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-100 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{step.id}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center md:text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
