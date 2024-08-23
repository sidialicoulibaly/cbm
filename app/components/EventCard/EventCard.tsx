import React from "react";
import Image from "next/image";
import "../../globals.css";

const EventCard: React.FC<{
  imageSrc: string;
  title: string;
  description: string;
}> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-80 flex items-center justify-center">
        <div className="relative w-96 h-96 custom-shape overflow-hidden">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="text-indigo-500 hover:text-indigo-600 font-semibold"
        >
          Lire plus &rarr;
        </a>
      </div>
    </div>
  );
};

const EventSection: React.FC = () => {
  const events = [
    {
      imageSrc:
        "https://img.freepik.com/foto-gratis/retrato-ingeniero-masculino-trabajando-campo-celebracion-dia-ingenieros_23-2151615100.jpg?t=st=1721376368~exp=1721379968~hmac=48fffa278f945a23f88d9fb28d2ce35e8c05ac2984049304b9bb6e811093dcce&w=1060",
      title: "L'importance de la publicité payante pour votre entreprise.",
      description:
        "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    },
    {
      imageSrc:
        "https://img.freepik.com/foto-gratis/retrato-ingeniero-masculino-trabajando-campo-celebracion-dia-ingenieros_23-2151615100.jpg?t=st=1721376368~exp=1721379968~hmac=48fffa278f945a23f88d9fb28d2ce35e8c05ac2984049304b9bb6e811093dcce&w=1060",
      title:
        "Les avantages du marketing numérique pour les entreprises locales.",
      description:
        "Découvrez comment le marketing numérique peut aider votre entreprise à atteindre un public plus large.",
    },
    {
      imageSrc:
        "https://img.freepik.com/foto-gratis/retrato-ingeniero-masculino-trabajando-campo-celebracion-dia-ingenieros_23-2151615100.jpg?t=st=1721376368~exp=1721379968~hmac=48fffa278f945a23f88d9fb28d2ce35e8c05ac2984049304b9bb6e811093dcce&w=1060",
      title: "Comment optimiser votre site web pour les moteurs de recherche.",
      description:
        "Apprenez les meilleures pratiques pour améliorer le référencement de votre site web.",
    }

  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-8">
          Evenement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="non-aligned">
              <EventCard
                imageSrc={event.imageSrc}
                title={event.title}
                description={event.description}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
