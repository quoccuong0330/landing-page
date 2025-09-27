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

// Experience learning programs data
const experiencePrograms = [
  {
    id: 1,
    title: "CHẮP CÁNH NGÔN NGỮ",
    subtitle: "Hoạt động học tập trải nghiệm",
    description: [
      "Chương trình 3 ngày giúp học sinh phát triển kỹ năng giao tiếp, làm việc nhóm và giải quyết vấn đề thông qua việc làm đồ thủ công và bán hàng cho khách nước ngoài.",
      "Ngày 1: Tập trung, làm quen, làm đồ thủ công, dự tính chi phí và đưa ra giá bán, tập luyện giới thiệu sản phẩm bằng tiếng Anh.",
      "Ngày 2: Bán những món đồ thủ công đã làm cho du khách nước ngoài tại phố đi bộ Hồ Gươm với sự hỗ trợ của giáo viên và tình nguyện viên.",
      "Ngày 3: Tổng kết chi phí và chia lợi nhuận. Học sinh sẽ được chia lại lợi nhuận bán hàng (2H không lấy phần lợi nhuận này).",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Giao tiếp tiếng Anh",
      "Kỹ năng bán hàng",
      "Làm việc nhóm",
      "Quản lý tài chính",
    ],
    objectives: [
      "Hình thành kỹ năng cho học sinh: giao tiếp, làm việc nhóm, giải quyết vấn đề",
      "Tạo sân chơi bổ ích cho học sinh",
      "Giúp học sinh hoàn thiện khả năng tư duy, khám phá xã hội và chạm thực tiễn",
    ],
  },
  {
    id: 2,
    title: "VỀ MIỀN QUAN HỌ",
    subtitle: "Hành trình cảm nhận văn hóa và văn học dân gian Bắc Ninh",
    description: [
      "Chương trình trải nghiệm văn hóa truyền thống tại Bắc Ninh với các hoạt động thực tế và tương tác.",
      "Tham quan Làng Diễm, hát quan họ cùng liền anh, liền chị và thực hiện hoạt động têm trầu cánh phượng.",
      "Tham quan Bảo tàng Bắc Ninh, làm tranh Đông Hồ và tham quan Đền Đô để tìm hiểu lịch sử triều đại nhà Lý.",
      "Một buổi trải nghiệm đầy thú vị và hào hứng với các hoạt động văn hóa truyền thống.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Văn hóa truyền thống",
      "Nghệ thuật dân gian",
      "Lịch sử địa phương",
      "Trải nghiệm thực tế",
    ],
    objectives: [
      "Giúp học sinh hiểu và trân trọng văn hóa truyền thống Việt Nam",
      "Phát triển kỹ năng nghệ thuật và sáng tạo",
      "Tạo kỷ niệm khó phai và bài học sâu sắc",
    ],
  },
  {
    id: 3,
    title: "PHƯƠNG PHÁP HỌC TẬP TÍCH CỰC",
    subtitle: "Theo nghiên cứu của Edgar Dale",
    description: [
      "Theo nghiên cứu của Edgar Dale, não bộ con người không được thiết kế để ghi nhớ tất cả thông tin nhận được.",
      "Các phương pháp học tập phổ biến và đơn giản như đọc, nghe, xem là thụ động và không mang lại kết quả tối ưu; thông tin học theo cách này sẽ biến mất sau chỉ 2 tuần.",
      "Do đó, chúng tôi lựa chọn phát triển các khóa học mà học sinh (HS) trực tiếp tham gia vào quá trình học tập. Điều này giúp học sinh đào sâu kiến thức, rút ra bài học cho bản thân, và thiết lập định hướng và kết quả học tập sau khi trải nghiệm.",
    ],
    image: "/ava_teacher.jpg",
    features: [
      "Học qua trải nghiệm",
      "Tăng khả năng ghi nhớ",
      "Phương pháp tích cực",
      "Tham gia trực tiếp",
    ],
    objectives: [
      "Tăng tỷ lệ ghi nhớ từ 5% (bài giảng) lên 90% (dạy cho người khác)",
      "Phát triển tư duy phản biện và khả năng giải quyết vấn đề",
      "Tạo động lực học tập bền vững",
    ],
  },
];

export default function ExperienceLearningSection() {
  return (
    <>
      <style jsx global>{`
        .experience-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }

        .experience-swiper .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .experience-swiper .swiper-pagination-bullet-active-custom {
          background: #10b981;
          transform: scale(1.25);
        }

        .experience-swiper .swiper-pagination-bullet-custom:hover {
          background: #9ca3af;
        }
      `}</style>
      <motion.section
        className="py-20 px-4 sm:px-8 bg-gradient-to-br from-green-50 to-emerald-50 relative w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Abstract Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 bg-green-500 transform rotate-45 opacity-20"></div>
          <div className="absolute top-20 left-20 w-12 h-12 bg-emerald-500 rounded-full opacity-20"></div>
          <div className="absolute top-32 left-32 w-8 h-8 bg-teal-400 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div className="text-left mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-green-800 mb-2"
              variants={fadeInUp}
            >
              HỌC TẬP TRẢI NGHIỆM
            </motion.h2>
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
              variants={fadeInUp}
            >
              Phương pháp học tập tích cực
            </motion.h3>
          </motion.div>

          {/* Swiper Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".experience-button-next-custom",
                prevEl: ".experience-button-prev-custom",
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
                delay: 6000,
                disableOnInteraction: false,
              }}
              className="experience-swiper"
            >
              {experiencePrograms.map((program, index) => (
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
                        <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-green-200 to-emerald-300 shadow-2xl">
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
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full opacity-80"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
                      </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div className="space-y-6" variants={fadeInRight}>
                      {/* Title */}
                      <motion.div variants={fadeInUp}>
                        <h4 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
                          {program.title}
                        </h4>
                        <p className="text-lg text-green-600 font-medium">
                          {program.subtitle}
                        </p>
                      </motion.div>

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

                      {/* Features */}
                      <motion.div className="space-y-3" variants={fadeInUp}>
                        <h5 className="text-lg font-semibold text-gray-800">
                          Kỹ năng phát triển:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {program.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Objectives */}
                      <motion.div className="space-y-3" variants={fadeInUp}>
                        <h5 className="text-lg font-semibold text-gray-800">
                          Mục tiêu:
                        </h5>
                        <ul className="space-y-2">
                          {program.objectives.map(
                            (objective, objectiveIndex) => (
                              <li
                                key={objectiveIndex}
                                className="text-gray-700 text-sm flex items-start"
                              >
                                <span className="text-green-500 mr-2">•</span>
                                {objective}
                              </li>
                            )
                          )}
                        </ul>
                      </motion.div>

                      {/* CTA Buttons */}
                      <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-6"
                        variants={fadeInUp}
                      >
                        <motion.button
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Tìm hiểu thêm
                        </motion.button>
                        <motion.button
                          className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
              className="experience-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-green-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
              className="experience-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 hover:text-green-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
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
