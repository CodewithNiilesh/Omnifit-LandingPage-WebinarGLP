import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Calendar, Clock, Video } from 'lucide-react';
import { WEBINAR_DATE_EN } from '../webinarConfig';

interface HeroProps {
    openModal: () => void;
}

const [webinarDateEn, webinarTimeEn] = WEBINAR_DATE_EN.split(' · ');

const Hero: React.FC<HeroProps> = ({ openModal }) => {
    return (
        <section id="hero" className="section" style={{
            paddingTop: '8rem',
            paddingBottom: '8rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '90vh',
            background: 'var(--gradient-hopeful)',
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
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 700,
                        marginBottom: '1.5rem',
                        lineHeight: 1.25,
                        color: 'var(--color-brand-blue)'
                    }}
                >
                    The <span style={{ textDecoration: 'underline', textDecorationColor: '#84CC16', textUnderlineOffset: '8px' }}>Science</span> of <br />
                    <span style={{ display: 'inline-block', marginTop: '0.4rem', color: '#84CC16' }}>Simpler, Sustainable Weight Loss</span>
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
                        Understand your body with a doctor-led weight & metabolic health program, with a coach by your side every day – <br className="hidden md:block" /> a structured way to lose weight sustainably.
                    </p>
                    <p className="marathi" style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-brand-blue)',
                        fontWeight: 600,
                        opacity: 1
                    }}>
                        वैद्यकीय मार्गदर्शनाखाली, doctor आणि coach सोबत वजन कमी करण्याचा विज्ञानाधारित मार्ग.
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
                        <Calendar size={24} color="var(--color-brand-blue)" />
                        <span>{webinarDateEn}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        borderLeft: '2px solid rgba(0,0,0,0.1)',
                        paddingLeft: '1.5rem'
                    }}>
                        <Clock size={24} color="var(--color-brand-blue)" />
                        <span>{webinarTimeEn} IST</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        borderLeft: '2px solid rgba(0,0,0,0.1)',
                        paddingLeft: '1.5rem',
                        color: '#DC2626'
                    }}>
                        <Video size={24} color="#DC2626" />
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
                        Register for Webinar <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </button>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                        Free • Online • Live with Coach Niilesh
                    </p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#4A6FA5', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
                        Doctor-led program. Any treatment decision is made only after a doctor's assessment. Results vary from person to person.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
