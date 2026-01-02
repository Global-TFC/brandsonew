'use client';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Globe, Building2, Share2, Palette, TrendingUp } from 'lucide-react';

export default function Services() {
    return (
        <section className="py-20 px-6 lg:px-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-400 text-sm font-semibold mb-3 tracking-wider uppercase"
                    >
                        Our Services
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold mb-4"
                    >
                        Everything You Need to
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
                            Grow Your Brand
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        From stunning designs to powerful web apps, we deliver tailored solutions to elevate your business.
                    </motion.p>
                </div>

                {/* Services Grid - 1 col mobile, 2 col medium, 4 col large */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Card 1: Business Launch Kit with floating badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="group relative"
                    >
                        <div className="relative h-[400px] bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 overflow-hidden">
                            {/* Starry background effect */}
                            <div className="absolute inset-0 opacity-30">
                                {[...Array(20)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            opacity: Math.random() * 0.5 + 0.3,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Floating service badges */}
                            <div className="relative z-10 h-48 mb-8">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-4 left-4 px-4 py-2 bg-emerald-400 text-gray-900 rounded-full font-semibold text-sm transform -rotate-12"
                                >
                                    Website
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-4 right-4 px-4 py-2 bg-emerald-400 text-gray-900 rounded-full font-semibold text-sm transform rotate-12"
                                >
                                    posters
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-20 left-16 px-5 py-2.5 bg-emerald-300 text-gray-900 rounded-full font-semibold text-sm transform rotate-6"
                                >
                                    Google Business
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-12 right-8 px-4 py-2 bg-emerald-500 text-white rounded-full font-semibold text-sm transform rotate-12"
                                >
                                    Social Media
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    className="absolute top-32 left-8 px-4 py-2 text-white bg-emerald-500 rounded-full font-semibold text-sm transform -rotate-6"
                                >
                                    Logo
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -14, 0] }}
                                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                    className="absolute top-28 right-4 px-4 py-2 bg-emerald-300 text-gray-900 rounded-full font-semibold text-sm"
                                >
                                    SEO
                                </motion.div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Business Launch Kit
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Complete brand launch package with everything you need to establish your online presence
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Monthly Poster Pack with calendar grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative"
                    >
                        <div className="relative h-[400px] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 overflow-hidden">
                            {/* Starry background */}
                            <div className="absolute inset-0 opacity-30">
                                {[...Array(15)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            opacity: Math.random() * 0.5 + 0.3,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Calendar grid visualization */}
                            <div className="relative z-10 h-48 mb-8 flex items-center justify-center">
                                <div className="grid grid-cols-7 gap-2">
                                    {[...Array(28)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.02 }}
                                            className={`w-3 h-3 rounded-sm ${i === 10 || i === 17 ? 'bg-cyan-400' : 'bg-blue-600/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Monthly Packages
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Custom monthly packages for creative posters, video editing, and more services.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Design Services with icon */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="relative h-[400px] bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900 rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden">
                            {/* Starry background */}
                            <div className="absolute inset-0 opacity-30">
                                {[...Array(15)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            opacity: Math.random() * 0.5 + 0.3,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Large centered icon */}
                            <div className="relative z-10 h-48 mb-8 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-500/40"
                                >
                                    <Palette className="w-16 h-16 text-white" />
                                </motion.div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Creative Services
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Professional graphics, posters, banners, and visual content that captures attention
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Development with graph */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative"
                    >
                        <div className="relative h-[400px] bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 overflow-hidden">
                            {/* Starry background */}
                            <div className="absolute inset-0 opacity-30">
                                {[...Array(15)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            opacity: Math.random() * 0.5 + 0.3,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Coding & App Visualization */}
                            <div className="relative z-10 h-48 mb-8 flex items-center justify-center">
                                {/* Code Window */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative w-48 bg-gray-900/90 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-2xl"
                                >
                                    {/* Window Controls */}
                                    <div className="flex gap-1.5 mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                                    </div>

                                    {/* Code Lines Animation */}
                                    <div className="space-y-2">
                                        {[80, 60, 90, 40, 70].map((width, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ width: 0, opacity: 0 }}
                                                whileInView={{ width: `${width}%`, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (i * 0.15), duration: 0.5 }}
                                                className={`h-2 rounded-full ${i === 0 ? 'bg-purple-400' :
                                                    i === 2 ? 'bg-blue-400' :
                                                        i === 3 ? 'bg-pink-400' : 'bg-white/20'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Floating Phone Element */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0, x: 20, y: 20 }}
                                        whileInView={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                                        className="absolute -right-4 -bottom-4 w-16 h-28 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl border-2 border-gray-900 shadow-xl flex flex-col items-center justify-center gap-2"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm" />
                                        <div className="w-10 h-1.5 rounded-full bg-white/20" />
                                        <div className="w-8 h-1.5 rounded-full bg-white/20" />
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Development
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Build scalable websites and apps that drive growth and engagement for your business
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>



                {/* Bottom CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-semibold px-10 py-6 text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                    >
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 font-semibold px-10 py-6 text-lg transition-all duration-300"
                    >
                        <Link href="/services">View All Services</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
