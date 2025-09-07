"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function FooterSection() {
  return (
    <motion.footer
      className="bg-blue-600 py-16 px-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            variants={fadeInUp}
            transition={fadeInUp}
          >
            <h3 className="text-white text-2xl font-bold mb-4">Univerz</h3>
            <p className="text-white text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              massa sit amet nisi blandit vehicula adipiscing elit.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeInUp} transition={fadeInUp}>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Our Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Pages Column */}
          <motion.div variants={fadeInUp} transition={fadeInUp}>
            <h4 className="text-white text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  CTA
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Follow Us Column */}
          <motion.div variants={fadeInUp} transition={fadeInUp}>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Behance
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
