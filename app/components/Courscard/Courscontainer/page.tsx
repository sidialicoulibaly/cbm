// components/CoursesContainer.tsx
import React, { useState } from "react";
import CourseCard from "../Courscard"; // Assurez-vous que le chemin d'importation est correct

const CoursesContainer: React.FC = () => {
  const [courses, setCourses] = useState([
    {
      type: "Payante",
      title: "Thème de la formation 1",
      description:
        "Voici une brève introduction sur le thème de la formation 1.",
      link: "#",
    },
    {
      type: "Gratuite",
      title: "Thème de la formation 2",
      description:
        "Voici une brève introduction sur le thème de la formation 2.",
      link: "#",
    },
    {
      type: "Payante",
      title: "Thème de la formation 3",
      description:
        "Voici une brève introduction sur le thème de la formation 3.",
      link: "#",
    },
    {
      type: "Payante",
      title: "Thème de la formation 4",
      description:
        "Voici une brève introduction sur le thème de la formation 4.",
      link: "#",
    },
    {
      type: "Payante",
      title: "Thème de la formation 4",
      description:
        "Voici une brève introduction sur le thème de la formation 4.",
      link: "#",
    },
  ]);

  const [newCourse, setNewCourse] = useState({
    type: "Payante",
    title: "",
    description: "",
    link: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({
      type: "Payante",
      title: "",
      description: "",
      link: "",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        ACCÉDER À VOTRE FORMATION DÈS MAINTENANT
      </h1>
      <h2 className="text-xl text-center mb-8">COURS ACTUELLEMENT À LA UNE</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {courses.map((course, index) => (
          <div key={index} className="flex-shrink-0">
            <CourseCard
              type={course.type as "Payante" | "Gratuite"}
              title={course.title}
              description={course.description}
              link={course.link}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-blue-500 hover:underline">
          Voir plus →
        </a>
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl mb-4">Ajouter une nouvelle formation</h3>
        <div className="mb-4">
          <label className="block mb-2">Type</label>
          <select
            name="type"
            value={newCourse.type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="Payante">Payante</option>
            <option value="Gratuite">Gratuite</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Titre</label>
          <input
            type="text"
            name="title"
            value={newCourse.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <input
            type="text"
            name="description"
            value={newCourse.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Lien</label>
          <input
            type="text"
            name="link"
            value={newCourse.link}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleAddCourse}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ajouter la formation
        </button>
      </div>
    </div>
  );
};

export default CoursesContainer;
