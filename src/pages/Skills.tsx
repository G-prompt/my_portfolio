import type React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import type { IconBaseProps, IconType } from 'react-icons';
import { SiMongodb, SiMongoose, SiFlutter, SiPostgresql, SiTypescript, SiGithub, SiVercel, SiNetlify, SiCloudflare, SiFirebase, SiSupabase, SiAngular } from 'react-icons/si';
import './Skills.css';

type SkillIcon = IconType;

const frontendSkills: Array<{ label: string; Icon: SkillIcon }> = [
    { label: 'HTML', Icon: FaHtml5 },
    { label: 'CSS', Icon: FaCss3Alt },
    { label: 'JavaScript', Icon: FaJs },
    { label: 'TypeScript', Icon: SiTypescript },
    { label: 'React', Icon: FaReact },
    { label: 'Angular', Icon: SiAngular },
    { label: 'Flutter', Icon: SiFlutter },
];

const backendSkills: Array<{ label: string; Icon: SkillIcon }> = [
    { label: 'Python', Icon: FaPython },
    { label: 'MongoDB', Icon: SiMongodb },
    { label: 'Mongoose', Icon: SiMongoose },
    { label: 'PostgreSQL', Icon: SiPostgresql },
    { label: 'Firebase', Icon: SiFirebase },
    { label: 'Supabase', Icon: SiSupabase },
];

const devOpsSkills: Array<{ label: string; Icon: SkillIcon }> = [
    { label: 'GitHub', Icon: SiGithub },
    { label: 'Vercel', Icon: SiVercel },
    { label: 'Netlify', Icon: SiNetlify },
    { label: 'Cloudflare', Icon: SiCloudflare },
];

const aiSkills: string[] = [
    'ChatGPT',
    'Claude',
    'Perplexity',
    'DeepSeek',
    'GitHub Copilot',
    'Cursor AI'
];

const Skills: React.FC = () => {
    return (
        <motion.div
            className="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Skills</h1>
            <p className="skills-intro">I build modern, reliable web products with a strong focus on user experience, clean architecture, and production-ready implementation.</p>
            <div className="skills-section">
                <div className="frontend-panel">
                    <h2>Frontend</h2>
                    <div className="frontend-grid">
                        {frontendSkills.map(({ label, Icon }, index) => {
                            const IconComponent = Icon as React.ComponentType<IconBaseProps>;
                            return (
                                <motion.div
                                    key={label}
                                    className="skill-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.06 }}
                                >
                                    <IconComponent className="skill-icon" />
                                    <span>{label}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <div className="backend-panel">
                    <h2>Backend</h2>
                    <div className="backend-grid">
                        {backendSkills.map(({ label, Icon }, index) => {
                            const IconComponent = Icon as React.ComponentType<IconBaseProps>;
                            return (
                                <motion.div
                                    key={label}
                                    className="skill-card backend-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.06 }}
                                >
                                    <IconComponent className="skill-icon" />
                                    <span>{label}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="devops-section">
                <h2>DevOps & Deployment</h2>
                <div className="devops-grid">
                    {devOpsSkills.map(({ label, Icon }, index) => {
                        const IconComponent = Icon as React.ComponentType<IconBaseProps>;
                        return (
                            <motion.div
                                key={label}
                                className="skill-card devops-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.08 }}
                            >
                                    <IconComponent className="skill-icon" />
                                <span>{label}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <div className="ai-section">
                <h2>AI Tools & Assistants</h2>
                <p className="ai-description">I leverage cutting-edge AI tools to enhance productivity, code quality, and problem-solving in my development workflow.</p>
                <div className="ai-grid">
                    {aiSkills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className="skill-card ai-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.08 }}
                        >
                            <span className="ai-skill-text">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;