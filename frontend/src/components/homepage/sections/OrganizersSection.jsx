"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { ORGANIZERS } from '@/constants/conferenceData';

const socialIcons = [
  {
    name: 'linkedin',
    svg: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 ">Conference Organizers</h2>
          <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts leading DIGMIN-2025
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ORGANIZERS.map((organizer, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={fadeInUp}
              custom={index}
            >
              <div className="p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100">
                    <img
                      src={organizer.image}
                      alt={organizer.name || 'Organizer'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{organizer.name}</h3>
                  <p className="text-indigo-700 font-medium mb-2">{organizer.title}</p>
                  <p className="text-gray-600 mb-4">{organizer.institution}</p>
                  <div className="flex justify-center md:justify-start space-x-3">
                    {socialIcons.map(({ name, svg }) => (
                      <a
                        key={name}
                        href={organizer[name] || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-600"
                        aria-label={name}
                      >
                        {svg}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Program Committee</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The conference is supported by a distinguished Technical Program Committee
            comprising leading researchers and industry experts from around the world.
          </p>
          <a
            href="#committee"
            className="inline-block mt-6 text-indigo-700 font-medium hover:text-indigo-900 transition-colors"
          >
            View Full Committee →
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OrganizersSection;
