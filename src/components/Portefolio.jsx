import ProjectGallery from "./ProjetGallery";

export default function Portefolio() {
    return(
        <section id="projets" className="w-[90%] mx-auto border-6 border-double border-[#D4B483] p-4 rounded-xl shadow-md bg-[#F8F5F0] scroll-mt-30 transition-transform duration-300 hover:-translate-y-1 dark:bg-[#2a0808] dark:text-[#F5F5F5] dark:border-[#D4B483]">

                <ProjectGallery/>
           
        </section>
    );
}