import React, { Suspense, lazy } from 'react';
import Header from './Header';
const Gallery = lazy(() => import('./Gallery'));
import { motion } from 'framer-motion';

const GalleryPage = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header sticky={true} />
            
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block"
                        >
                            Vizuelni Pregled
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-dark mb-6"
                        >
                            Galerija Radova
                        </motion.h1>
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"
                        ></motion.div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Pregledajte našu galeriju slika koja prikazuje detalje našeg rada na terenu. 
                            Od košenja trave do ozbiljnog krčenja zapuštenih placeva.
                        </motion.p>
                    </div>
                </div>

                <div className="w-full mt-10 min-h-[400px]">
                    <Suspense fallback={
                        <div className="flex flex-col items-center justify-center p-20 gap-4">
                            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                            <p className="text-gray-400 text-sm animate-pulse italic">Učitavanje galerije...</p>
                        </div>
                    }>
                        <Gallery isFullPage={true} />
                    </Suspense>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
