import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.clientHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height && id) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Mukesh</div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#hero"
            className={active === "hero" ? "active" : ""}
            onClick={handleClick}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={handleClick}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={handleClick}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={handleClick}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#certifications"
            className={active === "certifications" ? "active" : ""}
            onClick={handleClick}
          >
            Certifications
          </a>
        </li>

        <li>
          <a
            href="#coding-profiles"
            className={active === "coding-profiles" ? "active" : ""}
            onClick={handleClick}
          >
            Coding
          </a>
        </li>

        <li>
          <a
            href="#achievements"
            className={active === "achievements" ? "active" : ""}
            onClick={handleClick}
          >
            Achievements
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={handleClick}
          >
            Contact
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
