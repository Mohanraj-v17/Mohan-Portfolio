import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main id="home" className="relative bg-background text-white">
            <Navbar />

            <section className="relative h-[500vh]">
                <ScrollyCanvas />
                <Overlay />
            </section>

            <section id="projects" className="relative z-20 scroll-mt-20">
                <Projects />
            </section>

            <section id="contact" className="relative z-20 scroll-mt-20">
                <Contact />
            </section>

            <footer className="relative z-20 py-12 px-6 border-t border-white/5 bg-background">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center gap-8 mb-8 text-[10px] uppercase tracking-widest text-white/40 font-medium">
                        <a href="#home" className="hover:text-white transition-colors">Top</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="/resume" className="hover:text-white transition-colors">Resume</a>
                    </div>
                    <div className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-medium">
                        © {new Date().getFullYear()} MOHAN RAJ. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </footer>
        </main>
    );
}
