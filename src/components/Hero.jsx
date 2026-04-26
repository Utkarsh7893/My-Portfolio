import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiDownload, FiChevronDown, FiInstagram, FiYoutube, FiVideo, FiBriefcase } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeoutRef.current = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <motion.div className="hero__text" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="hero__greeting"><span className="code-comment">{"// Hello World, I'm"}</span></p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <div className="hero__role-wrapper">
            <span className="code-keyword">const </span>
            <span className="code-variable">role</span>
            <span className="code-operator"> = </span>
            <span className="code-string">"{displayText}<span className="cursor-blink">|</span>"</span>
            <span className="code-punctuation">;</span>
          </div>
          <p className="hero__bio">{personalInfo.bio}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>View Projects</a>
            <a href="#contact" className="btn btn--outline" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>Contact Me</a>
            {personalInfo.videoCvLink && personalInfo.videoCvLink !== "#" && (
              <a href="#experience" className="btn btn--outline" onClick={(e) => { e.preventDefault(); document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }); }}>
                <FiBriefcase size={18} /> View Experience
              </a>
            )}
          </div>
          <div className="hero__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={22} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={22} /></a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram size={22} /></a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter size={20} /></a>
            <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FiYoutube size={22} /></a>
            <a href={personalInfo.resumeLink} className="hero__resume-link" aria-label="Download Resume"><FiDownload size={18} /><span>Resume</span></a>
          </div>
        </motion.div>
        <motion.div className="hero__image-wrapper" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div className="hero__image-glow" />
          <div className="hero__image-ring" />
          <img src={personalInfo.photo} alt={personalInfo.name} className="hero__image" />
          {personalInfo.videoCvLink && (
            <a href={personalInfo.videoCvLink} target="_blank" rel="noopener noreferrer" className="hero__video-badge" title="Watch Video CV">
              <FiVideo size={16} /> <span>Video CV</span>
            </a>
          )}
        </motion.div>
      </div>
      <motion.a href="#about" className="hero__scroll-indicator" aria-label="Scroll down" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}>
        <FiChevronDown size={28} />
      </motion.a>
    </section>
  );
}
