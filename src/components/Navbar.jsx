import React, { useState } from "react";
import logo from "../assets/logo-192.png"; // adjust path to your logo
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["About", "Skills", "Programs", "Projects", "Philosophy", "Contact"];
  const formLink = "https://forms.gle/Rac5j2CmuPccS4NaA"; // Your Google Form link

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <a
          href="#root"
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
        >
          <img
            src={logo}
            alt="KAIM Labs Logo"
            className="w-12 h-10 md:w-14 md:h-12 object-contain"
          />
          <span className="font-extrabold text-xl md:text-2xl text-[#1A237E] hover:text-green-500 transition-colors">
            KAIM Labs
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="font-semibold text-gray-800 hover:text-green-500 hover:underline transition-all duration-200"
            >
              {section}
            </a>
          ))}

          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="font-semibold text-gray-800 hover:text-green-500 hover:underline transition-all duration-200"
              >
                {section}
              </a>
            ))}

            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

