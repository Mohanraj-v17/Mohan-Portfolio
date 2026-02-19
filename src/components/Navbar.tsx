"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Globe } from "lucide-react";

export default function Navbar() {
    return (
        <>
            {/* Logo - Fixed Top Left */}
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed top-8 left-8 z-[100] flex items-center cursor-pointer pointer-events-auto group/logo scale-95 origin-left"
            >
                <span className="text-2xl font-black tracking-tighter text-white transition-all duration-500 group-hover/logo:scale-110">M</span>
                <span className="text-2xl font-light italic text-white/30 -ml-1.5 transition-all duration-500 group-hover/logo:text-white/60 group-hover/logo:translate-x-0.5">R</span>
            </div>

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-8 right-8 z-[100] flex flex-col items-end pointer-events-none select-none gap-4"
            >
                <div className="flex items-center gap-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full pointer-events-auto shadow-2xl scale-95 origin-right">
                    <div className="flex items-center gap-5">
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                window.history.pushState(null, '', '#home');
                            }}
                            className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects-centering-view')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                window.history.pushState(null, '', '#projects');
                            }}
                            className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('skills-centering-view')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                window.history.pushState(null, '', '#skills');
                            }}
                            className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300"
                        >
                            Skill
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact-view')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                window.history.pushState(null, '', '#contact');
                            }}
                            className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300"
                        >
                            Contact
                        </a>

                        <a
                            href="/resume"
                            className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-[0.2em] text-white bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/5"
                        >
                            <FileText size={12} />
                            Resume
                        </a>
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
        </>
    );
}
