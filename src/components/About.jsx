import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, achievements } from "../data/portfolioData";
import { FiMapPin, FiMail, FiPhone, FiCalendar } from "react-icons/fi";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { label: "Projects Built", value: "3+" },
    { label: "Certifications", value: "4" },
    { label: "DSA Problems", value: "150+" },
    { label: "Tech Stacks", value: "5+" },
  ];

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">&lt;About /&gt;</span>
          <h2 className="section__title">About Me</h2>
          <div className="section__divider" />
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__terminal">
              <div className="terminal__header">
                <span className="terminal__dot terminal__dot--red" />
                <span className="terminal__dot terminal__dot--yellow" />
                <span className="terminal__dot terminal__dot--green" />
                <span className="terminal__title">about-me.js</span>
              </div>
              <div className="terminal__body">
                <p>
                  <span className="code-keyword">const </span>
                  <span className="code-variable">developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-punctuation">{"{"}</span>
                </p>
                <p className="terminal__indent">
                  <span className="code-property">name</span>
                  <span className="code-punctuation">: </span>
                  <span className="code-string">"{personalInfo.name}"</span>
                  <span className="code-punctuation">,</span>
                </p>
                <p className="terminal__indent">
                  <span className="code-property">role</span>
                  <span className="code-punctuation">: </span>
                  <span className="code-string">"{personalInfo.tagline}"</span>
                  <span className="code-punctuation">,</span>
                </p>
                <p className="terminal__indent">
                  <span className="code-property">location</span>
                  <span className="code-punctuation">: </span>
                  <span className="code-string">"{personalInfo.location}"</span>
                  <span className="code-punctuation">,</span>
                </p>
                <p className="terminal__indent">
                  <span className="code-property">education</span>
                  <span className="code-punctuation">: </span>
                  <span className="code-string">"B.Tech CSE @ LPU"</span>
                  <span className="code-punctuation">,</span>
                </p>
                <p className="terminal__indent">
                  <span className="code-property">passions</span>
                  <span className="code-punctuation">: [</span>
                  <span className="code-string">"Building"</span>
                  <span className="code-punctuation">, </span>
                  <span className="code-string">"Coding"</span>
                  <span className="code-punctuation">, </span>
                  <span className="code-string">"Problem Solving"</span>
                  <span className="code-punctuation">]</span>
                </p>
                <p>
                  <span className="code-punctuation">{"}"}</span>
                  <span className="code-punctuation">;</span>
                </p>
              </div>
            </div>

            <p className="about__bio">{personalInfo.bio}</p>

            <div className="about__details">
              <div className="about__detail">
                <FiMapPin />
                <span>{personalInfo.location}</span>
              </div>
              <div className="about__detail">
                <FiMail />
                <span>{personalInfo.email}</span>
              </div>
              <div className="about__detail">
                <FiPhone />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="about__detail">
                <FiCalendar />
                <span>Aug 2023 – Present (B.Tech CSE)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
