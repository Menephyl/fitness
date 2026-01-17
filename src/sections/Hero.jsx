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
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 lg:py-0">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <Motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <Motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide border border-primary/20"
                        >
                            TRANSFORME SUA VIDA
                        </Motion.span>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            Domine seu <span className="text-primary">Corpo</span> e sua <span className="text-primary">Mente</span>
                        </h1>
                        <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-xl">
                            Descubra o segredo para construir um corpo forte e saudável sem abrir mão do que você gosta de comer. Um guia prático para iniciantes e avançados.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Rotinas de exercícios personalizáveis",
                            "Guia completo de nutrição flexível",
                            "Dicas para manter a constância",
                            "Acesso imediato e vitalício"
                        ].map((item, index) => (
                            <Motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle className="text-primary w-6 h-6 shrink-0" />
                                <span className="text-zinc-200">{item}</span>
                            </Motion.div>
                        ))}
                    </div>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Button onClick={scrollToForm} className="w-full sm:w-auto shadow-primary/25 shadow-xl">
                            Quero Receber o Ebook Agora
                            <ChevronDown className="w-5 h-5 ml-1 animate-bounce" />
                        </Button>
                        <p className="mt-4 text-sm text-zinc-500">
                            *Junte-se a mais de 5.000 alunos transformados.
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
                    <div className="relative z-10 w-[80%] mx-auto">
                        {/* Glowing effect content behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                        <img
                            src={ebookCover}
                            alt="Capa do Ebook Body & Food"
                            className="relative z-10 w-full h-auto rounded-xl shadow-2xl border border-zinc-800 transform group-hover:-translate-y-2 transition-transform duration-500"
                        />
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};
