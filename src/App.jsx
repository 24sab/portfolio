import { useState } from "react";
import "./App.css";
import profile from "./assets/profile.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Sabira K</div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-container">

          <div className="hero-left">
            <h1>Hi, I'm Sabira</h1>
            <h2>WordPress Plugin Developer</h2>
            <p>
              I build scalable WordPress plugins and modern React applications 
              focused on performance, usability, and clean architecture.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
            </div>
          </div>

          <div className="hero-right">
            <img src={profile} alt="Sabira Profile" />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I specialize in WordPress and WooCommerce plugin architecture,
          complex business logic implementation, API integrations, and 
          React-based frontend enhancements. I work with production-level 
          systems and focus on scalability and clean development practices.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section dark">
        <h2>Professional Experience</h2>

        <div className="experience-card">
          <h3>Acodez IT Solutions</h3>
          <span className="role">
            WordPress Plugin Developer | Jan 2023 – Present
          </span>

          <ul>
            <li>Architect and maintain scalable WordPress & WooCommerce plugins in live production systems.</li>
            <li>Design complex business logic using hooks, filters, CPTs, and secure coding standards.</li>
            <li>Develop React.js components to enhance frontend usability and responsiveness.</li>
            <li>Resolve compatibility challenges during WordPress & WooCommerce core updates.</li>
            <li>Optimize performance, database queries, and API integrations.</li>
            <li>Collaborate with cross-functional teams to deliver client solutions.</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div>HTML / CSS</div>
          <div>JavaScript</div>
          <div>React.js</div>
          <div>PHP</div>
          <div>MySQL</div>
          <div>WordPress</div>
          <div>WooCommerce</div>
          <div>Git</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section dark">
        <h2>Projects</h2>

        <div className="card">
          <h3>College Online Store</h3>
          <p>Flutter + MySQL based mobile commerce platform.</p>
        </div>

        <div className="card">
          <h3>Online Oral Cancer Screening System</h3>
          <p>Django + Flutter medical workflow system.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <h2>Let's Connect</h2>

        <div className="contact-card">
          <p>
            I'm open to collaboration, freelance opportunities, and professional networking.
          </p>

          <a
            href="https://www.linkedin.com/in/sabira-k-0b3421212/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-btn"
          >
            Visit My LinkedIn Profile
          </a>
        </div>
      </section>

      <footer>
        © 2026 Sabira K | WordPress Plugin Developer
      </footer>

    </div>
  );
}

export default App;
