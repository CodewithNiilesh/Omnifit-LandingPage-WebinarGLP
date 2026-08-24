import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { track } from '../lib/analytics';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzZZVGRFc_DUvTL8HGcJq2KB1FBNfSeEmpDn7p9y8CxgfrhjKRc4TrmQ2lyVogSmb7A/exec';

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        whatsappNo: '',
        email: '',
        city: '',
        height: '',
        weight: '',
        diseases: '',
        hp: ''
    });

    const calculateBMI = () => {
        if (formData.weight && formData.height) {
            const weight = parseFloat(formData.weight);
            const height = parseFloat(formData.height) / 100;
            if (height > 0) {
                const bmiNum = weight / (height * height);
                return bmiNum.toFixed(1);
            }
        }
        return null;
    };

    const bmi = calculateBMI();
    let bmiCategory = '';
    let bmiColor = '';

    if (bmi) {
        const bmiVal = parseFloat(bmi);
        if (bmiVal < 18.5) {
            bmiCategory = 'Underweight';
            bmiColor = '#3B82F6';
        } else if (bmiVal < 25) {
            bmiCategory = 'Normal Weight';
            bmiColor = '#16A34A';
        } else if (bmiVal < 30) {
            bmiCategory = 'Overweight';
            bmiColor = '#F59E0B';
        } else {
            bmiCategory = 'Obese';
            bmiColor = '#DC2626';
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errorMsg) setErrorMsg('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check for bots
        if (formData.hp) {
            setIsSubmitted(true);
            return;
        }

        if (!isAgeConfirmed) {
            setErrorMsg('Please confirm that you are 18 years of age or older.');
            return;
        }

        setIsSubmitting(true);
        setErrorMsg('');

        try {
            const payload: Record<string, string> = {
                form_id: 'webinar_registration',
                source: 'Webinar Page',
                Source: 'Webinar Page',
                name: formData.fullName,
                fullName: formData.fullName,
                phone: formData.whatsappNo,
                whatsappNo: formData.whatsappNo,
                email: formData.email,
                city: formData.city,
                height: formData.height,
                weight: formData.weight,
                bmi: bmi || '',
                diseases: formData.diseases,
                hp: formData.hp
            };

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(payload)
            });

            track('webinar_registered', { form_id: 'webinar_registration' });
            setIsSubmitted(true);
            setIsSubmitting(false);
            // Modal stays open until the user manually closes it or clicks the Community link so they don't miss the CTA.
        } catch (err) {
            console.error('Lead submission failed:', err);
            setErrorMsg('Failed to submit form. Please check your network connection and try again.');
            setIsSubmitting(false);
        }
    };

    const handleModalClose = () => {
        onClose();
        setTimeout(() => {
            setIsSubmitted(false);
            setIsAgeConfirmed(false);
            setFormData({ fullName: '', whatsappNo: '', email: '', city: '', height: '', weight: '', diseases: '', hp: '' });
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem'
                }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleModalClose}
                        style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'rgba(15, 32, 68, 0.6)',
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            background: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            width: '100%',
                            maxWidth: '500px',
                            position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(15, 32, 68, 0.25)',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={handleModalClose}
                            aria-label="Close registration modal"
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#4A6FA5',
                                zIndex: 10
                            }}
                        >
                            <X size={24} />
                        </button>

                        {isSubmitted ? (
                            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                >
                                    <CheckCircle2 size={56} color="#16A34A" style={{ margin: '0 auto 1rem auto' }} />
                                </motion.div>

                                {/* WhatsApp Community Card */}
                                <div style={{
                                    background: '#F0FDF4',
                                    border: '1px solid #BBF7D0',
                                    borderRadius: '12px',
                                    padding: '1.5rem 1.25rem',
                                    marginBottom: '1rem',
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16A34A', marginBottom: '0.5rem' }}>You're registered.</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#1E3A5F', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                                        Join our WhatsApp Community so you don't miss the joining link and reminders.
                                    </p>
                                    <a
                                        href="https://chat.whatsapp.com/GQy7BNL7jAy8yoitWiRUqP"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => track('channel_joined')}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '0.85rem 1.75rem',
                                            backgroundColor: '#25D366',
                                            color: '#FFFFFF',
                                            borderRadius: '9999px',
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            textDecoration: 'none',
                                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                                        }}
                                    >
                                        Join the Omnifit Community
                                    </a>
                                    <p style={{ fontSize: '0.8rem', color: '#4A6FA5', marginTop: '0.85rem', marginBottom: 0 }}>
                                        We'll also message you the link on WhatsApp before the session.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-brand-blue)', marginBottom: '0.5rem' }}>Join the Masterclass</h2>
                                <p style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Please fill out your details below to reserve your spot.</p>

                                {errorMsg && (
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.75rem 1rem',
                                        background: '#FEF2F2',
                                        border: '1px solid #FCA5A5',
                                        borderRadius: '8px',
                                        color: '#DC2626',
                                        fontSize: '0.9rem',
                                        marginBottom: '1rem'
                                    }}>
                                        <AlertCircle size={18} />
                                        <span>{errorMsg}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                                    {/* Honeypot Input */}
                                    <input
                                        type="text"
                                        name="hp"
                                        value={formData.hp}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                        style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                                    />

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E3A5F', marginBottom: '0.5rem' }}>Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E3A5F', marginBottom: '0.5rem' }}>WhatsApp No *</label>
                                            <input
                                                type="tel"
                                                name="whatsappNo"
                                                required
                                                value={formData.whatsappNo}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                                placeholder="+91"
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E3A5F', marginBottom: '0.5rem' }}>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E3A5F', marginBottom: '0.5rem' }}>City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                            placeholder="Mumbai"
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E3A5F', marginBottom: '0.5rem' }}>Height (cm)</label>
                                            <input
                                                type="number"
                                                name="height"
                                                value={formData.height}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                                placeholder="165"
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E3A5F', marginBottom: '0.5rem' }}>Weight (kg)</label>
                                            <input
                                                type="number"
                                                name="weight"
                                                value={formData.weight}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                                                placeholder="85"
                                            />
                                        </div>
                                    </div>

                                    {bmi && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: -5 }}
                                            style={{
                                                padding: '1rem',
                                                background: `${bmiColor}15`,
                                                borderRadius: '8px',
                                                border: `1px solid ${bmiColor}30`,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <span style={{ fontWeight: 600, color: '#1E3A5F' }}>Estimated BMI: <span style={{ color: bmiColor, fontSize: '1.2rem', marginLeft: '0.5rem' }}>{bmi}</span></span>
                                            <span style={{
                                                fontSize: '0.9rem',
                                                fontWeight: 700,
                                                color: bmiColor,
                                                background: 'white',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                boxShadow: `0 1px 2px ${bmiColor}20`
                                            }}>{bmiCategory}</span>
                                        </motion.div>
                                    )}

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#1E3A5F', marginBottom: '0.5rem' }}>Any Pre-existing Diseases?</label>
                                        <select
                                            name="diseases"
                                            value={formData.diseases}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', backgroundColor: 'white', fontFamily: 'var(--font-body)' }}
                                        >
                                            <option value="">Select (Optional)</option>
                                            <option value="None">None</option>
                                            <option value="Diabetes Type 2">Diabetes (Type 2)</option>
                                            <option value="Thyroid">Thyroid Issues</option>
                                            <option value="PCOS/PCOD">PCOS / PCOD</option>
                                            <option value="Hypertension">Hypertension (High BP)</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <p style={{ fontSize: '0.75rem', color: '#4A6FA5', marginTop: '0.35rem' }}>
                                            We'll use this only to decide which programme suits you and to prepare for your consultation. We won't use it for advertising.
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                                        <input
                                            type="checkbox"
                                            id="ageConfirm"
                                            required
                                            checked={isAgeConfirmed}
                                            onChange={(e) => setIsAgeConfirmed(e.target.checked)}
                                            style={{ width: '1.1rem', height: '1.1rem', accentColor: '#1B5EA8', cursor: 'pointer' }}
                                        />
                                        <label htmlFor="ageConfirm" style={{ fontSize: '0.85rem', color: '#1E3A5F', cursor: 'pointer', fontWeight: 500 }}>
                                            I confirm I am 18 years of age or older.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !isAgeConfirmed}
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '0.5rem', opacity: (isSubmitting || !isAgeConfirmed) ? 0.7 : 1 }}
                                    >
                                        {isSubmitting ? 'Registering...' : 'Confirm Registration'}
                                    </button>
                                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#4A6FA5', marginTop: '0.5rem' }}>
                                        We'll use this to send you webinar details and to prepare for your consultation. We never share it with advertisers.
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
