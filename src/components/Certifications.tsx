import React from "react";
import "../styles/certifications.css";

interface Certificate {
  title: string;
  description: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "Walmart USA",
    description: "Advanced Software Engineering Job Simulation",
    link: "https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_im-happy-to-share-that-ive-obtained-a-new-activity-7349383083009134594-IThQ",
  },
  {
    title: "AI Builders Lab - Google",
    description: "AI Builders Lab Program - Google Developers",
    link: "https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_ai-machinelearning-googledevelopers-activity-7263797371942154240-miEV",
  },
  {
    title: "Hexart.in",
    description: "AI Foundation & AI Advanced Certification",
    link: "https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_im-happy-to-share-that-ive-obtained-a-new-activity-7279112830828617728-G8Ei",
  },
  {
    title: "Cisco Networking Academy",
    description: "Data Analytics Essentials Certification",
    link: "https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_im-happy-to-share-that-ive-obtained-a-new-activity-7295484561742802944-an9q",
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
