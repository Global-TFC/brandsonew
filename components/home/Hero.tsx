'use client';
import { motion } from 'framer-motion'; // For infinite scroll and animations
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[calc(100vh-6rem)] flex items-center overflow-hidden">
            {/* Dotted pattern background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-32 h-32 bg-[radial-gradient(circle,_#10b981_1px,_transparent_1px)] bg-[length:20px_20px] animate-pulse" />
                <div className="absolute bottom-40 left-40 w-40 h-40 bg-[radial-gradient(circle,_#10b981_1px,_transparent_1px)] bg-[length:15px_15px] animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-40 right-60 w-48 h-48 bg-[radial-gradient(circle,_#059669_1px,_transparent_1px)] bg-[length:18px_18px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Promo Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm text-emerald-400 font-medium">We Bring Your Vision to Life</span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Upgrade Your
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
                            Brand Identity
                        </span>
                        <br />
                        With Brandso
                    </h1>

                    {/* Description */}
                    <p className="text-lg lg:text-xl text-gray-300 max-w-xl">
                        we create a unique identity for your brand that stands out in the market.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {/* <Button
                            asChild
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 font-semibold px-8 transition-all hover:scale-105"
                        >
                            <Link href="/contact">Get Started</Link>
                        </Button> */}
                        <Button
                            asChild
                            variant="default"
                            size="lg"
                            className="border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 font-semibold px-8 transition-all hover:scale-105"
                        >
                            <Link href="/contact">Get Started →</Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Right Visual Elements */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center h-[600px]"
                >
                    {/* Central AI Box */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-20"
                    >
                        <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-emerald-600 to-green-800 flex items-center justify-center shadow-2xl shadow-emerald-500/50 border-2 border-emerald-400/30">
                            <span className="text-6xl font-bold text-white">AI</span>
                        </div>
                    </motion.div>

                    {/* Floating Icons */}
                    {/* Analysis Icon - Top Right */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="absolute top-20 right-20 z-10"
                    >
                        <div className="px-4 py-2 rounded-lg bg-emerald-950/80 border border-emerald-500/40 backdrop-blur-sm flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-sm text-emerald-300 font-medium">Analysis process...</span>
                        </div>
                    </motion.div>

                    {/* Icon Group - Top Left */}
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute top-32 -left-10 z-10 flex gap-2"
                    >
                        <div className="w-12 h-12 rounded-lg bg-emerald-900/80 border border-emerald-500/40 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <span className="text-emerald-400 text-xl">🌐</span>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-emerald-900/80 border border-emerald-500/40 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <span className="text-emerald-400 text-xl">💻</span>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-emerald-900/80 border border-emerald-500/40 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <span className="text-emerald-400 text-xl">📧</span>
                        </div>
                    </motion.div>

                    {/* Document Icon - Bottom Left */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5
                        }}
                        className="absolute bottom-40 left-10 z-10"
                    >
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center shadow-xl shadow-emerald-500/30 border border-emerald-400/30">
                            <span className="text-white text-3xl">📄</span>
                        </div>
                    </motion.div>

                    {/* Sparkle Icon - Bottom Right */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute bottom-32 right-32 z-10"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-2xl shadow-emerald-500/50 border-2 border-emerald-300/40">
                            <span className="text-white text-4xl">✨</span>
                        </div>
                    </motion.div>

                    {/* Connection Lines (Dashed) */}
                    <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
                        <defs>
                            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="#10b981" opacity="0.3" />
                            </pattern>
                        </defs>

                        {/* Dashed connecting lines */}
                        <motion.path
                            d="M 200 150 L 300 300"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="none"
                            opacity="0.3"
                            animate={{ strokeDashoffset: [0, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.path
                            d="M 100 200 L 280 280"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="none"
                            opacity="0.3"
                            animate={{ strokeDashoffset: [0, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                        <motion.path
                            d="M 350 250 L 400 400"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="none"
                            opacity="0.3"
                            animate={{ strokeDashoffset: [0, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}