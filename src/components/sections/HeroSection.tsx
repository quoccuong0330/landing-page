"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Gradient with Pattern */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Circles */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-300/15 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300/20 rounded-full animate-bounce"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-white/5 transform rotate-45 animate-spin"></div>
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/8 transform rotate-12 animate-pulse"></div>

            {/* Educational Icons Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="20" cy="20" r="2" fill="white" />
                <circle cx="80" cy="20" r="2" fill="white" />
                <circle cx="20" cy="80" r="2" fill="white" />
                <circle cx="80" cy="80" r="2" fill="white" />
                <circle cx="50" cy="50" r="3" fill="white" />
                <rect
                  x="30"
                  y="30"
                  width="40"
                  height="40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Header */}
      <motion.header
        className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-6 w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About Us
          </a>
        </nav>

        {/* Center Title */}
        <div className="text-white text-lg sm:text-2xl font-bold text-center flex-1 md:flex-none md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          2HGANA
        </div>

        {/* Desktop Right Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Course
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Blog
          </a>
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={toggleMenu}
            >
              ✕
            </button>

            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Course
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </a>
          </div>
        </motion.div>
      )}

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
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              [Wedo – Wegood]
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Phát triển năng lực cá nhân
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              kỹ năng sống toàn diện
            </motion.div>
          </motion.h1>

          {/* Description */}
          {/* <motion.p
            className="text-base sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            massa sit amet nisi blandit vehicula. Donec sollicitudin luctus
            fermentum.
          </motion.p> */}

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
