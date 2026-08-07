import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            overflow: 'hidden',
        }}>
            {/* Soft Ambient Background Globs */}

            {/* Soft Blue Top Left */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '-15%', left: '-10%', width: '70vw', height: '70vw',
                    background: 'radial-gradient(circle, rgba(235, 243, 250, 0.7) 0%, transparent 70%)',
                    borderRadius: '50%', filter: 'blur(90px)',
                }}
            />

            {/* Soft Sky Blue Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', bottom: '-15%', right: '-10%', width: '70vw', height: '70vw',
                    background: 'radial-gradient(circle, rgba(240, 247, 255, 0.8) 0%, transparent 70%)',
                    borderRadius: '50%', filter: 'blur(90px)',
                }}
            />

            {/* Soft Subtle Accent Mid Left */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '40%', left: '-20%', width: '50vw', height: '50vw',
                    background: 'radial-gradient(circle, rgba(248, 250, 253, 0.8) 0%, transparent 70%)',
                    borderRadius: '50%', filter: 'blur(80px)',
                }}
            />
        </div>
    );
};

export default Background;
