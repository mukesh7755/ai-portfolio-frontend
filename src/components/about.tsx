import React from "react";
import profileImage from "../assets/profile.png";
import "../styles/about.css";

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h1>
            Hello, I'm{" "}
            <span className="highlight-name">Mukesh Vankayalapati</span>
          </h1>

          <h3 className="about-role">
            🚀 Full Stack Developer | 🤖 AI Enthusiast | 🎨 UI/UX Designer |
            Data Analyst
          </h3>

          <p>
            Passionate developer specializing in full-stack development, machine
            learning, and user-centric design. I build scalable,
            performance-optimized applications using React, Python, and AI
            technologies.
          </p>

          <div className="about-buttons">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>

            {/* ✅ FIXED DOWNLOAD BUTTON */}
            <a
              href="/resume.pdf"
              download="Mukesh_Vankayalapati_Resume.pdf"
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>

          <div className="about-stats">
            <div>
              <h2>4+</h2>
              <p>Projects</p>
            </div>
            <div>
              <h2>5+</h2>
              <p>Certifications</p>
            </div>
            <div>
              <h2>2+</h2>
              <p>Years Learning</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <img src={profileImage} alt="Mukesh Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
