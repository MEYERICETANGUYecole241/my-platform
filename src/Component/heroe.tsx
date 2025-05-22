import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <header
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('/image3.svg')` }} // Remplace avec ton image
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative text-center p-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          trouvez facilement votre futur logement
        </h1>

        <div className="bg-white/10 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">
            Chambres, studios, maisons et appartements à portée de clic.
          </h2>

          <p className="text-white/90 leading-relaxed">
            <strong>MaRésidence</strong> vous connecte aux meilleures offres de location
            adaptées à vos besoins et à votre budget. Explorez, réservez, emménagez.
          </p>

          <p className="italic text-white/80">
            Simple. Rapide. Fiable.
          </p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/properties"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Explorer les annonces
          </Link>
          <Link
            href="/login"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </header>
  );
}
