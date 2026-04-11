import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';
import { useTheme } from '../contexts/ThemeContext';
import './Layout.css';

const FaBarsIcon = FaBars as React.ComponentType<IconBaseProps>;
const FaTimesIcon = FaTimes as React.ComponentType<IconBaseProps>;
const FaMoonIcon = FaMoon as React.ComponentType<IconBaseProps>;
const FaSunIcon = FaSun as React.ComponentType<IconBaseProps>;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="layout">
            <div className="background-animation">
                <span className="circle c1" />
                <span className="circle c2" />
                <span className="circle c3" />
                <span className="circle c4" />
                <div className="java-code">
                    <span>public class GoodluckPortfolio {'{'}</span>
                    <span>  public static void main(String[] args) {'{'}</span>
                    <span>    System.out.println("Building powerful apps...");</span>
                    <span>  {'}'}</span>
                    <span>{'}'}</span>
                </div>

                {/* Enhanced Space Background */}
                <div className="deep-space">
                    {/* Stars */}
                    {Array.from({ length: 200 }, (_, i) => (
                        <motion.div
                            key={`star-${i}`}
                            className="cosmic-star"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`
                            }}
                            animate={{
                                opacity: [0.1, 0.8, 0.1],
                                scale: [0.5, 1.5, 0.5]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    ))}

                    {/* Planets and Celestial Bodies */}
                    <motion.div
                        className="orbiting-planet planet-1"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    >
                        🪐
                    </motion.div>

                    <motion.div
                        className="orbiting-planet planet-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                    >
                        🪐
                    </motion.div>

                    <motion.div
                        className="orbiting-planet planet-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    >
                        🪐
                    </motion.div>

                    {/* Asteroids */}
                    {Array.from({ length: 15 }, (_, i) => (
                        <motion.div
                            key={`asteroid-${i}`}
                            className="asteroid"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                x: [0, Math.random() * 200 - 100],
                                y: [0, Math.random() * 200 - 100],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 10,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                        >
                            💫
                        </motion.div>
                    ))}

                    {/* Nebula effects */}
                    <div className="nebula nebula-1" />
                    <div className="nebula nebula-2" />
                    <div className="nebula nebula-3" />
                </div>
            </div>
            <nav className="navbar">
                <div className="navbar-content">
                    <Link to="/" className="logo">Goodluck.dev</Link>
                    <button className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <FaTimesIcon /> : <FaBarsIcon />}
                    </button>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                            <Link to="/about" onClick={toggleMenu}>About</Link>
                            <Link to="/skills" onClick={toggleMenu}>Skills</Link>
                            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
                            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <button className="theme-toggle-fixed" onClick={toggleTheme}>
                {theme === 'light' ? <FaMoonIcon /> : <FaSunIcon />}
            </button>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; 2026 <a href="https://goodluck.dev">goodluck.dev</a>. All rights reserved.</p>
            </footer>
        </div >
    );
};

export default Layout;