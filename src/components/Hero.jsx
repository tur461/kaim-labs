import React from "react";
import logo from "../assets/logo-192.png"; // optional: small logo in hero

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-[#1A237E] text-white text-center px-6">
    
    <img src={logo} alt="KAIM Labs Logo" className="w-20 h-20 md:w-24 md:h-24 mb-4 object-contain" />

    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 hover:text-green-400 transition-colors duration-300">
      KAIM Labs
    </h1>

    <p className="text-xl md:text-2xl mb-6 font-semibold">
      Where Knowledge Becomes Creation.
    </p>

    <p className="mb-8 max-w-3xl md:max-w-4xl text-gray-200 leading-relaxed">
      Empowering innovators to{" "}
      <span className="font-semibold text-green-400">
        <span className="text-yellow-400">K</span>now deeply
      </span>
      ,{" "}
      <span className="font-semibold text-green-400">
        <span className="text-yellow-400">A</span>pply intelligently
      </span>
      ,{" "}
      <span className="font-semibold text-green-400">
        <span className="text-yellow-400">I</span>nnovate freely
      </span>
      , and{" "}
      <span className="font-semibold text-green-400">
        <span className="text-yellow-400">M</span>anifest boldly
      </span>
      . From embedded systems to blockchain, from software to mechatronics — we make ideas real.
    </p>


    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
      <a 
        href="#Skills" 
        className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
      >
        Explore Skills
      </a>
      <a 
        href="#Contact" 
        className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1A237E] hover:scale-105 transition-all duration-300"
      >
        Collaborate
      </a>
    </div>

  </section>
);

export default Hero;

