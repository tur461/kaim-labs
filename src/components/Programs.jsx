import React, { useState } from "react";

const Programs = () => {
  const programGroups = [
  {
    groupTitle: "Short Workshops (1–3 Weeks)",
    programs: [
      {
        title: "Blockchain Foundations",
        status: "Available",
        duration: "6 weeks",
        description: `
Hands-on lab exploring blockchain fundamentals.
- Learn cryptocurrency protocols, smart contracts, and peer-to-peer networks.
- Deploy your own private blockchain.
- Tools: Solidity, Node.js, Ganache.
- Outcome: Build a mini decentralized app (DApp) and understand real-world blockchain workflows.
`
      },
      {
        title: "Bash & Linux Scripting",
        status: "Available",
        duration: "1 week",
        description: `
Automate system tasks, file management, and server monitoring.
- Hands-on scripting and automation projects.
- Tools: Bash, Linux CLI, Cron jobs.
- Outcome: Develop scripts that save hours of manual work and manage servers efficiently.
`
      },
      {
        title: "Embedded IoT Introduction",
        status: "Available",
        duration: "3 weeks",
        description: `
Hands-on introduction to sensors and microcontrollers.
- Projects: LED blink patterns, temperature/humidity sensor readings.
- Tools: Arduino, Lua, Raspberry Pi.
- Outcome: Build your first small IoT prototype and understand embedded programming basics.
`
      }
    ]
  },
  {
    groupTitle: "1-Month Courses",
    programs: [
      {
        title: "Node.js & API Development",
        status: "Available",
        duration: "4 weeks",
        description: `
Build RESTful APIs and backend applications.
- Projects: Chat app backend, CRUD APIs.
- Tools: Node.js, Express, MongoDB.
- Outcome: Create fully functional backend systems ready for real-world applications.
`
      },
      {
        title: "ReactJS Web Apps",
        status: "Available",
        duration: "4 weeks",
        description: `
Develop interactive front-end applications.
- Projects: ToDo app, interactive dashboards.
- Tools: ReactJS, Hooks, Context API.
- Outcome: Build responsive and dynamic web applications integrating with APIs.
`
      },
      {
        title: "Rust for High-Performance Systems",
        status: "Available",
        duration: "1 month",
        description: `
Project-oriented coding in Rust for fast and reliable systems.
- Projects: CLI tools, file processors, memory-safe applications.
- Tools: Rust, Cargo.
- Outcome: Learn to build high-performance software suitable for embedded or server-side systems.
`
      },
      {
        title: "DevOps Essentials",
        status: "Available",
        duration: "1 month",
        description: `
Hands-on CI/CD pipelines, containerization, and cloud deployments.
- Projects: Dockerize apps, setup Jenkins pipelines, deploy on cloud.
- Tools: Docker, Kubernetes basics, Jenkins, AWS/GCP.
- Outcome: Automate deployments and manage production-ready systems efficiently.
`
      }
    ]
  },
  {
    groupTitle: "2–3 Month Courses",
    programs: [
      {
        title: "Advanced Rust Systems",
        status: "Upcoming",
        duration: "2 months",
        description: `
Deep dive into Rust for high-performance software and embedded systems.
- Projects: Multi-threaded servers, embedded controllers.
- Tools: Rust, Async programming, Embedded Rust crates.
- Outcome: Build scalable and memory-safe applications for industry-grade projects.
`
      },
      {
        title: "Embedded Systems Bootcamp",
        status: "Upcoming",
        duration: "2 months",
        description: `
Circuit-to-firmware projects integrating sensors, actuators, and microcontrollers.
- Projects: Smart home sensors, motor control projects.
- Tools: C, Arduino, STM32, Raspberry Pi.
- Outcome: Develop complete embedded solutions from hardware design to firmware.
`
      },
      {
        title: "Embedded Security & IoT Pentesting",
        status: "Upcoming",
        duration: "2 months",
        description: `
Analyze firmware, secure devices, and perform IoT penetration testing.
- Projects: Firmware dumping, side-channel analysis, secure communication.
- Tools: Python, C, Arduino, Raspberry Pi.
- Outcome: Audit and protect IoT devices like a professional security engineer.
`
      },
      {
        title: "Networking & Linux Mastery",
        status: "Upcoming",
        duration: "2 months",
        description: `
Master network administration and Linux troubleshooting.
- Projects: Setup servers, monitor networks, troubleshoot issues.
- Tools: Linux CLI, Wireshark, TCP/IP tools.
- Outcome: Manage and secure networks for enterprise or lab environments.
`
      },
      {
        title: "Ethical Hacking & Pentesting",
        status: "Upcoming",
        duration: "3 months",
        description: `
Hands-on lab with network defense, exploits, and real-world attacks.
- Projects: Penetration testing lab setups, vulnerability scanning.
- Tools: Kali Linux, Metasploit, Nmap.
- Outcome: Learn professional ethical hacking techniques and security auditing.
`
      },
      {
        title: "Embedded AI & TinyML",
        status: "Upcoming",
        duration: "3 months",
        description: `
Deploy AI on microcontrollers for smart sensor projects.
- Projects: Gesture recognition, predictive sensors.
- Tools: TensorFlow Lite, Arduino, Raspberry Pi.
- Outcome: Implement AI at the edge with resource-constrained devices.
`
      }
    ]
  },
  {
    groupTitle: "Quarterly & 6-Month Courses",
    programs: [
      {
        title: "Cyber-Physical Systems Security",
        status: "Upcoming",
        duration: "4 months",
        description: `
Secure autonomous robots, drones, and embedded systems.
- Projects: Attack simulation, defense implementation on autonomous devices.
- Tools: ROS, Python, Arduino/STM32.
- Outcome: Learn to secure complex cyber-physical systems in real-world environments.
`
      },
      {
        title: "Full-Stack Blockchain Developer",
        status: "Upcoming",
        duration: "6 months",
        description: `
Build end-to-end decentralized applications.
- Projects: DApps with front-end, smart contracts, and backend logic.
- Tools: Solidity, Node.js, ReactJS, Ganache.
- Outcome: Deploy production-ready blockchain applications and understand all layers.
`
      }
    ]
  },
  {
    groupTitle: "1-Year Advanced Programs",
    programs: [
      {
        title: "Embedded Systems & IoT Expert",
        status: "Upcoming",
        duration: "1 year",
        description: `
Design, secure, and deploy complex IoT and embedded solutions.
- Projects: Autonomous IoT systems, edge AI projects, full firmware stacks.
- Tools: C, Rust, STM32, Raspberry Pi, TensorFlow Lite.
- Outcome: Become a professional embedded engineer ready for innovation or entrepreneurship.
`
      },
      {
        title: "Cybersecurity & Pentesting Mastery",
        status: "Upcoming",
        duration: "1 year",
        description: `
Master full-stack ethical hacking, incident response, and real-world projects.
- Projects: Corporate security audits, penetration testing, malware analysis.
- Tools: Python, Bash, Kali Linux, Metasploit, Wireshark.
- Outcome: Full-spectrum cybersecurity mastery for professional or freelance projects.
`
      }
    ]
  }
];


  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (groupTitle) => {
    setOpenGroups((prev) => ({ ...prev, [groupTitle]: !prev[groupTitle] }));
  };

  return (
    <section id="Programs" className="py-16 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">Programs & Labs</h2>
      <p className="mb-6 max-w-2xl mx-auto text-center">
        Explore our current and upcoming programs designed for hands-on learning and real-world application.
      </p>


      <div className="max-w-6xl mx-auto space-y-6">
        {programGroups.map((group) => (
          <div key={group.groupTitle} className="bg-white rounded shadow-md overflow-hidden">
            <button
              onClick={() => toggleGroup(group.groupTitle)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center focus:outline-none"
            >
              <span className="font-bold text-lg">{group.groupTitle}</span>
              <span className="text-gray-500">{openGroups[group.groupTitle] ? "−" : "+"}</span>
            </button>

            {openGroups[group.groupTitle] && (
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {group.programs.map((program) => (
                  <div key={program.title} className="bg-gray-50 p-4 rounded shadow-inner">
                    <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                    <p
                      className={`mb-2 font-semibold ${
                        program.status === "Upcoming" ? "text-orange-500" : "text-green-500"
                      }`}
                    >
                      {program.status}
                    </p>
                    <p className="italic mb-2">{program.duration}</p>
                    <p>{program.description}</p>
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

