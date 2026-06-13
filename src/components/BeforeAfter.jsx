import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ComparisonSlider from './ComparisonSlider';

const BeforeAfter = () => {
    // Configuration for the image comparison cards
    const comparisons = [
        {
            before: '/beforeafter/11.jpg',
            after: '/beforeafter/12.jpg',
            title: 'Čišćenje i ravnanje placa'
        },
        {
            before: '/beforeafter/21.jpg',
            after: '/beforeafter/22.jpg',
            title: 'Košenje visoke trave i šiblja'
        },
        {
            before: '/beforeafter/31.jpg',
            after: '/beforeafter/32.jpg',
            title: 'Uklanjanje divlje vegetacije'
        },
        {
            before: '/beforeafter/41.jpg',
            after: '/beforeafter/42.jpg',
            title: 'Sređivanje zapuštenih površina'
        },
        {
            before: '/beforeafter/51.jpg',
            after: '/beforeafter/52.jpg',
            title: 'Priprema zemljišta za gradnju'
        },
        {
            before: '/beforeafter/71.jpg',
            after: '/beforeafter/72.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/81.jpg',
            after: '/beforeafter/82.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/91.jpg',
            after: '/beforeafter/92.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/101.jpg',
            after: '/beforeafter/102.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/111.jpg',
            after: '/beforeafter/112.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/121.jpg',
            after: '/beforeafter/122.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/131.jpg',
            after: '/beforeafter/132.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/141.jpg',
            after: '/beforeafter/142.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/151.jpg',
            after: '/beforeafter/152.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/161.jpg',
            after: '/beforeafter/162.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/171.jpg',
            after: '/beforeafter/172.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/181.jpg',
            after: '/beforeafter/182.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/191.jpg',
            after: '/beforeafter/192.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/201.jpg',
            after: '/beforeafter/202.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/211.jpg',
            after: '/beforeafter/212.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/221.jpg',
            after: '/beforeafter/222.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/231.jpg',
            after: '/beforeafter/232.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/241.jpg',
            after: '/beforeafter/242.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/271.jpg',
            after: '/beforeafter/272.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/281.jpg',
            after: '/beforeafter/282.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/291.jpg',
            after: '/beforeafter/292.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/301.jpg',
            after: '/beforeafter/302.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/311.jpg',
            after: '/beforeafter/312.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
        {
            before: '/beforeafter/321.jpg',
            after: '/beforeafter/322.jpg',
            title: 'Krcenje i uklanjanje panjeva'
        },
    ];

    const [shuffledItems, setShuffledItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Randomize the order
        const shuffled = [...comparisons].sort(() => Math.random() - 0.5);
        setShuffledItems(shuffled);
        
        // Determine visible count: 6 on desktop, 4 on mobile
        const isMobile = window.innerWidth < 768;
        setVisibleCount(isMobile ? 4 : 6);
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return null;

    return (
        <section id="radovi" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Transformacije</span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">Naši Radovi</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Pomerite klizač na slikama da biste videli stanje pre i nakon našeg rada.
                        Ponosni smo na svaku uspešnu transformaciju.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
                    {shuffledItems.slice(0, visibleCount).map((item, index) => (
                        <motion.div 
                            key={item.before}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                duration: 0.6, 
                                delay: (index % 2) * 0.1,
                                ease: "easeOut"
                            }}
                            className="flex justify-center w-full"
                        >
                            <ComparisonSlider
                                before={item.before}
                                after={item.after}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
