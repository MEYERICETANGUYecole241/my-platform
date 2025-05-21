import React from 'react'
import Image from 'next/image'

export default function A_propos() {
  return (
    <div>
      {/* Titre principal */}
      <section className="px-6 py-6 bg-green-100 mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-6">
          À propos de la plateforme
        </h1>
      </section>

      {/* Section principale avec image et texte */}
      <section className="px-6 py-6 bg-green-100">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Colonne image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/image_2.svg" // ⚠️ le fichier doit être dans le dossier "public/"
              alt="Illustration de la plateforme collaborative"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          
          {/* Colonne texte */}
          <div className="w-full md:w-1/2 text-right">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Notre plateforme collaborative est conçue pour faciliter les échanges et les synergies 
              entre entreprises (RSE), ONG, chercheurs et citoyens engagés, autour de projets à fort impact 
              environnemental. Elle repose sur des valeurs de transparence, d’inclusion et d’innovation, 
              en offrant un espace sécurisé où chaque acteur peut partager des idées, publier des initiatives 
              écologiques, et construire des partenariats durables. Ce qui rend cette plateforme unique, c’est 
              sa capacité à connecter des mondes différents autour d’un objectif commun : accélérer la transition 
              écologique en mutualisant les savoirs, les ressources et les engagements.
            </p>

            {/* Bouton centré */}
            <div className="flex justify-center">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full animate-pulse hover:bg-blue-200 hover:text-black transition-colors duration-300">
                Connexion
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

