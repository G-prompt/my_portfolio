import type React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
    const paragraphs = [
        "I’m Goodluck Oreoluwa Emmanuel, a Computer Engineering student at Rivers State University and a product-focused developer building modern web experiences with clean architecture and real-world problem solving.",
        "I enjoy turning ideas into polished digital products, especially when the work needs both strong engineering and thoughtful design.",
        "My work spans frontend development, full-stack product thinking, and AI-assisted workflows, with projects focused on education, learning tools, and fintech experiences.",
        "I care deeply about maintainable code, smooth user experience, and communicating clearly with teams. I’m open to opportunities where I can contribute, learn fast, and help build software that makes an impact."
    ];

    return (
        <motion.div
            className="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <p className="about-eyebrow">Profile / Goodluck Oreoluwa Emmanuel</p>
            <h1>Engineering with<br /><em>a human point of view.</em></h1>
            <div className="about-copy">
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
        </motion.div>
    );
};

export default About;