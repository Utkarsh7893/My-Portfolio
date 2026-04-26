import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { blogPosts, personalInfo } from "../data/portfolioData";
import { FiArrowRight, FiClock, FiCalendar, FiX, FiGithub, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [openPost, setOpenPost] = useState(null);

  return (
    <section className="section blog" id="blog" ref={ref}>
      <div className="container">
        <motion.div className="section__header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section__tag">&lt;Blog /&gt;</span>
          <h2 className="section__title">Latest Thoughts</h2>
          <div className="section__divider" />
        </motion.div>
        <div className="blog__grid">
          {blogPosts.map((post, i) => (
            <motion.article key={post.title} className="blog-card" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}>
              <div className="blog-card__tags">
                {post.tags.map((tag) => (<span key={tag} className="blog-card__tag">{tag}</span>))}
              </div>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <div className="blog-card__meta">
                <span><FiCalendar size={14} />{post.date}</span>
                <span><FiClock size={14} />{post.readTime}</span>
              </div>
              <button className="blog-card__link" onClick={() => setOpenPost(post)}>
                Read More <FiArrowRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {openPost && (
          <motion.div
            className="blog-modal__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenPost(null)}
          >
            <motion.div
              className="blog-modal"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="blog-modal__close" onClick={() => setOpenPost(null)}><FiX size={22} /></button>
              {openPost.image && openPost.image.trim() !== "" && (
                <div className="blog-modal__image-wrapper">
                  <img src={openPost.image} alt={openPost.title} className="blog-modal__image" />
                </div>
              )}
              <div className="blog-modal__body">
                <div className="blog-modal__tags">
                  {openPost.tags.map((tag) => (<span key={tag} className="blog-card__tag">{tag}</span>))}
                </div>
                <h2 className="blog-modal__title">{openPost.title}</h2>
                <div className="blog-modal__meta">
                  <span><FiCalendar size={14} />{openPost.date}</span>
                  <span><FiClock size={14} />{openPost.readTime}</span>
                </div>
                <div className="blog-modal__content">
                  <p>{openPost.fullContent || openPost.excerpt}</p>
                </div>
                <div className="blog-modal__footer">
                  <p className="blog-modal__footer-label">Connect with me</p>
                  <div className="blog-modal__socials">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><FiGithub size={20} /></a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin size={20} /></a>
                    <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer"><FiInstagram size={20} /></a>
                    <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter size={18} /></a>
                    <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer"><FiYoutube size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
