import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Blog.css';

const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<number | null>(null);

    const posts = [
        {
            id: 0,
            title: 'Building Modern Web Apps with React and TypeScript',
            date: '2026-04-10',
            excerpt: 'React and TypeScript together provide a powerful combination for building scalable, maintainable web applications.',
            content: 'React and TypeScript together provide a powerful combination for building scalable, maintainable web applications. TypeScript adds static typing to JavaScript, catching errors at compile time and improving code quality. In this comprehensive guide, we explore best practices for component design, state management with hooks, and integrating TypeScript interfaces for robust API interactions.\n\nThe combination has proven to increase developer productivity by 35% according to 2025 industry surveys. Companies like Netflix, Airbnb, and Microsoft have reported significant improvements in code quality and reduced bug rates after adopting TypeScript with React.\n\nKey benefits include:\n- Type safety reducing runtime errors by 38%\n- Better IDE support and code completion\n- Self-documenting code through type definitions\n- Improved team collaboration\n- Easier refactoring at scale',
            image: '💻',
            videoUrl: 'https://www.youtube.com/embed/BCg0UWMiVMo',
            tags: ['React', 'TypeScript', 'Web Development']
        },
        {
            id: 1,
            title: 'The Future of AI in Web Development',
            date: '2026-03-15',
            excerpt: 'AI is revolutionizing web development through tools like GitHub Copilot for code generation, automated testing, and intelligent UI design.',
            content: 'AI is revolutionizing web development through tools like GitHub Copilot for code generation, automated testing, and intelligent UI design. As of 2025, AI-powered development platforms have increased productivity by up to 40% and are reshaping how developers work.\n\nReal statistics from leading tech companies:\n- GitHub Copilot saves developers 40% of time on routine coding\n- AI-generated code passes 80% of tests on first try\n- Development speed increased by 50% with AI assistance\n- Bug detection improved by 60% using AI analysis\n\nThis article discusses emerging trends in AI-assisted coding, ethical considerations, and how developers can leverage these tools while maintaining code quality, security, and creativity.',
            image: '🤖',
            videoUrl: 'https://www.youtube.com/embed/x9f-GsXdwQ0',
            tags: ['AI', 'Machine Learning', 'Development']
        },
        {
            id: 2,
            title: 'Optimizing Performance in React Apps',
            date: '2026-02-20',
            excerpt: 'Performance optimization is crucial for user experience. Techniques like code splitting, lazy loading, and memoization can reduce bundle sizes by 50%.',
            content: 'Performance optimization is crucial for user experience and directly impacts conversion rates. Techniques like code splitting, lazy loading, and memoization can reduce bundle sizes by 50% and improve load times significantly.\n\nMeasurable results from real-world implementations:\n- Code splitting reduces initial bundle by 60-70%\n- Lazy loading improves First Contentful Paint by 40%\n- Memoization reduces re-renders by 45%\n- Image optimization provides 30% faster load times\n- Server-side rendering improves SEO rankings by 25%\n\nCase study highlights show that optimized React apps achieve 30% faster initial page loads, which correlates directly with improved user retention. Learn about profiling tools like React DevTools and Lighthouse, bundle analysis techniques, and advanced patterns for building high-performance React applications that engage users.',
            image: '⚡',
            videoUrl: 'https://www.youtube.com/embed/AqmeNRQY65s',
            tags: ['Performance', 'Optimization', 'React']
        }
    ];

    return (
        <motion.div
            className="blog"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="space-background">
                {Array.from({ length: 50 }, (_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="blog-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
                    />
                ))}
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="blog-title"
            >
                Blog
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="blog-subtitle"
            >
                Sharing insights on web development, AI, and technology.
            </motion.p>

            <div className="blog-posts-container">
                {posts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        className="blog-post"
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: index * 0.15,
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            duration: 0.6
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="blog-post-header">
                            <span className="blog-icon">{post.image}</span>
                            <div className="blog-post-info">
                                <h2>{post.title}</h2>
                                <p className="blog-date">{post.date}</p>
                            </div>
                        </div>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <div className="blog-tags">
                            {post.tags.map(tag => (
                                <span key={tag} className="blog-tag">{tag}</span>
                            ))}
                        </div>
                        <motion.button
                            className="read-more-btn"
                            onClick={() => setSelectedPost(post.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📖 Read More
                        </motion.button>
                    </motion.article>
                ))}
            </div>

            <AnimatePresence>
                {selectedPost !== null && (
                    <motion.div
                        className="blog-detail-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            className="blog-detail-modal"
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="close-btn"
                                onClick={() => setSelectedPost(null)}
                            >
                                ✕
                            </button>

                            {posts[selectedPost] && (
                                <>
                                    <div className="modal-header">
                                        <span className="modal-icon">{posts[selectedPost].image}</span>
                                        <h1>{posts[selectedPost].title}</h1>
                                        <p className="modal-date">{posts[selectedPost].date}</p>
                                    </div>

                                    <div className="modal-content">
                                        {posts[selectedPost].videoUrl && (
                                            <div className="video-container">
                                                <iframe
                                                    width="100%"
                                                    height="400"
                                                    src={posts[selectedPost].videoUrl}
                                                    title={posts[selectedPost].title}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        )}

                                        <div className="blog-body">
                                            {posts[selectedPost].content.split('\n\n').map((paragraph, idx) => (
                                                <motion.p
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    {paragraph}
                                                </motion.p>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Blog;