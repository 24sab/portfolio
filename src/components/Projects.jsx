import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { 
  Puzzle, 
  ShoppingBag, 
  Activity, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case "Puzzle":
        return <Puzzle size={24} />;
      case "ShoppingBag":
        return <ShoppingBag size={24} />;
      case "Activity":
        return <Activity size={24} />;
      default:
        return <Layers size={24} />;
    }
  };

  const categories = ["all", "WordPress / Backend", "Mobile / Database", "Healthcare / Full-Stack"];

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="section-wrapper bg-subtle" id="projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">FEATURED WORK</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            A selection of production WordPress plugin suites, full-stack systems, and mobile applications I've engineered.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="projects-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <div className="project-icon-box">
                  {getProjectIcon(project.icon)}
                </div>
                <div className="project-category-badge">
                  {project.category}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tagline">{project.tagline}</span>
                <p className="project-description">{project.description}</p>

                {/* Highlights List */}
                <div className="project-highlights">
                  <h4 className="highlights-label">Key Highlights:</h4>
                  <ul>
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="project-highlight-item">
                        <CheckCircle2 size={15} className="highlight-check" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="project-tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <a href="#contact" className="project-action-link">
                  <span>Inquire / Discuss Architecture</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
