"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full"></div> */}
      </div>

      {/* Header */}
      <motion.header
        className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-6 w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left Navigation */}
        <nav className="flex items-center space-x-4 sm:space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
          >
            About Us
          </a>
        </nav>

        {/* Center Title - Absolutely positioned for true center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-2xl font-bold">
          Univerz University
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center space-x-4 sm:space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
          >
            Course
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
          >
            Blog
          </a>
        </nav>
      </motion.header>

      {/* Hero Content */}
      <motion.main
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-4 sm:px-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto w-full">
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Shaping the Future
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Through Education
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              and Innovation
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            massa sit amet nisi blandit vehicula. Donec sollicitudin luctus
            fermentum.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-300 min-w-[140px] sm:min-w-[160px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>
            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
