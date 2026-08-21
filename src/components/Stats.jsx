import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Award, Code2, Zap, ShieldCheck } from "lucide-react";

export default function Stats() {
  const statIcons = [
    <Award className="stat-icon" size={24} key="award" />,
    <Code2 className="stat-icon" size={24} key="code" />,
    <Zap className="stat-icon" size={24} key="zap" />,
    <ShieldCheck className="stat-icon" size={24} key="shield" />
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {personalInfo.stats.map((item, index) => (
            <div key={item.label} className="stat-card">
              <div className="stat-icon-wrapper">
                {statIcons[index % statIcons.length]}
              </div>
              <div className="stat-info">
                <div className="stat-value">
                  {item.value}
                  {item.suffix}
                </div>
                <div className="stat-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
