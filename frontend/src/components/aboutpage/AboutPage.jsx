"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, useScroll, useAnimation, } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Award, Calendar, MapPin, Sparkles, TrendingUp, Globe, Zap } from "lucide-react"

export default function AboutPage() {
  const controls = useAnimation()

  // Section animation variants
  const sectionVariants = useMemo(() => {
    return ({
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    })
  }, [])

  // Hero content animation
  const floatVariants = useMemo(() => {
    return ({
      initial: { y: 0 },
      animate: {
        y: [0, -10, 0], // gentle float
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    })
  }, []);

  const containerVariants = useMemo(() => {
    return ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.25,
          ease: "easeOut",
          duration: 0.6,
        },
      },
    })
  }, [])

  const itemVariants = useMemo(() => {
    return ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start("visible")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] pt-[80px] flex items-start justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden px-6 sm:px-12 lg:px-24">

        {/* Floating circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-5 h-5 bg-slate-300 rounded-full shadow-md opacity-70"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "0s" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-10 h-10 bg-slate-200 rounded-full shadow-md opacity-60"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "1.5s" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-slate-300 rounded-full shadow-md opacity-70"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "3s" }}
        />

        {/* Main Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center translate-y-[10%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center px-5 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 shadow-sm"
            variants={itemVariants}
          >
            <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
            Centenary Celebrations 2025
          </motion.div>

          <motion.h1
            className="mt-8 font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl text-gray-900"
            variants={itemVariants}
          >
            DIGMIN
            <span className="block mt-2 text-4xl sm:text-5xl font-bold text-slate-600">
              2025
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl font-light text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Digital Intelligence for Green Mining
            <span className="block mt-2 text-base sm:text-lg font-medium text-gray-600">
              and Industrial Networks
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-10"
            variants={itemVariants}
          >
            <div className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 text-sm font-medium">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              2025 Conference
            </div>
            <div className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 text-sm font-medium">
              <MapPin className="w-5 h-5 mr-2 text-green-600" />
              IIT (ISM) Dhanbad
            </div>
            <div className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 text-sm font-medium">
              <Award className="w-5 h-5 mr-2 text-yellow-600" />
              Global Ranking #20
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-10 h-10 text-gray-500 opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Conference Concept Section */}
        <motion.section
          id="conference-concept"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="lg:grid lg:grid-cols-5">
            <div className="lg:col-span-2 relative h-48 sm:h-64 lg:h-auto order-1 lg:order-2">
              <Image
                loading="lazy"
                src="/conference.avif"
                alt="Conference Concept"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute lg:bottom-4 bottom-2 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 lg:py-6 py-3 ">
                  <h3 className="font-medium text-sm">Innovation Hub</h3>
                  <p className="text-xs text-gray-600">Future of mining technology</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 px-3 py-6 lg:p-6 order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Conference Overview
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Conference <span className="text-blue-600">Concept</span>
              </h2>

              <div className="space-y-4 text-gray-700">
                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  <p className="font-medium text-blue-900">
                    Digital Intelligence for Green Mining and Industrial Networks (DIGMIN) – 2025
                  </p>
                  <p className="text-sm">
                    India's flagship conference at the intersection of digitalization and sustainable mining.
                  </p>
                </div>

                <p>
                  DIGMIN-2025 focuses on accelerating digital transformation in mining through:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["AI/ML Systems", "Mining 5.0", "Sustainability"].map((item, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg text-center border border-gray-200">
                      <div className="flex justify-center mb-1">
                        {i === 0 ? <Zap className="w-5 h-5 text-blue-600" /> :
                          i === 1 ? <TrendingUp className="w-5 h-5 text-green-600" /> :
                            <Globe className="w-5 h-5 text-yellow-600" />}
                      </div>
                      <span className="text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About IIT ISM Section */}
        <motion.section
          id="iit-dhanbad"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="lg:grid lg:grid-cols-5 lg:gap-0">
            <div className="lg:col-span-2 relative h-48 sm:h-64 lg:h-auto order-1 ">
              <Image
                loading="lazy"
                src="/iitism.jpg"
                alt="IIT ISM Dhanbad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 lg:bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 lg:py-6 py-3">
                  <h3 className="font-medium text-sm">Since 1926</h3>
                  <p className="text-xs text-gray-600">Century of excellence</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 px-3 py-6 lg:p-6 order-2">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                  Institute Heritage
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                About <span className="text-yellow-600">IIT (ISM) Dhanbad</span>
              </h2>

              <div className="space-y-4 text-gray-700">
                <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-500">
                  <p className="font-medium text-yellow-900">
                    Located in India's prime coking coal belt, 260 km from Kolkata
                  </p>
                </div>

                <p className="text-sm">
                  The Indian School of Mines was officially inaugurated on <strong className="text-yellow-600">December 9th, 1926</strong>,
                  by Lord Irwin, the then Viceroy of India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-yellow-50 px-3 py-6 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-sm text-yellow-900 mb-1">2016 Transformation</h4>
                    <p className="text-xs">Granted IIT status by Government of India</p>
                  </div>
                  <div className="bg-blue-50 px-3 py-6 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-sm text-blue-900 mb-1">Comprehensive Education</h4>
                    <p className="text-xs">B.Tech, M.Tech, MBA, and Ph.D. programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* about mining department section  */}
        <motion.section
          id="mining-department"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mt-10"
        >
          <div className="lg:grid lg:grid-cols-5 lg:gap-0">

            {/* Image side */}
            <div className="lg:col-span-2 relative h-48 sm:h-64 lg:h-auto order-1 lg:order-2">
              <Image
                loading="lazy"
                src="/ism-mining.webp" // replace with your image path
                alt="Mining Department"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 lg:bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 lg:py-6 py-3">
                  <h3 className="font-medium text-sm text-blue-700">Mining Engineering Dept.</h3>
                  <p className="text-xs text-gray-600">Excellence in mining education & research</p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-3 px-3 py-6 lg:p-6 order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Department Highlights
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                About the <span className="text-blue-600">Mining Department</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                {/* Card 1 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <Globe className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Established in 1926</h4>
                    <p className="text-sm">
                      Founded by Lord Irwin, the then Viceroy of India, the department has a rich legacy.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <Award className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">IIT Status Since 2016</h4>
                    <p className="text-sm">
                      Became part of IIT (ISM) Dhanbad, enhancing its research and academic stature.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <Zap className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Largest Dept. of Its Kind</h4>
                    <p className="text-sm">
                      Extensive teaching, research, and industrial collaboration across mining sectors.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <TrendingUp className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Top Global Ranking</h4>
                    <p className="text-sm">
                      Ranked 20th worldwide in QS World University Rankings by Subject 2025 for Mineral & Mining Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>



        {/* Centenary Celebration Banner */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-blue-100 via-sky-100 to-purple-100 rounded-2xl p-6 text-gray-800 shadow-md border border-gray-200 overflow-hidden">

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-yellow-500 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                  Centenary Celebrations
                </h3>
                <Sparkles className="w-7 h-7 text-yellow-500 ml-3" />
              </div>

              <p className="text-sm sm:text-base max-w-3xl mx-auto mb-4 text-gray-700">
                <strong className="text-blue-700">DIGMIN-2025</strong> will be a landmark conference organized as part of the
                <strong className="text-blue-700"> Centenary Celebrations of IIT (ISM) Dhanbad</strong>,
                commemorating 100 years of excellence.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-4 py-1.5 bg-white rounded-full border border-gray-300 text-xs sm:text-sm text-gray-700 shadow-sm">
                  1926 - 2026
                </div>
                <div className="px-4 py-1.5 bg-white rounded-full border border-gray-300 text-xs sm:text-sm text-gray-700 shadow-sm">
                  100 Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}