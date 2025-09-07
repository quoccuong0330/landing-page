"use client";

import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";
import { useState, useEffect } from "react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Carmen Hodkiewicz",
    title: "Global Markets Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit.",
  },
  //   {
  //     id: 2,
  //     name: "Sarah Johnson",
  //     title: "Software Developer",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  //     text: "The education I received at Univerz University was exceptional. The professors were knowledgeable and supportive throughout my journey.",
  //   },
  {
    id: 3,
    name: "Michael Chen",
    title: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Univerz University provided me with the skills and knowledge needed to excel in my career. Highly recommended!",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "The innovative approach to learning and the state-of-the-art facilities made my time at Univerz truly memorable.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false); // Stop auto play when user interacts
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false); // Stop auto play when user interacts
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto play when user interacts
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.section
      className="py-20 px-4 sm:px-8 bg-blue-600 relative w-full"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-30 w-full h-full">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(255, 255, 255, 0.1) 100px
            )`,
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          variants={fadeInUp}
        >
          What Our Student Say About Us
        </motion.h2>
        <motion.p
          className="text-white text-base sm:text-lg mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          massa sit amet nisi blandit vehicula adipiscing elit.
        </motion.p>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white bg-opacity-10 rounded-2xl p-6 sm:p-8 mb-8 relative backdrop-blur-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 border-2 border-orange-400"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Name and Title */}
                <motion.h3
                  className="text-blue-600 text-lg sm:text-xl font-bold mb-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {currentTestimonial.name}
                </motion.h3>
                <motion.p
                  className="text-blue-200 text-sm sm:text-base mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {currentTestimonial.title}
                </motion.p>

                {/* Testimonial Text */}
                <motion.p
                  className="text-blue-600 text-sm sm:text-base leading-relaxed max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {currentTestimonial.text}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-8">
            <motion.button
              className="text-white text-3xl sm:text-4xl hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
            >
              ‹
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transipaution-colors ${
                    index === currentIndex
                      ? "bg-blue-600 border-2 border-white"
                      : "bg-white bg-opacity-50"
                  }`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>

            <motion.button
              className="text-white text-3xl sm:text-4xl hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
            >
              ›
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
