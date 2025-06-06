"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, } from 'lucide-react';
import HeroBackground from './HeroBackground';
import {
  CONFERENCE_NAME,
  CONFERENCE_TAGLINE,
} from '@/constants/conferenceData';
import Link from 'next/link';

const HeroSection = () => {

  const continerRef = useRef(null)

  return (
    <section
      ref={continerRef}
      id="home"
      className="relative py-25 "
    >
      {/* Enhanced Particle Background */}
      <HeroBackground continerRef={continerRef} />


      <div className="px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Enhanced with staggered children animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >

            {/* Two small images with animation */}
            <motion.div
              className="flex sm:justify-start justify-between gap-10 mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }
              }}
            >
              <motion.img
                src="/ism-logo.png" // Replace with your image path
                alt="Logo 1"
                className="w-25 h-25 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.img
                src="/centenry_logo.png" // Replace with your image path
                alt="Logo 2"
                className="w-25 h-25 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.1 // Slight delay after images appear
                  }
                }
              }}
              className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4"
            >
              {CONFERENCE_NAME}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.6 } }
              }}
              className="text-gray-700 text-base mb-6"
            >
              {CONFERENCE_TAGLINE}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.4 } }
              }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mb-8"
            >
              <motion.span whileHover={{ scale: 1.02 }} className=' flex items-center gap-1.5 hover:text-indigo-600'>
                <Calendar className=' w-5 h-5' />
                September 12–13, 2025
              </motion.span>
              <a
                target='_blank'
                href='https://maps.app.goo.gl/dAuYdJb6HSfQn3q49'
                whileHover={{ scale: 1.02 }} className=' flex items-center gap-1.5 cursor-pointer hover:text-indigo-600'>
                <MapPin className=' w-5 h-5' />
                GJLT, IIT-ISM Dhanbad, India
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.5
                  }
                }
              }}
              className="flex  items-center flex-row gap-4"
            >
              <Link
                href={"/registration"}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 cursor-pointer text-white sm:px-6 px-3 py-3 rounded-lg font-medium hover:bg-indigo-700 "
              >
                Register Now
              </Link>
              <Link
                href={"/about"}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(79, 70, 229, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
                className="border cursor-pointer border-indigo-600 text-indigo-600 sm:px-6 px-3 py-3 rounded-lg font-medium hover:bg-indigo-50 "
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Card with sophisticated animations */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 5 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateY: 0,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: 0.3
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className=" backdrop-blur-sm bg-white/50 rounded-2xl shadow-xl hover:shadow-2xl p-6 md:p-8 border border-gray-100 transition-shadow"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6 }
              }}
              className="mb-6"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">Topics of Interest</h2>
              <motion.ul
                className="text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside"
              >
                {[
                  "AI & ML: Predictive maintenance",
                  "IoT & Connected Mining Systems",
                  "Green Technologies & Eco-Mining",
                  "Digital Twins & Virtual Simulations",
                  "Automation & Safety Monitoring",
                  "Smart Mining Infrastructure"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.7 + i * 0.1 }
                    }}
                    className=""
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.2 }
              }}
              className="border-t pt-5"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">Call for Papers</h3>
              <p className="text-sm text-gray-700 mb-3">
                Submit original work on the theme of digital transformation in mining. Academicians, researchers, and industry professionals are welcome.
              </p>
              <Link
                href={"/callforpapers"}
                className="text-indigo-600 font-medium cursor-pointer text-sm hover:translate-x-1.5 flex items-center gap-1 transition-transform"
              >
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ➤
                </motion.span>
                Submit Your Abstract
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 1.4, type: "spring" }
              }}
              className="mt-6 bg-indigo-50 rounded-md p-3 text-sm text-indigo-900 shadow-sm"
            >
              🎉 Celebrating 100 Years of Excellence at IIT (ISM) Dhanbad with transformative discussions on the future of mining.
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <ChevronDown className="w-8 h-8 text-indigo-500" />
      </motion.div>
    </section>
  );
};

export default HeroSection;