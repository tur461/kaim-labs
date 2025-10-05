import React, { useState } from "react";

const Projects = () => {
  const projectGroups = [
    {
      groupTitle: "Embedded & IoT Projects",
      projects: [
        {
          name: "IoT Robotics",
          desc: "Autonomous sensor-driven robots with embedded intelligence.",
          details: `
- Sensors: Ultrasonic, IR, temperature, humidity
- Controllers: Arduino, STM32, Raspberry Pi
- Outcome: Navigate environments, detect obstacles, and report sensor data
- Duration: 2–3 weeks
`
        },
        {
          name: "Smart Home Automation",
          desc: "Automate lighting, temperature, and security systems.",
          details: `
- Tools: Raspberry Pi, Arduino, MQTT, Node-RED
- Projects: Light automation, door access control, temperature logging
- Outcome: Fully functioning small-scale smart home setup
- Duration: 2–3 weeks
`
        },
        {
          name: "Embedded AI / TinyML Sensor",
          desc: "Deploy machine learning on microcontrollers.",
          details: `
- Tools: TensorFlow Lite, Arduino, Edge Impulse
- Projects: Gesture recognition, predictive sensor alerts
- Outcome: Run AI inference on constrained devices
- Duration: 3–4 weeks
`
        }
      ]
    },
    {
      groupTitle: "Blockchain & Crypto Projects",
      projects: [
        {
          name: "Blockchain Experiments",
          desc: "Smart contract deployments, cryptocurrency protocols.",
          details: `
- Tools: Solidity, Node.js, Truffle, Ganache
- Projects: Create tokens, deploy DApps, simulate transactions
- Outcome: Understand full blockchain stack
- Duration: 3–4 weeks
`
        },
        {
          name: "Decentralized Voting System",
          desc: "Secure blockchain-based voting application.",
          details: `
- Tools: Solidity, ReactJS, Node.js
- Projects: Deploy contract, build frontend, simulate elections
- Outcome: Learn decentralized app development
- Duration: 4 weeks
`
        },
        {
          name: "Crypto Wallet Integration",
          desc: "Build and integrate cryptocurrency wallets.",
          details: `
- Tools: Ethereum, Node.js, web3.js
- Projects: Wallet creation, transaction signing, blockchain interaction
- Outcome: Hands-on crypto application development
- Duration: 3 weeks
`
        }
      ]
    },
    {
      groupTitle: "Cybersecurity & Pentesting Projects",
      projects: [
        {
          name: "Cybersecurity Labs",
          desc: "Ethical hacking challenges and penetration testing setups.",
          details: `
- Tools: Kali Linux, Metasploit, Nmap, Wireshark
- Projects: Vulnerability scanning, penetration testing lab
- Outcome: Learn real-world attack and defense techniques
- Duration: 2–4 weeks
`
        },
        {
          name: "Network Security Simulation",
          desc: "Setup and defend small-scale network environments.",
          details: `
- Tools: Cisco Packet Tracer, Linux, Firewall configs
- Projects: Simulate attacks, monitor traffic, harden systems
- Outcome: Hands-on network security experience
- Duration: 3 weeks
`
        },
        {
          name: "IoT Device Hardening",
          desc: "Secure embedded devices against common exploits.",
          details: `
- Tools: Python, Embedded C, Raspberry Pi
- Projects: Identify vulnerabilities, implement secure firmware
- Outcome: Real-world IoT security exposure
- Duration: 3 weeks
`
        }
      ]
    },
    {
      groupTitle: "Software & High-Performance Projects",
      projects: [
        {
          name: "Performance Systems",
          desc: "Rust and Go applications optimized for high-throughput scenarios.",
          details: `
- Tools: Rust, Go, Cargo, benchmarking tools
- Projects: File processors, concurrent servers, memory-safe apps
- Outcome: Build scalable, high-performance software
- Duration: 3–4 weeks
`
        },
        {
          name: "Full-Stack Web App",
          desc: "End-to-end development with ReactJS and Node.js.",
          details: `
- Tools: ReactJS, Node.js, Express, MongoDB
- Projects: Build a task manager or e-commerce prototype
- Outcome: Complete full-stack development experience
- Duration: 4 weeks
`
        },
        {
          name: "DevOps Automation Pipeline",
          desc: "Automate deployment and continuous integration.",
          details: `
- Tools: Docker, Kubernetes basics, Jenkins, GitHub Actions
- Projects: Containerize app, setup CI/CD pipelines, cloud deployment
- Outcome: Learn modern DevOps workflows
- Duration: 3–4 weeks
`
        }
      ]
    }
  ];

  const [openGroups, setOpenGroups] = useState({});
  const [openProjects, setOpenProjects] = useState({});

  const toggleGroup = (groupTitle) => {
    setOpenGroups((prev) => ({ ...prev, [groupTitle]: !prev[groupTitle] }));
  };

  const toggleProject = (projectName) => {
    setOpenProjects((prev) => ({ ...prev, [projectName]: !prev[projectName] }));
  };

  return (
    <section id="Projects" className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">From Knowledge to Creation</h2>

      <div className="max-w-6xl mx-auto space-y-6">
        {projectGroups.map((group) => (
          <div key={group.groupTitle} className="bg-gray-50 rounded shadow-md overflow-hidden">
            <button
              onClick={() => toggleGroup(group.groupTitle)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center focus:outline-none"
            >
              <span className="font-bold text-lg">{group.groupTitle}</span>
              <span className="text-gray-500">{openGroups[group.groupTitle] ? "−" : "+"}</span>
            </button>

            {openGroups[group.groupTitle] && (
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {group.projects.map((project) => (
                  <div key={project.name} className="bg-white p-4 rounded shadow-inner">
                    <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                    <p className="mb-2">{project.desc}</p>

                    <button
                      onClick={() => toggleProject(project.name)}
                      className="text-blue-500 underline mb-2 focus:outline-none"
                    >
                      {openProjects[project.name] ? "Hide Details" : "Show Details"}
                    </button>

                    {openProjects[project.name] && (
                      <pre className="bg-gray-100 p-3 rounded text-left text-sm whitespace-pre-wrap">{project.details}</pre>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

