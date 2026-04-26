import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certificates } from "../data/portfolioData";
import { FiCloud, FiDatabase, FiShare2, FiCpu, FiExternalLink } from "react-icons/fi";

const iconMap = { cloud: FiCloud, database: FiDatabase, network: FiShare2, cpu: FiCpu };

export default function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section className="section certificates" id="certificates" ref={ref}>
      <div className="container">
        <motion.div className="section__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section__tag">&lt;Certificates /&gt;</span>
          <h2 className="section__title">Certifications</h2>
          <div className="section__divider" />
        </motion.div>
        <div className="certs__grid">
          {certificates.map((cert, i) => {
            const IconComp = iconMap[cert.icon] || FiCloud;
            return (
              <motion.div key={cert.title} className="cert-card" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}>
                <div className="cert-card__icon-wrapper" style={{ background: `${cert.color}18`, color: cert.color }}><IconComp size={28} /></div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <p className="cert-card__date">{cert.date}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card__link" style={{ color: cert.color }}>
                    <FiExternalLink size={14} /> View Certificate
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
