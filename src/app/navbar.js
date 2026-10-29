"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/#destinos", label: "Destinos", id: "destinos" },
    { href: "/#promociones", label: "Promociones", id: "promociones" },
    { href: "/#nosotros", label: "Nosotros", id: "nosotros" },
    { href: "/#testimonios", label: "Testimonios", id: "testimonios" },
    { href: "/#HazteAgente", label: "Hazte Agente", id: "HazteAgente" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    function scrollToSection(event, sectionId) {
        if (window.location.pathname !== "/") {
            return;
        }

        const section = document.getElementById(sectionId);
        if (!section) {
            return;
        }

        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
    }

    useEffect(() => {
        const scrollSections = [{ id: "hero" }, ...navLinks]
            .map(({ id }) => ({ id, element: document.getElementById(id) }))
            .filter(({ element }) => element);

        const observer = new IntersectionObserver(
            () => {
                const activeLine = window.innerHeight * 0.325;
                const currentSection = scrollSections.find(({ element }) => {
                    const bounds = element.getBoundingClientRect();
                    return bounds.top <= activeLine && bounds.bottom > activeLine;
                });

                setActiveSection(currentSection?.id === "hero" ? "" : currentSection?.id ?? "");
            },
            { rootMargin: "-25% 0px -60% 0px" }
        );

        scrollSections.forEach(({ element }) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="navbar-bg sticky top-0 z-50 w-full font-sans text-xs sm:text-sm lg:text-base rounded">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 py-3 sm:px-5">
                <div className="flex flex-1 items-center justify-start">
                    <Link
                        className="flex items-center gap-2 rounded-full transition-transform duration-200 ease-in-out hover:scale-110"
                        href="/#hero"
                        onClick={(event) => {
                            if (window.location.pathname === "/") {
                                event.preventDefault();
                                document
                                    .getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                setActiveSection("");
                                setMobileMenuOpen(false);
                            }
                        }}
                    >
                        <Image
                            className="w-[72px] sm:w-[110px]"
                            src="/ohHappyTripLogo.png"
                            alt="Oh Happy Trip logo"
                            width={200}
                            height={200}
                            priority
                        />
                    </Link>
                </div>

                <nav className="hidden flex-1 items-center justify-center gap-5 md:flex text-2xl">
                    {navLinks.map(({ href, label, id }) => (
                        <Link
                            key={id}
                            className={`rounded-full px-2 py-2 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#d8e5fa] hover:text-blue-500 ${
                                activeSection === id ? "bg-[#d8e5fa] text-blue-500" : ""
                            }`}
                            href={href}
                            aria-current={activeSection === id ? "location" : undefined}
                            onClick={(event) => scrollToSection(event, id)}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden flex-1 items-center justify-end gap-4 md:flex text-2xl ">
                    <a
                        className="flex items-center gap-2 rounded-full bg-[#ebf7fa] px-4 py-2 text-blue-500 transition-colors hover:bg-[#b4e8f1] transition-all duration-200 ease-in-out hover:scale-110"
                        href="https://wa.me/525519647258"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src="/img/whats.png" alt="" width={20} height={20} />
                        WhatsApp
                    </a>
                    <Link
                        className="rounded-full bg-[#f5e086] px-4 py-2 text-lg font-semibold text-black transition-colors hover:bg-[#f3ce2a] transition-all duration-200 ease-in-out hover:scale-110"
                        href="/#cotizar"
                        onClick={(event) => scrollToSection(event, "cotizar")}
                    >
                        Cotizar
                    </Link>
                </div>

                <button
                    type="button"
                    className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 p-2 text-[#102a50] shadow-sm md:hidden"
                    aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen((open) => !open)}
                >
                    <span className="flex flex-col gap-1.5">
                        <span
                            className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                        />
                        <span
                            className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                        />
                    </span>
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="border-t border-slate-200 bg-white/95 p-3 shadow-md md:hidden">
                    <div className="flex flex-col gap-2">
                        {navLinks.map(({ href, label, id }) => (
                            <Link
                                key={id}
                                className={`rounded-xl px-3 py-2 font-medium text-[#102a50] transition-colors hover:bg-[#d8e5fa] ${
                                    activeSection === id ? "bg-[#d8e5fa] text-blue-500" : ""
                                }`}
                                href={href}
                                aria-current={activeSection === id ? "location" : undefined}
                                onClick={(event) => scrollToSection(event, id)}
                            >
                                {label}
                            </Link>
                        ))}
                        <a
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#ebf7fa] px-3 py-2 font-medium text-blue-500"
                            href="https://wa.me/525519647258"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src="/img/whats.png" alt="" width={18} height={18} />
                            WhatsApp
                        </a>
                        <Link
                            className="rounded-xl bg-[#f3da69] px-3 py-2 text-center font-semibold text-black"
                            href="/#cotizar"
                            onClick={(event) => scrollToSection(event, "cotizar")}
                        >
                            Cotizar
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
