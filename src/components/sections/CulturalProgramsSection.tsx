"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "./animations";

// Cultural programs data
const culturalPrograms = [
  {
    id: 1,
    title: "HOẠT ĐỘNG VĂN HÓA TRUYỀN THỐNG",
    description: [
      "Các hoạt động đa dạng bao gồm: làm đồ thủ công, tham quan bảo tàng, học hát quan họ, làm tranh Đông Hồ, tham quan đền đài lịch sử.",
      "Học sinh được trải nghiệm trực tiếp các hoạt động văn hóa truyền thống dưới sự hướng dẫn của các nghệ nhân và chuyên gia.",
      "Tạo cơ hội cho học sinh hiểu sâu về lịch sử, văn hóa và nghệ thuật truyền thống Việt Nam.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Văn hóa truyền thống",
      "Nghệ thuật dân gian",
      "Lịch sử địa phương",
      "Trải nghiệm thực tế",
    ],
    activities: [
      "Làm đồ thủ công",
      "Hát quan họ",
      "Làm tranh Đông Hồ",
      "Tham quan bảo tàng",
    ],
  },
  {
    id: 2,
    title: "CHƯƠNG TRÌNH NGHỆ THUẬT VÀ SÁNG TẠO",
    description: [
      "Phát triển tài năng nghệ thuật của học sinh thông qua các hoạt động sáng tạo và biểu diễn.",
      "Bao gồm: vẽ tranh, làm đồ handmade, học nhạc cụ, biểu diễn, nhiếp ảnh và các hoạt động nghệ thuật khác.",
      "Tạo môi trường sáng tạo để học sinh thể hiện tài năng và phát triển sự tự tin trong nghệ thuật.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Nghệ thuật sáng tạo",
      "Biểu diễn",
      "Phát triển tài năng",
      "Môi trường sáng tạo",
    ],
    activities: [
      "Vẽ tranh",
      "Làm đồ handmade",
      "Học nhạc cụ",
      "Nhiếp ảnh",
      "Biểu diễn",
    ],
  },
  {
    id: 3,
    title: "HOẠT ĐỘNG CỘNG ĐỒNG VÀ THIỆN NGUYỆN",
    description: [
      "Tổ chức các hoạt động cộng đồng và thiện nguyện để phát triển tinh thần trách nhiệm xã hội của học sinh.",
      "Học sinh tham gia các dự án cộng đồng, hoạt động từ thiện và các chương trình xã hội có ý nghĩa.",
      "Phát triển kỹ năng lãnh đạo, làm việc nhóm và tinh thần trách nhiệm với cộng đồng.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Trách nhiệm xã hội",
      "Hoạt động cộng đồng",
      "Kỹ năng lãnh đạo",
      "Tinh thần thiện nguyện",
    ],
    activities: [
      "Dự án cộng đồng",
      "Hoạt động từ thiện",
      "Chương trình xã hội",
      "Phát triển lãnh đạo",
    ],
  },
];

export default function CulturalProgramsSection() {
  return (
    <>
      <style jsx global>{`
        .cultural-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }

        .cultural-swiper .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .cultural-swiper .swiper-pagination-bullet-active-custom {
          background: #8b5cf6;
          transform: scale(1.25);
        }

        .cultural-swiper .swiper-pagination-bullet-custom:hover {
          background: #9ca3af;
        }
      `}</style>
      <motion.section
        className="py-20 px-4 sm:px-8 bg-gradient-to-br from-purple-50 to-violet-50 relative w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Abstract Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-16 h-16 bg-purple-500 transform rotate-45 opacity-20"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-violet-500 rounded-full opacity-20"></div>
          <div className="absolute top-32 right-32 w-8 h-8 bg-fuchsia-400 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div className="text-left mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-purple-800 mb-2"
              variants={fadeInUp}
            >
              HOẠT ĐỘNG VĂN HÓA
            </motion.h2>
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
              variants={fadeInUp}
            >
              Trải nghiệm văn hóa và nghệ thuật
            </motion.h3>
          </motion.div>

          {/* Swiper Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".cultural-button-next-custom",
                prevEl: ".cultural-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              className="cultural-swiper"
            >
              {culturalPrograms.map((program, index) => (
                <SwiperSlide key={program.id}>
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Left Column - Program Image */}
                    <motion.div
                      className="relative flex justify-center"
                      variants={fadeInLeft}
                    >
                      <div className="relative">
                        <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-violet-300 shadow-2xl">
                          <Image
                            src={program.image}
                            alt={program.title}
                            width={320}
                            height={320}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-400 rounded-full opacity-80"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-80"></div>
                      </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div className="space-y-6" variants={fadeInRight}>
                      {/* Title */}
                      <motion.h4
                        className="text-xl sm:text-2xl font-bold text-purple-700"
                        variants={fadeInUp}
                      >
                        {program.title}
                      </motion.h4>

                      {/* Description */}
                      <motion.div className="space-y-4" variants={fadeInUp}>
                        {program.description.map(
                          (paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="text-gray-700 text-base sm:text-lg leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          )
                        )}
                      </motion.div>

                      {/* Activities */}
                      <motion.div className="space-y-3" variants={fadeInUp}>
                        <h5 className="text-lg font-semibold text-gray-800">
                          Hoạt động bao gồm:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {program.activities.map((activity, activityIndex) => (
                            <span
                              key={activityIndex}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Features */}
                      <motion.div className="space-y-3" variants={fadeInUp}>
                        <h5 className="text-lg font-semibold text-gray-800">
                          Đặc điểm nổi bật:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {program.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* CTA Buttons */}
                      <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-6"
                        variants={fadeInUp}
                      >
                        <motion.button
                          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Tìm hiểu thêm
                        </motion.button>
                        <motion.button
                          className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Đăng ký ngay
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="cultural-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-purple-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="cultural-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-purple-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
