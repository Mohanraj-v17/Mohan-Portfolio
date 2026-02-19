"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const contactMethods = [
        {
            name: "Phone",
            value: "+91 6369698340",
            icon: Phone,
            href: "tel:+916369698340",
        },
        {
            name: "Email",
            value: "codemohanraj@gmail.com",
            icon: Mail,
            href: "mailto:codemohanraj@gmail.com",
        }
    ];

    const socials = [
        { name: "GitHub", icon: Github, href: "https://github.com/Mohanraj-v17" },
        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/mohanraj-v17" }
    ];

    const FORMSPREE_ID = "mqaevepk";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-background text-white">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div id="contact-view" className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                                Get in <br />
                                <span className="text-white/20 italic font-light">Touch</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 text-white/80 tracking-tight">I'd like to hear from you!</p>
                        </motion.div>

                        <div className="space-y-8">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.name}
                                    href={method.href}
                                    className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                        <method.icon size={18} />
                                    </div>
                                    <span className="text-sm font-medium border-b border-white/10 group-hover:border-white/40 pb-1 transition-all">{method.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.02] backdrop-blur-3xl p-10 md:p-14 rounded-[2rem] border border-white/5 shadow-2xl"
                    >
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">First Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none transition-colors text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Last Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none transition-colors text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white outline-none transition-colors text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 focus:border-white outline-none transition-colors resize-none text-white"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`w-full md:w-auto px-12 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl flex items-center justify-center gap-2 group
                                    ${status === "success" ? "bg-green-500 text-white" : "bg-white text-black hover:bg-zinc-200"}`}
                            >
                                {status === "idle" && (
                                    <>
                                        Send Message
                                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                                {status === "loading" && <Loader2 size={14} className="animate-spin" />}
                                {status === "success" && <CheckCircle2 size={14} />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="mt-20 text-center">
                <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-medium px-4">
                    Mohan Raj • Available for new opportunities • Hosur, TN
                </p>
            </div>
        </section>
    );
}
