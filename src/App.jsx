import React from "react";
import { Navbar, Hero, About, Skills, Programs, Projects, Philosophy, Contact, Footer } from "./components/index.jsx";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Programs />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

