import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-8 text-center">
    
    <p className="text-sm md:text-base">© 2025 <span className="font-semibold text-white">KAIM Labs</span>. All rights reserved.</p>
    <p className="mt-2 text-sm md:text-base text-gray-300">
      Empowering innovation across software, hardware, and systems.
    </p>

    <p className="mt-2 text-sm md:text-base text-gray-300">
      If you want any kind of <strong className="text-white">counseling, advice, or suggestions</strong>, feel free to reach out!
    </p>

    <div className="flex justify-center flex-wrap gap-4 mt-4">
      {[
        { name: "LinkedIn", link: "https://www.linkedin.com/in/a-a-88498a22b/" },
        { name: "GitHub", link: "https://github.com/tur461" },
        { name: "X", link: "http://x.com/tur4611" },
        { name: "Discord", link: "https://discord.gg/TqUH9mjy" }
      ].map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white font-semibold transition-colors duration-300"
        >
          {social.name}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;

