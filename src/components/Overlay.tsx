"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Section = ({
    children,
    progress,
    start,
    end,
    align = "center",
}: {
    children: React.ReactNode;
    progress: any;
    start: number;
    end: number;
    align?: "left" | "center" | "right";
}) => {
    // Broaden ranges for the first section to ensure it's rock-solid at the start
    const opacity = useTransform(
        progress,
        [start === 0 ? 0 : start - 0.05, start, end, end + 0.05],
        [start === 0 ? 1 : 0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [start === 0 ? 0 : start - 0.05, start, end, end + 0.05],
        [start === 0 ? 0 : 40, 0, 0, -40]
    );

    const alignmentClasses = {
        left: "items-start text-left pl-10 md:pl-24",
        center: "items-center text-center",
        right: "items-end text-right pr-10 md:pr-24",
    };

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 h-screen flex flex-col justify-center pointer-events-none ${alignmentClasses[align]}`}
        >
            <div className="w-full max-w-7xl mx-auto px-6 relative">
                {children}
            </div>
        </motion.div>
    );
};

export default function Overlay() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    // Reset scroll to top on refresh/load
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div ref={container} className="absolute inset-0 h-[500vh] w-full pointer-events-none">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Section 1: Hero */}
                <Section progress={scrollYProgress} start={0} end={0.1} align="center">
                    <h1 className="text-3xl md:text-[3vw] font-display font-bold tracking-[-0.04em] uppercase mb-8 leading-[0.8] scale-y-[1.05]">
                        Mohan Raj
                    </h1>
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm md:text-lg text-white/80 tracking-[0.3em] uppercase font-light">
                            Full Stack Developer
                        </p>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-12 flex flex-col items-center gap-2"
                        >
                            <span className="text-[8px] tracking-[0.4em] uppercase text-white/20 font-bold">Scroll to Explore</span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <ChevronDown size={16} className="text-white/20" />
                            </motion.div>
                        </motion.div>
                    </div>
                </Section>

                {/* Section 2: Expertise */}
                <Section progress={scrollYProgress} start={0.25} end={0.4} align="left">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight max-w-3xl leading-[1.1]">
                        I build <span className="text-white/20 italic font-serif">scalable</span> MERN applications with a focus on <span className="text-white/20 italic font-serif">clean architecture</span>.
                    </h2>
                </Section>

                {/* Section 3: Vision */}
                <Section progress={scrollYProgress} start={0.5} end={0.65} align="right">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight max-w-3xl leading-[1.1] ml-auto">
                        Crafting <span className="italic font-serif text-white/20">seamless</span> digital experiences that prioritize <span className="text-white">intuitive</span> user interaction.
                    </h2>
                    <div className="mt-8">
                        <p className="text-[10px] md:text-xs text-white/40 tracking-[0.2em] uppercase font-medium max-w-md ml-auto leading-relaxed">
                            Bridging the gap between complex backend logic and pixel-perfect frontends.
                        </p>
                    </div>
                </Section>

                {/* Section 4: Final Call */}
                <Section progress={scrollYProgress} start={0.75} end={0.9} align="center">
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                        From <span className="text-white/20 italic font-serif">Pixels</span> <br />to Production.
                    </h2>
                    <p className="text-xs md:text-sm text-white/40 tracking-[0.15em] font-light max-w-2xl mx-auto leading-relaxed">
                        Transforming bold ideas into high-impact <br />technical solutions.
                    </p>
                </Section>
            </div>
        </div>
    );
}
