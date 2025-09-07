"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function CTASection() {
  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-br from-pink-50 to-pink-100"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          Join now to get special offers at Univerz
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          massa sit amet nisi blandit vehicula.
        </motion.p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
          variants={fadeInUp}
          transition={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>
      </div>
    </motion.section>
  );
}
