"use client"

import { Menu, X, } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-10 bg-green-600 shadow-md relative z-30">
      <div className="justify-between flex items-center space-x-2 w-full">
        
        <h1 className="text-xl font-bold text-white">Synergia</h1>

        <nav className="hidden md:flex space-x-6 text-sm items-center text-white">
          <Link href="/" className="hover:text-[#FFC059]">Accueil</Link>
          <Link href="/about" className="hover:text-[#FFC059]">Projets</Link>
          <Link href="/rooms" className="hover:text-[#FFC059]">Communauté</Link>
          <Link href="/events" className="hover:text-[#FFC059]">Ressources</Link>
          <Link href="/cuisines" className="hover:text-[#FFC059]">À propos</Link>
        </nav>

        <button className="bg-blue-900 text-white px-6 py-3 rounded-full animate-pulse hover:bg-blue-200 hover:text-black transition-colors duration-300">
          Connexion
        </button>

        <button
          className="md:hidden text-gray-700 z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 p-6 md:hidden z-10 text-black">
            <Link href="/" className="hover:text-[#FFC059]">Accueil</Link>
            <Link href="/about" className="hover:text-[#FFC059]">Projets</Link>
            <Link href="/rooms" className="hover:text-[#FFC059]">Communauté</Link>
            <Link href="/events" className="hover:text-[#FFC059]">Ressources</Link>
            <Link href="/cuisines" className="hover:text-[#FFC059]">À propos</Link>
          </div>
        )}
      </div>
    </header>
  )
}
