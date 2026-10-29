"use client";

import { useState } from "react";
import Image from "next/image";

const socialLinks = [
    {
        name: "WhatsApp",
        href: "https://api.whatsapp.com/send?phone=525519647258",
        image: "/img/whats.png",
    },
    {
        name: "Instagram",
        href: "https://instagram.com/andylugoh.happytrip",
        image: "/img/Instagram_icon.png",
    },
    {
        name: "TikTok",
        href: "https://tiktok.com/@andylugohappytrip",
        image: "/img/tiktok.png",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/share/14GoXGc35Pu/?mibextid=wwXIfr",
        image: "/img/face.png",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@andrealugoh.happytrip",
        image: "/img/Youtube_logo.png",
    },
];

function SocialLinks({ floating = false }) {
    return socialLinks.map(({ name, href, image }, index) => (
        <a
            key={name}
            aria-label={name}
            className={
                floating
                    ? "flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-white shadow-md transition duration-200 hover:scale-110 hover:bg-[#e8f1ff] focus-visible:outline-2 focus-visible:outline-[#0874a5]"
                    : "flex h-9 w-9 items-center justify-center rounded-full bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#0874a5]"
            }
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            title={name}
            style={floating ? { transitionDelay: `${index * 35}ms` } : undefined}
        >
            <Image className="h-5 w-5 object-contain" src={image} alt="" width={20} height={20} />
        </a>
    ));
}

export default function Footer() {
    const [socialMenuOpen, setSocialMenuOpen] = useState(false);

    return (
        <>
            <footer className="w-full bg-[#f0f3ff] px-5 py-8 text-[#102a50] sm:px-8">
                <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <a className="inline-flex items-center gap-2 font-bold" href="#hero">
                            <Image src="/ohHappyTripLogo.png" alt="" width={30} height={30} />
                            <span>Oh Happy Trip</span>
                        </a>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                            Diseñamos viajes luminosos, experiencias memorables y escapadas a la medida para viajeros que buscan confort y magia junto al mar.
                        </p>
                        <div className="mt-4 flex gap-2">
                            <SocialLinks />
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold">Destinos</h2>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            <li><a className="hover:text-[#0874a5]" href="#destinos">Caribe &amp; Playas</a></li>
                            <li><a className="hover:text-[#0874a5]" href="#destinos">Mediterráneo</a></li>
                            <li><a className="hover:text-[#0874a5]" href="#destinos">Cruceros de Lujo</a></li>
                            <li><a className="hover:text-[#0874a5]" href="#destinos">Islas Exóticas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold">Servicios</h2>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            <li><a className="hover:text-[#0874a5]" href="#cotizar">Paquete Todo Incluido</a></li>
                            <li><a className="hover:text-[#0874a5]" href="#cotizar">Cotización a Medida</a></li>
                            <li><a className="hover:text-[#0874a5]" href="#cotizar">Hotelería Premium</a></li>
                            <li><a className="hover:text-[#0874a5]" href="#cotizar">Tours Privados</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold">Atención</h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            Lunes a domingo<br />
                            9:00 AM - 8:00 PM
                        </p>
                        <a className="mt-2 block text-sm text-slate-600 hover:text-[#0874a5]" href="tel:+525519647258">
                            ☏ +52 55 1964 7258
                        </a>
                        <a className="mt-2 block break-all text-sm text-slate-600 hover:text-[#0874a5]" href="mailto:contacto@ohhappytrip.com">
                            contacto@ohhappytrip.com
                        </a>
                    </div>
                </div>

                <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-[#dce3f5] pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Oh Happy Trip. Todos los derechos reservados.</p>
                    <p>Viajes planeados con ilusión y atención personalizada.</p>
                </div>
            </footer>

            <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-center gap-3">
                <div
                    className={`flex flex-col-reverse items-center gap-2 transition-all duration-300 ${
                        socialMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                >
                    <SocialLinks floating />
                </div>
                <button
                    type="button"
                    aria-label="Abrir o cerrar redes sociales"
                    aria-expanded={socialMenuOpen}
                    className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#006a9c] text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-[#00547c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102a50]"
                    onClick={() => setSocialMenuOpen((open) => !open)}
                >
                    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path
                            d="M4 5.75A2.75 2.75 0 0 1 6.75 3h10.5A2.75 2.75 0 0 1 20 5.75v7.5A2.75 2.75 0 0 1 17.25 16H10l-5.5 4v-4.5A2.75 2.75 0 0 1 4 13.25v-7.5Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                        />
                        <path d="M8 8h8M8 11.5h5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                    </svg>
                </button>
            </div>
        </>
    );
}
