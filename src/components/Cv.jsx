import { useState, useEffect } from "react";
import cvImage from "../assets/cv/capture_cv.png";

export default function Cv() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        // Nettoyage si le composant est démonté
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <section id="cv" className=" w-[90%] mx-auto border-6 border-double border-[#D4B483] p-8 rounded-xl shadow-md bg-[#F8F5F0] pb-10 scroll-mt-30 transition-transform duration-300 hover:-translate-y-1 dark:bg-[#2a0808] dark:text-[#F5F5F5] dark:border-[#D4B483]">
            <div className="text-center mx-full">
                <h2 className="text-3xl font-bold pt-10 mb-10 text-[#3a0d0d] dark:text-[#D4B483]">MON CV</h2>
            </div>
            <section className=" relative flex flex-col md:flex-row justify-center items-center gap-10 px-4 ">
                <div onClick={() => setIsOpen(true)} className="overflow-hidden rounded-md border-2 border-double outline outline-offset-3 outline-red-500 w-[300px] md:w-[400px]">
                    <img src={cvImage} alt="cv" className="cursor-pointer w-auto max-h-[600px] transition-transform duration-300 ease-in-out hover:scale-105  " />
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 animate-bounce text-[#3a0d0d] dark:text-[#D4B483]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                        <a href="/GROSFILLEY Marion CV_CDA.pdf" download className="inline-block mt-4 px-6 py-3 rounded-md bg-[#D4B483] text-[#3a0d0d] font-semibold tracking-wide shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[#c9a06d]">
                            Télécharger
                        </a>                
                    </div>
            </section>
            {/* Modale */}
        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setIsOpen(false)}>
                <div className="relative max-w-3xl w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
                    <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-white text-2xl"
                    >
                    ✕
                    </button>
                    <img
                    src={cvImage}
                    alt="CV"
                    className="w-auto h-full rounded-md shadow-lg"
                    />
                </div>
            </div>
        )}
        </section>
    );
}