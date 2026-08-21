import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Contact({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message or preparing mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast("Message ready! Opening email client...");
      }
      
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || "Project Inquiry")}&body=${encodeURIComponent(`Hi Sabira,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a custom WordPress plugin requirement, a WooCommerce scaling project, or a full-time opportunity — I'd love to connect.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="contact-info-card">
            <h3 className="contact-card-heading">Contact Information</h3>
            <p className="contact-intro-text">
              Reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
            </p>

            <div className="contact-channels-list">
              {/* Email */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Mail size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn-copy"
                  onClick={() => handleCopy(personalInfo.email, "Email")}
                  title="Copy email to clipboard"
                >
                  {copiedField === "Email" ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Phone size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Phone / WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="channel-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn-copy"
                  onClick={() => handleCopy(personalInfo.phone, "Phone number")}
                  title="Copy phone to clipboard"
                >
                  {copiedField === "Phone number" ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-label">Location</span>
                  <span className="channel-value text-muted">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="contact-social-bar">
              <span className="social-bar-title">Connect on Networks:</span>
              <div className="social-buttons-row">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-profile-link linkedin"
                >
                  <LinkedInIcon size={18} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-profile-link github"
                >
                  <GitHubIcon size={18} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <MessageSquare size={22} className="form-header-icon" />
              <div>
                <h3 className="form-card-title">Send a Direct Message</h3>
                <span className="form-card-subtitle">Fills your email client directly</span>
              </div>
            </div>

            {submitted ? (
              <div className="form-success-banner">
                <Check size={24} className="text-success" />
                <div>
                  <h4>Thank you for reaching out!</h4>
                  <p>Your email draft has been generated. If your email app did not open automatically, please message me at <strong>{personalInfo.email}</strong>.</p>
                </div>
                <button 
                  type="button" 
                  className="btn-secondary" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. WordPress Plugin Development / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Details or Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me about your requirements, timeline, or position..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary full-width"
                >
                  <span>{isSubmitting ? "Generating Email..." : "Send Message"}</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
