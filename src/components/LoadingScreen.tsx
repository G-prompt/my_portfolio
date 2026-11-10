import { useEffect } from 'react';
import type React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 950);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className="loading-screen"
            role="status"
            aria-label="Loading portfolio"
        >
            <div className="loading-background" aria-hidden="true">
                <span className="loading-glow loading-glow-one" />
                <span className="loading-glow loading-glow-two" />
            </div>
            <div className="loading-content">
                <div className="loading-mark" aria-hidden="true">
                    <span>G</span>
                </div>
                <p className="loading-tag">Goodluck.dev</p>
                <p className="loading-subtitle">Preparing your experience</p>
                <div className="loading-progress" aria-hidden="true">
                    <span />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
