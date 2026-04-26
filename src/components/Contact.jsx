import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div className="section__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section__tag">&lt;Contact /&gt;</span>
          <h2 className="section__title">Get In Touch</h2>
          <div className="section__divider" />
          <p className="section__subtitle">I'm currently looking for placement opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
        </motion.div>
        <div className="contact__grid">
          <motion.div className="contact__info" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="contact__card">
              <div className="contact__card-icon"><FiMail size={24} /></div>
              <div><h3>Email</h3><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></div>
            </div>
            <div className="contact__card">
              <div className="contact__card-icon"><FiPhone size={24} /></div>
              <div><h3>Phone</h3><a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></div>
            </div>
            <div className="contact__card">
              <div className="contact__card-icon"><FiMapPin size={24} /></div>
              <div><h3>Location</h3><p>{personalInfo.location}</p></div>
            </div>
            <div className="contact__socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__social-btn"><FiGithub size={22} /><span>GitHub</span></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-btn"><FiLinkedin size={22} /><span>LinkedIn</span></a>
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="contact__social-btn"><FiInstagram size={22} /><span>Instagram</span></a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="contact__social-btn"><FaXTwitter size={20} /><span>X</span></a>
              <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer" className="contact__social-btn"><FiYoutube size={22} /><span>YouTube</span></a>
            </div>
          </motion.div>
          <motion.form className="contact__form" initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.target);
              const subject = encodeURIComponent(data.get("subject") || "Portfolio Contact");
              const body = encodeURIComponent(`Hi Utkarsh,\n\n${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
              window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_blank");
            }}>
            <div className="form-group"><label htmlFor="contact-name">Name</label><input type="text" id="contact-name" name="name" placeholder="Your name" required /></div>
            <div className="form-group"><label htmlFor="contact-email">Email</label><input type="email" id="contact-email" name="email" placeholder="your@email.com" required /></div>
            <div className="form-group"><label htmlFor="contact-subject">Subject</label><input type="text" id="contact-subject" name="subject" placeholder="What's this about?" /></div>
            <div className="form-group"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" placeholder="Your message..." required></textarea></div>
            <button type="submit" className="btn btn--primary contact__submit"><FiSend size={18} />Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
