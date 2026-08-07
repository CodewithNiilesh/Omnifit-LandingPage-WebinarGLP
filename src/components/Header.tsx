import React, { useState, useEffect } from 'react';
import { Menu, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Program', href: '#program' },
        { name: 'Success Stories', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    // Dynamic text color: Dark when scrolled (white bg), White when transparent (dark bg)
    const textColor = isScrolled ? 'var(--color-bg-dark)' : 'var(--color-primary)';

    return (
        <header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'all 0.3s ease',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <div className="logo" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.3s ease' }}>
                    <img src="/omnifit_logo.png" alt="Omnifit" style={{ height: '36px', objectFit: 'contain' }} />
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    <style>{`
            @media (min-width: 768px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: textColor,
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                transition: 'color 0.3s ease'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#glp1" style={{ textDecoration: 'none' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            color: 'var(--color-primary)',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '999px',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            transition: 'all 0.3s ease'
                        }}>
                            <Info size={16} color="var(--color-primary)" />
                            <span>What is GLP-1?</span>
                        </div>
                    </a>
                    <button onClick={openModal} className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>Join Webinar</button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                    {isMobileMenuOpen ? <X size={24} color={textColor} /> : <Menu size={24} color={textColor} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            backgroundColor: 'white',
                            overflow: 'hidden',
                            borderBottom: '1px solid #eee',
                        }}
                    >
                        <nav style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        color: 'var(--color-bg-dark)', // Always dark in mobile menu (white bg)
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        padding: '0.5rem 0',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#glp1" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.4rem',
                                    color: 'var(--color-primary)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    padding: '0.6rem',
                                    borderRadius: '8px',
                                    marginTop: '0.5rem',
                                    border: '1px solid rgba(59, 130, 246, 0.2)'
                                }}>
                                    <Info size={18} color="var(--color-primary)" />
                                    <span>What is GLP-1?</span>
                                </div>
                            </a>
                            <button onClick={openModal} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                                Join Webinar
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
