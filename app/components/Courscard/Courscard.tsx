// components/CourseCard.tsx
import React from "react";
import Image from "next/image";

interface CourseCardProps {
  type: "Payante" | "Gratuite";
  title: string;
  description: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  type,
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-1 bg-white hover:shadow-xl transition-shadow duration-300">
      <div
        className={`p-2 ${
          type === "Payante" ? "bg-green-700" : "bg-blue-500"
        } text-white font-bold text-center`}
      >
        {type}
      </div>
      <Image
        className="w-full h-48 object-cover" // Ajustez la hauteur et l'objet de couverture pour une image responsive
        src="https://img.freepik.com/foto-gratis/retrato-ingeniero-masculino-trabajando-campo-celebracion-dia-ingenieros_23-2151615100.jpg?t=st=1721376368~exp=1721379968~hmac=48fffa278f945a23f88d9fb28d2ce35e8c05ac2984049304b9bb6e811093dcce&w=1060"
        alt="Cours"
        width={500} // Ajustez la largeur selon vos besoins
        height={300} // Ajustez la hauteur selon vos besoins
      />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <a
          href={link}
          className="inline-block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
        >
          Accéder à la formation
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
