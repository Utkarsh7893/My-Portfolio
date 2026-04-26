import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/portfolioData";
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink, FiX } from "react-icons/fi";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <motion.div className="section__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section__tag">&lt;Experience /&gt;</span>
          <h2 className="section__title">Work Experience</h2>
          <div className="section__divider" />
        </motion.div>
        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div key={i} className="timeline__item" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}>
              <div className="timeline__dot">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="timeline__logo" />
                ) : (
                  <FiBriefcase size={16} />
                )}
              </div>
              <div className="timeline__content">
                <div className="timeline__content-header">
                  <h3 className="timeline__role">{exp.role}</h3>
                  <div className="timeline__actions">
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="timeline__link-btn" title="View Certificate">
                        <FiExternalLink size={16} /> View
                      </a>
                    )}
                    {exp.detailedDescription && (
                      <button className="timeline__view-btn" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                        {openIdx === i ? "Close" : "Details"}
                      </button>
                    )}
                  </div>
                </div>
                <div className="timeline__meta">
                  <span><FiBriefcase size={14} />{exp.company}</span>
                  <span><FiMapPin size={14} />{exp.location}</span>
                  <span><FiCalendar size={14} />{exp.period}</span>
                </div>
                <ul className="timeline__desc">
                  {exp.description.map((d, j) => (<li key={j}>{d}</li>))}
                </ul>
                <AnimatePresence>
                  {openIdx === i && exp.detailedDescription && (
                    <motion.div
                      className="timeline__detail-panel"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="timeline__detail-inner">
                        <div className="timeline__detail-header">
                          <h4>Detailed Overview</h4>
                          <button onClick={() => setOpenIdx(null)} className="timeline__detail-close"><FiX size={18} /></button>
                        </div>
                        <p className="timeline__detail-text">{exp.detailedDescription}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
