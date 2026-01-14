"use client";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // Using window scroll by default
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateFifth = useTransform(scrollYProgress, [0, 1], [0, -200]);

    // Screen size detection with mounted state to avoid hydration mismatch
    const [mounted, setMounted] = useState(false);
    const [isMd, setIsMd] = useState(false);
    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        setMounted(true);

        if (typeof window === "undefined") return;

        const mdQuery = window.matchMedia("(min-width: 768px)");
        const lgQuery = window.matchMedia("(min-width: 1024px)");

        const updateMatches = () => {
            setIsMd(mdQuery.matches);
            setIsLg(lgQuery.matches);
        };

        updateMatches();

        mdQuery.addEventListener("change", updateMatches);
        lgQuery.addEventListener("change", updateMatches);

        return () => {
            mdQuery.removeEventListener("change", updateMatches);
            lgQuery.removeEventListener("change", updateMatches);
        };
    }, []);

    // Determine number of columns based on screen size
    const numColumns = !mounted ? 2 : isLg ? 5 : isMd ? 4 : 2;

    // Distribute images round-robin across columns
    const columns: string[][] = Array.from({ length: numColumns }, () => []);

    images.forEach((img, index) => {
        const colIndex = index % numColumns;
        columns[colIndex].push(img);
    });

    const transforms = [
        translateFirst,
        translateSecond,
        translateThird,
        translateFourth,
        translateFifth,
    ];

    return (
        <div
            className={cn("w-full py-10", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-start max-w-7xl mx-auto gap-4 lg:gap-8 px-4"
            >
                {columns.map((columnImages, colIdx) => (
                    <div className="grid gap-4 lg:gap-8" key={`column-${colIdx}`}>
                        {columnImages.map((el, idx) => (
                            <motion.div
                                style={{ y: transforms[colIdx] }}
                                key={`grid-${colIdx}-${idx}`}
                            >
                                <img
                                    src={el}
                                    className="w-full h-auto object-cover rounded-lg"
                                    loading="lazy"
                                    alt="poster"
                                />
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
