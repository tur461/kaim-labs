import React, { useState } from "react";

const Programs = () => {
  const programGroups = [
    // ================= CORE SYSTEMS =================
    {
      groupTitle: "Core Systems & Infrastructure (Fundamental → Advanced)",
      programs: [
        {
          title: "Bash & Linux Scripting",
          status: "Available",
          duration: "1 week",
          description: `
• Fundamentals
  - File system, processes, permissions
  - CLI navigation

• Automation
  - Bash scripting, cron jobs
  - Log monitoring

• Outcome
  Build automation scripts for real systems
`,
        },
        {
          title: "Networking & Linux Mastery",
          status: "Upcoming",
          duration: "2 months",
          description: `
• Networking
  - TCP/IP, sockets
  - Debugging tools (Wireshark)

• Systems
  - Server setup, monitoring

Outcome: Strong system-level debugging skills
`,
        },
        {
          title: "DevOps Essentials",
          status: "Available",
          duration: "1 month",
          description: `
• CI/CD pipelines
• Docker & containerization
• Cloud deployments

Outcome: Automate production systems
`,
        },
      ],
    },

    // ================= SOFTWARE DEVELOPMENT =================
    {
      groupTitle: "Software Development (Fundamental → Advanced)",
      programs: [
        {
          title: "Node.js & API Development",
          status: "Available",
          duration: "4 weeks",
          description: `
• REST APIs
• Backend systems
• MongoDB integration

Outcome: Build production-ready APIs
`,
        },
        {
          title: "ReactJS Web Apps",
          status: "Available",
          duration: "4 weeks",
          description: `
• UI development
• State management

Outcome: Build dynamic frontends
`,
        },
        {
          title: "Rust for High-Performance Systems",
          status: "Available",
          duration: "1 month",
          description: `
• Memory safety
• CLI tools

Outcome: High-performance backend systems
`,
        },
        {
          title: "Advanced Rust Systems",
          status: "Upcoming",
          duration: "2 months",
          description: `
• Async systems
• Multi-threading

Outcome: Build scalable systems
`,
        },
      ],
    },

    // ================= EMBEDDED & IOT =================
    {
      groupTitle: "Embedded Systems & IoT (Fundamental → Advanced)",
      programs: [
        {
          title: "Embedded IoT Introduction",
          status: "Available",
          duration: "3 weeks",
          description: `
• Sensors & microcontrollers
• Arduino basics

Outcome: First working IoT system
`,
        },
        {
          title: "Embedded Systems Bootcamp",
          status: "Upcoming",
          duration: "2 months",
          description: `
• Firmware development
• Hardware integration

Outcome: End-to-end embedded systems
`,
        },
        {
          title: "Embedded AI & TinyML",
          status: "Upcoming",
          duration: "3 months",
          description: `
• Edge AI
• TensorFlow Lite

Outcome: AI on microcontrollers
`,
        },
        {
          title: "Embedded Systems & IoT Expert",
          status: "Upcoming",
          duration: "1 year",
          description: `
• Full system design
• Edge AI + firmware

Outcome: Industry-level embedded engineer
`,
        },
      ],
    },

    // ================= CYBERSECURITY =================
    {
      groupTitle: "Cybersecurity & Pentesting (Intermediate → Advanced)",
      programs: [
        {
          title: "Ethical Hacking & Pentesting",
          status: "Upcoming",
          duration: "3 months",
          description: `
• Vulnerability scanning
• Exploitation basics

Outcome: Entry-level pentester skills
`,
        },
        {
          title: "Embedded Security & IoT Pentesting",
          status: "Upcoming",
          duration: "2 months",
          description: `
• Firmware analysis
• Device security

Outcome: IoT security specialist
`,
        },
        {
          title: "Cyber-Physical Systems Security",
          status: "Upcoming",
          duration: "4 months",
          description: `
• Robotics & system attacks
• Defense systems

Outcome: Secure complex systems
`,
        },
        {
          title: "Cybersecurity & Pentesting Mastery",
          status: "Upcoming",
          duration: "1 year",
          description: `
• Full-stack security
• Incident response

Outcome: Professional cybersecurity expert
`,
        },
      ],
    },

    // ================= BLOCKCHAIN =================
    {
      groupTitle: "Blockchain & Web3 (Fundamental → Advanced)",
      programs: [
        {
          title: "Blockchain Foundations",
          status: "Available",
          duration: "6 weeks",
          description: `
• Smart contracts
• Blockchain basics

Outcome: Build first DApp
`,
        },
        {
          title: "Full-Stack Blockchain Developer",
          status: "Upcoming",
          duration: "6 months",
          description: `
• Smart contracts + frontend
• Full-stack Web3

Outcome: Production blockchain apps
`,
        },
      ],
    },

    // ================= MACHINE LEARNING =================
    {
      groupTitle: "Machine Learning & AI (Fundamental → Advanced)",
      programs: [
        {
          title: "Beginner: ML Foundations",
          status: "Available",
          duration: "1–2 months",
          description: `
• Linear algebra & statistics
• Regression & classification

Outcome: Build ML models
`,
        },
        {
          title: "Intermediate: Deep Learning",
          status: "Available",
          duration: "2–3 months",
          description: `
• Neural networks
• CNNs, RNNs

Outcome: Build deep learning systems
`,
        },
        {
          title: "Advanced: LLMs & AI Systems",
          status: "Available",
          duration: "3–4 months",
          description: `
• Transformers
• RAG systems

Outcome: Build LLM-powered apps
`,
        },
      ],
    },

    // ================= ALGORITHMS =================
    {
      groupTitle: "Algorithms & Data Structures (Fundamental → Advanced)",
      programs: [
        {
          title: "Beginner: Core Data Structures",
          status: "Available",
          duration: "1–2 months",
          description: `
• Arrays, stacks, queues
• Sorting & searching

Outcome: Strong fundamentals
`,
        },
        {
          title: "Intermediate: Algorithmic Thinking",
          status: "Available",
          duration: "2–3 months",
          description: `
• Trees, graphs
• DFS, BFS

Outcome: Solve medium problems
`,
        },
        {
          title: "Advanced: System-Level Algorithms",
          status: "Available",
          duration: "3–4 months",
          description: `
• DP, segment trees
• Optimization

Outcome: High-level problem solving
`,
        },
      ],
    },

    // ================= NEGOTIATION =================
    {
      groupTitle: "Salary Negotiation (Practical Skill Track)",
      programs: [
        {
          title: "Beginner: Handling First Offer",
          status: "Available",
          duration: "2–3 weeks",
          description: `
• Offer response strategy
• Avoiding common mistakes

Outcome: Don’t undersell yourself
`,
        },
        {
          title: "Intermediate: Increasing Compensation",
          status: "Available",
          duration: "1–2 months",
          description: `
• BATNA & leverage
• Counter-offers

Outcome: Maximize salary
`,
        },
        {
          title: "Advanced: High-Stakes Negotiation",
          status: "Available",
          duration: "2 months",
          description: `
• Promotions & senior roles
• Pressure handling

Outcome: Control negotiations
`,
        },
      ],
    },

    // ================= ISLAMIC EDUCATION =================
    {
      groupTitle: "Islamic Education (Fundamental → Advanced)",
      programs: [
        {
          title: "Stage 1: Foundations of Knowing",
          status: "Available",
          duration: "Module",
          description: `
• Knowledge (‘ilm) vs opinion (ẓann)
• Intellect (‘aql), Revelation (waḥy)

Outcome: Thinking correctly
`,
        },
        {
          title: "Stage 2: Metaphysics",
          status: "Available",
          duration: "Module",
          description: `
• Existence (wujūd) vs essence (māhiyyah)
• Proof of God

Outcome: Rational belief
`,
        },
        {
          title: "Stage 3: Divine Unity",
          status: "Available",
          duration: "Module",
          description: `
• Tawḥīd (Divine Unity)
• Divine justice (‘adl)

Outcome: Understanding God
`,
        },
        {
          title: "Stage 4–8: Completion",
          status: "Available",
          duration: "1 Year",
          description: `
• Prophethood (nubuwwah)
• Leadership (imāmah)
• Afterlife (ma‘ād)
• Spirituality (‘irfān)

Outcome:
• Intellectual clarity
• Spiritual depth
`,
        },
      ],
    },
  ];

  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (groupTitle) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };

  return (
    <section id="Programs" className="py-16 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Programs & Labs
      </h2>

      <p className="mb-6 max-w-2xl mx-auto text-center">
        Explore structured learning paths across domains. You can pursue multiple tracks in parallel based on your goals.
      </p>

      <div className="max-w-6xl mx-auto space-y-6">
        {programGroups.map((group) => (
          <div
            key={group.groupTitle}
            className="bg-white rounded shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleGroup(group.groupTitle)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
              <span className="font-bold text-lg">{group.groupTitle}</span>
              <span>{openGroups[group.groupTitle] ? "−" : "+"}</span>
            </button>

            {openGroups[group.groupTitle] && (
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {group.programs.map((program) => (
                  <div
                    key={program.title}
                    className="bg-gray-50 p-4 rounded shadow-inner"
                  >
                    <h3 className="font-bold text-xl mb-2">
                      {program.title}
                    </h3>

                    <p
                      className={`mb-2 font-semibold ${
                        program.status === "Upcoming"
                          ? "text-orange-500"
                          : "text-green-500"
                      }`}
                    >
                      {program.status}
                    </p>

                    <p className="italic mb-2">{program.duration}</p>

                    <p className="whitespace-pre-line">
                      {program.description}
                    </p>
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

export default Programs;
