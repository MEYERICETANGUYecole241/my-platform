"use client"

import { Menu, X, Lock} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';




export default function Header () {
const [isOpen, setIsOpen] = useState(false);

return (
// Header principal, avec flexbox pour aligner horizontalement les éléments.
    <header className="flex justify-between  items-center px-6 py-10 bg-green-600 shadow-md relative z-30">
      
      {/* SECTION 1 : Logo + nom du site */}
      <div className=" justify-between flex items-center space-x-2 w-full">
       
        {/* Nom de la startup, stylisé */}
        <h1 className="text-xl font-bold text-white"> Synergia </h1>

        <nav className="hidden md:flex space-x-6 text-sm items-center text-white">
          <Link href="/" className="hover:text-[#FFC059]">Accueil</Link>
          <Link href="/about" className="hover:text-[#FFC059]">Projets</Link>
          <Link href="/rooms" className="hover:text-[#FFC059]">Communauté</Link>
          <Link href="/events" className="hover:text-[#FFC059]">Ressources</Link>
          <Link href="/cuisines" className="hover:text-[#FFC059]">À propos</Link>
         
        </nav>


        {/* SECTION 3 : Boutons d’action visibles uniquement sur desktop */}
<button className="bg-blue-900 text-white px-6 py-3  rounded-full animate-pulse hover:bg-blue-200 hover:text-black transition-colors duration-300">
  connexion
</button>



      {/* SECTION 4 : Bouton burger pour le menu mobile (visible uniquement sur petit écran) */}
      <button
        className="md:hidden text-gray-700 z-20"
        onClick={() => setIsOpen(!isOpen)} // Inverse l’état du menu à chaque clic
      >
        {/* Affiche soit l’icône "X" si le menu est ouvert, soit "Menu" s'il est fermé */}
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* SECTION 5 : Menu mobile (affiché uniquement quand isOpen est true) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 p-6 md:hidden z-10 text-black">
          
          {/* Liens de navigation version mobile */}
          <Link href="/" className="hover:text-[#FFC059]">Accueil</Link>
          <Link href="/about" className="hover:text-[#FFC059]">Projets</Link>
          <Link href="/rooms" className="hover:text-[#FFC059]">Communauté</Link>
          <Link href="/events" className="hover:text-[#FFC059]">Ressources</Link>
          <Link href="/cuisines" className="hover:text-[#FFC059]">À propos</Link>
          {/* Bouton de connexion en version mobile, visible ici contrairement au desktop */}
          
          
        </div>
      )}

</div>





</header>
)

}
