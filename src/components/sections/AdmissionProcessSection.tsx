"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "./animations";

export default function AdmissionProcessSection() {
  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-br from-pink-50 to-pink-100 relative"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 98px,
            rgba(107, 114, 128, 0.1) 100px
          )`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          Student Admission Process and Assistance from us
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg mb-12 max-w-3xl"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          massa sit amet nisi blandit vehicula adipiscing elit.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="order-2 lg:order-1"
            variants={fadeInLeft}
            transition={fadeInLeft}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students working together"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Process Steps */}
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            variants={fadeInRight}
            transition={fadeInRight}
          >
            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
                <div className="text-white text-lg">✓</div>
              </div>
              <p className="text-gray-700 text-lg">
                Complete everything as ordered
              </p>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
                <div className="text-white text-lg">✓</div>
              </div>
              <p className="text-gray-700 text-lg">
                Provide your last exam result
              </p>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
                <div className="text-white text-lg">✓</div>
              </div>
              <p className="text-gray-700 text-lg">
                Choose your desired program
              </p>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
                <div className="text-white text-lg">✓</div>
              </div>
              <p className="text-gray-700 text-lg">
                Get contact with the instructor
              </p>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
                <div className="text-white text-lg">✓</div>
              </div>
              <p className="text-gray-700 text-lg">
                Finally get started your program
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See all our admission
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
