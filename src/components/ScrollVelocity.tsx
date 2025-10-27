"use client";
import React, { useRef, useLayoutEffect, useState, memo } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "motion/react";

interface VelocityMapping {
    input: [number, number];
    output: [number, number];
}

interface VelocityTextProps {
    children: React.ReactNode;
    baseVelocity: number;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
    scrollContainerRef?: React.RefObject<HTMLElement>;
    texts: string[];
    velocity?: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) {
                const newWidth = ref.current.offsetWidth;
                if (newWidth > 0) {
                    setWidth(newWidth);
                }
            }
        }

        // Use setTimeout to ensure DOM is fully rendered
        const timeoutId = setTimeout(updateWidth, 0);
        updateWidth();

        window.addEventListener("resize", updateWidth);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", updateWidth);
        };
    }, [ref]);

    return width;
}

const VelocityText = memo(({ children, baseVelocity, scrollContainerRef, className = "", damping = 50, stiffness = 400, numCopies = 6, velocityMapping = { input: [0, 1000], output: [0, 5] }, parallaxClassName = "", scrollerClassName = "", parallaxStyle, scrollerStyle }: VelocityTextProps) => {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping,
        stiffness,
    });
    const velocityFactor = useTransform(smoothVelocity, velocityMapping.input, velocityMapping.output, { clamp: false });

    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    const x = useTransform(baseX, (v) => {
        if (copyWidth === 0) return "0px";

        // Proper wrapping that works for both positive and negative velocities
        const wrapped = ((v % copyWidth) + copyWidth) % copyWidth;
        return `${-wrapped}px`;
    });

    useAnimationFrame((t, delta) => {
        if (copyWidth === 0) return; // Don't animate until width is calculated

        let moveBy = baseVelocity * (delta / 1000);

        // Add scroll velocity influence without changing direction
        moveBy += moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
            <motion.div className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-[3rem] font-medium tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-20`} style={{ x, ...scrollerStyle }}>
                {Array.from({ length: numCopies }).map((_, i) => (
                    <span className={`shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
});

VelocityText.displayName = "VelocityText";

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({ scrollContainerRef, texts = [], velocity = 100, className = "", damping = 50, stiffness = 400, numCopies = 6, velocityMapping = { input: [0, 1000], output: [0, 5] }, parallaxClassName, scrollerClassName, parallaxStyle, scrollerStyle }) => {
    return (
        <section>
            {texts.map((text: string, index: number) => (
                <VelocityText key={`${text}-${index}`} className={className} baseVelocity={index % 2 !== 0 ? -velocity : velocity} scrollContainerRef={scrollContainerRef} damping={damping} stiffness={stiffness} numCopies={numCopies} velocityMapping={velocityMapping} parallaxClassName={parallaxClassName} scrollerClassName={scrollerClassName} parallaxStyle={parallaxStyle} scrollerStyle={scrollerStyle}>
                    {text}&nbsp;
                </VelocityText>
            ))}
        </section>
    );
};

export default ScrollVelocity;
