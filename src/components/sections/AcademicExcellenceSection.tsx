"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "./animations";

export default function AcademicExcellenceSection() {
  return (
    <motion.section
      className="py-20 px-4 sm:px-8 bg-gradient-to-br from-pink-50 to-pink-100 relative w-full min-h-screen"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 w-full h-full">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 98px,
            rgba(236, 72, 153, 0.1) 100px
          )`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-8 sm:mb-16 text-center"
          variants={fadeInUp}
          transition={fadeInUp}
        >
          Univerzs Commitment to Academic Excellence
        </motion.h2>

        <div className="w-full">
          {/* Single Column Layout for better mobile experience */}
          <div className="flex flex-col items-center space-y-8">
            {/* Main Image */}
            <motion.div
              className="w-full max-w-4xl relative"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="University Campus"
                  className="w-full h-64 sm:h-96 object-cover"
                />
                {/* Overlay Card */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-blue-600 font-bold text-lg">
                    50K+ Students
                  </div>
                  <div className="flex -space-x-2 mt-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full max-w-4xl space-y-6"
              variants={fadeInUp}
              transition={fadeInUp}
            >
              {/* First Text Block */}
              <motion.p
                className="text-gray-700 text-base sm:text-lg leading-relaxed text-center"
                variants={fadeInUp}
                transition={fadeInUp}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tristique, tortor nec consequat vulputate.
              </motion.p>

              {/* Secondary Image */}
              {/* <motion.div
                className="rounded-2xl overflow-hidden"
                variants={fadeInUp}
                transition={fadeInUp}
              >
                <img
                  src="https://stepbystep.school/wp-content/uploads/2025/03/investiture-ceremony.jpg"
                  alt="Modern University Building"
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              {/* Second Text Block *
              <motion.p
                className="text-gray-700 text-base sm:text-lg leading-relaxed text-center"
                variants={fadeInUp}
                transition={fadeInUp}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tristique, tortor nec consequat vulputate, lorem ar congue.
              </motion.p> */}

              {/* CTA Button */}
              <motion.div
                className="text-center"
                variants={fadeInUp}
                transition={fadeInUp}
              >
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
