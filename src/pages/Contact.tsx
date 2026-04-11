import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending message...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error('Failed to send message.');
            }

            setStatus('Message sent successfully!');
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Sorry, something went wrong. Please try again later.');
        }
    };

    return (
        <motion.div
            className="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Contact Me</h1>
            <form onSubmit={sendEmail} className="contact-form">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required></textarea>
                <button type="submit">Send</button>
                {status && <p className="form-status">{status}</p>}
            </form>
            <div className="contact-info">
                <p>Send a message and I will reply as soon as possible.</p>
                <a href="/resume.pdf" download>Download Resume</a>
            </div>
        </motion.div>
    );
};

export default Contact;