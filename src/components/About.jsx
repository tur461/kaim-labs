import React from "react";

const About = () => {
  const kaimValues = [
    { title: "Know", desc: "Acquire deep foundational knowledge." },
    { title: "Apply", desc: "Implement skills in real-world projects." },
    { title: "Innovate", desc: "Go beyond basics — create new solutions." },
    { title: "Manifest", desc: "Turn ideas into tangible outcomes that matter." },
  ];

  return (
    <section id="About" className="py-16 px-6 bg-gray-50 text-gray-800 text-center">
      
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1A237E]">
        About KAIM Labs
      </h2>

      <p className="max-w-3xl mx-auto mb-10 text-gray-700 text-lg md:text-xl leading-relaxed">
        KAIM Labs was founded by a software and mechatronics engineer with <span className="font-semibold text-green-500">15+ years</span> of experience in technology, innovation, and applied systems.  
        Our mission is to bridge the gap between knowledge and real-world application — helping learners and professionals <span className="font-semibold text-green-500">build, innovate, and contribute meaningfully</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {kaimValues.map((item) => (
          <div 
            key={item.title} 
            className="bg-white p-6 rounded-xl shadow-lg w-56 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="font-extrabold text-2xl mb-2 text-[#1A237E] hover:text-green-500 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

