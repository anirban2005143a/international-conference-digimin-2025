"use client"
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, buttonHover } from '../../../utils/animations';
import { 
  CONFERENCE_NAME, 
  CONFERENCE_ACRONYM, 
  CONFERENCE_TAGLINE, 
  CONFERENCE_DATES, 
  CONFERENCE_LOCATION 
} from '../../../constants/conferenceData';

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
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800"
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
            <img 
              src="/logo1.jpg" 
              alt="IIT ISM Dhanbad Logo" 
              className="h-28 w-28 object-contain"
            />
            <img 
              src="/logo2.jpg" 
              alt="DIGMIN Conference Logo" 
              className="h-28 w-28 object-contain"
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
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-white text-indigo-900 rounded-full mb-2">
            INTERNATIONAL CONFERENCE
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4  leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {CONFERENCE_NAME}
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-indigo-200">
            ({CONFERENCE_ACRONYM})
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {CONFERENCE_TAGLINE}
        </motion.p>

        <motion.div 
          className="text-indigo-200 mb-10 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{CONFERENCE_DATES}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
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
            className="px-8 py-3 bg-white text-indigo-900 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            whileHover="hover"
            initial="rest"
            variants={buttonHover}
          >
            Register Now
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white/10 transition-colors"
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
