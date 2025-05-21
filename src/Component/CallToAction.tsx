import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-green-600 text-white py-12 px-6 text-center rounded-2xl shadow-lg mt-10 mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold mb-4">Rejoignez la communauté</h2>
      <p className="mb-6 text-lg">
        Inscrivez-vous gratuitement pour accéder à une plateforme <strong>sécurisée</strong>, <strong>ouverte à la collaboration</strong> et 100% <strong>gratuite</strong>.
      </p>
      <a
        href="/inscription"
        className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition"
      >
        Inscription gratuite
      </a>
    </section>
  );
}
