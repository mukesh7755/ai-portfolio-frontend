import React from "react";
import "../styles/resume.css";
import resumePDF from "../assets/resume wp.pdf";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>

      <p>
        Download my latest resume to explore my experience, technical skills,
        and projects.
      </p>

      <div className="resume-card">
        <a href={resumePDF} download="Mukesh_Resume.pdf" className="resume-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
