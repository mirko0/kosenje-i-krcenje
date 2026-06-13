import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { IconPhone, IconMenu2, IconArrowRight, IconTrees } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LINKS = [
    {
        title: 'O NAMA',
        titleLow: "O nama",
        link: '/#onama',
        id: 'onama',
    },
    {
        title: 'USLUGE',
        titleLow: "Usluge",
        link: '/#sekcije',
        id: 'sekcije',
    },
    {
        title: 'RADOVI',
        titleLow: "Radovi",
        link: '/#radovi',
        id: 'radovi',
    },
    {
        title: 'GALERIJA',
        titleLow: "Galerija",
        link: '/galerija',
        id: 'galerija',
    },
]

const Header = ({ sticky = false }) => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (id, url) => {
        setOpen(false)
        if (location.pathname !== '/') {
            navigate(url)
            return
        }
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const isLightVersion = sticky || scrolled;

    const headerClasses = `w-full z-50 fixed top-0 transition-all duration-500 ${isLightVersion
        ? 'bg-white shadow-lg py-2'
        : 'bg-black/20 backdrop-blur-[2px] py-6'
        }`

    const textClass = isLightVersion ? 'text-gray-900' : 'text-white'

    return (
        <>
            <header className={headerClasses}>
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <Link className="flex items-center gap-2 group transition-all" to="/">
                                <div className={`p-2 rounded-xl transition-all duration-300 ${isLightVersion ? 'bg-primary/10' : 'bg-white/10'}`}>
                                    <IconTrees className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${isLightVersion ? 'text-primary' : 'text-white'}`} />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors duration-300 ${textClass}`}>
                                        KOŠENJE <span className="text-primary">&</span> KRČENJE
                                    </span>
                                    <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-70 transition-colors duration-300 ${textClass}`}>
                                        BRZO I EFIKASNO
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-10 text-sm font-bold">
                                    {LINKS.map((link) => (
                                        <li key={link.title} className="relative group mb-0">
                                            <a
                                                className={`${textClass} transition-colors hover:text-primary tracking-widest px-2 py-1`}
                                                href={link.link}
                                                onClick={(e) => {
                                                    if (link.link.startsWith('/#') && location.pathname === '/') {
                                                        e.preventDefault()
                                                        handleLinkClick(link.id, link.link)
                                                    }
                                                }}
                                            >
                                                {link.title}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden sm:flex items-center">
                                <a href="tel:+381642503500" className="flex flex-col items-end group">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest opacity-60 transition-colors ${textClass}`}>Pozovite nas</span>
                                    <div className="flex items-center gap-2">
                                        <IconPhone className={`w-5 h-5 transition-transform group-hover:rotate-12 ${isLightVersion ? 'text-primary' : 'text-white'}`} />
                                        <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors ${textClass}`}>
                                            064/250-350-0
                                        </span>
                                    </div>
                                </a>
                            </div>

                            <div className="block md:hidden">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={`${textClass} hover:bg-white/10`}
                                    onClick={() => setOpen(true)}
                                >
                                    <IconMenu2 className="w-8 h-8" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-2">
                                <IconTrees className="w-8 h-8 text-primary" />
                                <span className="text-xl font-black tracking-tighter text-gray-900">
                                    KOŠENJE <span className="text-primary">&</span> KRČENJE
                                </span>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setOpen(false)}
                                className="text-gray-900"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Button>
                        </div>

                        <nav className="flex flex-col gap-4">
                            {LINKS.map((link) => (
                                <a
                                    key={link.titleLow}
                                    href={link.link}
                                    className="flex items-center justify-between w-full py-4 px-6 font-bold text-2xl text-gray-800 hover:bg-gray-50 rounded-2xl transition-colors border border-gray-100"
                                    onClick={(e) => {
                                        if (link.link.startsWith('/#')) {
                                            if (location.pathname === '/') {
                                                e.preventDefault()
                                                handleLinkClick(link.id, link.link)
                                            } else {
                                                setOpen(false)
                                            }
                                        } else {
                                            setOpen(false)
                                        }
                                    }}
                                >
                                    {link.titleLow}
                                    <IconArrowRight className="w-6 h-6 text-primary" />
                                </a>
                            ))}
                        </nav>

                        <div className="mt-auto pt-8 border-t border-gray-100">
                            <a href="tel:+381642503500" className="flex flex-col items-center gap-2 w-full py-6 px-4 bg-primary text-white rounded-3xl font-black shadow-xl shadow-primary/30">
                                <span className="text-xs uppercase tracking-widest opacity-80 font-bold">Pozovite nas</span>
                                <div className="flex items-center gap-3 text-2xl">
                                    <IconPhone className="w-7 h-7" />
                                    064/250-350-0
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}


export default Header
