"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function ArticlesSection() {
  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-br from-pink-50 to-pink-100"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          <div className="lg:flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Check out our Latest Articles and Knowledge
            </h2>
          </div>
          <div className="lg:flex-1 lg:text-right">
            <p className="text-blue-600 text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              massa sit amet nisi blandit vehicula.
            </p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
            </motion.button>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {/* Article 1 */}
          <motion.article
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <img
                src="https://images.theconversation.com/files/24725/original/3psxc3fx-1369959024.jpg?ixlib=rb-4.1.0&rect=11%2C17%2C3900%2C2488&q=45&auto=format&w=926&fit=clip"
                alt="Graduation ceremony"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Insight
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">12 Aug 2023</p>
              <h3 className="text-blue-600 font-bold text-lg mb-3">
                Many Univerz university graduates immediately work
              </h3>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </motion.article>

          {/* Article 2 */}
          <motion.article
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Tips
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">12 Dec 2023</p>
              <h3 className="text-blue-600 font-bold text-lg mb-3">
                Tips so you don&apos;t get lazy in college
              </h3>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </motion.article>

          {/* Article 3 */}
          <motion.article
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            transition={fadeInUp}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="University library"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Recomend
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">12 Nov 2023</p>
              <h3 className="text-blue-600 font-bold text-lg mb-3">
                10 recommendations for good college places
              </h3>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
}
