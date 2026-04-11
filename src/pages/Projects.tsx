import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        title: 'Elitetraders.US',
        subtitle: 'Crypto monitoring & trade simulation',
        description: 'Built a crypto dashboard that tracks market movement and simulates trading scenarios so users can test strategy before execution.',
        tools: 'React · TypeScript · Charting · API integration',
        category: 'Fintech',
        live: false,
        url: ''
    },
    {
        title: 'Vuyar',
        subtitle: 'AI academic companion',
        description: 'Designed an intelligent study assistant that delivers research resources, learning tools, and academic guidance for students.',
        tools: 'React · AI UX · Education design',
        category: 'Education',
        live: true,
        url: 'https://vuyar-mvp.vercel.app'
    },
    {
        title: 'Excel In School',
        subtitle: 'Academic growth platform',
        description: 'Delivered a live education platform that helps students access curriculum updates, study resources, and tutoring support.',
        tools: 'React · Responsive design · Content management',
        category: 'Education',
        live: true,
        url: 'https://excelinschool.com'
    },
    {
        title: 'Virally',
        subtitle: 'Creator growth platform',
        description: 'Created a platform for content creators to plan campaigns, discover audiences, and improve online visibility with media tools.',
        tools: 'React · UX strategy · Growth systems',
        category: 'Social',
        live: false,
        url: ''
    },
    {
        title: 'Omni',
        subtitle: 'Idea simulation AI',
        description: 'Built a digital workspace that lets users prototype ideas, run simulations, and catch product issues before launch.',
        tools: 'React · AI interaction · prototyping',
        category: 'Productivity',
        live: false,
        url: ''
    },
    {
        title: 'Sentrix',
        subtitle: 'AI fraud detection',
        description: 'Implemented a live fraud detection demo for fintech workflows, using AI-driven monitoring to identify suspicious behavior.',
        tools: 'React · AI · Fintech design',
        category: 'Fintech',
        live: true,
        url: 'https://silvalino2-sentrix.vercel.app'
    },
];

const categories = ['All', 'Education', 'Fintech', 'Social', 'Productivity'];

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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
                                <button className="coming-soon">In Development</button>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Projects;