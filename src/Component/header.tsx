"use client"
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-6 bg-blue-600 shadow-md relative z-30">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">MaRésidence</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-sm items-center text-white">
          <Link href="/" className="hover:text-yellow-300 transition">Accueil</Link>
          <Link href="/properties" className="hover:text-yellow-300 transition">Annonces</Link>
          <Link href="/my-reservations" className="hover:text-yellow-300 transition">Mes réservations</Link>
          <Link href="/dashboard" className="hover:text-yellow-300 transition">Tableau de bord</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </nav>

        {/* Connexion */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="hidden md:inline-block bg-white text-green-700 font-semibold px-4 py-2 rounded-full hover:bg-blue-300 hover:text-black transition"
          >
            Connexion
          </Link>

          {/* Toggle Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 p-6 md:hidden z-20 text-gray-800">
          <Link href="/" className="hover:text-green-700">Accueil</Link>
          <Link href="/properties" className="hover:text-green-700">Annonces</Link>
          <Link href="/my-reservations" className="hover:text-green-700">Mes réservations</Link>
          <Link href="/dashboard" className="hover:text-green-700">Tableau de bord</Link>
          <Link href="/contact" className="hover:text-green-700">Contact</Link>
          <Link
            href="/login"
            className="mt-4 w-full text-center bg-green-600 text-white py-2 rounded-full hover:bg-yellow-300 hover:text-black transition"
          >
            Connexion
          </Link>
        </div>
      )}
    </header>
  );
}
