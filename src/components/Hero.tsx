import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Calendar, Clock, Video } from 'lucide-react';

interface HeroProps {
    openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
    return (
        <section id="hero" className="section" style={{
            paddingTop: '8rem',
            paddingBottom: '8rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '90vh', // Almost full height
            background: 'var(--gradient-hopeful)', // Light Hopeful Gradient
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        borderRadius: '9999px',
                        padding: '0.5rem 1.5rem',
                        marginBottom: '2rem',
                        color: 'var(--color-brand-blue)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    <Star size={16} fill="currentColor" color="#F59E0B" />
                    <span style={{ color: 'var(--color-secondary)' }}>Doctor-Led Weight Loss Program</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', // Slightly smaller for longer text
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        color: 'var(--color-brand-blue)'
                    }}
                >
                    The <span style={{ textDecoration: 'underline', textDecorationColor: '#84CC16', textUnderlineOffset: '8px' }}>New & Most Advanced</span> Science of <br />
                    <span style={{ color: '#84CC16' }}>Safer, Easier Weight Loss</span>
                </motion.h1>

                {/* Subheading + Marathi */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        maxWidth: '900px',
                        margin: '0 auto 3rem auto'
                    }}
                >
                    <p style={{
                        fontSize: '1.35rem',
                        color: 'var(--color-secondary)',
                        marginBottom: '1rem',
                        fontWeight: 500,
                        lineHeight: 1.5
                    }}>
                        Reset your metabolism with doctor‑led GLP‑1 protocols & habit psychology – <br className="hidden md:block" /> one of the most advanced ways to lose weight sustainably.
                    </p>
                    <p className="marathi" style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-brand-blue)',
                        fontWeight: 600,
                        opacity: 1
                    }}>
                        वैद्यकीय मार्गदर्शनाखाली GLP‑1 आणि lifestyle बदल यांच्या मदतीने वजन कमी करण्याचा नवा, विज्ञानाधारित आणि सुरक्षित मार्ग.
                    </p>
                </motion.div>

                {/* Date & Time */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        padding: '1.2rem 2.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        color: 'var(--color-brand-blue)',
                        fontWeight: 700,
                        width: 'fit-content',
                        margin: '0 auto 2.5rem auto',
                        fontSize: '1.15rem'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Calendar size={24} color="var(--color-accent)" />
                        <span>Sunday, 22nd Feb</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        borderLeft: '2px solid rgba(0,0,0,0.1)',
                        paddingLeft: '1.5rem'
                    }}>
                        <Clock size={24} color="var(--color-accent)" />
                        <span>11:00 AM IST</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        borderLeft: '2px solid rgba(0,0,0,0.1)',
                        paddingLeft: '1.5rem',
                        color: '#EF4444' // Red color to stand out as "Live"
                    }}>
                        <Video size={24} color="#EF4444" />
                        <span>Live On Zoom</span>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <button onClick={openModal} className="btn btn-primary" style={{ fontSize: '1.125rem' }}>
                        Register for Masterclass <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </button>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                        Limited Spots • Live with Coach Niilesh
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
