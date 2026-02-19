"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "Projects", href: "#projects", id: "projects-centering-view" },
        { name: "Skill", href: "#skills", id: "skills-centering-view" },
        { name: "Contact", href: "#contact", id: "contact-view" },
    ];

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '#home');
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.history.pushState(null, '', `#${id.split('-')[0]}`);
        }
    };

    return (
        <>
            {/* Logo - Fixed Top Left */}
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed top-6 left-6 md:top-8 md:left-8 z-[110] flex items-center cursor-pointer pointer-events-auto group/logo scale-90 md:scale-95 origin-left"
            >
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white transition-all duration-500 group-hover/logo:scale-110">M</span>
                <span className="text-xl md:text-2xl font-light italic text-white/30 -ml-1.5 transition-all duration-500 group-hover/logo:text-white/60 group-hover/logo:translate-x-0.5">R</span>
            </div>

            {/* Mobile Menu Button */}
            <div className="fixed top-6 right-6 z-[110] md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full text-white/70 hover:text-white transition-all"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-8 right-8 z-[100] hidden md:flex flex-col items-end pointer-events-none select-none gap-4"
            >
                <div className="flex items-center gap-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full pointer-events-auto shadow-2xl scale-95 origin-right">
                    <div className="flex items-center gap-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.id);
                                }}
                                className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        <Link
                            href="/resume"
                            className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-[0.2em] text-white bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/5"
                        >
                            <FileText size={12} />
                            Resume
                        </Link>
                    </div>

                    <div className="w-[1px] h-3 bg-white/10" />

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Mohanraj-v17"
                            target="_blank"
                            className="text-white/40 hover:text-white transition-all duration-300"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/mohanraj-v17"
                            target="_blank"
                            className="text-white/40 hover:text-white transition-all duration-300"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[105] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.id);
                                    }}
                                    className="text-3xl font-bold tracking-tighter text-white/40 hover:text-white transition-all"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="/resume"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-lg uppercase font-bold tracking-[0.2em] text-white bg-white/10 px-8 py-4 rounded-full border border-white/10 mt-4"
                                >
                                    <FileText size={20} />
                                    Resume
                                </Link>
                            </motion.div>
                        </div>

                        <div className="absolute bottom-12 flex items-center gap-8">
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                href="https://github.com/Mohanraj-v17"
                                target="_blank"
                                className="text-white/40 hover:text-white transition-all"
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                href="https://linkedin.com/in/mohanraj-v17"
                                target="_blank"
                                className="text-white/40 hover:text-white transition-all"
                            >
                                <Linkedin size={24} />
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

