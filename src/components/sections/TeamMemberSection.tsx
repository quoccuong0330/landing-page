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

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Cô Nguyễn Thị Loan",
    image: "/ava_teacher.jpg",
    description: [
      "Hiện giảng dạy tại THCS Nila Hà Nội và Trung tâm GDNN – GDTX Nguyễn Văn Tố, Hoàn Kiếm, Với hơn 5 năm kinh nghiệm và được đào tạo chính quy tại Trường Đại học Giáo dục – ĐHQGHN, cô đã tiếp cận được nhiều đối tượng học sinh, thấu hiểu nhu cầu học tập và tâm lý lứa tuổi.",
      "Luôn nhiệt huyết, sáng tạo, cô đã giúp nhiều học sinh tiến bộ trong các môn học, trong đó có em đạt giải Nhất học sinh giỏi. Chính sự tận tâm ấy là nền tảng cho những chương trình giáo dục hạnh phúc tại 2H GANA.",
    ],
  },
  {
    id: 2,
    name: "Thầy Trần Văn Minh",
    image: "/ava_teacher.jpg",
    description: [
      "Với hơn 8 năm kinh nghiệm trong lĩnh vực giáo dục, thầy Minh đã từng giảng dạy tại nhiều trường THPT danh tiếng tại Hà Nội. Thầy có chuyên môn sâu về Toán học và Vật lý, đã giúp hàng trăm học sinh đạt điểm cao trong các kỳ thi quan trọng.",
      "Phương pháp giảng dạy của thầy luôn được học sinh yêu thích bởi sự dễ hiểu, thực tế và gần gũi. Thầy tin rằng mỗi học sinh đều có tiềm năng riêng và cần được khơi dậy đúng cách.",
    ],
  },
  {
    id: 3,
    name: "Cô Lê Thị Hương",
    image: "/ava_teacher.jpg",
    description: [
      "Chuyên gia tâm lý học đường với hơn 6 năm kinh nghiệm, cô Hương đã hỗ trợ nhiều học sinh vượt qua khó khăn trong học tập và cuộc sống. Cô có bằng Thạc sĩ Tâm lý học từ Đại học Quốc gia Hà Nội.",
      "Cô luôn tâm niệm rằng giáo dục không chỉ là truyền đạt kiến thức mà còn là nuôi dưỡng tâm hồn và phát triển toàn diện nhân cách của học sinh. Cô đã xây dựng nhiều chương trình tư vấn tâm lý hiệu quả cho học sinh.",
    ],
  },
];

export default function TeamMemberSection() {
  return (
    <>
      <style jsx global>{`
        .team-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }

        .team-swiper .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .team-swiper .swiper-pagination-bullet-active-custom {
          background: #2563eb;
          transform: scale(1.25);
        }

        .team-swiper .swiper-pagination-bullet-custom:hover {
          background: #9ca3af;
        }
      `}</style>
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
          <div className="absolute top-10 right-10 w-16 h-16 bg-orange-500 transform rotate-45 opacity-20"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-purple-500 rounded-full opacity-20"></div>
          <div className="absolute top-32 right-32 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div className="text-left mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2"
              variants={fadeInUp}
            >
              2H GANA
            </motion.h2>
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
              variants={fadeInUp}
            >
              Quản lý và phát triển chương trình
            </motion.h3>
          </motion.div>

          {/* Swiper Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
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
              className="team-swiper"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={member.id}>
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Left Column - Profile Image */}
                    <motion.div
                      className="relative flex justify-center"
                      variants={fadeInLeft}
                    >
                      <div className="relative">
                        <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-pink-200 to-purple-300 shadow-2xl">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={320}
                            height={320}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div className="space-y-6" variants={fadeInRight}>
                      {/* Name */}
                      <motion.h4
                        className="text-2xl sm:text-3xl font-bold text-gray-700"
                        variants={fadeInUp}
                      >
                        {member.name}
                      </motion.h4>

                      {/* Description */}
                      <motion.div className="space-y-4" variants={fadeInUp}>
                        {member.description.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-gray-700 text-base sm:text-lg leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
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
                          Xem thêm thông tin
                        </motion.button>
                        <motion.button
                          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Liên hệ
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-blue-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
              className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-blue-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
