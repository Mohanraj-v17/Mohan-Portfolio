

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        title: "AI Site Builder",
        category: "AI Web Tool",
        description: "An intelligent website builder that converts natural language prompts into fully functional, responsive landing pages using advanced AI models.",
        tech: ["TypeScript", "React.js", "Express.js", "Node.js", "OpenAI"],
        link: "https://ai-site-builder-tau.vercel.app/",
        image: "/ai-builder-preview.png",
    },
    {
        title: "Rentify",
        category: "Rental Homes and Shops",
        description: "A comprehensive real estate rental platform with 3D property views, smart search, and location-aware listing discovery.",
        tech: ["MongoDB", "React.js", "Express.js", "Node.js"],
        link: "https://rentify-nine.vercel.app/",
        image: "/rentify-preview.png",
    },
    {
        title: "Majesty",
        category: "E-Commerce Platform",
        description: "Full-stack application supporting user authentication, secure REST APIs, and optimized database queries.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "https://majesty-beta.vercel.app/",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Thiraix",
        category: "Movie Finder",
        description: "Dynamic movie search platform integrating third-party APIs with real-time functionality and responsive UI.",
        tech: ["React.js", "REST APIs", "Tailwind CSS"],
        link: "https://thiraix.vercel.app/",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Review App SPA",
        category: "Feedback System",
        description: "A high-performance Single Page Application designed for managing and visualizing user feedback with a focus on real-time interactivity.",
        tech: ["React.js", "Vite", "Bootstrap"],
        link: "https://review-spa.vercel.app/",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Money Tracker",
        category: "Finance Management",
        description: "A comprehensive tool for tracking personal expenses and incomes, featuring a clean dashboard and data visualization.",
        tech: ["Javascript", "HTML", "CSS"],
        link: "https://money-tracker-sage-beta.vercel.app/",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Book Order",
        category: "Ordering System",
        description: "An intuitive platform for browsing and ordering books, with a focus on seamless user experience and order management.",
        tech: ["Javascript", "HTML", "CSS"],
        link: "https://book-order-iota.vercel.app/",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Facebook Clone",
        category: "UI/UX Clone",
        description: "A pixel-perfect reconstruction of the Facebook signup interface, demonstrating expertise in responsive layout and form design.",
        tech: ["HTML5", "CSS3", "Responsive Design"],
        link: "https://facebook-signup-clone-blush.vercel.app/",
        image: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&q=80&w=1000",
    },
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full cursor-pointer"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                className="group relative h-full flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-white/5">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-col flex-grow p-8 -mt-6 relative z-10">
                    <div className="absolute top-4 right-8 p-3 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md">
                        <ExternalLink size={18} className="text-white" />
                    </div>

                    <div className="mb-6">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2 block font-bold">
                            {project.category}
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-white transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed font-normal line-clamp-3">
                            {project.description}
                        </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/50 font-bold group-hover:border-white/40 group-hover:text-white transition-all">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </a>
    );
};

export default function Projects() {
    return (
        <div className="relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]" />
                <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000"
                    alt="Decorative tech background"
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="container mx-auto px-6 py-12 md:py-20 pb-32 md:pb-40 relative z-10">
                <div id="projects-centering-view">
                    <div className="max-w-4xl mx-auto mb-12 md:mb-20 text-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-white/60 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
                        >
                            Case Studies
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter"
                        >
                            Pushing the boundaries of <br className="hidden sm:block" />
                            <span className="text-white/20 italic">digital innovation.</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-12 md:mb-32">
                        {PROJECTS.slice(0, 3).map((project, i) => (
                            <ProjectCard key={project.title} project={project} index={i} />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-20 md:mb-32">
                    {PROJECTS.slice(3).map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i + 3} />
                    ))}
                </div>

                <div id="skills-centering-view">
                    <div id="skills" className="max-w-4xl mx-auto mb-12 md:mb-20 text-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
                        >
                            Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tighter"
                        >
                            Technical <span className="text-white/20 italic">Skillset.</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-16 max-w-5xl mx-auto">
                        {[
                            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                            { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                            { name: "Redux.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                            { name: "Postgresql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                        ].map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, ease: "easeOut" }}
                                className="group relative"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className={`w-12 h-12 md:w-16 md:h-16 object-contain transform group-hover:scale-110 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${["Express.js", "GitHub"].includes(skill.name) ? "brightness-0 invert opacity-60 group-hover:opacity-100" : ""}`}
                                    title={skill.name}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
