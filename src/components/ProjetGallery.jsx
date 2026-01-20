import { useRef,useState, useEffect } from "react";
import capture1 from "../assets/projets/pdev/PROJET DEVIS.png";
import capture2 from "../assets/projets/resaSalles/site_reservation.jpg";
import capture3 from "../assets/projets/CRUD_artist_Node.js/CRUD_artist.png"
import capture4 from "../assets/projets/transport_toulouse/transport_toulouse.png"
import capture5 from "../assets/projets/pizza/Pizza_REACT.png"
import capture6 from "../assets/projets/devisFactures/devisFactures.png"
import capture7 from "../assets/projets/resaoutdoor/calendar.png"
import video1 from "../assets/projets/pdev/demo_pdev.mp4"
import video2 from "../assets/projets/resaSalles/demo_resa_salles.mp4"
import video3 from "../assets/projets/CRUD_artist_Node.js/demo_CRUD_artist.mp4"
import video4 from "../assets/projets/transport_toulouse/demo_toulouse.mp4"
import video5 from "../assets/projets/devisFactures/devisfactures.mp4"
import video6 from "../assets/projets/resaoutdoor/resaoutdoor.mp4"

function ProjectCard({ title, image, video, techs, description, openModal, downloadLink}) {

  return (
    <div className="min-w-[300px] max-w-[300px] z-10 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition">
        <img src={image} alt={title} style={{ cursor: video ? 'pointer' : 'default' }} className="w-full h-48 object-cover " onClick={() => video && openModal(video)} />
        <div className="p-4">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <div className="flex justify-between mb-1">
            {video && (
                <button onClick={() => openModal(video)} className="cursor-pointer mt-2 text-sm text-red-700 underline">
                    Voir la démo vidéo
                </button>
                )}
            {downloadLink && (
            <a
              href={downloadLink}
              download
              className="cursor-pointer mt-2 text-sm text-red-700 underline"
            >
              Télécharger (.exe)
            </a>
          )}
          </div>
            <div className="text-xs text-red-800 font-semibold">
            {techs.join(" • ")}
            </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const scrollRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 325, behavior: "smooth" });
  };
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -325, behavior: "smooth" });
  };

  const openModal = (src) => setVideoSrc(src);
  const closeModal = () => setVideoSrc(null);

  useEffect(() => {
    document.body.style.overflow = videoSrc ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [videoSrc]);

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10">MES PROJETS</h2>
      <div className="ps-0 flex justify-center items-center gap-8 flex-wrap ">
        
        {/* Flèche gauche */}
        <button
          onClick={scrollLeft}
          name="arrowLeft"
          className="left-2 top-1/2 transform -translate-y-1/2 bg-red-900 text-white p-2 rounded-full shadow hover:bg-red-800 z-15"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/* Conteneur masqué */}
        <div className="w-[965px] md:w-[965px] overflow-hidden">
            {/* Galerie scrollable */}
            <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            >
                <ProjectCard
                    title="Application type Saas réservation activité outdoor"
                    image={capture7}
                    video={video6}
                    techs={["PERN", "PostgresSQL", "Express", "React", "Node.js", "Prisma"]}
                    description="Plateforme de gestion et de réservation outdoor de type Saas"
                    openModal={openModal}
                />
                <ProjectCard
                    title="Logiciel de gestion devis/factures pour un auto-entrepreneur"
                    image={capture6}
                    video={video5}
                    techs={["Electron", "Node.js"]}
                    description="Electron, Sqlite3 en bdd, frontend HTML/CSS/Javascript et Bootstrap (Fullcalendar)"
                    openModal={openModal}
                    downloadLink="https://github.com/Natsumi26/my-devis-carreleur/releases/download/electron/Mes.DevisFactures.Setup.1.0.0.exe"
                />
                <ProjectCard
                    title="Site pour développeur freelance"
                    image={capture1}
                    video={video1}
                    techs={["React", "Tailwind", "Symfony"]}
                    description="Backend Symfony, easyAdmin, API Plateform, MariaDB, et Frontend en REACT et Tailwind"
                    openModal={openModal}
                />
                <ProjectCard
                    title="Site de gestion de reservation de salles pour les associations"
                    image={capture2}
                    video={video2}
                    techs={["PHP", "JavaScript"]}
                    description="PHP, MariaDB et Bootstrap avec Fullcalendar"
                    openModal={openModal}
                />
                <ProjectCard
                    title="Premier developpement en Node.js"
                    image={capture3}
                    video={video3}
                    techs={["Node.js", "Bootstrap"]}
                    description="CRUD en Node.js, Bdd .json et Bootstrap"
                    openModal={openModal}
                />
                <ProjectCard
                    title="Premier developpement avec API"
                    image={capture4}
                    video={video4}
                    techs={["JavaScript", "Bootstrap"]}
                    description="Recuperation de l'API des transport de Toulouse"
                    openModal={openModal}
                />
                <ProjectCard
                    title="Premier projet REACT"
                    image={capture5}
                    techs={["REACT", "Bootstrap"]}
                    description="Projet en REACT avec un Bdd en .json, site de e-commerce"
                    openModal={openModal}
                />
            </div>
          </div>
          {/* Flèche droite */}
          <button
          onClick={scrollRight}
          name="arrowRight"
          className="right-2 top-1/2 transform -translate-y-1/2 bg-red-900 text-white p-2 rounded-full shadow hover:bg-red-800 z-10"
          >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
          </button>
        
      </div>
        {videoSrc && (
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
                onClick={closeModal}
                aria-hidden="true"
            >
                <div
                className="relative w-full max-w-3xl px-4"
                onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-white text-2xl"
                        aria-label="Fermer la vidéo"
                    >
                        ✕
                    </button>
                    <div className="p-4">
                    <video controls autoPlay className="w-full rounded-md shadow-lg">
                        <source src={videoSrc} type="video/mp4" />
                        Ton navigateur ne supporte pas la vidéo.
                    </video>
                    </div>
                </div>
            </div>
        )}
    </section>
    
  );
}
