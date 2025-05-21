import React from 'react'


export default function heroe() {
  return (
    <div>
       <header className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('image.svg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Synergia
        </h1>
    

          <div className="bg-white/10 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md space-y-4">
      <h2 className="text-2xl font-semibold text-yellow-300">
        Connecter les acteurs du changement pour des projets d’avenir.
      </h2>

      <p className="text-white/90 leading-relaxed">
        <strong>Synergia</strong> est la plateforme qui connecte <strong>entreprises</strong>, <strong>ONG</strong>, <strong>chercheurs</strong> et <strong>citoyens</strong> engagés pour la transition écologique.  
        Ensemble, partageons des idées, lançons des projets concrets et bâtissons des solutions durables pour préserver notre planète.
      </p>

      <p className="italic text-white/80">
        Collaborer. Innover. Agir. Pour l’environnement.
      </p>
    </div>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
         connexion
        </button>
      </div>
    </header>
    </div>
  )
}


