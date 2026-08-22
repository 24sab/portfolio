import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.png";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  MapPin,
  CheckCircle2, 
  Code
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.taglines[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.taglines.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleDownloadCV = () => {
    // Printable / downloadable CV view
    window.print();
  };

  return (
    <section className="hero-section" id="home">
      {/* Background ambient light blobs */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />

      <div className="hero-container">
        {/* Left text column */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="live-pulse" />
            <span className="badge-text">Available for new opportunities</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="typewriter-container">
            <span className="typewriter-prefix">&gt; </span>
            <span className="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          {/* Key location & experience highlight chips */}
          <div className="hero-chips">
            <div className="hero-chip">
              <MapPin size={15} className="chip-icon" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="hero-chip">
              <Sparkles size={15} className="chip-icon gold" />
              <span>3+ Years in Production WP & PHP</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={17} />
              <span>Get in Touch</span>
            </a>

            <button 
              type="button" 
              onClick={handleDownloadCV} 
              className="btn-ghost"
              title="Print / Save CV"
            >
              <Download size={17} />
              <span>Resume</span>
            </button>
          </div>

          {/* Social connections */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-list">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right avatar showcase */}
        <div className="hero-visual">
          <div className="avatar-frame-outer">
            <div className="avatar-glow-ring" />
            <div className="avatar-card">
              <div className="avatar-inner-wrap">
                <img 
                  src={profileImg} 
                  alt={`${personalInfo.name} - Profile`} 
                  className="avatar-image"
                />
              </div>

              {/* Floating badges */}
              <div className="floating-badge badge-top-right">
                <div className="floating-badge-icon wp-accent">
                  <Code size={16} />
                </div>
                <div className="floating-badge-text">
                  <span className="badge-title">Plugin Architect</span>
                  <span className="badge-sub">WordPress & WooCommerce</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left">
                <div className="floating-badge-icon check-accent">
                  <CheckCircle2 size={16} />
                </div>
                <div className="floating-badge-text">
                  <span className="badge-title">3+ Years Exp</span>
                  <span className="badge-sub">WordPress & PHP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
