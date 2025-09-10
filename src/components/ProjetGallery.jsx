import { useRef } from "react";
import capture1 from "../assets/projet1.png";
import capture2 from "../assets/projet2.png";

function ProjectCard({ title, image, techs, description }) {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="text-xs text-red-800 font-semibold">
          {techs.join(" • ")}
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Mes Projets</h2>
      <div className="relative">
        {/* Flèche droite */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-900 text-white p-2 rounded-full shadow hover:bg-red-800 z-10"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>

        {/* Galerie scrollable */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-4 pb-4 scroll-smooth"
        >
          <ProjectCard
            title="Site vitrine L'Atelier du Carrelage"
            image={capture1}
            techs={["React", "Tailwind", "Vite"]}
            description="Site vitrine responsive avec formulaire de contact."
          />
          <ProjectCard
            title="API Symfony pour gestion client"
            image={capture2}
            techs={["Symfony", "API Platform", "Docker"]}
            description="Back-end RESTful avec entités et filtres personnalisés."
          />
          {/* Ajoute d'autres projets ici */}
        </div>
      </div>
    </section>
  );
}
