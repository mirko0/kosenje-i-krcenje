import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowUp } from '@tabler/icons-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollY = useRef(0);

    // Set the top scroll position
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        lastScrollY.current = window.pageYOffset;

        // Show only while scrolling UP and past a threshold; hide near top or when scrolling down.
        const handleScroll = () => {
            const currentY = window.pageYOffset;
            const scrollingUp = currentY < lastScrollY.current;

            if (currentY < 300) {
                setIsVisible(false);
            } else if (scrollingUp) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-8 md:bottom-8 md:right-4 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90 flex items-center justify-center group"
                    aria-label="Back to top"
                >
                    <IconArrowUp
                        size={24}
                        className="group-hover:-translate-y-1 transition-transform duration-300"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
