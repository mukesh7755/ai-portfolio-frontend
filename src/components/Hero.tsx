import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content-centered">
        <h1>
          Hi, I'm <span className="highlight neon-glow">Mukesh Chowdary</span>
        </h1>

        <h3 className="hero-role">
          <Typewriter
            words={[
              "AI Developer",
              "Full Stack Engineer",
              "AI Enthusiast",
              "Data Analyst",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h3>

        <p className="hero-description">
          Building intelligent AI-powered applications and scalable full-stack
          systems with real-world impact.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <button
            className="btn-outline"
            onClick={() => {
              const chatBtn = document.querySelector(
                ".chat-toggle",
              ) as HTMLButtonElement;
              chatBtn?.click();
            }}
          >
            Talk to AI
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
