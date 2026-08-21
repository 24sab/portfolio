import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-root">
      {/* Dynamic Background Mesh */}
      <div className="bg-canvas-mesh">
        <div className="mesh-gradient-orb orb-1" />
        <div className="mesh-gradient-orb orb-2" />
        <div className="mesh-gradient-orb orb-3" />
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="app-toast">
          <span className="toast-dot" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="main-content">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
