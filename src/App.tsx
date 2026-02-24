import React from "react";
import "./styles/global.css";

import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <ParticlesBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>

      <ChatBot />

      <Footer />
    </>
  );
};

export default App;
