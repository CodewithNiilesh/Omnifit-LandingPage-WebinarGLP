import React, { useState, useEffect } from 'react';
import { initAnalytics } from '../lib/analytics';

// Switch VITE_CONSENT_MODE to "optin" before 13 May 2027 (DPDP Act commencement).
const consentMode = (import.meta.env.VITE_CONSENT_MODE || 'notice').toLowerCase();

export const ConsentBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consentChoice = localStorage.getItem('cookie_consent');
        if (!consentChoice) {
            setIsVisible(true);
        }

        if (consentMode === 'notice' || consentChoice === 'accepted') {
            initAnalytics();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
        initAnalytics();
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#0F2044',
            color: '#FFFFFF',
            padding: '0.85rem 1.5rem',
            zIndex: 950,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 -4px 12px rgba(0,0,0,0.15)',
            fontSize: '0.9rem',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-body)'
        }}>
            <div>
                {consentMode === 'optin'
                    ? 'We use cookies to understand how people use this site and improve your experience.'
                    : 'We use cookies to understand how people use this site.'}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                {consentMode === 'optin' ? (
                    <>
                        <button
                            onClick={handleAccept}
                            style={{
                                background: '#1B5EA8',
                                color: '#FFFFFF',
                                border: 'none',
                                padding: '0.4rem 1.2rem',
                                borderRadius: '9999px',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                cursor: 'pointer'
                            }}
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleDecline}
                            style={{
                                background: 'transparent',
                                color: '#CBD5E1',
                                border: '1px solid #4A6FA5',
                                padding: '0.4rem 1rem',
                                borderRadius: '9999px',
                                fontWeight: 500,
                                fontSize: '0.85rem',
                                cursor: 'pointer'
                            }}
                        >
                            Decline
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleAccept}
                        style={{
                            background: '#1B5EA8',
                            color: '#FFFFFF',
                            border: 'none',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '9999px',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                        }}
                    >
                        Got it
                    </button>
                )}
            </div>
        </div>
    );
};
