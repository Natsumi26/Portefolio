import photoCV from "../assets/cv/photo_CV.jpg";

export default function MonProfil() {
    return (
        <section className="flex justify-center text-center flex-col w-full h-auto ">
            <div id="profil" className=" flex flex-col content-center mt-10 mb-10 text-white ">
                <div>
                <img src={photoCV} alt="photo" className="w-50 h-60 justify-self-center rounded-full"/>
                </div>
                <h1 className="text-3xl font-bold">Marion GROSFILLEY</h1>
                <p className=" mt-2">Développeur Web</p>
            </div>
            <div className="mt-6 w-[90%] mx-auto border-6 border-double border-red-300 p-8 rounded-xl shadow-xl flex justify-center-safe flex-col mx-full bg-gray-100">
                <h2 className="text-3xl font-bold mt-10 mb-4">À PROPOS DE MOI</h2>
                <p className="mb-4 text-justify ">
                    Je m'appelle Marion GROSFILLEY, <b>développeuse web junior</b>  et ancienne militaire — oui, tu as bien lu. J'ai troqué les rangers pour les balises &lt;section&gt;, et les missions de terrain pour les déploiements en production.<br/>
                    Après plusieurs années au sein de l'armée de terre, j'ai décidé de me <b>reconvertir dans le développement web</b> . Pourquoi ? Parce que coder, c'est comme une opération tactique : il faut de la <b> logique et de la rigueur</b>. Et puis, entre nous, les bugs sont moins bruyants que les grenades.
                    Je suis en formation pour l'obtention du <b>titre professionnel Développeur Web et Web Mobile</b> , que je passerais en janvier 2026.<br/>
                    Ce que j'aime dans le web, c'est cette alliance entre <b> créativité, résolution de problèmes et technologies en constante évolution</b>. Chaque projet est une nouvelle mission, chaque ligne de code une stratégie. Et quand tout fonctionne du premier coup… c'est presque suspect.<br/>
                    Je suis <b> curieuse, motivée, et toujours prête à apprendre</b>. Mon objectif ? Contribuer à des projets stimulants, collaborer avec des équipes dynamiques, et continuer à progresser dans ce domaine qui me passionne — sans jamais oublier que même les erreurs 404 ont leur charme.<br/>         
                </p>
            </div>
        </section>
    );
}