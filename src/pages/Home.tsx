import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import AIAssistant from '../components/AIAssistant';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const compilationSteps = [
        { code: 'import React from \'react\';', status: 'parsing', delay: 0 },
        { code: 'import { motion } from \'framer-motion\';', status: 'parsing', delay: 0.5 },
        { code: 'const Portfolio = () => {', status: 'compiling', delay: 1 },
        { code: '  const [skills, setSkills] = useState([]);', status: 'compiling', delay: 1.5 },
        { code: '  const [projects, setProjects] = useState([]);', status: 'compiling', delay: 2 },
        { code: '  useEffect(() => {', status: 'linking', delay: 2.5 },
        { code: '    loadSkills();', status: 'linking', delay: 3 },
        { code: '    loadProjects();', status: 'linking', delay: 3.5 },
        { code: '  }, []);', status: 'linking', delay: 4 },
        { code: '  return <div>Portfolio Ready</div>;', status: 'executing', delay: 4.5 },
        { code: '};', status: 'executing', delay: 5 },
        { code: 'export default Portfolio;', status: 'success', delay: 5.5 },
    ];

    return (
        <>
            <Helmet>
                <title>Goodluck.dev - Full-Stack Developer Portfolio</title>
                <meta name="description" content="Portfolio of Goodluck Oreoluwa Emmanuel, a full-stack developer specializing in React, TypeScript, and modern web technologies." />
                <meta name="keywords" content="full-stack developer, React, TypeScript, portfolio, web development" />
            </Helmet>
            <motion.div
                className="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="code-compilation-animation">
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="red"></span>
                            <span className="yellow"></span>
                            <span className="green"></span>
                        </div>
                        <span className="terminal-title">portfolio.tsx - Compilation</span>
                    </div>
                    <div className="terminal-content">
                        {compilationSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`compilation-line ${step.status}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: step.delay, duration: 0.5 }}
                            >
                                <span className="line-number">{(index + 1).toString().padStart(2, '0')}</span>
                                <span className="code-text">{step.code}</span>
                                <span className="status-indicator">
                                    {step.status === 'parsing' && '🔍'}
                                    {step.status === 'compiling' && '⚙️'}
                                    {step.status === 'linking' && '🔗'}
                                    {step.status === 'executing' && '▶️'}
                                    {step.status === 'success' && '✅'}
                                </span>
                            </motion.div>
                        ))}
                        <motion.div
                            className="compilation-cursor"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            |
                        </motion.div>
                    </div>
                    <div className="build-progress">
                        <div className="progress-bar">
                            <motion.div
                                className="progress-fill"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 6, ease: 'easeInOut' }}
                            />
                        </div>
                        <span className="build-status">Building portfolio... 100%</span>
                    </div>
                </div>
                <div className="space-background">
                    <div className="stars">
                        {Array.from({ length: 100 }, (_, i) => (
                            <motion.div
                                key={i}
                                className="star"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`
                                }}
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="earth"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                        🌍
                    </motion.div>

                    <motion.div
                        className="moon"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                        🌙
                    </motion.div>

                    <motion.div
                        className="satellite"
                        animate={{
                            x: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                            y: [0, -50, -100, -150, -200, -250, -300, -350, -400, -450, -500]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    >
                        🛰️
                    </motion.div>
                </div>
                <section className="hero">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 6, duration: 1 }}
                    >
                        I build polished web experiences with React, TypeScript, and modern AI-inspired interfaces.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 6.5, duration: 1 }}
                    >
                        Focused on clean product design, reliable engineering, and projects that solve real problems for users.
                    </motion.p>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 7, duration: 0.8 }}
                        onClick={() => navigate('/projects')}
                    >
                        Explore My Work
                    </motion.button>
                </section>
                <AIAssistant />
            </motion.div>
        </>
    );
};

export default Home;