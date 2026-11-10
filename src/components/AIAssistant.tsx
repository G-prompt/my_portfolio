import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';
import './AIAssistant.css';

const FaRobotIcon = FaRobot as React.ComponentType<IconBaseProps>;
const FaTimesIcon = FaTimes as React.ComponentType<IconBaseProps>;

type AssistantMessage = { id: string; text: string; isUser: boolean };

const welcomeMessage: AssistantMessage = {
    id: 'welcome',
    text: "Hi, I can help you explore Goodluck's projects, skills, background, and available documents. Ask about any of those, or use Contact to reach him directly.",
    isUser: false
};

const normalizeText = (text: string): string =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

const loadMessages = (): AssistantMessage[] => {
    if (typeof window === 'undefined') return [welcomeMessage];
    try {
        const saved = window.localStorage.getItem('aiAssistantMessagesV3');
        if (!saved) return [welcomeMessage];
        const parsed: unknown = JSON.parse(saved);
        if (!Array.isArray(parsed)) return [welcomeMessage];
        const validMessages = parsed.filter((message): message is AssistantMessage =>
            typeof message?.id === 'string' &&
            typeof message?.text === 'string' &&
            typeof message?.isUser === 'boolean'
        );
        return validMessages.length > 0 ? validMessages : [welcomeMessage];
    } catch {
        return [welcomeMessage];
    }
};

