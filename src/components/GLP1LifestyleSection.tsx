import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Stethoscope, Syringe, Users, TrendingUp, Unlock } from 'lucide-react';

const GLP1LifestyleSection: React.FC = () => {
    const steps = [
        {
            icon: <ClipboardCheck size={32} color="#1B5EA8" />,
            title: "Check Eligibility",
            desc: "We check your BMI, health history, and lifestyle diseases to ensure this is right for you.",
            color: "#EBF3FA"
        },
        {
            icon: <Stethoscope size={32} color="#16A34A" />,
            title: "Doctor Consultation",
            desc: "Medical evaluation by Dr. Omkar. GLP-1 is prescribed (if suitable) as per WHO & national guidelines.",
            color: "#DCFCE7"
        },
        {
            icon: <Syringe size={32} color="#0EA5E9" />,
            title: "Start GLP-1 Safely",
            desc: "Receive your prescription, dosage instructions, and continuous monitoring by the doctor.",
            color: "#E0F2FE"
        },
        {
            icon: <Users size={32} color="#1B5EA8" />,
            title: "Lifestyle Companion Coaching",
            desc: "Personalized diet, exercise, and mindset coaching with Coach Niilesh via app & WhatsApp.",
            color: "#EBF3FA"
        },
        {
            icon: <TrendingUp size={32} color="#0EA5E9" />,
            title: "Smoother, Sustainable Progress",
            desc: "Cravings are better controlled, allowing for steady progress without fighting your biology.",
            color: "#E0F2FE"
        },
        {
            icon: <Unlock size={32} color="#16A34A" />,
            title: "Transition to Maintenance",
            desc: "Once goals are achieved, we guide you to a medication-free, lifestyle-only maintenance plan.",
            color: "#DCFCE7"
        }
    ];

    return (
        <section id="glp1" className="section section-light">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <span style={{ color: 'var(--color-brand-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>The Science-Backed Path</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-brand-blue)' }}>
                        What is GLP-1?
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', lineHeight: 1.6 }}>
                        GLP-1 (Glucagon-like Peptide-1) is a hormone your body naturally produces after eating. It tells your brain you are full. In people with obesity, this signal is often broken. The medication fixes this signal.
                    </p>
                </div>

                {/* What is GLP-1 Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>
                    <div className="glass-card" style={{ padding: '2rem', background: '#F0F7FF', border: '1px solid #BAE6FD' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1B5EA8', marginBottom: '0.5rem' }}>🧠 Quiets "Food Noise"</h3>
                        <p style={{ color: '#1E3A5F' }}>Stops the constant mental chatter about food so you can focus on living.</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16A34A', marginBottom: '0.5rem' }}>🥗 Signals Fullness</h3>
                        <p style={{ color: '#1E3A5F' }}>Slows digestion slightly so you feel satisfied with smaller, healthier portions.</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', background: '#E0F2FE', border: '1px solid #7DD3FC' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0EA5E9', marginBottom: '0.5rem' }}>⚡ Metabolic Support</h3>
                        <p style={{ color: '#1E3A5F' }}>Improve insulin sensitivity and helps your body burn fat effectively.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-brand-blue)' }}>
                        Your 6-Step Journey
                    </h2>
                </div>

                {/* 6-Step Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2rem',
                            position: 'relative',
                            background: '#FFFFFF',
                            borderTop: '4px solid #0EA5E9'
                        }}>
                            <div style={{
                                width: '4rem', height: '4rem',
                                background: step.color,
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-brand-blue)' }}>
                                {index + 1}. {step.title}
                            </h3>
                            <p style={{ color: 'var(--color-secondary)', lineHeight: 1.5 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Callout Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="glass-card"
                    style={{
                        background: '#F0F7FF',
                        border: '1px solid #BAE6FD',
                        padding: '2rem',
                        borderRadius: '1rem',
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1B5EA8', margin: 0 }}>
                        ⚠️ &nbsp; Note: GLP-1 is not a magic pill – it works best when combined with lifestyle changes and medical supervision.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default GLP1LifestyleSection;
