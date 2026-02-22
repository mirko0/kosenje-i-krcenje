import React from 'react'
import { Link } from 'react-router-dom'
import { IconPhone, IconMail, IconMapPin, IconClock, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <img src="/brand/logobig.png" alt="Košenje i Krčenje" className="h-20 brightness-110" />
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Vaš pouzdan partner za održavanje i uređenje zelenih površina na teritoriji cele Vojvodine. Radimo brzo i efikasno.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61550822166061" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 hover:text-primary transition-all">
                                <IconBrandFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/kosenje_krcenje_/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 hover:text-primary transition-all">
                                <IconBrandInstagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-black mb-8 border-l-4 border-primary pl-4">Brzi Linkovi</h4>
                        <ul className="space-y-4 font-bold text-gray-400">
                            <li><a href="/#onama" className="hover:text-primary transition-colors">O nama</a></li>
                            <li><a href="/#sekcije" className="hover:text-primary transition-colors">Naše Usluge</a></li>
                            <li><a href="/#radovi" className="hover:text-primary transition-colors">Naši Radovi</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-black mb-8 border-l-4 border-primary pl-4">Kontakt</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <IconPhone className="text-primary w-5 h-5" />
                                </div>
                                <a href="tel:+381642503500" className="font-bold hover:text-primary transition-colors tracking-tighter text-lg">064 / 250 - 350 - 0</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <IconMail className="text-primary w-5 h-5" />
                                </div>
                                <a href="mailto:kontakt@kosenjeikrcenje.com" className="font-bold hover:text-primary transition-colors tracking-tighter text-lg">kontakt@kosenjeikrcenje.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} Košenje i Krčenje. Sva prava zadržana.</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/mirko0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                            <span>Made by mirko</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer
