import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/skills.css";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import fullstackLogo from "../assets/fullstack.png";
import pythonLogo from "../assets/python.png";
import sqlLogo from "../assets/sql.png";
import javaLogo from "../assets/java.png";

interface Skill {
  name: string;
  value: number;
  logo: string;
}

const skills: Skill[] = [
  { name: "HTML", value: 90, logo: htmlLogo },
  { name: "CSS", value: 85, logo: cssLogo },
  { name: "JavaScript", value: 80, logo: jsLogo },
  { name: "React.js", value: 85, logo: reactLogo },
  { name: "Full Stack", value: 75, logo: fullstackLogo },
  { name: "Python", value: 70, logo: pythonLogo },
  { name: "SQL", value: 80, logo: sqlLogo },
  { name: "Java", value: 70, logo: javaLogo },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Skills</h2>

      <div className="skills-meters">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />

            <CircularProgressbar
              value={skill.value}
              text={`${skill.value}%`}
              styles={buildStyles({
                pathColor: "#00f5ff",
                textColor: "#ffffff",
                trailColor: "#1e293b",
              })}
            />

            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
