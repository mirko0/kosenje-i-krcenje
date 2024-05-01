import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { IconPhone, IconMenu2 } from '@tabler/icons-react';

export const LINKS = [
    {
        title: 'O NAMA',
        titleLow: "O nama",
        link: '#onama',
        id: 'onama',
    },
    {
        title: 'USLUGE',
        titleLow: "Usluge",
        link: '#usluge',
        id: 'usluge',
    },
    /*     {
            title: 'GALERIJA',
            titleLow: "Galerija",
            link: '#galerija',
        }, */
]

const Header = () => {
    const [open, setOpen] = useState(false)

    return (<>
        <header>
            <div className={"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"}>
                <div className={"flex h-16 items-center justify-between"}>
                    <div className={"md:flex md:items-center md:gap-12"}>
                        <a className={"block text-teal-600"} href="https://kosenjeikrcenje.com">
                            <span className={"sr-only"}>Home</span>
                            <img className={"h-12"} src='/logo.png' />
                        </a>
                    </div>

                    <div className={"hidden md:block"}>
                        <nav aria-label="Global">
                            <ul className={"flex gap-6 text-sm"}>
                                {LINKS.map((link) => (
                                    <li key={link.title}>
                                        <a className={"text-white font-bold transition hover:text-orange-500/75"} href={link.link}> {link.title} </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className={"flex items-center gap-4"}>
                        <div className={"sm:flex sm:gap-4"}>
                            <div className={"hidden sm:flex"}>
                                <Button variant="outline" asChild>
                                    <a href="tel:+381653502508">
                                        <IconPhone />
                                        065/350-250-8
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className={"block md:hidden"}>
                            <DropdownMenu open={open} modal={false}>
                                <DropdownMenuTrigger>
                                    <Button onClick={(e) => setOpen(!open)} variant="outline" size="icon">
                                        <IconMenu2 />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>

                                    {LINKS.map((link) => (
                                        <DropdownMenuItem onClick={(e) => {e.preventDefault(true);}} key={link.titleLow} className='text-center text-gray-500' asChild >
                                            <a onClick={(e) => {
                                                e.preventDefault(true);
                                                setOpen(!open)
                                                setTimeout(() => {
                                                    document.getElementById(link.id).scrollIntoView({behavior: "smooth"})    
                                                },500)
                                                
                                            }}> {link.titleLow} </a>
                                        </DropdownMenuItem>
                                    ))}
                                <DropdownMenuItem>
                                    <Button variant="outline"  onClick={(e) => setOpen(!open)}  asChild>
                                        <a href="tel:+381653502508">
                                            <IconPhone />
                                            065/350-250-8
                                        </a>
                                    </Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </div>
        </div>
    </header >
    </>
    )
}

export default Header