import { useState } from "react";

export default function NavBar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-red-900 dark:bg-[#120303] transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">

        {/* LEFT SIDE — Dark Mode Button */}
        <div className="relative group">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            w-14 h-7 flex items-center rounded-full
            border border-[#D4B483]
            bg-[#F8F5F0] dark:bg-[#3a0d0d]
            transition-all duration-300
            relative
          "
        >
          {/* Rond qui glisse */}
          <span
            className={`
              w-6 h-6 rounded-full absolute top-0.5
              bg-[#D4B483] dark:bg-[#F2E9D0]
              shadow-md transform transition-all duration-300
              ${darkMode ? "translate-x-6" : "translate-x-1"}
            `}
          ></span>

          {/* Icône Soleil */}
          <svg
            className={`
              absolute left-1 w-4 h-4 text-[#F2E9D0]
              transition-all duration-300
              ${darkMode ? "opacity-100 scale-100" : "opacity-0 scale-0"}
            `}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
            <path
              fillRule="evenodd"
              d="M10 1a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1zm0 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-5a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm11.657-6.657a1 1 0 010 1.414L15.414 6a1 1 0 11-1.414-1.414l1.243-1.243a1 1 0 011.414 0zM6 15.414a1 1 0 01-1.414 0L3.343 14.17A1 1 0 114.757 12.757L6 14a1 1 0 010 1.414zm10.657 1.243a1 1 0 01-1.414 0L14 15.414A1 1 0 1115.414 14l1.243 1.243a1 1 0 010 1.414zM6 4.586A1 1 0 104.586 3.17L3.343 4.414A1 1 0 104.757 5.828L6 4.586z"
              clipRule="evenodd"
            />
          </svg>

          {/* Icône Lune */}
          <svg
            className={`
              absolute right-1 w-4 h-4 text-[#F2E9D0]
              transition-all duration-300
              ${darkMode ? "opacity-0 scale-0" : "opacity-100 scale-100"}
            `}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

          {/* Tooltip */}
          <span
            className="
              absolute left-1/2 -translate-x-1/2 mt-2
              text-sm text-[#D4B483] bg-[#3a0d0d]
              px-2 py-1 rounded opacity-0 group-hover:opacity-100
              transition-all duration-300 pointer-events-none
            "
          >
            {darkMode ? "Mode clair" : "Mode sombre"}
          </span>
        </div>


        {/* BURGER (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* RIGHT SIDE — Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="font-lg text-white flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 rounded-lg bg-red-900 md:bg-transparent dark:bg-[#120303] transition-colors duration-500">
            <li>
              <a
                href="#profil"
                className="block py-2 px-3 hover:text-red-300 dark:hover:text-gray-400 transition"
              >
                Profil
              </a>
            </li>
            <li>
              <a
                href="#projets"
                className="block py-2 px-3 hover:text-red-300 dark:hover:text-gray-400 transition"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#cv"
                className="block py-2 px-3 hover:text-red-300 dark:hover:text-gray-400 transition"
              >
                CV
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}