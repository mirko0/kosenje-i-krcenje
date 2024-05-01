import React from 'react'
import { IconBrandFacebook, IconBrandInstagram, IconMail, IconPhone } from '@tabler/icons-react';
import { Button } from './ui/button';

export const LINKS = [
    {
        title: 'O NAMA',
        titleLow: "O nama",
        link: '#onama',
    },
    {
        title: 'USLUGE',
        titleLow: "Usluge",
        link: '#usluge',
    },
    /*     {
            title: 'GALERIJA',
            titleLow: "Galerija",
            link: '#galerija',
        }, */
]

const Footer = () => {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Košenje i krčenje</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Budite slobodni da nas kontaktirate putem broja telefona, viber porukom ili preko društvenih mreža.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <a href="https://www.facebook.com/profile.php?id=61550822166061" target='_blank'>
                                <Button variant="ghost">
                                    <IconBrandFacebook></IconBrandFacebook>
                                </Button>
                            </a>
                            <a href="https://www.instagram.com/kosenje_krcenje_/" target='_blank'>
                                <Button variant="ghost">
                                    <IconBrandInstagram></IconBrandInstagram>
                                </Button>
                            </a>
                            <br />
                            <a href="mailto:kotakt@kosenjeikrcenje.com">
                                <Button variant="ghost">
                                    <IconMail /> kontakt@kosenjeikrcenje.com
                                </Button>
                            </a>
                            <br />
                            <Button variant="ghost" asChild>
                                <a href="tel:+381653502508">
                                    <IconPhone></IconPhone>
                                    065/350-250-8
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                            <span className='text-blueGray-600 font-bold block pb-2 text-sm'>Brzi Meni</span>
                                <ul className="list-unstyled">
                                    {LINKS.map((link) => (
                                        <li style={{marginBottom: "0rem !important"}} key={link.titleLow}>
                                             <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={link.link}> {link.titleLow} </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © 2024<br />
                            <a href='https://github.com/mirko0' target='_blank'>Made by mirko</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer