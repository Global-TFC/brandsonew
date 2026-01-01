"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import servicesData from '@/utils/services.json';
import Footer from '@/components/home/Footer';

export default function Services() {
    const services = servicesData.services;

    const formatPrice = (price: number, currency: string, billing: string) => {
        if (billing === 'starting-from') {
            return `Starting from ₹${price.toLocaleString()}`;
        }
        if (billing === 'monthly') {
            return `₹${price.toLocaleString()}/month`;
        }
        return `₹${price.toLocaleString()}`;
    };

    return (
        <>
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

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-emerald-500/10 group-hover:to-green-600/5 transition-all duration-500 rounded-2xl" />

                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        {/* Icon placeholder - you can replace with actual icons */}
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
                                            <span className="text-2xl">
                                                {index === 0 ? '🚀' : index === 1 ? '🎨' : index === 2 ? '📱' : index === 3 ? '🎬' : index === 4 ? '💻' : '📲'}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <p className="text-3xl font-bold text-emerald-400">
                                                {formatPrice(service.price, service.currency, service.billing)}
                                            </p>
                                            {service.billing === 'monthly' && (
                                                <p className="text-sm text-gray-500 mt-1">Cancel anytime</p>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <div className="mt-1 flex-shrink-0">
                                                        <Check className="w-5 h-5 text-emerald-400" />
                                                    </div>
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <Button
                                            asChild
                                            className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                                        >
                                            <Link href="/contact">Get Started</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <p className="text-gray-400 mb-4">Need a custom solution?</p>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-emerald-500 text-emerald-400 hover:bg-emerald-950/50 font-semibold px-8"
                        >
                            <Link href="/contact">Contact Us for Custom Quote</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
}
