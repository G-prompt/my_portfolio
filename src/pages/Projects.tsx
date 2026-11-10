import { useState } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        title: 'Vuyar',
        subtitle: 'AI academic companion',
        description: 'Designed an intelligent study assistant that delivers research resources, learning tools, and academic guidance for students.',
        tools: 'React · AI UX · Education design',
        category: 'Education',
        live: true,
        image: 'vuyar.png',
        url: 'https://vuyar-mvp.vercel.app'
    },
    {
        title: 'Excel In School',
        subtitle: 'Academic growth platform',
        description: 'Delivered a live education platform that helps students access curriculum updates, study resources, and tutoring support.',
        tools: 'React · Responsive design · Content management',
        category: 'Education',
        live: true,
        image: 'excel-in-school.png',
        url: 'https://excelinschool.com'
    },
    {
        title: 'Virally',
        subtitle: 'AI content studio for creators',
        description: 'Built an AI-powered content studio that generates platform-ready ideas, hooks, short-form video scripts, captions, and hashtags for creators across TikTok, Instagram, YouTube, Facebook, and Snapchat.',
        tools: 'React · AI content workflows · SaaS UX',
        category: 'Social',
        live: true,
        image: 'virally.png',
        url: 'https://virally-orpin.vercel.app'
    },
    {
        title: 'Sentrix',
        subtitle: 'AI fraud detection',
        description: 'Implemented a live fraud detection demo for fintech workflows, using AI-driven monitoring to identify suspicious behavior.',
        tools: 'React · AI · Fintech design',
        category: 'Fintech',
        live: true,
        image: 'sentrix.png',
        url: 'https://silvalino2-sentrix.vercel.app'
    },
    {
        title: 'The Foundry',
        subtitle: 'Open-source builder community',
        description: 'Designed a community hub where people share ideas, collaborate on open projects, learn together, and discover hackathons, seminars, resources, and stories from the wider community.',
        tools: 'React · Community UX · Events and content systems',
        category: 'Community',
        live: true,
        image: 'the-foundry.png',
        url: 'https://the-foundry-kohl.vercel.app'
    },
    {
        title: 'CampusMart',
        subtitle: 'Student-first campus marketplace',
        description: 'Created a calm, dependable marketplace for students to buy and sell nearby essentials, from books and study materials to events, food, and technology, with trusted sellers and simple campus pickup.',
        tools: 'React · Marketplace UX · Local commerce flows',
        category: 'Commerce',
        live: true,
        image: 'campusmart.png',
        url: 'https://campusmart-sigma.vercel.app'
    },
];

const categories = ['All', 'Education', 'Fintech', 'Social', 'Community', 'Commerce'];

const ProjectPreview: React.FC<{ title: string; url: string; live: boolean; image: string }> = ({ title, url, live, image }) => {
    const [failed, setFailed] = useState(false);

    if (!live || failed) {
        return (
            <div className="project-preview project-preview-placeholder" role="img" aria-label={`${title} preview unavailable`}>
                <span>{live ? 'Preview unavailable' : 'In development'}</span>
                <strong>{title}</strong>
            </div>
        );
    }

    return (
        <a className="project-preview" href={url} target="_blank" rel="noreferrer" aria-label={`Open ${title} live site`}>
            <img
                src={`/project-previews/${image}`}
                alt={`${title} current live website screenshot`}
                loading="lazy"
                onError={() => setFailed(true)}
            />
        </a>
    );
};

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const liveProjects = projects.filter(project => project.live);
    const filteredProjects = filter === 'All' ? liveProjects : liveProjects.filter(p => p.category === filter);

    return (
        <motion.div
            className="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1>My Projects</h1>
            <div className="filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        type="button"
                        className={filter === cat ? 'active' : ''}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="projects-grid">
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <ProjectPreview title={project.title} url={project.url} live={project.live} image={project.image} />
                            <span className="project-tag">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p className="project-subtitle">{project.subtitle}</p>
                            <p>{project.description}</p>
                            <p className="project-tools">{project.tools}</p>
                            {project.live ? (
                                <a href={project.url} target="_blank" rel="noreferrer" className="live-link">
                                    Visit Live Site
                                </a>
                            ) : (
                                <button type="button" className="coming-soon">In Development</button>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Projects;