import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3600);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
        >
            <div className="loading-background" aria-hidden="true">
                <span className="orb orb-one" />
                <span className="orb orb-two" />
                <span className="orb orb-three" />
                {Array.from({ length: 80 }, (_, index) => (
                    <span
                        key={index}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`
                        }}
                    />
                ))}
            </div>

            <div className="loading-content">
                <motion.div
                    className="loading-core"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="system-ring">
                        <div className="ring-inner" />
                    </div>

                    <div className="loading-copy">
                        <p className="loading-tag">Portfolio boot sequence</p>
                        <h2>Goodluck.dev</h2>
                        <p className="loading-subtitle">Initializing product systems and experience layers...</p>
                    </div>
                </motion.div>

                <div className="java-terminal">
                    <div className="terminal-header">
                        <span className="title">system_boot.log</span>
                        <span className="minimize" />
                        <span className="maximize" />
                        <span className="close" />
                    </div>
                    <div className="terminal-body">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            <p className="code-line">&gt; connect_profile --ready</p>
                            <p className="code-output">Profile loaded: Goodluck Oreoluwa Emmanuel</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                            <p className="code-line">&gt; load_stack --react --typescript --motion-ui</p>
                            <p className="code-output">Dependencies synced successfully</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                            <p className="code-line">&gt; activate_experience_layers</p>
                            <motion.div className="progress-wrap" animate={{ width: '100%' }} transition={{ duration: 1.6, delay: 1.3 }}>
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1.6, delay: 1.3 }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
                            <p className="code-output">✓ Design systems online</p>
                            <p className="code-output">✓ AI assistant ready</p>
                            <p className="code-output">✓ Portfolio ready for review</p>
                            <p className="code-line">&gt; launch_application</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
