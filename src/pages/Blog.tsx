import type React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Blog.css';

const Blog: React.FC = () => (
    <motion.main className="blog" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <header className="blog-header">
            <p className="blog-eyebrow">Notes / Goodluck Oreoluwa Emmanuel</p>
            <h1 className="blog-title">Thinking in<br /><em>public.</em></h1>
            <p className="blog-subtitle">A place for ideas and lessons from building digital products.</p>
        </header>
        <section className="blog-empty" aria-labelledby="blog-empty-title">
            <span className="blog-empty-index">01 / FIELD NOTES</span>
            <div>
                <h2 id="blog-empty-title">No articles published yet.</h2>
                <p>Rather than fill this page with generic advice, I’ll share notes here when there’s something useful and genuinely mine to say.</p>
                <Link to="/projects" className="blog-work-link">Until then, explore the work <span aria-hidden="true">↗</span></Link>
            </div>
        </section>
    </motion.main>
);

export default Blog;