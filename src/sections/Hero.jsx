import React from 'react';
import { motion as Motion } from 'framer-motion';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import ebookCover from '../assets/ebook_cover_v2.png';

export const Hero = () => {
    const scrollToForm = () => {
        const formSection = document.getElementById('lead-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 lg:py-0 bg-zinc-950 selection:bg-primary/30">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <Motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary font-bold text-sm tracking-wide uppercase">O Método Comprovado</span>
                        </Motion.div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                            Transforme seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Corpo</span> e sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Mente</span>
                        </h1>

                        <p className="text-zinc-300 text-lg lg:text-xl leading-relaxed max-w-xl border-l-4 border-primary/50 pl-6">
                            Descubra o protocolo exato para <strong className="text-white">queimar gordura</strong> e <strong className="text-white">ganhar massa muscular</strong> sem dietas restritivas. O guia definitivo para o seu melhor shape.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Protocolos de Treino (Hipertrofia & Definição)",
                            "Dieta Flexível: Coma o que gosta",
                            "Estratégias para Bumbum na Nuca e Braços Gigantes",
                            "A verdade sobre Suplementos e Anabolizantes"
                        ].map((item, index) => (
                            <Motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className="flex items-center gap-3 group"
                            >
                                <div className="p-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                </div>
                                <span className="text-zinc-200 group-hover:text-white transition-colors">{item}</span>
                            </Motion.div>
                        ))}
                    </div>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="pt-4"
                    >
                        <Button
                            onClick={scrollToForm}
                            className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-linear-to-r from-primary to-accent border-0"
                        >
                            BAIXAR O EBOOK GRATUITAMENTE
                            <ChevronDown className="w-5 h-5 ml-1 animate-bounce" />
                        </Button>
                        <p className="mt-4 text-sm text-zinc-500 flex items-center gap-2">
                            <span className="text-green-500">●</span> Mais de 10.000 downloads realizados
                        </p>
                    </Motion.div>
                </Motion.div>

                {/* Image Content */}
                <Motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group hidden lg:block"
                >
                    <div className="relative z-10 w-[85%] mx-auto">
                        {/* Glowing effect content behind image */}
                        <div className="absolute -inset-4 bg-linear-to-tr from-primary via-accent to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />

                        <img
                            src={ebookCover}
                            alt="Capa do Ebook Body & Food Blueprint"
                            className="relative z-10 w-full h-auto rounded-xl shadow-2xl shadow-black/50 border border-zinc-700/50 transform group-hover:scale-[1.02] transition-transform duration-500"
                        />

                        {/* Floating Badges */}
                        <Motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="absolute -right-8 top-12 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 p-4 rounded-xl shadow-xl z-20"
                        >
                            <span className="block text-2xl font-bold text-white">100%</span>
                            <span className="text-xs text-zinc-400 uppercase tracking-wider">Gratuito</span>
                        </Motion.div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};
