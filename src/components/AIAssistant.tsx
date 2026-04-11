import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';
import './AIAssistant.css';

const FaRobotIcon = FaRobot as React.ComponentType<IconBaseProps>;
const FaTimesIcon = FaTimes as React.ComponentType<IconBaseProps>;

const normalizeText = (text: string): string =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

const isSensitiveQuery = (query: string): boolean => {
    const securityKeywords = [
        'hack',
        'attack',
        'breach',
        'password',
        'exploit',
        'vulnerability',
        'ddos',
        'malware',
        'phish',
        'credit card',
        'social security',
        'bank',
        'account',
        'ssn',
        'illegal',
        'weapon',
        'bomb',
        'drugs'
    ];
    return securityKeywords.some(keyword => query.includes(keyword));
};

const isOffTopicQuery = (query: string): boolean => {
    const personalKeywords = [
        'family',
        'relationship',
        'girlfriend',
        'boyfriend',
        'married',
        'children',
        'age',
        'salary',
        'religion',
        'politics',
        'medical',
        'health',
        'address',
        'phone',
        'location',
        'nationality',
        'ethnicity'
    ];
    return personalKeywords.some(keyword => query.includes(keyword));
};

const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(() => {
        if (typeof window === 'undefined') {
            return [{ text: "Hi! I'm Goodluck's AI assistant. Ask me anything about his web development portfolio.", isUser: false }];
        }
        const saved = window.localStorage.getItem('aiAssistantMessages');
        return saved
            ? JSON.parse(saved)
            : [{ text: "Hi! I'm Goodluck's AI assistant. Ask me anything about his web development portfolio.", isUser: false }];
    });
    const [input, setInput] = useState('');
    const [memory, setMemory] = useState<Record<string, string>>(() => {
        if (typeof window === 'undefined') return {};
        const saved = window.localStorage.getItem('aiAssistantMemory');
        return saved ? JSON.parse(saved) : {};
    });
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.localStorage.setItem('aiAssistantMessages', JSON.stringify(messages));
        window.localStorage.setItem('aiAssistantMemory', JSON.stringify(memory));
    }, [messages, memory]);

    const toggleChat = () => setIsOpen(prev => !prev);

    const sendMessage = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const normalized = normalizeText(trimmed);
        const userMessage = { text: trimmed, isUser: true };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        const savedAnswer = memory[normalized];
        const answer = savedAnswer || getResponse(trimmed.toLowerCase());

        setTimeout(() => {
            setMessages(prev => [...prev, { text: answer, isUser: false }]);
            if (!savedAnswer) {
                setMemory(prev => ({ ...prev, [normalized]: answer }));
            }
        }, 800);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    const getResponse = (query: string): string => {
        if (isSensitiveQuery(query) || isOffTopicQuery(query)) {
            return 'That question is outside the scope of this portfolio. Please use the Contact page so Goodluck can respond safely and directly.';
        }

        // Portfolio Information Database
        const portfolioData = {
            personal: {
                name: 'Goodluck Oreoluwa Emmanuel',
                title: 'Full-Stack Developer & Computer Engineering Student',
                university: 'Rivers State University',
                location: 'Nigeria',
                email: 'goodluckoreoluwa@gmail.com',
                linkedin: 'Available on request',
                github: 'goodluckoreoluwa'
            },
            skills: {
                frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Flutter'],
                backend: ['Python', 'MongoDB', 'Mongoose', 'PostgreSQL', 'Firebase', 'Supabase'],
                devops: ['GitHub', 'Vercel', 'Netlify', 'Cloudflare'],
                ai: ['ChatGPT', 'Claude', 'Perplexity', 'DeepSeek', 'GitHub Copilot', 'Cursor AI']
            },
            projects: [
                {
                    name: 'Elitetraders.US',
                    type: 'Crypto monitoring & trade simulation',
                    description: 'Built a crypto dashboard that tracks market movement and simulates trading scenarios so users can test strategy before execution.',
                    tech: 'React · TypeScript · Charting · API integration',
                    category: 'Fintech',
                    live: false,
                    url: ''
                },
                {
                    name: 'Vuyar',
                    type: 'AI academic companion',
                    description: 'Designed an intelligent study assistant that delivers research resources, learning tools, and academic guidance for students.',
                    tech: 'React · AI UX · Education design',
                    category: 'Education',
                    live: true,
                    url: 'https://vuyar-mvp.vercel.app'
                },
                {
                    name: 'Excel In School',
                    type: 'Academic growth platform',
                    description: 'Delivered a live education platform that helps students access curriculum updates, study resources, and tutoring support.',
                    tech: 'React · Responsive design · Content management',
                    category: 'Education',
                    live: true,
                    url: 'https://excelinschool.com'
                },
                {
                    name: 'Virally',
                    type: 'Creator growth platform',
                    description: 'Created a platform for content creators to plan campaigns, discover audiences, and improve online visibility with media tools.',
                    tech: 'React · UX strategy · Growth systems',
                    category: 'Social',
                    live: false,
                    url: ''
                },
                {
                    name: 'Omni',
                    type: 'Idea simulation AI',
                    description: 'Built a digital workspace that lets users prototype ideas, run simulations, and catch product issues before launch.',
                    tech: 'React · AI interaction · prototyping',
                    category: 'Productivity',
                    live: false,
                    url: ''
                },
                {
                    name: 'Sentrix',
                    type: 'AI fraud detection',
                    description: 'Implemented a live fraud detection demo for fintech workflows, using AI-driven monitoring to identify suspicious behavior.',
                    tech: 'React · AI · Fintech design',
                    category: 'Fintech',
                    live: true,
                    url: 'https://silvalino2-sentrix.vercel.app'
                }
            ],
            experience: {
                education: 'Computer Engineering student at Rivers State University',
                focus: 'Full-stack web development with React, TypeScript, and modern AI-integrated interfaces',
                expertise: 'Clean product design, reliable engineering, and user-centric solutions'
            }
        };

        // Greeting responses
        if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('greetings')) {
            return `Hello! I'm Goodluck's AI assistant. I have comprehensive knowledge of his portfolio, skills, and projects. Ask me anything about his work, technologies, or background!`;
        }

        // Personal information
        if (query.includes('name') || query.includes('who is') || query.includes('about')) {
            return `${portfolioData.personal.name} is a ${portfolioData.personal.title} at ${portfolioData.personal.university}. He's passionate about building polished web experiences with modern technologies and AI-integrated interfaces.`;
        }

        if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('message')) {
            return `You can contact Goodluck through the Contact page form on this website. His email is ${portfolioData.personal.email} and he's active on GitHub as ${portfolioData.personal.github}.`;
        }

        // Skills queries
        if (query.includes('skills') || query.includes('skill') || query.includes('technologies') || query.includes('tech stack')) {
            if (query.includes('frontend') || query.includes('front-end')) {
                return `Goodluck's frontend skills include: ${portfolioData.skills.frontend.join(', ')}. He specializes in React and TypeScript for building modern, responsive user interfaces.`;
            }
            if (query.includes('backend') || query.includes('back-end')) {
                return `Goodluck's backend skills include: ${portfolioData.skills.backend.join(', ')}. He works with both SQL and NoSQL databases for robust data management.`;
            }
            if (query.includes('devops') || query.includes('deployment') || query.includes('hosting')) {
                return `Goodluck's DevOps and deployment skills include: ${portfolioData.skills.devops.join(', ')}. He ensures reliable hosting and deployment pipelines.`;
            }
            if (query.includes('ai') || query.includes('artificial intelligence') || query.includes('machine learning')) {
                return `Goodluck leverages AI tools including: ${portfolioData.skills.ai.join(', ')}. He integrates AI into his development workflow for enhanced productivity and problem-solving.`;
            }
            return `Goodluck has expertise in multiple areas:
• Frontend: ${portfolioData.skills.frontend.join(', ')}
• Backend: ${portfolioData.skills.backend.join(', ')}
• DevOps: ${portfolioData.skills.devops.join(', ')}
• AI Tools: ${portfolioData.skills.ai.join(', ')}
He focuses on full-stack development with modern web technologies and AI integration.`;
        }

        // Project queries
        if (query.includes('projects') || query.includes('portfolio') || query.includes('work')) {
            if (query.includes('list') || query.includes('all')) {
                const projectList = portfolioData.projects.map(p => p.name).join(', ');
                return `Goodluck has worked on several projects: ${projectList}. Visit the Projects page for detailed information and live demos where available.`;
            }

            // Specific project queries
            const projectQueries = portfolioData.projects.map(p => ({
                keywords: p.name.toLowerCase().split(' ').concat(p.category.toLowerCase().split(' ')),
                project: p
            }));

            for (const { keywords, project } of projectQueries) {
                if (keywords.some(keyword => query.includes(keyword))) {
                    const liveStatus = project.live ? `Live demo: ${project.url}` : 'Currently in development';
                    return `${project.name} is ${project.type}. ${project.description} Built with ${project.tech}. ${liveStatus}`;
                }
            }

            return `Goodluck has ${portfolioData.projects.length} projects in his portfolio spanning fintech, education, social media, and productivity categories. Check out the Projects page for detailed information about each one!`;
        }

        // Education and background
        if (query.includes('education') || query.includes('university') || query.includes('school') || query.includes('student')) {
            return `${portfolioData.personal.name} is currently a ${portfolioData.experience.education}. He combines academic knowledge with practical development experience.`;
        }

        if (query.includes('experience') || query.includes('background') || query.includes('career')) {
            return `${portfolioData.personal.name} focuses on ${portfolioData.experience.focus}. His expertise lies in ${portfolioData.experience.expertise}.`;
        }

        // Technical queries
        if (query.includes('react') || query.includes('typescript') || query.includes('javascript')) {
            return 'Goodluck specializes in React and TypeScript for building scalable, type-safe web applications. He creates modern, responsive interfaces with excellent user experience.';
        }

        if (query.includes('python') || query.includes('backend') || query.includes('server')) {
            return 'Goodluck uses Python for backend development and works with databases like MongoDB, PostgreSQL, and cloud services like Firebase and Supabase.';
        }

        if (query.includes('ai') || query.includes('artificial intelligence') || query.includes('chatgpt') || query.includes('claude')) {
            return 'Goodluck integrates AI tools throughout his development process. He uses ChatGPT, Claude, and other AI assistants for coding assistance, problem-solving, and productivity enhancement.';
        }

        // Design and UI queries
        if (query.includes('design') || query.includes('ui') || query.includes('ux') || query.includes('interface')) {
            return 'Goodluck has strong UI/UX design skills, creating clean, modern interfaces with excellent user experience. His portfolio features glassmorphism effects, smooth animations, and responsive design.';
        }

        if (query.includes('responsive') || query.includes('mobile') || query.includes('desktop')) {
            return 'All of Goodluck\'s projects are fully responsive, working seamlessly across mobile, tablet, and desktop devices with adaptive layouts and touch-friendly interactions.';
        }

        // Theme and styling queries
        if (query.includes('theme') || query.includes('colors') || query.includes('style')) {
            return 'The portfolio uses a sophisticated black, purple, and gold color scheme with glassmorphism effects, smooth animations, and a space-themed background that creates an immersive experience.';
        }

        // Animation and effects queries
        if (query.includes('animation') || query.includes('effect') || query.includes('motion')) {
            return 'Goodluck implements smooth Framer Motion animations, particle effects, and interactive elements throughout his portfolio. The home page features a dynamic code compilation animation.';
        }

        // Default response
        return `I have detailed information about Goodluck's skills, projects, and background. You can ask me about:
• His technical skills (frontend, backend, DevOps, AI tools)
• Specific projects (Elitetraders.US, Vuyar, Excel In School, etc.)
• His education and experience
• Contact information
• Design and development approach
What would you like to know?`;
    };

    return (
        <>
            <motion.button
                className="chat-button"
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open AI Assistant chat"
                type="button"
            >
                <FaRobotIcon />
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <div className="chat-header">
                            <span>AI Assistant</span>
                            <button onClick={toggleChat} type="button" aria-label="Close chat window">
                                <FaTimesIcon />
                            </button>
                        </div>
                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={msg.isUser ? 'user-message' : 'bot-message'}>
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything about the portfolio..."
                                aria-label="Type your message"
                            />
                            <button onClick={sendMessage} type="button">
                                Send
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIAssistant;