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

// Upcoming projects data
const upcomingProjects = [
  {
    id: 1,
    title: "LUẬT SƯ TÀI BA",
    subtitle: "Phiên tòa giả định dành cho học sinh lớp 6 - lớp 9",
    month: "THÁNG 8",
    description: [
      "Chương trình học tập thông qua trải nghiệm nghề nghiệp luật sư với phiên tòa giả định.",
      "Học sinh sẽ được hướng dẫn bởi các luật sư chuyên nghiệp và tham gia vào quá trình tranh tụng thực tế.",
      "Phát triển kỹ năng tranh luận, tư duy phản biện và khả năng thuyết trình trước đám đông.",
      "Từ trải nghiệm nghề nghiệp đến học nghị luận xã hội - một cách tiếp cận mới trong giáo dục.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Trải nghiệm nghề nghiệp",
      "Kỹ năng tranh luận",
      "Tư duy phản biện",
      "Thuyết trình",
    ],
    targetAudience: "Học sinh lớp 6 - lớp 9",
    duration: "1 tuần",
  },
  {
    id: 2,
    title: "HOA SỬ VIỆT",
    subtitle: "Từ lịch sử đến trải nghiệm họa sĩ truyện tranh",
    month: "THÁNG 09/2025",
    description: [
      "Chương trình kết hợp học lịch sử Việt Nam với nghệ thuật vẽ truyện tranh.",
      "Học sinh sẽ tìm hiểu về các sự kiện lịch sử quan trọng và thể hiện qua nghệ thuật truyện tranh.",
      "Được hướng dẫn bởi các họa sĩ truyện tranh chuyên nghiệp và các nhà sử học.",
      "Phát triển kỹ năng nghệ thuật, tư duy sáng tạo và hiểu biết sâu sắc về lịch sử dân tộc.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Lịch sử Việt Nam",
      "Nghệ thuật truyện tranh",
      "Sáng tạo",
      "Họa sĩ chuyên nghiệp",
    ],
    targetAudience: "Học sinh cấp 2, cấp 3",
    duration: "2 tuần",
  },
  {
    id: 3,
    title: "CHƯƠNG TRÌNH TÙY CHỈNH",
    subtitle: "Phát triển chương trình theo nhu cầu",
    month: "LIÊN TỤC",
    description: [
      "Bên cạnh những chương trình đã và đang có, chúng tôi sẽ nhận những hợp đồng phát triển chương trình theo nhu cầu, mong muốn của Giáo viên và Học sinh.",
      "Dựa trên định hướng trải nghiệm nghề, kỹ năng, STEM, văn hóa và các lĩnh vực khác.",
      "Đội ngũ chuyên gia sẽ thiết kế chương trình phù hợp với mục tiêu giáo dục cụ thể của từng trường, lớp học.",
      "Tạo ra những trải nghiệm học tập độc đáo và phù hợp với nhu cầu thực tế của học sinh.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Tùy chỉnh theo nhu cầu",
      "Chuyên gia thiết kế",
      "Linh hoạt",
      "Đa dạng lĩnh vực",
    ],
    targetAudience: "Tất cả đối tượng",
    duration: "Theo yêu cầu",
  },
];

export default function UpcomingProjectsSection() {
  return (
    <>
      <style jsx global>{`
        .projects-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }

        .projects-swiper .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .projects-swiper .swiper-pagination-bullet-active-custom {
          background: #dc2626;
          transform: scale(1.25);
        }

        .projects-swiper .swiper-pagination-bullet-custom:hover {
          background: #9ca3af;
        }
      `}</style>
      <motion.section
        className="py-20 px-4 sm:px-8 bg-gradient-to-br from-red-50 to-rose-50 relative w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Abstract Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 bg-red-500 transform rotate-45 opacity-20"></div>
          <div className="absolute top-20 left-20 w-12 h-12 bg-rose-500 rounded-full opacity-20"></div>
          <div className="absolute top-32 left-32 w-8 h-8 bg-pink-400 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div className="text-left mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-red-800 mb-2"
              variants={fadeInUp}
            >
              DỰ ÁN SẮP TỚI
            </motion.h2>
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
              variants={fadeInUp}
            >
              Chương trình mới và sáng tạo
            </motion.h3>
          </motion.div>

          {/* Swiper Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".projects-button-next-custom",
                prevEl: ".projects-button-prev-custom",
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
                delay: 8000,
                disableOnInteraction: false,
              }}
              className="projects-swiper"
            >
              {upcomingProjects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Left Column - Project Image */}
                    <motion.div
                      className="relative flex justify-center"
                      variants={fadeInLeft}
                    >
                      <div className="relative">
                        <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-red-200 to-rose-300 shadow-2xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={320}
                            height={320}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                        </div>
                        {/* Month Badge */}
                        <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {project.month}
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose-400 rounded-full opacity-80"></div>
                      </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div className="space-y-6" variants={fadeInRight}>
                      {/* Title */}
                      <motion.div variants={fadeInUp}>
                        <h4 className="text-xl sm:text-2xl font-bold text-red-700 mb-2">
                          {project.title}
                        </h4>
                        <p className="text-lg text-red-600 font-medium mb-2">
                          {project.subtitle}
                        </p>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                            {project.targetAudience}
                          </span>
                          <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded">
                            {project.duration}
                          </span>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.div className="space-y-4" variants={fadeInUp}>
                        {project.description.map(
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

                      {/* Features */}
                      <motion.div className="space-y-3" variants={fadeInUp}>
                        <h5 className="text-lg font-semibold text-gray-800">
                          Đặc điểm nổi bật:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
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
                          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Đăng ký sớm
                        </motion.button>
                        <motion.button
                          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Tìm hiểu thêm
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="projects-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-red-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
              className="projects-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-red-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
