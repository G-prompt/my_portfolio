import { useState } from 'react';
import type React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';
import AIAssistant from './AIAssistant';
import './Layout.css';

const FaBarsIcon = FaBars as React.ComponentType<IconBaseProps>;
const FaTimesIcon = FaTimes as React.ComponentType<IconBaseProps>;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="layout">
            <nav className="navbar">
                <div className="navbar-content">
                    <Link to="/" className="logo">Goodluck<span>.dev</span></Link>
                    <div className="desktop-menu">
                        <Link to="/about">About</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/blog">Writing</Link>
                        <Link to="/certifications">Certifications</Link>
                        <Link to="/contact" className="nav-contact">Contact <span aria-hidden="true">↗</span></Link>
                    </div>
                    <button type="button" className="hamburger" onClick={toggleMenu} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen}>
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
                            <Link to="/certifications" onClick={toggleMenu}>Certifications</Link>
                            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; 2026 <a href="https://goodluck.dev">goodluck.dev</a>. All rights reserved.</p>
            </footer>
            <AIAssistant />
        </div >
    );
};

export default Layout;