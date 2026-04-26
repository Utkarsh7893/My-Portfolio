import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/portfolioData";
import { FiGithub, FiExternalLink, FiFolder, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ProjectCarousel({ screenshots, color }) {
  const validShots = screenshots.filter((s) => s && s.trim() !== "");
  const [idx, setIdx] = useState(0);
  if (validShots.length === 0) return null;
  return (
    <div className="project-carousel">
      <div className="project-carousel__viewport">
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={validShots[idx]}
            alt={`Screenshot ${idx + 1}`}
            className="project-carousel__img"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
      {validShots.length > 1 && (
        <>
          <button className="project-carousel__btn project-carousel__btn--prev" onClick={() => setIdx((p) => (p - 1 + validShots.length) % validShots.length)} style={{ color }}><FiChevronLeft size={20} /></button>
          <button className="project-carousel__btn project-carousel__btn--next" onClick={() => setIdx((p) => (p + 1) % validShots.length)} style={{ color }}><FiChevronRight size={20} /></button>
          <div className="project-carousel__dots">
            {validShots.map((_, i) => (
              <span key={i} className={`project-carousel__dot ${i === idx ? "project-carousel__dot--active" : ""}`} style={i === idx ? { background: color } : {}} onClick={() => setIdx(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div className="section__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section__tag">&lt;Projects /&gt;</span>
          <h2 className="section__title">Featured Projects</h2>
          <div className="section__divider" />
        </motion.div>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article key={project.title} className="project-card" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}>
              <div className="project-card__accent" style={{ background: project.color }} />
              {project.screenshots && <ProjectCarousel screenshots={project.screenshots} color={project.color} />}
              <div className="project-card__header">
                <FiFolder size={32} className="project-card__folder" style={{ color: project.color }} />
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} title="Source Code"><FiGithub size={20} /></a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live`} title="Live Demo"><FiExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>
              <p className="project-card__period">{project.period}</p>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__highlights">
                {project.highlights.map((h, j) => (<li key={j}>{h}</li>))}
              </ul>
              <div className="project-card__tech">
                {project.tech.map((t) => (<span key={t} className="tech-badge">{t}</span>))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
