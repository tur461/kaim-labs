import React, { useState } from "react";

const Projects = () => {
  const projectGroups = [
    {
      groupTitle: "Embedded & IoT Projects",
      projects: [
        {
          name: "IoT Robotics",
          desc: "Autonomous sensor-driven robots with embedded intelligence.",
          difficulty: "Beginner",
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
          difficulty: "Intermediate",
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
          difficulty: "Advanced",
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
          difficulty: "Beginner",
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
          difficulty: "Intermediate",
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
          difficulty: "Advanced",
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
          difficulty: "Biginner",
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
          difficulty: "Intermediate",
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
          difficulty: "Advanced",
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
          difficulty: "Beginner",
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
          difficulty: "Intermediate",
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
          difficulty: "Advanced",
          details: `
- Tools: Docker, Kubernetes basics, Jenkins, GitHub Actions
- Projects: Containerize app, setup CI/CD pipelines, cloud deployment
- Outcome: Learn modern DevOps workflows
- Duration: 3–4 weeks
`
        }
      ]
    },
    {
      groupTitle: "Machine Learning & LLM Projects",
      projects: [
        {
          name: "ML Model Builder",
          desc: "Train and evaluate classical machine learning models.",
          difficulty: "Beginner",
          details: `
            - Models: Linear regression, decision trees, KNN
            - Tools: Python, scikit-learn, Pandas
            - Projects: House price prediction, spam classifier
            - Outcome: Understand full ML pipeline (data → model → evaluation)
            - Duration: 2–3 weeks
            `
        },
        {
          name: "Deep Learning Vision System",
          desc: "Build neural networks for image classification.",
          difficulty: "Intermediate",
          details: `
            - Models: CNNs
            - Tools: PyTorch, Python
            - Projects: Image classifier, object detection basics
            - Outcome: Train and deploy deep learning models
            - Duration: 3–4 weeks
            `
        },
        {
          name: "LLM Application (RAG System)",
          desc: "Build a real-world AI assistant using LLMs.",
          difficulty: "Advanced",
          details: `
            - Concepts: Embeddings, retrieval, prompt engineering
            - Tools: Python, HuggingFace, vector DB (FAISS)
            - Projects: Chatbot over documents, knowledge assistant
            - Outcome: Build production-style LLM systems
            - Duration: 4 weeks
            `
        }
      ]
    },
    {
      groupTitle: "Salary Negotiation Labs",
      projects: [
        {
          name: "First Offer Negotiation",
          desc: "Learn how to handle and respond to your first job offer.",
          difficulty: "Beginner",
          details: `
            - Scenarios: Entry-level job offers, internships
            - Focus:
              • How to respond without accepting immediately
              • Avoiding common mistakes (accepting too early, underselling)
              • Basic negotiation scripts

            - Practice:
              • HR conversation simulations
              • Email negotiation templates

            - Outcome: Confidently respond to offers and ask for better compensation
            - Duration: 1–2 weeks
            `
        },
        {
          name: "Compensation Optimization",
          desc: "Maximize your salary and total compensation package.",
          difficulty: "Intermediate",
          details: `
            - Concepts:
              • Base salary vs total compensation (bonus, equity, perks)
              • BATNA (Best Alternative to a Negotiated Agreement)
              • Market research & benchmarking

            - Practice:
              • Negotiating multiple offers
              • Leveraging competing offers
              • Structuring counter-offers

            - Outcome: Increase overall compensation strategically, not just salary
            - Duration: 2–3 weeks
            `
        },
        {
          name: "Advanced Salary Strategy",
          desc: "Handle complex and high-stakes compensation negotiations.",
          difficulty: "Advanced",
          details: `
            - Scenarios:
              • Senior roles
              • Promotions and internal raises
              • Remote vs onsite compensation

            - Concepts:
              • Power dynamics & leverage timing
              • Negotiating under pressure
              • Long-term career positioning

            - Practice:
              • Tough HR pushback scenarios
              • Multi-round negotiations

            - Outcome: Control high-stakes salary discussions and long-term earnings growth
            - Duration: 2–3 weeks
            `
        }
      ]
    },
    {
      groupTitle: "Algorithms & Problem Solving",
      projects: [
        {
          name: "DSA Problem Solver",
          desc: "Solve structured coding challenges.",
          difficulty: "Beginner",
          details: `
    - Topics: Arrays, strings, sorting
    - Platforms: Custom problem sets / LeetCode-style
    - Languages: C++ / Python/ Rust / Go / Java / Js
    - Outcome: Build strong problem-solving foundation
    - Duration: 2–3 weeks
    `
        },
        {
          name: "Graph & Tree Systems",
          desc: "Implement complex data structures and algorithms.",
          difficulty: "Intermediate",
          details: `
    - Topics: Trees, graphs, BFS, DFS
    - Projects: Pathfinding, network traversal
    - Languages: C++ / Rust / Go / Python / Java / Js
    - Outcome: Master intermediate-level algorithmic thinking
    - Duration: 3–4 weeks
    `
        },
        {
          name: "Advanced Algorithm Engine",
          desc: "Build optimized systems using advanced algorithms.",
          difficulty: "Advanced",
          details: `
    - Topics: Dynamic programming, segment trees
    - Projects: Query engines, optimization problems
    - Languages: C++ / Rust / Go / Python / Java / Js
    - Outcome: Solve high-complexity computational problems
    - Duration: 4 weeks
    `
        }
      ]
    },
    {
      groupTitle: "Reverse Engineering & Binary Analysis",
      projects: [
        {
          name: "Binary Exploration Lab",
          desc: "Understand compiled binaries and low-level code.",
          difficulty: "Beginner",
          details: `
    - Topics: ELF/PE structure, assembly basics
    - Tools: objdump, Ghidra, ollydbg, gdb
    - Languages: C, Assembly
    - Outcome: Read and interpret simple binaries
    - Duration: 2–3 weeks
    `
        },
        {
          name: "Program Behavior Analysis",
          desc: "Analyze software using debugging techniques.",
          difficulty: "Intermediate",
          details: `
    - Tools: GDB, Radare2
    - Projects: Trace execution, inspect memory
    - Concepts: Static vs dynamic analysis
    - Outcome: Reverse engineer real-world programs
    - Duration: 3–4 weeks
    `
        },
        {
          name: "Exploit Development Lab",
          desc: "Understand vulnerabilities and exploitation.",
          difficulty: "Advanced",
          details: `
    - Topics: Buffer overflow, memory corruption
    - Concepts: ROP chains, syscall tracing
    - Languages: C, Assembly
    - Outcome: Learn how exploits work internally
    - Duration: 4 weeks
    `
        }
      ]
    },
  ];

  const [openGroups, setOpenGroups] = useState({});
  const [openProjects, setOpenProjects] = useState({});

  const toggleGroup = (groupTitle) => {
    setOpenGroups((prev) => ({ ...prev, [groupTitle]: !prev[groupTitle] }));
  };

  const toggleProject = (projectName) => {
    setOpenProjects((prev) => ({ ...prev, [projectName]: !prev[projectName] }));
  };

  const getBadgeColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="Projects" className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        From Knowledge to Creation
      </h2>

      <div className="max-w-6xl mx-auto space-y-6">
        {projectGroups.map((group) => (
          <div
            key={group.groupTitle}
            className="bg-gray-50 rounded shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleGroup(group.groupTitle)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center focus:outline-none"
            >
              <span className="font-bold text-lg">{group.groupTitle}</span>
              <span className="text-gray-500">
                {openGroups[group.groupTitle] ? "−" : "+"}
              </span>
            </button>

            {openGroups[group.groupTitle] && (
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {group.projects.map((project) => (
                  <div
                    key={project.name}
                    className="bg-white p-4 rounded shadow-inner"
                  >
                    {/* Header with badge */}
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-bold text-xl">{project.name}</h3>

                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ${getBadgeColor(
                          project.difficulty
                        )}`}
                      >
                        {project.difficulty}
                      </span>
                    </div>

                    <p className="mb-2 text-sm text-gray-700">
                      {project.desc}
                    </p>

                    <button
                      onClick={() => toggleProject(project.name)}
                      className="text-blue-500 text-sm underline mb-2 focus:outline-none"
                    >
                      {openProjects[project.name]
                        ? "Hide Details"
                        : "Show Details"}
                    </button>

                    {openProjects[project.name] && (
                      <pre className="bg-gray-100 p-3 rounded text-left text-sm whitespace-pre-wrap">
                        {project.details}
                      </pre>
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