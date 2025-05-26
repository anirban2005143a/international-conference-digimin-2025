"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { SPONSORS } from '@/constants/conferenceData';

const SponsorsSection = () => {
  const sponsorsByTier = SPONSORS.reduce((acc, sponsor) => {
    acc[sponsor.tier] = acc[sponsor.tier] || [];
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const tierInfo = {
    diamond: {
      title: 'Diamond Sponsors',
      className: 'border-indigo-600 bg-indigo-50'
    },
    gold: {
      title: 'Gold Sponsors',
      className: 'border-yellow-600 bg-yellow-50'
    },
    silver: {
      title: 'Silver Sponsors',
      className: 'border-gray-400 bg-gray-50'
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 ">Our Sponsors</h2>
          <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DIGMIN-2025 is supported by industry leaders committed to advancing digital innovation in mining
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(tierInfo).map(([tier, info]) => (
            sponsorsByTier[tier] ? (
              <motion.div
                key={tier}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-semibold text-center mb-8">{info.title}</h3>
                <div className={`border-2 rounded-lg p-8 ${info.className}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
                    {sponsorsByTier[tier].map((sponsor, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-48 h-48 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name || 'Sponsor Logo'}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <p className="mt-4 text-center font-medium text-gray-800">{sponsor.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold mb-4">Interested in Sponsoring?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Showcase your organization's commitment to digital innovation in mining by becoming a sponsor. 
            Gain visibility among industry leaders, researchers, and decision-makers.
          </p>
          <a
            href="#sponsor-info"
            className="inline-block px-6 py-3 bg-indigo-700 text-white rounded-md font-semibold hover:bg-indigo-800 transition-colors shadow-md"
          >
            Download Sponsorship Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
