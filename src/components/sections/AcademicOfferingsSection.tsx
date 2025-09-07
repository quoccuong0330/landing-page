"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function AcademicOfferingsSection() {
  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-br from-pink-50 to-pink-100 relative"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          Explore Our Academic Offerings Chart Your Path to Success
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg mb-12 max-w-3xl"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          massa sit amet nisi blandit vehicula adipiscing elit.
        </motion.p>

        {/* Course Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          variants={staggerContainer}
        >
          {/* Engineering */}
          <motion.div
            className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-3">Engineering</h3>
            <p className="text-blue-100 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          {/* Psychology */}
          <motion.div
            className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Psychology</h3>
            <p className="text-blue-100 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          {/* Fine Arts */}
          <motion.div
            className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3">Fine Arts</h3>
            <p className="text-blue-100 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          {/* Language */}
          <motion.div
            className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold mb-3">Language</h3>
            <p className="text-blue-100 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          {/* Accountancy */}
          <motion.div
            className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Accountancy</h3>
            <p className="text-blue-100 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>

          {/* Science */}
          <motion.div
            className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="text-xl font-bold mb-3">Science</h3>
            <p className="text-blue-100 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
