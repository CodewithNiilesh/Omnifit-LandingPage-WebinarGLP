import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, ChevronDown, Calendar, Clock, Video } from 'lucide-react';

export const WebinarDetails: React.FC = () => {
    const curriculum = [
        "What GLP-1 medications are and how they help control cravings and support weight loss.",
        "Who is medically eligible: BMI criteria, lifestyle diseases, safety guidelines.",
        "Why willpower, diets, and exercise alone often fail – role of hormones & emotions.",
        "How doctor-supervised GLP-1 + lifestyle support can make weight loss feel simpler and more sustainable.",
        "How Omnifit supports you with diet, exercise, mindset, app & community.",
        "Safety, side effects, myths vs facts – explained clearly in Marathi + English.",
        "Step-by-step roadmap from obese and stuck to lighter, more energetic, more confident.",
        "How to apply for the Omnifit GLP-1 Lifestyle Program after the webinar, if you qualify."
    ];

    return (
        <section className="section section-light">
            <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                <div className="glass-card" style={{ padding: '4rem 3rem', background: '#FFFFFF' }}>
                    <span style={{ color: 'var(--color-brand-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Course Curriculum</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-brand-blue)', marginBottom: '1rem' }}>
                        What You’ll Learn in the <br /> GLP-1 Lifestyle Webinar
                    </h2>
                    <p className="marathi" style={{ fontSize: '1.25rem', color: 'var(--color-brand-blue)', marginBottom: '3rem', fontWeight: 600 }}>
                        "हा वेबिनार तुमच्या पुढच्या १२ आठवड्यांचं आयुष्य बदलू शकतो."
                    </p>

                    <div style={{ textAlign: 'left', display: 'grid', gap: '1.2rem' }}>
                        {curriculum.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', padding: '1.2rem', borderBottom: '1px solid #E2E8F0' }}>
                                <div style={{ background: '#DCFCE7', padding: '0.4rem', borderRadius: '50%', marginTop: '0.2rem', flexShrink: 0 }}>
                                    <CheckCircle2 size={20} color="#16A34A" />
                                </div>
                                <span style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--color-primary)', lineHeight: 1.5 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const AudienceSection: React.FC = () => {
    return (
        <section className="section section-white">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem', color: 'var(--color-brand-blue)', fontWeight: 700 }}>Who is this for?</h2>

                <div className="audience-grid" style={{ display: 'grid', gap: '2rem' }}>
                    <style>{`
                        .audience-grid { grid-template-columns: 1fr; }
                        @media (min-width: 768px) {
                            .audience-grid { grid-template-columns: 1fr 1fr; }
                        }
                    `}</style>

                    <div className="glass-card" style={{ padding: '3rem', borderTop: '4px solid #16A34A', background: '#F0FDF4' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#16A34A', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700 }}>
                            <CheckCircle2 size={32} /> For You If...
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.2rem' }}>
                            {['BMI > 27', 'Tried multiple diets', 'Want a scientific approach', 'Ready to change lifestyle'].map(i => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--color-secondary)', fontSize: '1.1rem' }}>
                                    <span style={{ color: '#16A34A', fontWeight: 'bold' }}>✓</span> {i}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card" style={{ padding: '3rem', borderTop: '4px solid #DC2626', background: '#FEF2F2' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700 }}>
                            <XCircle size={32} /> NOT For You If...
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.2rem' }}>
                            {['Looking for a magic pill', 'Pregnant or nursing', 'Not willing to change habits', 'Want overnight results'].map(i => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--color-secondary)', fontSize: '1.1rem' }}>
                                    <span style={{ color: '#DC2626', fontWeight: 'bold' }}>✕</span> {i}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Suhas Joshi',
            result: 'Lost 14kg',
            quote: "I lost 14kg in 3 months. The coaching is amazing, and I don't feel hungry anymore. It feels like a complete lifestyle reset.",
            image: "/testimonial_suhas.png"
        },
        {
            id: 2,
            name: 'Priya Kadam',
            result: 'Lost 10kg',
            quote: "Dr. Omkar made me understand why my previous diets failed. The scientifically backed GLP-1 approach finally gave me results.",
            image: "/testimonial_priya.png"
        },
        {
            id: 3,
            name: 'Rahul Deshmukh',
            result: 'Lost 18kg',
            quote: "Coach Niilesh's daily habits changed my life completely. I'm no longer struggling with cravings and have so much more energy.",
            image: "/testimonial_rahul.png"
        }
    ];

    return (
        <section id="testimonials" className="section section-light">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem', color: 'var(--color-brand-blue)', fontWeight: 700 }}>Success Stories</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((t) => (
                        <div key={t.id} className="glass-card" style={{ padding: '2.5rem', background: '#FFFFFF' }}>
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#1B5EA8' }}>★★★★★</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                "{t.quote}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
                                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#E2E8F0' }}>
                                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: 'var(--color-brand-blue)' }}>{t.name}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#16A34A', fontWeight: 600 }}>{t.result}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Is GLP-1 safe for me?",
            a: "Yes, when prescribed by a qualified doctor. It is FDA-approved and has been used safely for years. At Omnifit, Dr. Omkar personally checks your medical history, BMI, and blood reports before prescribing to ensure it is 100% safe for you."
        },
        {
            q: "Will I have to take injections forever?",
            a: "Not necessarily. Our goal is to use the medication as a tool to 'reset' your metabolism while we build your lifestyle habits. Once you reach your goal weight and your metabolic health improves, we guide you through a weaning-off process to maintain results naturally."
        },
        {
            q: "What if I stop the medication?",
            a: "If you stop without having changed your lifestyle, the weight may return. That is why Omnifit is not just about the medication—it is a 'Lifestyle Program'. We focus on building nutrition and movement habits that stick, so you can sustain your results long-term."
        },
        {
            q: "Will I still need to diet and exercise?",
            a: "Yes, but it will feel much easier. The medication quiets the 'food noise' and cravings, so you naturally want to eat less. Our coach helps you with simple, sustainable nutrition and 15-minute home workouts that fit your busy life—no starvation or hours at the gym."
        },
        {
            q: "Can I join if I have diabetes / thyroid / PCOS?",
            a: "Absolutely. In fact, GLP-1 medications are often highly effective for improving insulin sensitivity and hormonal balance in these conditions. Dr. Omkar will review your specific case to ensure the safest and most effective approach for you."
        },
        {
            q: "Is the webinar live or recorded?",
            a: "The webinar is a LIVE session. This allows you to interact directly with Dr. Omkar and Coach Niilesh, get the latest information, and feel the energy of the community."
        },
        {
            q: "Will the doctor answer my questions in the webinar?",
            a: "Yes! We dedicate time at the end of the webinar specifically for a Q&A session where Dr. Omkar and Coach Niilesh will answer your queries live."
        },
        {
            q: "What happens after the webinar if I want to join the Omnifit program?",
            a: "At the end of the webinar, we will share a special link to book a 1:1 Consultation with our team. In that call, we will confirm your eligibility and help you get started with your customized plan."
        }
    ];

    return (
        <section id="faq" className="section section-white">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-brand-blue)' }}>Frequently Asked Questions</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }}>तुमच्या मनातले प्रश्न (Your Questions Answered)</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((item, i) => (
                        <div key={i} className="glass-card" style={{ padding: '0', borderRadius: '1rem', background: '#FFFFFF', overflow: 'hidden' }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.5rem 2rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-brand-blue)' }}>{item.q}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown size={24} color="#4A6FA5" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div style={{ padding: '0 2rem 2rem 2rem', color: 'var(--color-secondary)', fontSize: '1.1rem', lineHeight: 1.6, borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface FooterProps {
    openModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openModal }) => {
    const socialIcons = [
        {
            name: 'Instagram',
            path: (
                <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </>
            )
        },
        {
            name: 'Facebook',
            path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        },
        {
            name: 'Whatsapp',
            path: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        },
        {
            name: 'X',
            path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        },
        {
            name: 'LinkedIn',
            path: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
        }
    ];

    return (
        <footer style={{ background: '#0F2044', color: 'white', padding: '6rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#FFFFFF' }}>Ready to Transform?</h2>

                {/* Date & Time Footer */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '2.5rem',
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '1.2rem 2rem',
                    borderRadius: '16px',
                    width: 'fit-content',
                    margin: '0 auto 2.5rem auto'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={22} color="#0EA5E9" />
                        <span>Saturday, 15th Aug</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock size={22} color="#0EA5E9" />
                        <span>7:00 PM IST</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DC2626' }}>
                        <Video size={22} color="#DC2626" />
                        <span>Live On Zoom</span>
                    </div>
                </div>

                <button onClick={openModal} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem', marginBottom: '3rem' }}>
                    Join Webinar Now <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                </button>

                {/* Social Icons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                    {socialIcons.map((icon, i) => (
                        <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill={icon.name === 'Whatsapp' || icon.name === 'X' ? 'currentColor' : 'none'}
                                stroke={icon.name === 'Whatsapp' || icon.name === 'X' ? 'none' : 'currentColor'}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {icon.path}
                            </svg>
                        </a>
                    ))}
                </div>

                <div style={{ paddingTop: '2rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', lineHeight: 1.6 }}>
                    <p style={{ marginBottom: '1rem' }}>
                        © 2026 Omnifit Health. All rights reserved. <br />
                        Medical Disclaimer: Results vary. Consult doctor before starting.
                    </p>
                    <p style={{ fontSize: '0.75rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto' }}>
                        This site is not a part of the Meta™ website or Meta™ Inc. Additionally, This site is NOT endorsed by Meta™ in any way. META™ is a trademark of META™, Inc. <br />
                        This site is not a part of the Google™ website or Google™ Inc. Additionally, This site is NOT endorsed by Google™ in any way. GOOGLE™ is a trademark of GOOGLE™, Inc. <br />
                        Disclaimer: This landing page is for educational purposes only.
                    </p>
                </div>
            </div>
        </footer>
    );
};
