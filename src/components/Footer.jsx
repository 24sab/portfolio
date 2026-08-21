import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Heart, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-logo">{personalInfo.name}</span>
            <p className="footer-bio">
              WordPress & PHP Developer | 3+ Years Building Scalable Web & Plugin Architecture
            </p>
          </div>

          <div className="footer-links-group">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn-scroll-top"
            title="Scroll back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="footer-meta">
            <span>Crafted with React & Vite</span>
            <span className="footer-meta-dot">•</span>
            <span>Kozhikode, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
