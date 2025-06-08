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
            <h2 className="text-3xl font-bold mb-2 text-gray-900 ">Industry 5.0</h2>
            <div className="w-20 h-1 bg-indigo-700 mb-6"></div>

            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">{ABOUT_CONFERENCE}</p>
              {/* <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Join us to explore:
                </h3>
               
              </div> */}
            </div>
          </motion.div>

          <motion.div
            className="relative p-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="aspect-w-16 h-[300px] aspect-h-9  ">
              <Image
                loading='lazy'
                width={350}
                height={500}
                src="/digmin.jpg"
                alt="Modern Mining Operation"
                // fill={true}
                className=" w-full object-contain border-2 shadow-xl"
              />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 bg-indigo-700 text-white m-3  p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-bold text-lg mb-2">100 Years of Excellence</p>
              <p className="text-sm text-indigo-100">
                Celebrating the Centenary of IIT (ISM) Dhanbad with groundbreaking discussions on the future of mining.

              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
