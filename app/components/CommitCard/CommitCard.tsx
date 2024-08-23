import React from "react";

const CommitmentCard: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat mt-12 w-full pt-0"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/foto-gratis/pantalla-grafico-que-dice-palabra-financiera_188544-27324.jpg?t=st=1721459526~exp=1721463126~hmac=18273e481b475fd2b472f3e390811d421777fe3745865cefb805d1468b9ab672&w=1380')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 w-full bg-gray-200 p-8">
        <h2 className="text-3xl font-bold text-center">Nos engagements</h2>
      </div>
      <div className="flex-grow flex items-center justify-center w-full p-4">
        <div className="relative bg-yellow-300 text-center p-6 transform rotate-45 w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center shadow-lg">
          <div className="transform -rotate-45">
            <h3 className="text-xl sm:text-2xl font-semibold mb-5">Sécurité</h3>
            <p className="text-sm sm:text-lg">
              Tout investissement est risqué pour quiconque soi qui se jette
              sans formation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentCard;
