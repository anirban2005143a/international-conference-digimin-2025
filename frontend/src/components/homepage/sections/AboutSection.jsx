"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight } from '@/utils/animations';
import { ABOUT_CONFERENCE } from '@/constants/conferenceData';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-900 ">About the Conference</h2>
            <div className="w-20 h-1 bg-indigo-700 mb-6"></div>

            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">{ABOUT_CONFERENCE}</p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Join us to explore:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Latest technological advances in mining digitalization',
                    'Sustainable and eco-friendly mining practices',
                    'Industry-academia collaboration opportunities',
                    'Policy frameworks for digital transformation in mining'
                  ].map((text, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative p-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <Image
              loading='lazy'
              quality={75} 
                width={350}
                height={500}
                src="/green-mining.jpeg"
                alt="Modern Mining Operation"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-indigo-700 text-white m-3  p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-bold text-lg mb-2">100 Years of Excellence</p>
              <p className="text-sm text-indigo-100">
                Celebrating the Centenary of IIT (ISM) Dhanbad with groundbreaking discussions on the future of mining.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
