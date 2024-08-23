import React from "react";
import Image from "next/image";
import Bouton from "../Button/page";
import "../../globals.css"; // Assurez-vous que le chemin est correct

export default function ThirsP() {
  const handleSignUp = () => {
    // Logique pour l'inscription
  };

  const handleLogin = () => {
    // Logique pour la connexion
  };

  return (
    <div className="custom-background flex flex-col items-center w-full p-4 lg:p-8 ">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-screen-lg">
        <section className="flex-1 lg:mr-8 mt-12 lg:mt-24 px-4 lg:px-0">
          <h1 className="text-xl lg:text-2xl font-bold mb-4">
            Centre de Bourse du Mali
          </h1>
          <p className="mb-4">
            Spécialisé dans linvestissement en bourse dans la zone UEMOA
          </p>
          <p>
            Atteignez vos objectifs financiers grâce à nos conseils et guides
            complets pour investir en toute sécurité.
          </p>
        </section>
        <section className="flex-1 mt-8 lg:mt-0 px-4 lg:px-0">
          <div className="w-full h-64 lg:h-auto">
            <Image
              src="https://img.freepik.com/foto-gratis/retrato-ingeniero-masculino-trabajando-campo-celebracion-dia-ingenieros_23-2151615100.jpg?t=st=1721376368~exp=1721379968~hmac=48fffa278f945a23f88d9fb28d2ce35e8c05ac2984049304b9bb6e811093dcce&w=1060"
              alt="Graphique d'investissement"
              layout="responsive"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </section>
      </div>
      <div className="flex flex-col  lg:flex-row gap-4 mt-5 w-full max-w-screen-lg justify-center lg:justify-start px-4 lg:px-0">
        <Bouton label="S'inscrire" onClick={handleSignUp} />
        <Bouton label="Se connecter" onClick={handleLogin} />
      </div>
    </div>
  );
}
