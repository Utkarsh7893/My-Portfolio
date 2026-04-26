import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThreeBackground from "./components/ThreeBackground";
import CodeSnippet from "./components/CodeSnippet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FiSmartphone, FiMonitor } from "react-icons/fi";

export default function App() {
  const [mobileView, setMobileView] = useState(false);

  return (
    <ThemeProvider>
      <div className={mobileView ? "mobile-preview-wrapper" : ""}>
        <div className={mobileView ? "mobile-preview-frame" : ""}>
          <ThreeBackground />
          <CodeSnippet />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Achievements />
            <Blog />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
      <button
        className={`mobile-toggle-btn ${mobileView ? "mobile-toggle-btn--active" : ""}`}
        onClick={() => setMobileView((p) => !p)}
        title={mobileView ? "Exit Mobile Preview" : "Mobile Preview"}
        aria-label="Toggle mobile preview"
      >
        {mobileView ? <FiMonitor size={20} /> : <FiSmartphone size={20} />}
      </button>
    </ThemeProvider>
  );
}
