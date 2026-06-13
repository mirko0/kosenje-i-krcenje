import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SECTIONS } from './Sections';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
    const { id } = useParams();
    const section = SECTIONS.find(s => s.id === id);

    if (!section) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Usluga nije pronađena</h1>
                <Link to="/" className="text-primary font-bold hover:underline">Vrati se na početnu</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-20 md:pt-16">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/" className="inline-flex items-center text-primary font-bold mb-8 hover:gap-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Nazad na početnu
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">
                        {section.title}
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {section.description}
                            </p>

                            <div className="space-y-6">
                                {section.sections.map((paragraph, index) => (
                                    <p key={index} className="text-gray-600 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-4">Zainteresovani ste za ovu uslugu?</h3>
                                <p className="text-orange-800 mb-6">Kontaktirajte nas odmah za besplatnu procenu i dogovor.</p>
                                <a
                                    href="tel:+381642503500"
                                    className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    Pozovite: 064/250-350-0
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {Array.isArray(section.image) ? (
                                section.image.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`${section.title} ${idx + 1}`}
                                        className="w-full rounded-3xl shadow-md object-cover"
                                    />
                                ))
                            ) : (
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full rounded-3xl shadow-md object-cover"
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetail;
