import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Software",
      desc: "Hands-on experience with Rust, Go, Node.js, React.js, Haskell, Bash, Lua, WASM, Perl, Ruby, Erlang, Python. Focus on project-driven learning and real-world applications."
    },
    {
      title: "Embedded Systems & Electronics",
      desc: "ARM/x86 Assembly, PCB design, IoT, Microcontrollers, Sensors & Actuators. Build and deploy embedded systems and intelligent devices."
    },
    {
      title: "Cybersecurity & Networking",
      desc: "Penetration testing, Cryptography, Blockchain protocols, Network setup & troubleshooting. Learn ethical hacking, security audits, and network defense."
    },
    {
      title: "DevOps & Cloud",
      desc: "Docker, Kubernetes, CI/CD pipelines, Linux administration, automation scripting. Deploy scalable, secure, and efficient systems."
    },
    {
      title: "Systems Thinking",
      desc: "Hardware-software integration, Distributed systems, Decentralized applications, Performance optimization. Understand the full technology stack for complex projects."
    }
  ];

  return (
    <section id="Skills" className="py-16 px-6 bg-white text-gray-800 text-center">
      
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#1A237E]">
        What We Cover
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((skill) => (
          <div
            key={skill.title}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="font-bold text-xl md:text-2xl mb-3 text-[#1A237E] hover:text-green-500 transition-colors">
              {skill.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

