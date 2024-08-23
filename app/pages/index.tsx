"use client";
import React from "react";

import CommitmentCard from "../components/CommitCard/CommitCard";
import CourseCard from "../components/Courscard/Courscard";
import ThirsP from "../components/ThirstP/ThirsP";
import EventCard from "../components/EventCard/EventCard";
import ContactForm from "../components/ContactForm/Contactform";

const Accueil: React.FC = () => {
  return (
    <main className="w-full">
      <ThirsP />
      <CommitmentCard />
      <div className="container mx-auto  bg-slate-100">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 ">
            ACCÉDER À VOTRE FORMATION DÈS MAINTENANT
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez nos formations les plus populaires et commencez dès
            aujourdhui
          </p>
        </div>
        <div className="  shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            COURS ACTUELLEMENT À LA UNE
          </h2>
        </div>

        <div className="text-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CourseCard
              type="Payante" // ou "Gratuite"
              title="Formation Avancée"
              description="Une formation approfondie sur les concepts avancés."
              link="/formation-avancee"
            />
            <CourseCard
              type="Gratuite" // ou "Gratuite"
              title="Formation Avancée"
              description="Une formation approfondie sur les concepts avancés."
              link="/formation-avancee"
            />
            <CourseCard
              type="Payante" // ou "Gratuite"
              title="Formation Avancée"
              description="Une formation approfondie sur les concepts avancés."
              link="/formation-avancee"
            />
            <CourseCard
              type="Payante" // ou "Gratuite"
              title="Formation Avancée"
              description="Une formation approfondie sur les concepts avancés."
              link="/formation-avancee"
            />
          </div>
          <a
            href="#"
            className="inline-block text-green-600  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-5 right-0 "
          >
            Voir plus →
          </a>
        </div>
      </div>
      <EventCard />
      <ContactForm />
    </main>
  );
};

export default Accueil;
