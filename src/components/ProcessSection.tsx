import React from 'react';

const ProcessSection: React.FC = () => {
    const steps = [
        { num: 1, title: "Book Clarity Call", desc: "Speak with our team to check eligibility.", marathi: "पात्रता तपासण्यासाठी कॉल करा." },
        { num: 2, title: "Coach Consultation", desc: "Detailed lifestyle analysis with Coach Niilesh.", marathi: "जीवनशैली विश्लेषण." },
        { num: 3, title: "Doctor Review", desc: "Medical history check by Dr. Omkar.", marathi: "वैद्यकीय तपासणी." },
        { num: 4, title: "Blood Work", desc: "Comprehensive metabolic panel.", marathi: "रक्त तपासणी." },
        { num: 5, title: "Personalized Plan", desc: "Diet, Activity & Medication (if needed).", marathi: "तुमचा खास प्लॅन." },
        { num: 6, title: "Start Journey", desc: "Daily tracking and weekly reviews.", marathi: "दररोज ट्रॅकिंग." },
    ];

    return (
        <section className="section section-light">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--color-brand-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Your Journey</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-brand-blue)' }}>
                        How It Works
                    </h2>
                    <p className="marathi" style={{ fontSize: '1.25rem', color: 'var(--color-secondary)', marginTop: '0.5rem' }}>
                        तुमचा वजन कमी करण्याचा प्रवास कसा असेल?
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {steps.map((step) => (
                        <div key={step.num} className="glass-card" style={{
                            position: 'relative',
                            padding: '2.5rem',
                            border: '1px solid #E2E8F0',
                            background: '#FFFFFF',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                        }}>
                            <style>{`
                                .glass-card:hover { transform: translateY(-5px); border-color: var(--color-brand-blue); }
                            `}</style>
                            <div style={{
                                position: 'absolute',
                                top: '-1.5rem', left: '2rem',
                                width: '3rem', height: '3rem',
                                background: '#1B5EA8',
                                color: '#FFFFFF',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 700, fontSize: '1.25rem',
                                boxShadow: '0 4px 10px rgba(27, 94, 168, 0.3)'
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-brand-blue)', marginBottom: '0.75rem' }}>
                                {step.title}
                            </h3>
                            <p style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{step.desc}</p>
                            <p className="marathi" style={{ fontSize: '1rem', color: 'var(--color-muted)' }}>{step.marathi}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
