import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const schema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Digite um e-mail válido"),
});

export const LeadForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Data:", data);
        setIsSuccess(true);
        toast.success("Ebook enviado com sucesso!", {
            position: "bottom-right",
            theme: "dark"
        });
    };

    return (
        <section id="lead-form" className="py-24 bg-zinc-900/50 relative">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                            {isSuccess ? "Sucesso!" : "Comece sua Transformação Hoje"}
                        </h2>
                        <p className="text-zinc-400 mt-2">
                            {isSuccess
                                ? "Verifique sua caixa de entrada para acessar o conteúdo."
                                : "Preencha seus dados abaixo para receber o material gratuitamente."}
                        </p>
                    </div>

                    <div className="w-full max-w-md mx-auto min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <Motion.form
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6 w-full"
                                >
                                    <Input
                                        label="Nome Completo"
                                        placeholder="Seu nome"
                                        error={errors.name}
                                        {...register("name")}
                                    />
                                    <Input
                                        label="E-mail"
                                        type="email"
                                        placeholder="seu@email.com"
                                        error={errors.email}
                                        {...register("email")}
                                    />

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                Enviando...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Receber Ebook Grátis <Send size={18} />
                                            </span>
                                        )}
                                    </Button>
                                </Motion.form>
                            ) : (
                                <Motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", duration: 0.6 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold text-white">E-mail Enviado!</h3>
                                        <p className="text-zinc-400 text-sm">
                                            O guia "Body & Food" já está a caminho do email cadastrado.
                                        </p>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setIsSuccess(false)} // Reset for demo purposes
                                        className="mt-4"
                                    >
                                        Enviar para outro e-mail
                                    </Button>
                                </Motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
