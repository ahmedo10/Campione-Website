'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Campione est-il gratuit pour les joueurs ?",
    answer:
      "Oui, l'application Campione est 100% gratuite pour les joueurs. Vous pouvez réserver des terrains, inviter vos amis et utiliser le paiement partagé sans aucun frais d'abonnement.",
  },
  {
    question: "Comment fonctionne le paiement partagé ?",
    answer:
      "Lors de la réservation, vous invitez vos coéquipiers via l'app. Chaque joueur reçoit une notification et paie sa part directement depuis son téléphone. Vous n'avancez que votre quote-part.",
  },
  {
    question: "Combien de temps dure l'essai gratuit pour les clubs ?",
    answer:
      "Les complexes sportifs bénéficient de 14 jours d'essai complet, sans carte bancaire requise. Vous accédez à toutes les fonctionnalités du plan Club Pro pendant cette période.",
  },
  {
    question: "Puis-je gérer plusieurs terrains avec un seul compte ?",
    answer:
      "Oui. Le plan Club Pro permet de gérer jusqu'à 10 terrains. Pour les grands complexes avec plus de terrains, le plan Club Elite offre une gestion multi-terrains illimitée.",
  },
  {
    question: "L'application est-elle disponible sur iOS et Android ?",
    answer:
      "Oui, Campione est disponible sur l'App Store (iOS) et Google Play (Android). Une version web est également accessible pour les gestionnaires de clubs.",
  },
  {
    question: "Comment les clubs reçoivent-ils leurs paiements ?",
    answer:
      "Les paiements sont traités de manière sécurisée via notre partenaire de paiement. Les fonds sont virés directement sur le compte bancaire du club selon un calendrier hebdomadaire.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900">{faq.question}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-blue-200 flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-45 bg-blue-600 border-blue-600' : ''}`}>
          <i className={`fa-solid fa-plus text-xs ${isOpen ? 'text-white' : 'text-blue-600'}`}></i>
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 leading-relaxed text-sm">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-base font-semibold leading-7 text-blue-600 tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Questions fréquentes
            </p>
            <p className="mt-4 text-lg text-gray-600 font-light">
              Tout ce que vous devez savoir sur Campione. Vous ne trouvez pas la réponse ?{' '}
              <a href="/contact" className="text-blue-600 hover:underline font-medium">
                Contactez-nous.
              </a>
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <i className="fa-solid fa-headset text-blue-600 text-xl"></i>
                <span className="font-semibold text-gray-900">Support disponible</span>
              </div>
              <p className="text-sm text-gray-600">Notre équipe répond en moins de 2h en semaine.</p>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-6 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
