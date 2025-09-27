"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "./animations";

export default function AboutUsSection() {
  return (
    <motion.section
      className="py-20 px-4 sm:px-8 bg-gradient-to-br from-amber-50 to-orange-50 relative w-full"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Right Shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500 rounded-full opacity-20"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 transform rotate-45 opacity-20"></div>
        <div className="absolute top-32 right-32 w-8 h-8 bg-orange-500 rounded-full opacity-20"></div>

        {/* Bottom Left Shapes */}
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-600 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-blue-500 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-44 left-32 w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>

        {/* Bottom Right Shapes */}
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-600 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-green-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-30 right-30 w-8 h-8 bg-orange-500 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 bg-white border-2 border-gray-800 transform rotate-45 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-800 mb-4"
            variants={fadeInUp}
          >
            2H GANA
          </motion.h2>
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700"
            variants={fadeInUp}
          >
            TỔNG QUAN
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Ganesha Image */}
          <motion.div
            className="relative flex justify-center"
            variants={fadeInLeft}
          >
            {/* Abstract Shapes around Ganesha */}
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-green-600 rounded-full opacity-30"></div>
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-blue-500 transform rotate-45 opacity-30"></div>
            <div className="absolute -left-2 -top-2 w-8 h-8 bg-orange-500 rounded-full opacity-30"></div>

            {/* Ganesha Image */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-pink-200 to-purple-300 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Ganesha - Hindu God of Wisdom"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Abstract Shapes */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white border-2 border-black rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-2 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="space-y-8" variants={fadeInRight}>
            {/* About Us Title */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                Về chúng tôi
              </h4>
              <h5 className="text-xl sm:text-2xl font-bold text-black mb-6">
                2H: Học tập – Hạnh phúc
              </h5>
            </motion.div>

            {/* First Paragraph */}
            <motion.p
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
              variants={fadeInUp}
            >
              Chúng tôi hiểu nỗi lo của phụ huynh về việc con em sử dụng thiết
              bị điện tử và mong muốn tạo ra một môi trường học tập hạnh phúc,
              nơi học sinh có thể phát triển bản thân.
            </motion.p>

            {/* GANA Definition */}
            <motion.div
              className="bg-white bg-opacity-50 rounded-xl p-6 shadow-lg"
              variants={fadeInUp}
            >
              <h6 className="text-lg font-bold text-gray-800 mb-3">
                GANA: Ganesha...
              </h6>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Ganesha là vị thần đầu voi đáng kính trong Ấn Độ giáo, tượng
                trưng cho tài trí, hạnh phúc và thành công.
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg"
              variants={fadeInUp}
            >
              <h6 className="text-lg font-bold text-gray-800 mb-3">
                Sứ mệnh của 2H GANA VIỆT NAM
              </h6>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Như vậy, sự ra đời của 2H GANA VIỆT NAM là khát vọng về một
                phương pháp giáo dục toàn diện, tập trung vào sự phát triển trí
                tuệ và tiềm năng của học sinh để hội nhập xã hội.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={fadeInUp}
            >
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tìm hiểu thêm
              </motion.button>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Liên hệ chúng tôi
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
