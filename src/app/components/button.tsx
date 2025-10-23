import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    variant?: "primary" | "secondary";
}

export default function Button({ children, onClick, href, className = "", variant = "primary" }: ButtonProps) {
    const baseClasses = `
    inline-flex items-center justify-center cursor-pointer
    px-6 py-2 font-mono text-base lowercase
    border border-black bg-white text-black
    rounded-md transition-colors duration-200
    hover:bg-black hover:text-white
    ${variant === "secondary" ? "bg-black border-black text-white" : ""}
    ${className}
  `;

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}