const loadMemory = (): Record<string, string> => {
    if (typeof window === 'undefined') return {};
    try {
        const saved = window.localStorage.getItem('aiAssistantMemoryV3');
        if (!saved) return {};
        const parsed: unknown = JSON.parse(saved);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
        return Object.fromEntries(
            Object.entries(parsed).filter((entry): entry is [string, string] => typeof entry[1] === 'string')
        );
    } catch {
        return {};
    }
};

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
    const [messages, setMessages] = useState<AssistantMessage[]>(loadMessages);
    const [input, setInput] = useState('');
    const [memory, setMemory] = useState<Record<string, string>>(loadMemory);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messages.length > 0) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages.length]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.localStorage.setItem('aiAssistantMessagesV3', JSON.stringify(messages));
        window.localStorage.setItem('aiAssistantMemoryV3', JSON.stringify(memory));
    }, [messages, memory]);

    const toggleChat = () => setIsOpen(prev => !prev);

    const sendMessage = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const normalized = normalizeText(trimmed);
        const userMessage = { id: `user-${Date.now()}`, text: trimmed, isUser: true };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        const savedAnswer = memory[normalized];
        const answer = savedAnswer || getResponse(trimmed.toLowerCase());

        setTimeout(() => {
            setMessages(prev => [...prev, { id: `assistant-${Date.now()}`, text: answer, isUser: false }]);
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
                email: 'goodluckelisha21@gmail.com',
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
                    type: 'AI content studio for creators',
                    description: 'Generates platform-ready ideas, hooks, short-form video scripts, captions, and hashtags.',
                    tech: 'React · AI content workflows · SaaS UX',
                    category: 'Social',
                    live: true,
                    url: 'https://virally-orpin.vercel.app'
                },
                {
                    name: 'Sentrix',
                    type: 'AI fraud detection',
                    description: 'An AI fraud-monitoring concept for financial workflows; the public link currently opens the sign-in screen.',
                    tech: 'React · AI · Fintech design',
                    category: 'Fintech',
                    live: true,
                    url: 'https://silvalino2-sentrix.vercel.app'
                },
                {
                    name: 'The Foundry',
                    type: 'Open-source builder community',
                    description: 'A hub for collaboration, open projects, learning resources, and community events.',
                    tech: 'React · Community UX · Events and content systems',
                    category: 'Community',
                    live: true,
                    url: 'https://the-foundry-kohl.vercel.app'
                },
                {
                    name: 'CampusMart',
                    type: 'Student-first campus marketplace',
                    description: 'A marketplace for students to buy and sell nearby essentials with local pickup.',
                    tech: 'React · Marketplace UX · Local commerce flows',
                    category: 'Commerce',
                    live: true,
                    url: 'https://campusmart-sigma.vercel.app'
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
            return "Hello. I can answer questions about the projects, skills, education, and documents shown in this portfolio.";
        }

        // Personal information
        if (query.includes('name') || query.includes('who is') || query.includes('about')) {
            return `${portfolioData.personal.name} is a product-focused developer and Computer Engineering student at ${portfolioData.personal.university}. He builds web products across education, fintech, creator tools, and community projects.`;
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
                return `Technologies listed on Goodluck's profile include: ${portfolioData.skills.backend.join(', ')}.`;
            }
            if (query.includes('devops') || query.includes('deployment') || query.includes('hosting')) {
                return `Tools listed in Goodluck's delivery stack include: ${portfolioData.skills.devops.join(', ')}.`;
            }
            if (query.includes('ai') || query.includes('artificial intelligence') || query.includes('machine learning')) {
                return `Goodluck leverages AI tools including: ${portfolioData.skills.ai.join(', ')}. He integrates AI into his development workflow for enhanced productivity and problem-solving.`;
            }
            return `Goodluck has expertise in multiple areas:
• Frontend: ${portfolioData.skills.frontend.join(', ')}
• Backend: ${portfolioData.skills.backend.join(', ')}
• DevOps: ${portfolioData.skills.devops.join(', ')}
• AI Tools: ${portfolioData.skills.ai.join(', ')}
These are tools and technologies listed in his portfolio.`;
        }

        // Project queries
        if (query.includes('projects') || query.includes('portfolio') || query.includes('work') ||
            portfolioData.projects.some(project => normalizeText(query).includes(normalizeText(project.name)))) {
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

            return `The portfolio lists ${portfolioData.projects.length} projects across education, fintech, creator tools, productivity, community, and commerce. Visit the Projects page for descriptions and demo links.`;
        }

        // Education and background
        if (query.includes('education') || query.includes('university') || query.includes('school') || query.includes('student')) {
            return `${portfolioData.personal.name} is currently a ${portfolioData.experience.education}. He combines academic knowledge with practical development experience.`;
        }

        if (query.includes('experience') || query.includes('background') || query.includes('career')) {
            return `${portfolioData.personal.name} describes his focus as ${portfolioData.experience.focus}. The About page has his full background.`;
        }

        // Technical queries
        if (query.includes('react') || query.includes('typescript') || query.includes('javascript')) {
            return 'React and TypeScript are part of Goodluck\'s listed frontend toolkit. See the Projects page for examples of his work.';
        }

        if (query.includes('python') || query.includes('backend') || query.includes('server')) {
            return 'Python, MongoDB, Mongoose, PostgreSQL, Firebase, and Supabase are listed in Goodluck\'s backend and data toolkit.';
        }

        if (query.includes('ai') || query.includes('artificial intelligence') || query.includes('chatgpt') || query.includes('claude')) {
            return 'AI tools listed in Goodluck\'s workflow include ChatGPT, Claude, Perplexity, DeepSeek, GitHub Copilot, and Cursor. Vuyar, Virally, Omni, and Sentrix are among the projects with AI-related product concepts.';
        }

        // Design and UI queries
        if (query.includes('design') || query.includes('ui') || query.includes('ux') || query.includes('interface')) {
            return 'Goodluck describes his approach as combining thoughtful interaction design, maintainable engineering, and attention to what users need. The Projects page gives concrete examples.';
        }

        if (query.includes('responsive') || query.includes('mobile') || query.includes('desktop')) {
            return 'The portfolio is designed to adapt to mobile and desktop. For individual project behavior, open each linked demo to review it directly.';
        }

        // Theme and styling queries
        if (query.includes('theme') || query.includes('colors') || query.includes('style')) {
            return 'The portfolio now uses an editorial paper-and-green visual style, with serif display typography, clear project lists, and responsive layouts.';
        }

        // Animation and effects queries
        if (query.includes('animation') || query.includes('effect') || query.includes('motion')) {
            return 'The site uses restrained transitions for page entrances and interactive project rows. The focus is on readable content and direct navigation.';
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
                            {messages.map((msg) => (
                                <div key={msg.id} className={msg.isUser ? 'user-message' : 'bot-message'}>
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