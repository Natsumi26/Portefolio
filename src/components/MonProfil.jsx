export default function MonProfil() {
    return (
        <section className="flex justify-center text-center  flex-col w-full h-auto ">
            <div className=" flex flex-col content-center mt-10 mb-10 text-white">
                <div>
                <img src="./src/assets/photo CV.jpg" alt="photo" className="w-50 h-60 justify-self-center rounded-full"/>
                </div>
                <h1 className="text-3xl font-bold">Marion REDON</h1>
                <p className=" mt-2">Développeur Web</p>
            </div>
            <div id="profil" className="flex justify-center-safe flex-col mx-full bg-gray-100">
                <h2 className="text-3xl font-bold mt-10 mb-4">À PROPOS DE MOI</h2>
                <p className="mb-4 text-justify p-10">
                    Je m'appelle Marion REDON, développeuse web junior et ancienne militaire — oui, tu as bien lu. J'ai troqué les rangers pour les balises &lt;section&gt;, et les missions de terrain pour les déploiements en production.<br/>
                    Après plusieurs années au sein de l'armée de terre, j'ai décidé de me reconvertir dans le développement web. Pourquoi ? Parce que coder, c'est comme une opération tactique : il faut de la logique et de la rigueur. Et puis, entre nous, les bugs sont moins bruyants que les grenades.
                    Je suis en formation pour l'obtention du titre professionnel Développeur Web et Web Mobile, que je passerais en janvier 2026.<br/>
                    Ce que j'aime dans le web, c'est cette alliance entre créativité, résolution de problèmes et technologies en constante évolution. Chaque projet est une nouvelle mission, chaque ligne de code une stratégie. Et quand tout fonctionne du premier coup… c'est presque suspect.<br/>
                    Je suis curieuse, motivée, et toujours prête à apprendre. Mon objectif ? Contribuer à des projets stimulants, collaborer avec des équipes dynamiques, et continuer à progresser dans ce domaine qui me passionne — sans jamais oublier que même les erreurs 404 ont leur charme.<br/>         
                </p>
            </div>
        </section>
    );
}