import React from "react";
import "../styles/codingProfiles.css";
import codechefLogo from "../assets/codechef.png";
import leetcodeLogo from "../assets/leetcode.png";
import codeforcesLogo from "../assets/codeforces.png";

const CodingProfiles: React.FC = () => {
  return (
    <section id="coding-profiles" className="coding-profiles-section">
      <h2 className="section-title">Coding Profiles</h2>

      <div className="coding-container">
        <a
          href="https://www.codechef.com/users/mukesh_75"
          target="_blank"
          rel="noopener noreferrer"
          className="coding-card"
        >
          <img src={codechefLogo} alt="CodeChef" />
          <h3>CodeChef</h3>
          <p className="rating">Rating: 1290</p>
        </a>

        <a
          href="https://leetcode.com/u/22r01a67j9/"
          target="_blank"
          rel="noopener noreferrer"
          className="coding-card"
        >
          <img src={leetcodeLogo} alt="LeetCode" />
          <h3>LeetCode</h3>
          <p className="rating">Rating: 1835</p>
        </a>

        <a
          href="https://codeforces.com/profile/22r01a67j9"
          target="_blank"
          rel="noopener noreferrer"
          className="coding-card"
        >
          <img src={codeforcesLogo} alt="Codeforces" />
          <h3>Codeforces</h3>
          <p className="rating">Rating: 1049</p>
        </a>
      </div>
    </section>
  );
};

export default CodingProfiles;
