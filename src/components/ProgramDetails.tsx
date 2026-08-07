import React from 'react';
import { Check } from 'lucide-react';

interface ProgramDetailsProps {
    openModal: () => void;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ openModal }) => {
    const features = [
        "Unlimited Chat with Coach Niilesh",
        "Weekly Progress Review by Doctor",
        "Personalized Diet Plans (Maharashtrian Friendly)",
        "Home Workout Guidance",
        "GLP-1 Medication Prescription (if eligible)",
        "Metabolic Health Analysis",
        "Daily Accountability Tracking",
        "Access to Omnifit Community"
    ];

    return (
        <section id="program" className="section section-navy" style={{ backgroundColor: '#0F2044', color: '#FFFFFF' }}>
            <div className="container">
                <div className="glass-card" style={{
                    padding: '4rem',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: 'none'
                }}>

                    <div className="program-grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
                        <style>{`
                            @media (min-width: 768px) {
                                .program-grid-container { grid-template-columns: 1fr 1fr !important; }
                            }
                        `}</style>
                        {/* Text and CTA on Left */}
                        <div>
                            <span style={{ color: '#0EA5E9', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Everything Included</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#FFFFFF' }}>
                                The Complete<br /> Ecosystem
                            </h2>
                            <p className="marathi" style={{ fontSize: '1.25rem', color: '#CBD5E1', marginBottom: '2rem' }}>
                                सर्वसमावेशक प्रोग्राम जो तुमची जीवनशैली बदलतो.
                            </p>
                            <button onClick={openModal} className="btn btn-primary" style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem'
                            }}>
                                Check Eligibility Now
                            </button>
                        </div>

                        {/* Feature List on Right */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '1rem'
                        }}>
                            {features.map((feature, index) => (
                                <div key={index} style={{
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    padding: '1.25rem',
                                    backgroundColor: 'rgba(255,255,255,0.06)',
                                    borderRadius: '0.5rem',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div style={{ background: 'rgba(22, 163, 74, 0.2)', borderRadius: '50%', padding: '0.25rem', flexShrink: 0 }}>
                                        <Check size={20} color="#16A34A" />
                                    </div>
                                    <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
