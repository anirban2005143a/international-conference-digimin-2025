"use client"
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, buttonHover } from '@/utils/animations';
import {
  CONFERENCE_NAME,
  CONFERENCE_ACRONYM,
  CONFERENCE_TAGLINE,
  CONFERENCE_DATES,
  CONFERENCE_LOCATION
} from '@/constants/conferenceData';
import Image from 'next/image';
import {  Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {

  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      scale: Math.random() * 0.5 + 0.5,
      animateX: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
      animateY: [
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
      size: Math.random() * 20 + 5,
    }));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center py-20 overflow-hidden "
    >
      {/* Particle animation background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {particles.map((p, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-blue-400 opacity-20"
              initial={{ x: p.initialX, y: p.initialY, scale: p.scale }}
              animate={{ x: p.animateX, y: p.animateY }}
              transition={{ duration: 20 + Math.random() * 30, repeat: Infinity, ease: "linear" }}
              style={{ width: `${p.size}px`, height: `${p.size}px` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="flex justify-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex space-x-8 items-center">
            <Image
              width={200}
              height={200}
              loading='lazy'
              quality={50}
              src="/ism-logo.png"
              alt="IIT ISM Dhanbad Logo"
              className="h-28 w-28 object-contain text-white text-sm "
            />
            <Image
              width={200}
              height={200}
              loading='lazy'
              quality={50}
              src="/digimin-logo.png"
              alt="DIGMIN Conference Logo"
              className="h-28 w-28 object-contain text-white text-sm "
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-4 inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-indigo-50/50 text-indigo-900 border border-indigo-400 rounded-full mb-2">
            INTERNATIONAL CONFERENCE
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-3xl lg:text-5xl md:max-w-[90%] mx-auto font-semibold mb-4 text-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {CONFERENCE_NAME}
          <span className="block text-2xl md:text-3xl lg:text-3xl mt-8 font-bold text-indigo-700">
            ({CONFERENCE_ACRONYM})
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-600 max-w-[95%] mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {CONFERENCE_TAGLINE}
        </motion.p>

        <motion.div
          className="text-gray-600 mb-15 gap-1 text-sm flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-1">
           <Calendar/>
            <span>{CONFERENCE_DATES}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MapPin/>
            <span>{CONFERENCE_LOCATION}</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="#register"
            className="px-8 py-3 bg-indigo-50 text-indigo-900 rounded-md font-bold text-lg hover:bg-indigo-50/80 transition-colors shadow-lg"
            whileHover="hover"
            initial="rest"
            variants={buttonHover}
          >
            Register Now
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-3 border-2 border-gray-100 bg-slate-100  rounded-md font-bold text-lg hover:bg-slate-100/50 transition-colors"
            whileHover="hover"
            initial="rest"
            variants={buttonHover}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
