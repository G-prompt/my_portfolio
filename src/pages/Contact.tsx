import { useState } from 'react';
import type React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const contactEmail = 'goodluckelisha21@gmail.com';

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio inquiry from ${form.name}`;
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus(`Your email app should open with this message. If it does not, email ${contactEmail} directly.`);
    };

    return (
        <motion.div
            className="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <p className="contact-eyebrow">Contact / Goodluck Oreoluwa Emmanuel</p>
            <h1>Let’s make<br /><em>something matter.</em></h1>
            <form onSubmit={sendEmail} className="contact-form">
                <label><span>Your name</span><input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /></label>
                <label><span>Your email</span><input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required /></label>
                <label><span>What are you building?</span><textarea name="message" placeholder="A little context goes a long way..." value={form.message} onChange={handleChange} required rows={5}></textarea></label>
                <button type="submit">Send message <span aria-hidden="true">↗</span></button>
                {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
            </form>
            <div className="contact-info">
                <p>Have a project, role, or thoughtful question in mind? Send a note and I’ll reply as soon as I can.</p>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
        </motion.div>
    );
};

export default Contact;