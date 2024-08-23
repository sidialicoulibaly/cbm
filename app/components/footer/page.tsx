import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ListItem from "../ListItem/ListItem";
const headerRoutes = [
  {
    nom: "Acceuil",
    lien: "/",
  },
  {
    nom: "Article",
    lien: "/artivle",
  },
  {
    nom: "Offres",
    lien: "/offres",
  },
  {
    nom: "Qui suis-je?",
    lien: "/quisuisje",
  },
];
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
        {/* Section Logo et Description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="text-lg font-bold mb-4">LOGO</div>
          <p className="mb-4">
            Nous formons des professionnels dans le domaine de linvestissement
            en bourse. Nos formations sont payantes et accessibles à tous.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61559986900621&mibextid=LQQJ4d"
              className="bg-yellow-500 rounded-full p-2"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/bobsang71?igsh=MTBiMWg2NXcydHFzNQ=="
              className="bg-yellow-500 rounded-full p-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-yellow-500 rounded-full p-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Section Liens Utiles */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <h4 className="text-lg font-bold mb-4">Liens Utiles</h4>
          <ul className=" flex flex-col items-center">
            {headerRoutes.map((item) => (
              <li key={item.nom} className="lg:ml-5 mb-3 lg:mb-0 ">
                <ListItem nom={item.nom} lien={item.lien} />
              </li>
            ))}
          </ul>
        </div>

        {/* Section Newsletter */}
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold mb-4">
            Rejoignez notre newsletter pour ne rater aucune nouvelle.
          </h4>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-t-md md:rounded-l-md md:rounded-t-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white p-2 rounded-b-md md:rounded-r-md md:rounded-b-none mt-2 md:mt-0"
            >
              Envoyer
            </button>
          </form>
          <div className="mt-4">
            <p className="mb-2">
              <a href="tel:+15146124336" className="hover:underline">
                +1 (514) 612-4336
              </a>
            </p>
            <p className="mb-2">1000 Rue des Gadelles, Quebec, QC G2J 0G6</p>
            <p className="mb-2">Lundi - Vendredi 8.00 - 18.00</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>© 2024 Nagtic. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
