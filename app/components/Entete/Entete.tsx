"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SearchIcon,
  MailIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import ListItem from "../ListItem/ListItem";

const headerRoutes = [
  {
    nom: "Acceuil",
    lien: "/",
  },
  {
    nom: "Tous les cours",
    lien: "/../Coursard/Coursard.tsx",
  },
  {
    nom: "Offres",
    lien: "/offres",
  },
  {
    nom: "Qui suis-je?",
    lien: "../CommitCard/CommitCard.tsx",
  },
];

const Entete: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex flex-col lg:flex-row items-center px-5 py-3 bg-white shadow-md rounded">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center mb-3 lg:mb-0 ">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto filter"
              width={150}
              height={50}
            />
          </a>
        </Link>
      </div>

      {/* Conteneur principal pour le menu et les icônes */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-4 w-full bg-teal-900 lg:rounded-lg lg:py-2 lg:px-4 ml-8 ">
        {/* Menu de navigation pour les grands écrans */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-5">
          <ul className="flex space-x-5">
            {headerRoutes.map((item) => (
              <ListItem key={item.nom} nom={item.nom} lien={item.lien} />
            ))}
          </ul>
        </nav>

        {/* Barre de recherche et icônes */}
        <div className="flex items-center space-x-4 ml-5">
          {searchVisible ? (
            <div className="flex items-center bg-teal-900 rounded-md">
              <input
                type="text"
                placeholder="Rechercher..."
                className="px-4 py-2 text-white placeholder-gray-400 bg-teal-900 border-none outline-none"
              />
              <SearchIcon
                className="h-6 w-6 text-gray-300 mr-2 cursor-pointer"
                onClick={() => setSearchVisible(false)}
              />
            </div>
          ) : (
            <SearchIcon
              className="h-6 w-6 text-gray-300 cursor-pointer"
              onClick={() => setSearchVisible(true)}
            />
          )}

          {/* Icônes Email et Utilisateur */}
          <Link href="https://bobsang71@gmail.com" legacyBehavior>
            <a>
              <MailIcon className="h-6 w-6 text-gray-300" />
            </a>
          </Link>
        

          {/* Menu hamburger pour les petits écrans */}
          <div className="lg:hidden flex items-center ml-4">
            {menuOpen ? (
              <XIcon
                className="h-6 w-6 text-gray-300 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <MenuIcon
                className="h-6 w-6 text-gray-300 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Menu déroulant pour les petits écrans */}
      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-teal-900 shadow-md rounded-lg flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-4">
          <ul className="flex flex-col lg:flex-row lg:space-x-5 items-center py-4 space-y-2 lg:space-y-0">
            {headerRoutes.map((item) => (
              <li key={item.nom} className="flex items-center text-white">
                <Link href={item.lien} legacyBehavior>
                  <a className="flex items-center space-x-2">
                    <span>{item.nom}</span>
                  </a>
                </Link>
              </li>
            ))}

            {/* Barre de recherche et icônes dans le menu déroulant */}
            <div className="flex flex-col lg:flex-row items-center space-x-4 ml-5 mt-4 lg:mt-0"></div>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Entete;
