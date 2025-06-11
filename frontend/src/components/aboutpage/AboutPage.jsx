"use client"

import { useEffect, useMemo } from "react"
import { motion, useAnimation, } from "framer-motion"
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
    <div className=" bg-gray-50 relative overflow-hidden py-[120px]">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center  overflow-visible px-6 sm:px-12 lg:px-24 ">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating gradient circles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-40 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.4 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full opacity-40 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.4 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 5
            }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-indigo-300 rounded-full opacity-70`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [0, -20, 0, -40, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 mr-2 text-yellow-500 animate-pulse" />
            Centenary Celebrations 2025
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mt-6 font-bold tracking-tight text-5xl md:text-6xl  text-gray-900"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              DIGMIN
            </span>
            <motion.span
              className="block mt-4 text-4xl sm:text-5xl font-bold text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              2025
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            className="mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className=" font-light text-gray-700 leading-relaxed">
              <span className="font-medium text-base text-indigo-500 ">
                 Landmark Event: Part of IIT (ISM) Dhanbad's Centenary Celebrations, marking 100 years of excellence in mining education and research.
              </span>
           
            </p>
          </motion.div>

          {/* Info Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              className="flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm text-gray-700 text-sm font-medium hover:shadow-md transition-all"
              whileHover={{ y: -5 }}
            >
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              <span>September 12, 2025</span>
            </motion.div>
            <motion.div
              className="flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm text-gray-700 text-sm font-medium hover:shadow-md transition-all"
              whileHover={{ y: -5 }}
            >
              <MapPin className="w-5 h-5 mr-2 text-green-600" />
              <span>IIT (ISM) Dhanbad, India</span>
            </motion.div>
            <motion.div
              className="flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm text-gray-700 text-sm font-medium hover:shadow-md transition-all"
              whileHover={{ y: -5 }}
            >
              <Award className="w-5 h-5 mr-2 text-yellow-600" />
              <span>QS World Ranking #20</span>
            </motion.div>
          </motion.div>

          {/* Scroll Down Arrow */}
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
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-16 space-y-16">
        {/* Conference Concept Section */}
        <motion.section
          id="conference-concept"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="bg-white rounded-2xl  shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="">
            <div className=" px-3 py-6 lg:p-6 ">
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
                <div className="bg-blue-50 sm:p-4 p-2 rounded-xl border-l-4 border-blue-500">
                  <div className="text-center mb-8 pb-6 border-b-2 border-blue-800">
                    <p className="text-lg text-blue-700">
                      Digital Intelligence for Green Mining and Industrial Networks
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white sm:p-6 p-3 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold text-blue-800 mb-3">
                        Conference Overview
                      </h2>
                      <ul className="space-y-3 list-disc pl-5">
                        <li>
                          <span className="font-medium">India's Flagship Conference</span> on digitalization,
                          intelligent automation, and sustainable mining practices.
                        </li>
                        <li>
                          <span className="font-medium">Premier Conference Focus:</span> Accelerating digital
                          transformation in mining through:
                          <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li>Digitalization</li>
                            <li>Intelligent Systems</li>
                            <li>Green Technologies</li>
                            <li>Mining 5.0</li>
                            <li>Industrial Integration</li>
                            <li>Next-generation Infrastructure</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white sm:p-6 p-3 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold text-blue-800 mb-3">
                        Conference Details
                      </h2>
                      <ul className="space-y-3 list-disc pl-5">
                        <li>
                          <span className="font-medium">Participants:</span> Mining professionals, regulators,
                          researchers, technologists, sustainability experts, policymakers, and industry leaders.
                        </li>
                        <li>
                          <span className="font-medium">Key Themes:</span>
                          <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li>AI/ML-driven risk prediction</li>
                            <li>Robotics and IoT-enabled automation</li>
                            <li>Eco-efficient mining practices</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white sm:p-6 p-3 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold text-blue-800 mb-3">
                        Conference Goals
                      </h2>
                      <ul className="space-y-3 list-disc pl-5">
                        <li>
                          <span className="font-medium">Collaborative Platform:</span> Panel discussions, tech
                          exhibitions, and policy roundtables for public institutions, private players, and startups.
                        </li>
                        <li>
                          <span className="font-medium">Goals:</span>
                          <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li>Unlock opportunities via smart digital systems</li>
                            <li>Drive sustainable resource management</li>
                            <li>Build a resilient, tech-integrated, and eco-friendly mining ecosystem in India</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">Landmark Event:</span> Part of <span className="font-semibold">IIT (ISM) Dhanbad's Centenary Celebrations</span>,
                          marking 100 years of excellence in mining education and research.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>



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
                    Situated in India's prime coking coal belt, 260 km from Kolkata city
                  </p>
                </div>

                <p className="text-sm">
                  The Indian Institute of Technology (Indian School of Mines) Dhanbad offers all the amenities of a world-class academic institution and is fully residential. The Indian School of Mines was officially inaugurated on <strong className="text-yellow-600">December 9th, 1926</strong>, by Lord Irwin, the then Viceroy of India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-yellow-50 px-3 py-6 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-sm text-yellow-900 mb-1">IIT Status</h4>
                    <p className="text-xs">Granted on September 06, 2016 by Government of India</p>
                  </div>
                  <div className="bg-amber-50 px-3 py-6 rounded-lg border border-amber-200">
                    <h4 className="font-medium text-sm text-amber-900 mb-1">Academic Programs</h4>
                    <p className="text-xs">B.Tech, Integrated M.Tech, M.Sc, MBA, and Ph.D. programs</p>
                  </div>
                </div>

                <p className="text-sm">
                  Established to meet the demand for trained manpower in mining activities, the institute has evolved into a comprehensive technology education institute, making significant contributions to mining, minerals, petroleum, and groundwater exploration in India.
                </p>
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
                About the <span className="text-blue-600">Department of Mining Engineering</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                {/* Card 1 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <Globe className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Established in 1926</h4>
                    <p className="text-sm">
                      Founded by Lord Irwin, the then Viceroy of India, as part of Indian School of Mines (ISM), Dhanbad.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <Award className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">IIT Status Since 2016</h4>
                    <p className="text-sm">
                      Renamed as IIT (ISM) Dhanbad under the Indian Institute of Technology system.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <Zap className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">India's Largest Department</h4>
                    <p className="text-sm">
                      The country's largest department of its kind with excellent teaching and research facilities.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <TrendingUp className="w-10 h-10 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Global Recognition</h4>
                    <p className="text-sm">
                      Ranked 20th globally in QS World University Rankings 2025 for Mineral and Mining Engineering.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-700">
                <p>
                  Over its 99-year history, the department has developed extensive activities in coal, metalliferous mining, and construction sectors, becoming the top-ranked Indian institution in mining engineering education.
                </p>
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

              <p className="text-sm sm:text-base mb-4 text-gray-700">
                <strong className="text-blue-700">DIGMIN-2025</strong> will be a landmark conference organized as part of the
                <strong className="text-blue-700"> Centenary Celebrations of IIT (ISM) Dhanbad</strong>,
                commemorating 100 years of excellence in mining education and research since its inauguration by Lord Irwin on <strong className="text-blue-700">December 9, 1926</strong>.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-4 py-1.5 bg-white rounded-full border border-gray-300 text-xs sm:text-sm text-gray-700 shadow-sm">
                  1926 - 2026
                </div>
                <div className="px-4 py-1.5 bg-white rounded-full border border-gray-300 text-xs sm:text-sm text-gray-700 shadow-sm">
                  India's Premier Mining Institution
                </div>
                <div className="px-4 py-1.5 bg-white rounded-full border border-gray-300 text-xs sm:text-sm text-gray-700 shadow-sm">
                  QS Ranked 20th Globally
                </div>
              </div>

              <p className="text-xs sm:text-sm mt-4 text-gray-600 max-w-2xl mx-auto">
                Originally established as Indian School of Mines and granted IIT status in 2016,
                IIT (ISM) Dhanbad has grown into a comprehensive technology institute making
                significant contributions to mining, minerals, and petroleum sectors.
              </p>
            </div>
          </div>
        </motion.section>



      </div>
    </div>
  )
}