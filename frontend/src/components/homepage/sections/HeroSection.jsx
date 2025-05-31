"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import HeroBackground from './HeroBackground';
import {
  CONFERENCE_NAME,
  CONFERENCE_ACRONYM,
  CONFERENCE_TAGLINE,
  CONFERENCE_DATES,
  CONFERENCE_LOCATION
} from '@/constants/conferenceData';
import Link from 'next/link';

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floating = {
    rest: { y: 0 },
    hover: {
      y: -5,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative py-25 "
    >
      {/* Enhanced Particle Background */}
      <HeroBackground />

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px] opacity-20 mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-[100px] opacity-20 mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 text-center">
        <motion.div
          className="flex justify-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
        >
          <div className="flex space-x-8 items-center">
            <motion.div
              whileHover="hover"
              variants={floating}
            >
              <Image
                width={200}
                height={200}
                loading='lazy'
                quality={50}
                src="/ism-logo.png"
                alt="IIT ISM Dhanbad Logo"
                className="h-28 w-28 object-contain drop-shadow-lg"
              />
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={floating}
            >
              <Image
                width={200}
                height={200}
                loading='lazy'
                quality={50}
                src="/digimin-logo.png"
                alt="DIGMIN Conference Logo"
                className="h-28 w-28 object-contain drop-shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.span
            className="inline-flex items-center py-2 px-4 text-xs font-bold bg-indigo-600 text-white rounded-full mb-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            INTERNATIONAL CONFERENCE
            <Sparkles className="w-4 h-4 ml-2" />
          </motion.span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <motion.h1
            className="max-w-[90%] mx-auto text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight"
            variants={fadeInUp}
          >
            {CONFERENCE_NAME}
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-600 mb-6"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              {CONFERENCE_ACRONYM}
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {CONFERENCE_TAGLINE}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span className="font-medium text-gray-700">{CONFERENCE_DATES}</span>
          </div>
          <a
            target='_blank'
            href={`https://www.google.com/maps/place/23%C2%B048'49.0%22N+86%C2%B026'25.7%22E/@23.8136887,86.4390989,672m/data=!3m1!1e3!4m4!3m3!8m2!3d23.8136111!4d86.4404722?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D`} 
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <span className="font-medium text-gray-700">{CONFERENCE_LOCATION}</span>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div
            href="#register"
            className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg overflow-hidden group"
            whileHover="hover"
            initial="rest"
            variants={buttonHover}
          >
            <Link href={"/registration"} className="relative z-10 flex items-center justify-center gap-2">
              Register Now <ArrowRight className="w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            href="#about"
            className="relative px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-bold text-lg shadow-sm overflow-hidden group"
            whileHover="hover"
            initial="rest"
            variants={buttonHover}
          >
            <Link href={"/about"} className="relative z-10 flex items-center justify-center gap-2">
              Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </motion.div>
        </motion.div>
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