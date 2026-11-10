import { useEffect } from 'react';
import type React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 950);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="loading-screen"
            role="status"
            aria-label="Loading portfolio"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
        >
            <div className="loading-background" aria-hidden="true">
                <span className="loading-glow loading-glow-one" />
                <span className="loading-glow loading-glow-two" />
            </div>
            <div className="loading-content">
                <motion.div
                    className="loading-mark"
                    aria-hidden="true"
                >
                    <span>G</span>
                </motion.div>
                <p className="loading-tag">Goodluck.dev</p>
                <p className="loading-subtitle">Preparing your experience</p>
                <div className="loading-progress" aria-hidden="true">
                    <span />
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
