import type React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
    {
        number: '01',
        name: 'Vuyar',
        category: 'Education / AI',
        description: 'An academic companion connecting students with research resources, learning tools, and practical guidance.',
        url: 'https://vuyar-mvp.vercel.app',
    },
    {
        number: '02',
        name: 'Excel In School',
        category: 'Education',
        description: 'A learning platform for curriculum updates, study resources, and tutoring support.',
        url: 'https://excelinschool.com',
    },
    {
        number: '03',
        name: 'Virally',
        category: 'Creator tools / AI',
        description: 'A content studio for generating platform-ready ideas, hooks, scripts, captions, and hashtags.',
        url: 'https://virally-orpin.vercel.app',
    },
    {
        number: '04',
        name: 'Sentrix',
        category: 'Fintech / AI',
        description: 'A live fraud-detection demo exploring AI-driven monitoring for financial workflows.',
        url: 'https://silvalino2-sentrix.vercel.app',
    },
    {
        number: '05',
        name: 'The Foundry',
        category: 'Community',
        description: 'A builder community hub for collaboration, learning resources, events, and open-source discovery.',
        url: 'https://the-foundry-kohl.vercel.app',
    },
    {
        number: '06',
        name: 'CampusMart',
        category: 'Commerce',
        description: 'A student-first campus marketplace for buying and selling essentials with local pickup.',
        url: 'https://campusmart-sigma.vercel.app',
    },
];

const skillGroups = [
    { label: 'Frontend', items: 'HTML · CSS · JavaScript · TypeScript · React · Angular · Flutter' },
    { label: 'Backend & data', items: 'Python · MongoDB · Mongoose · PostgreSQL · Firebase · Supabase' },
    { label: 'Delivery', items: 'GitHub · Vercel · Netlify · Cloudflare' },
    { label: 'AI workflow', items: 'ChatGPT · Claude · Perplexity · DeepSeek · GitHub Copilot · Cursor' },
];

const Home: React.FC = () => (
    <>
        <Helmet>
            <title>Goodluck Oreoluwa Emmanuel | Product-focused Developer</title>
            <meta name="description" content="Meet Goodluck Oreoluwa Emmanuel, a Computer Engineering student and product-focused developer building thoughtful web products across education, fintech, and creator tools." />
            <meta name="keywords" content="Goodluck Oreoluwa Emmanuel, product developer, React, TypeScript, Computer Engineering, portfolio" />
        </Helmet>

        <motion.div className="home-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
            <section className="home-hero" aria-labelledby="home-title">
                <div className="hero-index"><span>Independent developer</span><span>Port Harcourt, Nigeria</span></div>
                <div className="hero-main">
                    <div className="hero-copy">
                        <p className="hero-kicker">Engineering with a product point of view</p>
                        <h1 id="home-title">Goodluck<br /><span>Oreoluwa</span><br />Emmanuel<span className="name-period">.</span></h1>
                        <p className="hero-description">I turn ambitious ideas into clear, useful digital products. I work across frontend and full-stack development, bringing together thoughtful interaction design, maintainable engineering, and an instinct for what people actually need.</p>
                        <div className="hero-actions">
                            <Link className="primary-button" to="/projects">Explore selected work <span aria-hidden="true">↗</span></Link>
                            <Link className="text-link" to="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>

                    <aside className="profile-panel" aria-label="Profile summary">
                        <div className="profile-topline"><span>Profile / 001</span><span className="availability-mark" /> <span>Open to opportunities</span></div>
                        <p className="profile-statement">Good software should feel <em>obvious</em> to use and be considered under the surface.</p>
                        <div className="profile-facts">
                            <div><span>Currently</span><strong>Computer Engineering student</strong></div>
                            <div><span>At</span><strong>Rivers State University</strong></div>
                            <div><span>Building</span><strong>Web products with real-world purpose</strong></div>
                        </div>
                        <Link className="profile-more" to="/about">More about Goodluck <span aria-hidden="true">↗</span></Link>
                        <div className="profile-mark" aria-hidden="true">G<span>.</span></div>
                    </aside>
                </div>
                <div className="hero-foot"><span>From first sketch to shipped experience</span><span>Scroll to explore <b aria-hidden="true">↓</b></span></div>
            </section>

            <section className="work-section" aria-labelledby="work-title">
                <div className="section-heading">
                    <div><p className="section-kicker">Selected work / 2024—26</p><h2 id="work-title">Ideas, made useful.</h2></div>
                    <Link to="/projects" className="section-link">All projects <span aria-hidden="true">↗</span></Link>
                </div>
                <div className="work-list">
                    {projects.map((project) => (
                        <motion.a className="work-row" key={project.number} href={project.url} target="_blank" rel="noreferrer" whileHover={{ x: 5 }}>
                            <span className="work-number">{project.number}</span>
                            <div className="work-name"><h3>{project.name}</h3><span>{project.category}</span></div>
                            <p className="work-description">{project.description}</p>
                            <span className="work-arrow" aria-hidden="true">↗</span>
                        </motion.a>
                    ))}
                </div>
                <p className="work-note">Currently shipping across education, fintech, creator tooling, and community-first experiences.</p>
            </section>

            <section className="capabilities-section" aria-labelledby="capabilities-title">
                <div className="capabilities-intro"><p className="section-kicker">A practical toolkit</p><h2 id="capabilities-title">Curious by nature.<br /><span>Versatile by practice.</span></h2><p>I move comfortably from interface details to the systems that support them, and use AI tools as part of a considered development workflow.</p><Link className="text-link" to="/skills">Explore all skills <span aria-hidden="true">→</span></Link></div>
                <div className="skill-groups">
                    {skillGroups.map((group, index) => <div className="skill-group" key={group.label}><span className="skill-index">0{index + 1}</span><div><h3>{group.label}</h3><p>{group.items}</p></div></div>)}
                </div>
            </section>

            <section className="closing-section">
                <p className="section-kicker">Good work starts with a good question.</p>
                <h2>Have something<br />worth building?</h2>
                <Link className="closing-link" to="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
                <div className="closing-details"><span>Goodluck Oreoluwa Emmanuel</span><span>Computer Engineering · Rivers State University</span><Link to="/certifications">Certificates & credentials ↗</Link></div>
            </section>

        </motion.div>
    </>
);

export default Home;