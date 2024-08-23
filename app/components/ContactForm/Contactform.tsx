import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 min-h-screen">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl font-semibold mb-4">
          Reservez dès maintenant votre place pour un coaching privé avec Moi.
        </h2>
        <p className="text-gray-700 text-xl ">
          Saviez-vous que rester sur une tâche quotidienne sans suivi peut se
          voir prendre trop de temps dans lexécution. Alors nattendez plus
          demarrer un coaching pour quensemble nous soyons sur que vos
          objectifs seront atteints.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center text-white bg-green-700 p-2 w-full md:w-3/4 rounded-t-lg">
          Contactez-nous
        </h2>
        <form className="bg-white p-4 w-full md:w-3/4 rounded-b-lg shadow-lg">
          <div className="mb-2">
            <label htmlFor="subject" className="block text-gray-700 mb-1">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="firstName" className="block text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-gray-700 mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="block text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Laissez votre message ici
            </label>
            <textarea
              id="message"
              className="w-full p-1 border border-gray-300 rounded"
              rows={3}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
