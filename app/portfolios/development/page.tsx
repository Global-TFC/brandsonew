'use client';
import { motion } from 'framer-motion';

export default function Development() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item * 0.1 }}
                    className="aspect-video bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center hover:border-emerald-500/50 transition-colors"
                >
                    <span className="text-gray-500">Dev Project {item}</span>
                </motion.div>
            ))}
        </div>
    );
}