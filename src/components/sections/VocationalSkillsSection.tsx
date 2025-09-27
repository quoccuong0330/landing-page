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

// Vocational skills data
const vocationalSkills = [
  {
    id: 1,
    title: "KỸ NĂNG THỦ CÔNG VÀ NGHỆ THUẬT",
    description: [
      "Bao gồm: Makeup, may vá cơ bản, thêu thùa, điện tử linh kiện, nhạc lý, nhảy, hát, nhạc cụ, nhiếp ảnh, sử dụng dao kéo trong nhà bếp, tỉa hoa quả,...",
      "Tổ chức các khóa học kỹ năng ứng dụng nghề cơ bản giúp các em kỹ năng cần có trong cuộc sống, sát thực tiễn.",
      "Lớp học đa dạng cho mọi lứa tuổi học sinh cấp 2, cấp 3 với sự hướng dẫn tới từ những giáo viên chân thành, nhiệt huyết, năng động, sáng tạo, giàu kinh nghiệm của công ty.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Kỹ năng thực tế",
      "Giáo viên chuyên nghiệp",
      "Đa dạng lứa tuổi",
    ],
    skills: ["Makeup", "May vá", "Thêu thùa", "Nhiếp ảnh", "Nấu ăn"],
  },
  {
    id: 2,
    title: "KỸ NĂNG NGHỆ THUẬT VÀ BIỂU DIỄN",
    description: [
      "Phát triển tài năng nghệ thuật của học sinh thông qua các hoạt động thực tế và sáng tạo.",
      "Học sinh được hướng dẫn bởi các nghệ sĩ chuyên nghiệp và giáo viên có kinh nghiệm trong lĩnh vực nghệ thuật.",
      "Tạo cơ hội cho học sinh thể hiện tài năng và phát triển sự tự tin trong biểu diễn.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Phát triển tài năng",
      "Nghệ sĩ chuyên nghiệp",
      "Biểu diễn thực tế",
    ],
    skills: ["Nhạc lý", "Nhảy", "Hát", "Nhạc cụ", "Biểu diễn"],
  },
  {
    id: 3,
    title: "KỸ NĂNG KỸ THUẬT VÀ CÔNG NGHỆ",
    description: [
      "Đào tạo kỹ năng kỹ thuật cơ bản và ứng dụng công nghệ trong cuộc sống hàng ngày.",
      "Học sinh được tiếp cận với các thiết bị điện tử, linh kiện và học cách sử dụng an toàn.",
      "Phát triển tư duy logic và khả năng giải quyết vấn đề thông qua các dự án thực tế.",
    ],
    image: "/ava_teacher.jpg",
    features: ["Kỹ thuật cơ bản", "An toàn điện tử", "Tư duy logic"],
    skills: ["Điện tử", "Linh kiện", "Kỹ thuật", "Công nghệ", "Sửa chữa"],
  },
];

export default function VocationalSkillsSection() {
  return (
    <>
      <style jsx global>{`
        .skills-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }

        .skills-swiper .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .skills-swiper .swiper-pagination-bullet-active-custom {
          background: #f59e0b;
          transform: scale(1.25);
        }

        .skills-swiper .swiper-pagination-bullet-custom:hover {
          background: #9ca3af;
        }
      `}</style>
      <motion.section
        className="py-20 px-4 sm:px-8 bg-gradient-to-br from-orange-50 to-amber-50 relative w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Abstract Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-16 h-16 bg-orange-500 transform rotate-45 opacity-20"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-amber-500 rounded-full opacity-20"></div>
          <div className="absolute top-32 right-32 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div className="text-left mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-orange-800 mb-2"
              variants={fadeInUp}
            >
              KỸ NĂNG ỨNG DỤNG NGHỀ
            </motion.h2>
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
              variants={fadeInUp}
            >
              Phát triển kỹ năng thực tế
            </motion.h3>
          </motion.div>

          {/* Swiper Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".skills-button-next-custom",
                prevEl: ".skills-button-prev-custom",
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
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="skills-swiper"
            >
              {vocationalSkills.map((skill, index) => (
                <SwiperSlide key={skill.id}>
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Left Column - Skill Image */}
                    <motion.div
                      className="relative flex justify-center"
                      variants={fadeInLeft}
                    >
                      <div className="relative">
                        <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-200 to-amber-300 shadow-2xl">
                          <Image
                            src={skill.image}
                            alt={skill.title}
                            width={320}
                            height={320}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-80"></div>
                      </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div className="space-y-6" variants={fadeInRight}>
                      {/* Title */}
                      <motion.h4
                        className="text-xl sm:text-2xl font-bold text-orange-700"
                        variants={fadeInUp}
                      >
                        {skill.title}
                      </motion.h4>

                      {/* Description */}
                      <motion.div className="space-y-4" variants={fadeInUp}>
                        {skill.description.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-gray-700 text-base sm:text-lg leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </motion.div>

                      {/* Skills Tags */}
                      <motion.div className="space-y-3" variants={fadeInUp}>
                        <h5 className="text-lg font-semibold text-gray-800">
                          Kỹ năng bao gồm:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {skill.skills.map((skillName, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                            >
                              {skillName}
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
                          {skill.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium"
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
                          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Tìm hiểu thêm
                        </motion.button>
                        <motion.button
                          className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
              className="skills-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-orange-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
              className="skills-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-orange-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
