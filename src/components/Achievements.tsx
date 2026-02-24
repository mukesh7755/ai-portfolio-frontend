import React from "react";
import "../styles/achievements.css";

import digiLogo from "../assets/digi.png";
import pureLogo from "../assets/pure.png";
import gdgLogo from "../assets/gdg.png";

interface Achievement {
  title: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    title: "PURE Youth Club",
    description:
      "Recognized with Service Awards (2023–24) for contributing to educational and social impact initiatives.",
    image: pureLogo,
  },
  {
    title: "Digi Club – CMRIT",
    description:
      "Vice President & Graphic Designer. Led digital innovation initiatives and creative tech-driven projects.",
    image: digiLogo,
  },
  {
    title: "Google Developers Group (GDG)",
    description:
      "Participated in Google Solution Challenge 2024, building real-world AI impact projects.",
    image: gdgLogo,
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-title">Achievements</h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
