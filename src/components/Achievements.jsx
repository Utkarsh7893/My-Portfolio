import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "../data/portfolioData";
import { FiAward, FiCode, FiTerminal, FiExternalLink } from "react-icons/fi";

const iconMap = { award: FiAward, code: FiCode, terminal: FiTerminal };

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section className="section achievements" id="achievements" ref={ref}>
      <div className="container">
        <motion.div className="section__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section__tag">&lt;Achievements /&gt;</span>
          <h2 className="section__title">Achievements</h2>
          <div className="section__divider" />
        </motion.div>
        <div className="achievements__grid">
          {achievements.map((ach, i) => {
            const IconComp = iconMap[ach.icon] || FiAward;
            return (
              <motion.a
                key={ach.title}
                href={ach.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-card achievement-card--clickable"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              >
                <div className="achievement-card__icon"><IconComp size={30} /></div>
                <span className="achievement-card__stat">{ach.stat}</span>
                <h3 className="achievement-card__title">{ach.title}</h3>
                <p className="achievement-card__desc">{ach.description}</p>
                <span className="achievement-card__proof"><FiExternalLink size={14} /> View Profile</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
