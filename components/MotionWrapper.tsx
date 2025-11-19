'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    viewportAmount?: number;
}

export default function MotionWrapper({
    children,
    className,
    delay = 0,
    direction = 'up',
    duration = 0.5,
    viewportAmount = 0.3,
}: MotionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: 50, opacity: 0 };
            case 'down':
                return { y: -50, opacity: 0 };
            case 'left':
                return { x: 50, opacity: 0 };
            case 'right':
                return { x: -50, opacity: 0 };
            case 'none':
                return { opacity: 0 };
            default:
                return { y: 50, opacity: 0 };
        }
    };

    const getFinalPosition = () => {
        switch (direction) {
            case 'up':
            case 'down':
                return { y: 0, opacity: 1 };
            case 'left':
            case 'right':
                return { x: 0, opacity: 1 };
            case 'none':
                return { opacity: 1 };
            default:
                return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitialPosition()}
            animate={isInView ? getFinalPosition() : getInitialPosition()}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smooth ease-out
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
