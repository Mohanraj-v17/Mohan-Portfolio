"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white flex flex-col">
            {/* Header / Navigation */}
            <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/5 z-50 px-6 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white px-4 py-2 rounded-lg transition-all font-medium text-xs uppercase tracking-widest border border-white/5"
                >
                    <ArrowLeft size={14} />
                    Back to Home
                </Link>

                <div className="flex items-center gap-6">
                    <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold hidden md:block">
                        Original Document
                    </span>
                    <a
                        href="/resume.pdf"
                        download="Mohan_Raj_V_Resume.pdf"
                        className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg hover:bg-zinc-200 transition-all shadow-xl font-bold text-xs uppercase tracking-widest"
                    >
                        <Download size={14} />
                        Download PDF
                    </a>
                </div>
            </nav>

            {/* Resume PDF Viewer - Immersive Container */}
            <div className="flex-grow pt-20 pb-6 px-4 md:px-8 w-full max-w-[1300px] mx-auto h-[calc(100vh-20px)] overflow-hidden">
                <div className="w-full h-full bg-[#1c1c1c] rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
                    <iframe
                        src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
                        className="w-full h-full border-none block"
                        title="Mohan Raj V Resume"
                    />
                </div>

                <div className="mt-8 text-center pb-8 opacity-40">
                    <p className="text-white text-[9px] uppercase tracking-[0.4em] font-medium">
                        Mohan Raj • Portfolio 2026
                    </p>
                </div>
            </div>

            {/* Global CSS to maintain fixed viewport view */}
            <style jsx global>{`
                body {
                    overflow: hidden;
                    background: #121212 !important;
                }
                @media (max-width: 768px) {
                    body {
                        overflow: auto;
                    }
                }
            `}</style>
        </main>
    );
}
