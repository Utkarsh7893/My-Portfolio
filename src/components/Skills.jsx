import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolioData";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";

const iconMap = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  tool: FiTool,
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">&lt;Skills /&gt;</span>
          <h2 className="section__title">Tech Stack</h2>
          <div className="section__divider" />
        </motion.div>

        <div className="skills__grid">
          {skills.map((group, gi) => {
            const IconComp = iconMap[group.icon] || FiCode;
            return (
              <motion.div
                key={group.category}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + gi * 0.1 }}
              >
                <div className="skill-card__header">
                  <IconComp className="skill-card__icon" />
                  <h3 className="skill-card__title">{group.category}</h3>
                </div>
                <div className="skill-card__items">
                  {group.items.map((skill, si) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item__info">
                        <span className="skill-item__name">{skill.name}</span>
                        <span className="skill-item__level">{skill.level}%</span>
                      </div>
                      <div className="skill-item__bar">
                        <motion.div
                          className="skill-item__fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.4 + gi * 0.1 + si * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
