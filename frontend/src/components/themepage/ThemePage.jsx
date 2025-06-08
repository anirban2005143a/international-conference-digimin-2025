"use client"

import { useState, useEffect, useMemo } from "react"
import { Cpu, Bot, Brain, Map, Shield, Zap, ChevronRight, Sparkles, ArrowRight, CheckCircle, ShieldAlert, Network, Recycle, Database, Building } from "lucide-react"
import { motion } from "framer-motion"
import { KEY_THEMES } from "@/constants/conferenceData"
import Link from "next/link"

export default function ThemesPage() {

  const themes = [
    {
      id: 1,
      title: "Digital Foundations for Smart Mining",
      icon: Cpu,
      description: "Integration of IoT, cloud, and edge computing in mine operations",
      points: [
        "Integration of IoT, cloud, and edge computing in mine operations",
        "Blockchain in critical mineral supply chains",
        "Pit to Port automated operations"
      ],
      bgColor: "bg-blue-400",
      borderColor: "border-blue-400",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Robotics and Automation in Harsh Mining Environments",
      icon: Bot,
      description: "Advanced systems for autonomous mining operations",
      points: [
        "Autonomous drilling, blasting, and hauling systems",
        "Swarm robotics for exploration and maintenance",
        "Human-robot collaboration in underground and confined spaces"
      ],
      bgColor: "bg-indigo-400",
      borderColor: "border-indigo-400",
      textColor: "text-indigo-600",
    },
    {
      id: 3,
      title: "Edge AI and Real-Time Analytics in Mining",
      icon: Brain,
      description: "AI-powered solutions for immediate operational insights",
      points: [
        "Low-latency AI applications for critical mine operations",
        "Edge devices for environmental and structural monitoring",
        "Federated learning in distributed mine networks"
      ],
      bgColor: "bg-teal-400",
      borderColor: "border-teal-400",
      textColor: "text-teal-600",
    },
    {
      id: 4,
      title: "AI-Driven Mineral Intelligence: Innovations in Critical Mineral Reserves Estimation",
      icon: Map,
      description: "Advanced spatial analysis for mining operations",
      points: [
        "AI-powered remote sensing and satellite imaging",
        "3D subsurface modeling using LiDAR and hyperspectral data",
        "Integration of GIS, drones, and ground-penetrating radar"
      ],
      bgColor: "bg-amber-400",
      borderColor: "border-amber-400",
      textColor: "text-amber-600",
    },
    {
      id: 5,
      title: "Digital Resilience and Disaster Management in Mining",
      icon: Shield,
      description: "Technologies for enhanced safety and risk mitigation",
      points: [
        "Design of intelligent operation centers",
        "Integration of AR/VR for remote inspections and diagnostics",
        "Enabling remote decision-making with digital twins"
      ],
      bgColor: "bg-rose-400",
      borderColor: "border-rose-400",
      textColor: "text-rose-600",
    },
    {
      id: 6,
      title: "Energy Efficiency and Process Optimization",
      icon: Zap,
      description: "Sustainable approaches to mining operations",
      points: [
        "AI for optimizing crushing, grinding, and material handling",
        "Dynamic control of furnaces and kilns using digital feedback",
        "CPS-enabled real-time energy monitoring and reduction strategies"
      ],
      bgColor: "bg-lime-400",
      borderColor: "border-lime-400",
      textColor: "text-lime-600",
    },
  ];

  const iconMap = {
    ShieldAlert: <ShieldAlert size={25} className="text-indigo-600" aria-hidden="true" />,
    Bot: <Bot size={25} className="text-indigo-600" aria-hidden="true" />,
    Network: <Network size={25} className="text-indigo-600" aria-hidden="true" />,
    Recycle: <Recycle size={25} className="text-indigo-600" aria-hidden="true" />,
    Database: <Database size={25} className="text-indigo-600" aria-hidden="true" />,
    Building: <Building size={25} className="text-indigo-600" aria-hidden="true" />,
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 }
  };

  return (
    <div className=" relative overflow-hidden">

      {/* Hero Section */}
      <div className="relative py-[100px] overflow-hidden text-slate-800 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-200 ">
        {/* Soft overlay for slight contrast */}
        <div className="absolute inset-0 "></div>

        {/* Floating motion elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-300 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-200 rounded-full"
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-200 rounded-full"
            animate={{ y: [0, -24, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-rose-200 rounded-full"
            animate={{ y: [0, -26, 0] }}
            transition={{ duration: 9, repeat: Infinity, delay: 3 }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6  text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-6 py-2.5 bg-indigo-50 backdrop-blur-md rounded-full border border-indigo-100 text-sm font-medium text-indigo-700 shadow">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-500" />
              Technical Focus Areas
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
              <motion.span
                className="block bg-gradient-to-r from-slate-800 via-indigo-600 to-blue-700 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Conference
              </motion.span>
              <motion.span
                className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-600 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Themes
              </motion.span>
            </h1>

            <motion.p
              className="text-lg md:text-xl font-normal max-w-4xl mx-auto text-slate-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Exploring cutting-edge technologies and innovations
              <span className="block text-sm md:text-base mt-2 text-slate-500">
                shaping the future of the mining industry.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              <div className="flex items-center px-4 py-2 bg-white shadow rounded-lg border border-slate-200">
                <Brain className="w-5 h-5 mr-2 text-indigo-500" />
                <span className="text-sm font-medium text-slate-700">AI & Machine Learning</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white shadow rounded-lg border border-slate-200">
                <Bot className="w-5 h-5 mr-2 text-indigo-500" />
                <span className="text-sm font-medium text-slate-700">Robotics & Automation</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white shadow rounded-lg border border-slate-200">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                <span className="text-sm font-medium text-slate-700">Energy Optimization</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Themes Overview */}
        <section id="themes-overview" className=" bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto ">
            {/* Header with appearing animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.1
                  }
                }
              }}
              className="text-center mb-12 md:mb-20"
            >
              <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Key <span className="text-indigo-700">Themes</span>
              </motion.h2>
              <motion.div
                className="w-24 h-1.5 bg-indigo-600 mx-auto mb-6 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore the cutting-edge topics that will shape the future of mining and industrial networks
              </motion.p>
            </motion.div>

            {/* Cards grid with staggered appearing animation */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              variants={containerVariants}
            >
              {KEY_THEMES.map((theme, index) => (
                <motion.div
                  key={theme.title}
                  className="group relative"
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <motion.div
                    className="h-full  rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                    whileHover="hover"
                    initial="rest"
                    variants={hoverVariants}
                  >
                    <div className="p-6 md:p-7 flex-1">
                      <div className="flex items-start mb-5">
                        <motion.div
                          className="p-3 bg-indigo-50 rounded-lg mr-4"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {iconMap[theme.icon] || iconMap['ShieldAlert']}
                        </motion.div>
                        <motion.h3
                          className="text-lg md:text-xl font-semibold text-gray-800 mt-2"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          {theme.title}
                        </motion.h3>
                      </div>
                      <motion.p
                        className="text-gray-600 md:text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {theme.description}
                      </motion.p>
                    </div>

                    <motion.div
                      className="px-6 pb-6 md:px-7 md:pb-7 "
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link href={`/themes/#theme-${index + 1}`} className="inline-block text-indigo-600 font-medium hover:text-indigo-800 hover:translate-x-2 transition-all cursor-pointer">
                        Learn more →
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Detailed Themes */}
        <section id="themes-overview" className="space-y-5 py-16 lg:w-[80%] mx-auto">
          {themes.map((theme, index) => (
            <motion.section
              key={theme.id}
              id={`theme-${theme.id}`}
              initial="hidden"
              whileInView="visible"
              animate="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="relative py-10"
            >

              <div className="group relative">
                {/* Animated border */}

                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  {/* Animated top bar */}
                  <motion.div
                    className={`h-1 ${theme.bgColor}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />

                  <div className="py-6 px-2 md:p-10 lg:p-12">
                    <motion.div
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 + 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className={`p-3 ${theme.bgColor} rounded-xl shadow-sm`}>
                        <theme.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center mb-3 flex-wrap gap-2">
                          <motion.span
                            className={`inline-block px-3 py-1 ${theme.bgColor}/10 text-sm font-medium ${theme.textColor} rounded-full border ${theme.borderColor}/30`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.15 + 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            Theme {theme.id}
                          </motion.span>
                          <motion.div
                            className={`w-7 h-7 ${theme.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xs`}
                            initial={{ rotate: -90, scale: 0 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ delay: 0.15 + 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            {theme.id}
                          </motion.div>
                        </div>

                        <motion.h2
                          className="text-2xl lg:text-3xl font-bold text-gray-800 leading-snug"
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.15 + 0.5, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {theme.title}
                        </motion.h2>

                        <motion.p
                          className="text-base lg:text-lg text-gray-600 leading-relaxed mt-2"
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.15 + 0.6, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {theme.description}
                        </motion.p>
                      </div>
                    </motion.div>

                    <motion.div
                      className={`${theme.bgColor}/10 rounded-xl md:p-6 py-6 px-2 border-l-4 ${theme.borderColor} shadow-sm`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + 0.7, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className={`text-lg font-semibold ${theme.textColor} mb-4 flex items-center`}>
                        <CheckCircle className={`w-5 h-5 ${theme.textColor} mr-2`} />
                        Key Focus Areas
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {theme.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            className="flex items-start gap-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.15 + 0.8 + (pointIndex * 0.1),
                              duration: 0.5
                            }}
                            viewport={{ once: true }}
                          >
                            <ArrowRight className={`w-4 h-4 ${theme.textColor} mt-1`} />
                            <span className="text-sm text-gray-700 font-medium">
                              {point}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technical Highlights */}
                    <motion.div
                      className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {[
                        { icon: Cpu, title: "Advanced Tech", desc: "Cutting-edge solutions" },
                        { icon: Brain, title: "AI Integration", desc: "Intelligent automation" },
                        { icon: Shield, title: "Safety Focus", desc: "Risk mitigation" }
                      ].map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                          whileHover={{ y: -5 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.15 + 0.2 + (itemIndex * 0.15),
                            duration: 0.5
                          }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-10 h-10 ${theme.bgColor} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h4>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center py-20 mt-32 sm:px-4 md:px-8">
          <motion.div
            className="relative group max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl blur opacity-0 group-hover:opacity-20"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.1 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Main card */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-8 px-4 sm:px-8 md:p-12 text-white shadow-xl overflow-hidden border border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >

              <div className="relative z-10">
                {/* Header with staggered animation */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </motion.div>

                  <motion.h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Join the Innovation Movement
                  </motion.h3>

                  <motion.div
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Step into the future of mining and digital transformation at <strong className="text-white">DIGMIN-2025</strong>. Engage with experts, researchers, and industry leaders driving impactful change across the global mining ecosystem.
                </motion.p>

                {/* CTA Buttons with hover animations */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-center items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link
                    href={"/registration"}
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.03 }}
                    whiletap={{ scale: 0.98 }}
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={"/about"}
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/10 text-white backdrop-blur-sm rounded-full border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.03 }}
                    whiletap={{ scale: 0.98 }}
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        </section>

      </div>
    </div>
  )
}

