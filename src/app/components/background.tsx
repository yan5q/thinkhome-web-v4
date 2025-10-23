"use client";

import React from "react";

const AnimatedBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
            {/* Animated gradient blobs matching aurora colors */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Purple blob - matches #7928CA */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] animate-aurora-blob-1"
                    style={{
                        background: "radial-gradient(circle, #7928CA 0%, #FF0080 40%, transparent 70%)",
                        top: "5%",
                        left: "5%",
                    }}
                />

                {/* Blue blob - matches #0070F3 */}
                <div
                    className="absolute w-[700px] h-[700px] rounded-full opacity-25 blur-[120px] animate-aurora-blob-2"
                    style={{
                        background: "radial-gradient(circle, #0070F3 0%, #00D4FF 40%, transparent 70%)",
                        top: "30%",
                        right: "5%",
                    }}
                />

                {/* Light blue blob - matches #38bdf8 */}
                <div
                    className="absolute w-[650px] h-[650px] rounded-full opacity-20 blur-[120px] animate-aurora-blob-3"
                    style={{
                        background: "radial-gradient(circle, #38bdf8 0%, #7928CA 50%, transparent 70%)",
                        bottom: "5%",
                        left: "25%",
                    }}
                />

                {/* Additional accent blob - pink/purple */}
                <div
                    className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] animate-aurora-blob-4"
                    style={{
                        background: "radial-gradient(circle, #FF0080 0%, #7928CA 40%, transparent 70%)",
                        top: "60%",
                        right: "30%",
                    }}
                />

                {/* Small floating accent */}
                <div
                    className="absolute w-[300px] h-[300px] rounded-full opacity-25 blur-[80px] animate-aurora-blob-5"
                    style={{
                        background: "radial-gradient(circle, #38bdf8 0%, transparent 60%)",
                        top: "20%",
                        left: "50%",
                    }}
                />

                {/* Sparkle overlay effect */}
                <div
                    className="absolute inset-0 opacity-[0.03] animate-sparkle"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                         radial-gradient(circle at 60% 80%, white 1px, transparent 1px),
                                         radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                                         radial-gradient(circle at 40% 30%, white 1px, transparent 1px)`,
                        backgroundSize: "200px 200px, 300px 300px, 250px 250px, 280px 280px",
                    }}
                />
            </div>

            {/* Actual page content */}
            <div className="relative z-10">{children}</div>

            <style jsx>{`
                @keyframes aurora-blob-1 {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1) rotate(0deg);
                    }
                    25% {
                        transform: translate(50px, -50px) scale(1.15) rotate(90deg);
                    }
                    50% {
                        transform: translate(-30px, 40px) scale(0.95) rotate(180deg);
                    }
                    75% {
                        transform: translate(40px, 30px) scale(1.05) rotate(270deg);
                    }
                }

                @keyframes aurora-blob-2 {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1) rotate(0deg);
                    }
                    25% {
                        transform: translate(-60px, 40px) scale(0.9) rotate(-90deg);
                    }
                    50% {
                        transform: translate(50px, -30px) scale(1.2) rotate(-180deg);
                    }
                    75% {
                        transform: translate(-40px, -40px) scale(0.95) rotate(-270deg);
                    }
                }

                @keyframes aurora-blob-3 {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1) rotate(0deg);
                    }
                    33% {
                        transform: translate(40px, 50px) scale(1.1) rotate(120deg);
                    }
                    66% {
                        transform: translate(-50px, -30px) scale(0.9) rotate(240deg);
                    }
                }

                @keyframes aurora-blob-4 {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(-30px, -40px) scale(1.2);
                    }
                    66% {
                        transform: translate(40px, 30px) scale(0.85);
                    }
                }

                @keyframes aurora-blob-5 {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0.25;
                    }
                    50% {
                        transform: translate(20px, -60px) scale(1.3);
                        opacity: 0.35;
                    }
                }

                @keyframes sparkle {
                    0%,
                    100% {
                        opacity: 0.02;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.05;
                        transform: scale(1.1);
                    }
                }

                .animate-aurora-blob-1 {
                    animation: aurora-blob-1 25s ease-in-out infinite;
                }

                .animate-aurora-blob-2 {
                    animation: aurora-blob-2 30s ease-in-out infinite;
                }

                .animate-aurora-blob-3 {
                    animation: aurora-blob-3 28s ease-in-out infinite;
                }

                .animate-aurora-blob-4 {
                    animation: aurora-blob-4 22s ease-in-out infinite;
                }

                .animate-aurora-blob-5 {
                    animation: aurora-blob-5 18s ease-in-out infinite;
                }

                .animate-sparkle {
                    animation: sparkle 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default AnimatedBackground;
