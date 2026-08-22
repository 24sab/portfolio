import React from "react";
import { 
  Puzzle, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Puzzle className="pillar-icon" size={22} />,
      title: "Extensible Plugin Architecture",
      desc: "Deep mastery of WordPress hooks, filters, custom post types, custom taxonomies, and REST endpoints for maintainable and scalable plugins."
    },
    {
      icon: <Terminal className="pillar-icon" size={22} />,
      title: "Full-Stack & React UI",
      desc: "Combining robust PHP and MySQL backend logic with modern React.js frontend interfaces to deliver snappy, intuitive admin dashboards."
    },
    {
      icon: <Sparkles className="pillar-icon" size={22} />,
      title: "AI-Augmented Velocity",
      desc: "Pioneering AI-assisted development tools (Antigravity, ChatGPT) for code generation, comprehensive test debugging, and documentation."
    },
    {
      icon: <ShieldCheck className="pillar-icon" size={22} />,
      title: "Security & Optimization",
      desc: "Strict adherence to nonces, data sanitization, transient caching, and database query optimization across major core updates."
    }
  ];

  return (
    <section className="section-wrapper" id="about">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">ABOUT ME</span>
          <h2 className="section-title">
            Engineering Scalable Web & <span className="gradient-text">Plugin Solutions</span>
          </h2>
          <p className="section-subtitle">
            Bridging complex backend business logic with high-performance user experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* Left bio column */}
          <div className="about-bio-card">
            <h3 className="about-card-title">Professional Summary</h3>
            <p className="about-bio-text">
              I am a <strong>WordPress & PHP Developer with 3+ years of experience</strong> building and maintaining production-grade WordPress and WooCommerce plugins using PHP, JavaScript, React.js, and MySQL.
            </p>
            <p className="about-bio-text">
              Currently working at <strong>Acodez IT Solutions</strong>, I specialize in architecting custom plugin features, resolving compatibility challenges during major WooCommerce core updates, and engineering REST API integrations.
            </p>
            <p className="about-bio-text">
              I actively incorporate <strong>AI-assisted development tools</strong> into my workflow to accelerate delivery times while upholding strict code quality, security protocols, and performance benchmarks.
            </p>

            <div className="about-quick-facts">
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>Production experience with high-volume WooCommerce stores</span>
              </div>
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>Expert in action hooks, filter hooks, and WP REST API</span>
              </div>
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>Modern React.js admin interface development</span>
              </div>
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>Bachelor of Technology (B.Tech) in Engineering</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#experience" className="btn-secondary">
                <span>View Career Timeline</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right pillars column */}
          <div className="about-pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
