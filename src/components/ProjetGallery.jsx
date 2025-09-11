import { useRef } from "react";
import capture1 from "../assets/projets/pdev/PROJET DEVIS.png";
import capture2 from "../assets/projets/resaSalles/site_reservation.jpg";
import capture3 from "../assets/projets/CRUD_artist_Node.js/CRUD_artist.png"
import capture4 from "../assets/projets/transport_toulouse/transport_toulouse.png"
import capture5 from "../assets/projets/pizza/Pizza_REACT.png"

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
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Mes Projets</h2>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        
        {/* Flèche gauche */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-900 text-white p-2 rounded-full shadow hover:bg-red-800 z-10"
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

        </button>
        {/* Conteneur masqué */}
        <div className="w-[960px] md:w-[960px] overflow-hidden">
            {/* Galerie scrollable */}
            <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-4 pb-4 scroll-smooth"
            >
                <ProjectCard
                    title="Site pour développeur freelance"
                    image={capture1}
                    techs={["React", "Tailwind", "Symfony"]}
                    description="Backend Symfony, easyAdmin, API Plateform, MariaDB, et Frontend en REACT et Tailwind"
                />
                <ProjectCard
                    title="Site de gestion de reservation de salles pour les associations"
                    image={capture2}
                    techs={["PHP", "JavaScript"]}
                    description="PHP, MariaDB et Bootstrap avec Fullcalendar"
                />
                <ProjectCard
                    title="Premier developpement en Node.js"
                    image={capture3}
                    techs={["Node.js", "Bootstrap"]}
                    description="CRUD en Node.js, Bdd .json et Bootstrap"
                />
                <ProjectCard
                    title="Premier developpement avec API"
                    image={capture4}
                    techs={["JavaScript", "Bootstrap"]}
                    description="Recuperation de l'API des transport de Toulouse"
                />
                <ProjectCard
                    title="Premier projet REACT"
                    image={capture5}
                    techs={["REACT", "Bootstrap"]}
                    description="Projet en REACT avec un Bdd en .json, site de e-commerce"
                />
            </div>
          </div>
          {/* Flèche droite */}
          <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-900 text-white p-2 rounded-full shadow hover:bg-red-800 z-10"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        
      </div>
    </section>
  );
}
