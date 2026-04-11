import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
    const fullText = "I’m Goodluck Oreoluwa Emmanuel, a Computer Engineering student at Rivers State University and a practical full-stack developer. I design and build modern web products that combine polished UI, clean architecture, and dependable user experiences. My work is driven by honesty, persistence, and a focus on delivery. I have built web applications for education, AI tools, and fintech, and I'm ready to help your next project move from concept to launch. Available for web development, product design, and collaboration. Use the Contact page to send a message and let's get started.";
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let index = 0;
        const typeTimer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typeTimer);
                setIsTyping(false);
            }
        }, 30);

        return () => clearInterval(typeTimer);
    }, []);

    const paragraphs = [
        "I’m Goodluck Oreoluwa Emmanuel, a Computer Engineering student at Rivers State University and a practical full-stack developer.",
        "I design and build modern web products that combine polished UI, clean architecture, and dependable user experiences.",
        "My work is driven by honesty, persistence, and a focus on delivery. I have built web applications for education, AI tools, and fintech, and I'm ready to help your next project move from concept to launch.",
        "Available for web development, product design, and collaboration.",
        "Use the Contact page to send a message and let's get started."
    ];

    const getTypedParagraphs = () => {
        let charCount = 0;
        const result = [];
        for (let i = 0; i < paragraphs.length; i++) {
            const para = paragraphs[i];
            if (charCount + para.length <= typedText.length) {
                result.push(para);
                charCount += para.length;
            } else if (charCount < typedText.length) {
                const remaining = typedText.length - charCount;
                result.push(para.slice(0, remaining));
                break;
            } else {
                break;
            }
        }
        return result;
    };

    return (
        <motion.div
            className="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>About Me</h1>
            {getTypedParagraphs().map((para, index) => (
                <p key={index}>
                    {para}
                    {index === getTypedParagraphs().length - 1 && isTyping && <span className="cursor">|</span>}
                </p>
            ))}
        </motion.div>
    );
};

export default About;