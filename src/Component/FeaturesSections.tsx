// components/FeaturesSection.tsx

const features = [
  {
    icon: "🔐",
    title: "Authentification & rôles",
    description: "Accès sécurisé avec gestion des profils : entreprises, ONG, scientifiques, citoyens.",
    link: "#auth"
  },
  {
    icon: "💬",
    title: "Messagerie sécurisée",
    description: "Discutez en toute confidentialité avec les autres acteurs grâce à notre système intégré.",
    link: "#messagerie"
  },
  {
    icon: "📢",
    title: "Appels à projets",
    description: "Publiez ou répondez à des appels à participation pour des projets à impact environnemental.",
    link: "#appels"
  },
  {
    icon: "📚",
    title: "Articles & publications",
    description: "Diffusez ou consultez des recherches, actualités et contributions scientifiques.",
    link: "#publications"
  },
  {
    icon: "📁",
    title: "Partage de documents",
    description: "Un espace collaboratif pour stocker, organiser et partager des ressources utiles.",
    link: "#documents"
  },
  {
    icon: "🗓️",
    title: "Calendrier collaboratif",
    description: "Restez informé des événements, webinaires et réunions communautaires.",
    link: "#calendrier"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-green-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Fonctionnalités principales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href={feature.link} className="text-yellow-600 hover:underline font-medium">
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
