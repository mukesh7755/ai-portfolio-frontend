import React from "react";
import "../styles/projects.css";

import stockImage from "../assets/stock.png";
import financeImage from "../assets/finaccne.png";
import certImage from "../assets/certtfi.png";
import pollImage from "../assets/polls.png";

/* ===============================
   Type Definition
================================= */

interface Project {
  title: string;
  description: string;
  image: string;
  live: string;
  github: string;
}

/* ===============================
   Projects Data
================================= */

const projects: Project[] = [
  {
    title: "Stock Price Forecasting",
    description:
      "Built an LSTM-based stock price prediction system using Python, TensorFlow, and Streamlit. Includes historical data visualization, real-time trend analysis, and future price forecasting.",
    image: stockImage,
    live: "https://mukesh7755-stock-price-forecasting-app-wlrv5m.streamlit.app/",
    github: "https://github.com/mukesh7755/Stock-Price-Forecasting",
  },
  {
    title: "AI Certificate Generator",
    description:
      "Generates AI-personalized certificates using React, Flask, and GenAI APIs. Includes QR verification, dynamic PDF export, and real-time preview customization.",
    image: certImage,
    live: "https://ai-certificate-generator-flax.vercel.app/",
    github: "https://github.com/mukesh7755/ai-certificate-generator",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A smart financial management app built with React and Charts.js to track income, expenses, visual analytics, and downloadable reports.",
    image: financeImage,
    live: "https://finance-tracker-inky-two.vercel.app/",
    github: "https://github.com/mukesh7755/Finance_tracker",
  },
  {
    title: "Real-Time Poll Rooms",
    description:
      "Create live polls with real-time voting updates using React, Node.js, Socket.io, and MongoDB. Includes countdown timer, expiry system, and anti-abuse mechanisms.",
    image: pollImage,
    live: "https://realtime-poll-rooms-sandy.vercel.app/",
    github: "https://github.com/mukesh7755/realtime-poll-rooms",
  },
];

/* ===============================
   Component
================================= */

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="project-cards">
        {projects.map((project: Project, index: number) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.title}`}
                >
                  🔗 Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository of ${project.title}`}
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
