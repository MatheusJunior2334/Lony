'use client'

import React, { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedComponentProps {
    children: ReactNode;
    animateOnce?: boolean;
    initialScale?: number;
    initialTranslateX?: number;
    initialTranslateY?: number;
    opacity?: number;
    transitionDuration?: number;
    delayDuration?: number;

    className?: string;
}

export const AnimatedComponent = ({
    children,
    animateOnce = true,
    initialScale,
    initialTranslateX,
    initialTranslateY,
    opacity = 1,
    transitionDuration = 0,
    delayDuration = 0,
    className = ''
}: AnimatedComponentProps) => {

    const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const { ref, inView } = useInView({
        triggerOnce: animateOnce,
    })

    useEffect(() => {
        if (inView) {
            setIsAnimated(true);
        }
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            initial={animateOnce ? { scale: initialScale, x: initialTranslateX, y: initialTranslateY, opacity: opacity } : {}}
            animate={isAnimated ? { scale: 1, x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: transitionDuration, delay: delayDuration }}
            className={className}
        >
            {children}
        </motion.div>
    )
}