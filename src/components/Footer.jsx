import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">{personalInfo.name.split(" ")[0]}</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <div className="footer__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram size={20} /></a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter size={18} /></a>
            <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FiYoutube size={20} /></a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email"><FiMail size={20} /></a>
          </div>
          <p className="footer__copy">
            Built with <FiHeart size={14} className="footer__heart" /> by {personalInfo.name} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
