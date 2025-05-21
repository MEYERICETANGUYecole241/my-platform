import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white mt-16 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Logo + Slogan */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Synergia</h2>
          <p className="text-sm mt-1">Connecter, collaborer, concrétiser</p>
        </div>

        {/* Liens de navigation rapide */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="/a-propos" className="hover:underline">À propos</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
          <a href="/confidentialite" className="hover:underline">Politique de confidentialité</a>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-500"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700"><FaLinkedinIn /></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-white">&copy; {new Date().getFullYear()} Synergia. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
