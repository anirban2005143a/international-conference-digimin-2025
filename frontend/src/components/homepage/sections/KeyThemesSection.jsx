"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { KEY_THEMES } from '@/constants/conferenceData';
import { ShieldAlert, Bot, Network, Recycle, Database, Building } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  ShieldAlert: <ShieldAlert size={25} className="text-indigo-600" aria-hidden="true" />,
  Bot: <Bot size={25} className="text-indigo-600" aria-hidden="true" />,
  Network: <Network size={25} className="text-indigo-600" aria-hidden="true" />,
  Recycle: <Recycle size={25} className="text-indigo-600" aria-hidden="true" />,
  Database: <Database size={25} className="text-indigo-600" aria-hidden="true" />,
  Building: <Building size={25} className="text-indigo-600" aria-hidden="true" />,
};

const KeyThemesSection = () => {
  // Animation variants
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
    <section id="themes" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header with appearing animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
          <motion.span
            className="inline-block text-sm font-semibold text-indigo-600 mb-2 tracking-wider uppercase"
          >
            Focus Areas
          </motion.span>
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
          {KEY_THEMES.map((theme , index) => (
            <motion.div
              key={theme.title}
              className="group relative"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              whilehover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <motion.div
                className="h-full  rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                whilehover="hover"
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

                <Link
                  className="px-6 pb-6 md:px-7 md:pb-7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  href={`/themes#theme-${index+1}`}
                >
                  <span className="inline-block text-indigo-600 font-medium hover:text-indigo-700 transition-colors cursor-pointer">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyThemesSection;