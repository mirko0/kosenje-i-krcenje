import React, { useEffect } from 'react';
import { Button } from './ui/button'
import { IconPhone, IconChevronDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative min-h-[400px] flex flex-col items-center justify-center overflow-hidden py-20">
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter text-white">
                        <span className="text-primary italic">KOŠENJE</span> I KRČENJE
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-10 text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed"
                >
                    Vaš plac zaslužuje profesionalnu negu. Kontaktirajte nas za besplatnu procenu i brzo, efikasno sređivanje vašeg eksterijera.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        variant="default"
                        size="xl"
                        className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white rounded-full px-12 py-8 text-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95"
                        asChild
                    >
                        <a href="tel:+381642503500" className="flex items-center gap-3">
                            <IconPhone className="w-6 h-6" />
                            064/250-350-0
                        </a>
                    </Button>

                    <Button
                        variant="transparent"
                        size="xl"
                        className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white rounded-full px-12 py-8 text-xl backdrop-blur-sm transition-all hover:bg-white/10"
                        onClick={() => {
                            const element = document.getElementById('sekcije');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Naše usluge
                    </Button>
                </motion.div>
            </div >

            {/* Scroll Down Arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.button
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                    onClick={() => {
                        const element = document.getElementById('onama');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="text-white/60 hover:text-white transition-colors p-2"
                    aria-label="Scroll down"
                >
                    <IconChevronDown size={48} stroke={1.5} />
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Hero
