import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="loading-content">
                <div className="java-terminal">
                    <div className="terminal-header">
                        <span className="title">Java Portfolio Loader</span>
                        <span className="minimize" />
                        <span className="maximize" />
                        <span className="close" />
                    </div>
                    <div className="terminal-body">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="code-line">&gt; javac -version</p>
                            <p className="code-output">javac 19.0.1</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <p className="code-line">&gt; java -Xms256m -Xmx512m Portfolio.jar</p>
                            <p className="code-output">Initializing Goodluck's Portfolio...</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <p className="code-line">&gt; Loading resources...</p>
                            <motion.div
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 1.2 }}
                            >
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1.5, delay: 1.2 }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.8 }}
                        >
                            <p className="code-output">✓ Portfolio loaded successfully</p>\n                            <p className="code-output">✓ AI Assistant ready</p>\n                            <p className="code-output">✓ All systems online</p>\n                            <p className="code-line">&gt; Starting application...</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
