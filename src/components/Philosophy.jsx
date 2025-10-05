import React from "react";

const Philosophy = () => {
  const principles = [
    {
      title: "Learn by Doing",
      desc: "Theory is applied immediately through hands-on projects, ensuring practical understanding and real-world skills."
    },
    {
      title: "Integrated Thinking",
      desc: "Hardware, software, and systems are taught in context, fostering a holistic approach to problem-solving."
    },
    {
      title: "Purpose-Driven Skills",
      desc: "Every course encourages meaningful impact, innovation, and solutions that matter."
    }
  ];

  return (
    <section id="Philosophy" className="py-16 px-6 bg-gray-50 text-gray-800 text-center">
      
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#1A237E]">
        Our Learning Approach
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {principles.map((item) => (
          <div 
            key={item.title} 
            className="bg-white p-6 rounded-xl shadow-md w-64 md:w-72 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="font-extrabold text-xl md:text-2xl mb-3 text-[#1A237E] hover:text-green-500 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;

