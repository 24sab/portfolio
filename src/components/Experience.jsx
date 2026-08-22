import React from "react";
import { experienceData } from "../data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles 
} from "lucide-react";

export default function Experience() {
  return (
    <section className="section-wrapper" id="experience">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CAREER JOURNEY</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My track record of engineering production plugins, client systems, and scalable web solutions.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot">
                  <Briefcase size={16} />
                </div>
                <div className="marker-line" />
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="exp-role-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-group">
                      <Building2 size={16} className="exp-icon" />
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-badge current">{exp.badge}</span>
                    </div>
                  </div>

                  <div className="exp-meta-group">
                    <div className="exp-meta-item">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="exp-meta-item">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-summary">{exp.summary}</p>

                <div className="exp-achievements-list">
                  <h4 className="achievements-title">Key Responsibilities & Impact:</h4>
                  <ul>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="achievement-item">
                        <CheckCircle2 size={16} className="achievement-bullet" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-tech-stack">
                  <span className="stack-label">Technologies Applied:</span>
                  <div className="stack-tags">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
