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

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
  <div className="hero-text">
    <h1>Hi, I'm Sabira K</h1>
    <h3>WordPress & WooCommerce Plugin Developer</h3>
    <p>
      3+ years of experience building scalable WordPress plugins,
      optimizing performance, and integrating modern React-based
      frontend solutions.
    </p>

    <a href="#contact" className="btn">
      Let's Connect
    </a>
  </div>

  <div className="hero-image">
    <div className="image-card">
      <img src={profile} alt="Sabira K" />
    </div>
  </div>
</section>



      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I specialize in custom plugin development, WooCommerce architecture,
          API integration, debugging, and React.js frontend enhancements.
          Experienced in handling production-level systems and solving complex
          compatibility challenges.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section dark">
  <h2>Professional Experience</h2>

  <div className="experience-card">
    <h3>Acodez IT Solutions</h3>
    <span className="role">
      WordPress Plugin Developer | January 2023 – Present
    </span>

    <ul>
      <li>
        Architect and maintain scalable WordPress and WooCommerce plugins used in live production environments.
      </li>
      <li>
        Design complex business logic using WordPress hooks, filters, custom post types, and secure coding practices.
      </li>
      <li>
        Integrate and enhance frontend components using React.js to improve usability, responsiveness, and performance.
      </li>
      <li>
        Resolve compatibility issues during WordPress and WooCommerce core updates while ensuring system stability.
      </li>
      <li>
        Optimize plugin performance, database queries, and API integrations for high-traffic environments.
      </li>
      <li>
        Collaborate with cross-functional teams to deliver client-specific solutions within deadlines.
      </li>
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
          <div>GitLab</div>
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
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: sabirasdk24@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sabira-k-0b3421212/"
            target="_blank"
          >
            sabira-k
          </a>
        </p>
      </section>

      <footer>
        © 2026 Sabira K | WordPress Plugin Developer
      </footer>
    </div>
  );
}

export default App;
