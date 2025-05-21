import React from 'react'

export default function Temoignages() {
  return (
    <div>
      <section className="py-12 bg-green-100" id="temoignages">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                auteur: 'Marie Dupont – ONG Verte',
                texte:
                  'Grâce à cette plateforme, nous avons trouvé un partenaire entreprise pour lancer notre projet de reforestation au Gabon.',
              },
              {
                auteur: 'Dr. Alain Mba – Université de Libreville',
                texte:
                  'Un excellent outil pour collaborer avec des ONG sur des projets de recherche environnementale.',
              },
              {
                auteur: 'Jean Koumba – Citoyen engagé',
                texte:
                  'J’ai pu découvrir et participer à des projets écologiques locaux. Interface fluide et intuitive !',
              },
            ].map((temoin, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700 mb-4">
                  &ldquo;{temoin.texte}&rdquo;
                </p>
                <span className="block text-sm font-semibold text-gray-600">
                  — {temoin.auteur}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

