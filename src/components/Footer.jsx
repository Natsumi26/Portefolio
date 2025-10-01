export default function Footer() {
    return (
      <footer className="bg-red-900 text-white py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo ou nom */}
          <div className="text-lg font-bold">Marion REDON
          <p>Contact : <a href="mailto:marion.redon26@yahoo.fr" class="text-light text-decoration-underline">marion.redon26@yahoo.fr</a></p>
          </div>
  
  
          {/* Réseaux sociaux */}
          <div className="flex gap-4 z-[9999]">
            <a
              href="https://www.linkedin.com/in/marion-grosfilley-5a6b1233a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-1 1.75-2.2 3.6-2.2C20.4 8 24 10.6 24 16v8h-4v-7c0-1.75-.03-4-2.4-4-2.4 0-2.8 1.9-2.8 3.9V24h-4V8z" />
              </svg>
            </a>
            <a
              href="https://github.com/Natsumi26"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .5C5.65.5.5 5.64.5 12c0 5.1 3.29 9.4 7.85 10.94.57.1.77-.25.77-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.55-3.87-1.55-.52-1.3-1.27-1.64-1.27-1.64-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.56-.3-5.26-1.28-5.26-5.68 0-1.25.44-2.28 1.16-3.09-.12-.3-.5-1.5.1-3.1 0 0 .96-.3 3.15 1.17.92-.25 1.9-.37 2.88-.38.98.01 1.96.13 2.88.38 2.2-1.47 3.15-1.17 3.15-1.17.6 1.6.22 2.8.1 3.1.72.8 1.16 1.84 1.16 3.09 0 4.4-2.7 5.38-5.27 5.67.41.36.78 1.08.78 2.18 0 1.57-.02 2.83-.02 3.22 0 .3.2.66.78.55C20.71 21.4 24 17.1 24 12c0-6.36-5.15-11.5-12-11.5z" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-center text-xs mt-4 opacity-70">
          © 2025 Marion REDON. Tous droits réservés.
        </p>
      </footer>
    );
  }
  