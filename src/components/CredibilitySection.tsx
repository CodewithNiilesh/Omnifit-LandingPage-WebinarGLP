import React from 'react';
import { BadgeCheck } from 'lucide-react';

import niileshImg from '../assets/niilesh.jpg';
import dromkarImg from '../assets/dromkar.jpg';

const CredibilitySection: React.FC = () => {
    return (
        <section className="section section-white">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-brand-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>World-Class Experts</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-brand-blue)' }}>
                        Meet Your Medical Team
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* Dr. Omkar */}
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '300px', overflow: 'hidden' }}>
                            <img 
                                src={dromkarImg} 
                                alt="Dr. Omkar" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                            />
                        </div>
                        <div style={{ padding: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-brand-blue)' }}>Dr. Omkar</h3>
                                <BadgeCheck color="#1B5EA8" size={20} />
                            </div>
                            <p style={{ color: '#1B5EA8', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>MBBS, MD (Medicine)</p>
                            <p style={{ color: 'var(--color-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                Specialist in Metabolic Health and Weight Management. Uses scientific protocols to reverse obesity.
                            </p>
                        </div>
                    </div>

                    {/* Coach Niilesh */}
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '300px', overflow: 'hidden' }}>
                            <img 
                                src={niileshImg} 
                                alt="Coach Niilesh" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                            />
                        </div>
                        <div style={{ padding: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-brand-blue)' }}>Coach Niilesh</h3>
                                <BadgeCheck color="#16A34A" size={20} />
                            </div>
                            <p style={{ color: '#16A34A', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Habit & Lifestyle Coach</p>
                            <p style={{ color: 'var(--color-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                Expert in behavioral psychology and habit formation. Helps you build a lifestyle you love.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CredibilitySection;
