"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHover } from '../../../utils/animations';
import { KEY_THEMES } from '../../../constants/conferenceData';
import { ShieldAlert, Bot, Network, Recycle, Database, Building } from 'lucide-react';

const iconMap = {
  ShieldAlert: <ShieldAlert size={32} className="text-indigo-600" />,
  Bot: <Bot size={32} className="text-indigo-600" />,
  Network: <Network size={32} className="text-indigo-600" />,
  Recycle: <Recycle size={32} className="text-indigo-600" />,
  Database: <Database size={32} className="text-indigo-600" />,
  Building: <Building size={32} className="text-indigo-600" />,
};

const KeyThemesSection = () => {
  return (
    <section id="themes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 ">Key Themes</h2>
          <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge topics that will shape the future of mining and industrial networks
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {KEY_THEMES.map((theme, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              custom={index}
              viewport={{ once: true }}
            >
              <motion.div className="p-6" variants={cardHover}>
                <div className="flex items-center mb-4">
                  {iconMap[theme.icon] || iconMap['ShieldAlert']}
                  <h3 className="text-xl font-semibold ml-3 text-gray-800">{theme.title}</h3>
                </div>
                <p className="text-gray-600">{theme.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyThemesSection;
