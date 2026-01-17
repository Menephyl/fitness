import React from 'react';
import { motion as Motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Button = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: "bg-primary hover:bg-red-600 text-white shadow-lg shadow-primary/30",
        secondary: "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
    };

    return (
        <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-6 py-3 rounded-full font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </Motion.button>
    );
};
