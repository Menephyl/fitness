import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';

export const Input = forwardRef(({ label, error, className, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && <label className="text-zinc-400 text-sm font-medium ml-1">{label}</label>}
            <input
                ref={ref}
                className={cn(
                    "w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200",
                    error && "border-red-500 focus:ring-red-500/50 focus:border-red-500",
                    className
                )}
                {...props}
            />
            {error && <span className="text-red-500 text-xs ml-1">{error.message}</span>}
        </div>
    );
});

Input.displayName = "Input";
