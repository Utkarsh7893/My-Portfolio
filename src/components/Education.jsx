import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../data/portfolioData";
import { FiBookOpen, FiMapPin, FiCalendar } from "react-icons/fi";

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">&lt;Education /&gt;</span>
          <h2 className="section__title">Education</h2>
          <div className="section__divider" />
        </motion.div>

        <div className="timeline">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="timeline__item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="timeline__dot">
                <FiBookOpen size={16} />
              </div>
              <div className="timeline__content">
                <h3 className="timeline__role">{edu.degree}</h3>
                <div className="timeline__meta">
                  <span>
                    <FiBookOpen size={14} />
                    {edu.institution}
                  </span>
                  <span>
                    <FiMapPin size={14} />
                    {edu.location}
                  </span>
                  <span>
                    <FiCalendar size={14} />
                    {edu.period}
                  </span>
                </div>
                {edu.grade && (
                  <p className="timeline__grade">{edu.grade}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
