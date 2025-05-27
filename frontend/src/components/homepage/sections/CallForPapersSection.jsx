"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, buttonHover } from '@/utils/animations';
import { FileText } from 'lucide-react';

const CallForPapersSection = () => {
  return (
    <section id="call-for-papers" className="py-20 bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-2 ">Call for Papers</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold mb-4">Submit Your Research</h3>
            <p className="mb-6 text-indigo-100">
              DIGMIN-2025 invites original research papers and case studies on digital transformation in mining and industrial networks. We welcome contributions from academics, industry professionals, policymakers, and innovators.
            </p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Submission Guidelines:</h4>
              <ul className="space-y-2 text-indigo-100">
                {[
                  'Abstracts should be 300-500 words in length',
                  'Full papers must be 6-8 pages following the conference template',
                  'All submissions undergo rigorous peer review',
                  'Accepted papers will be published in conference proceedings'
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.a
              href="#submit"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-md font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
              whileHover="hover"
              initial="rest"
              variants={buttonHover}
            >
              <FileText size={20} className="mr-2" />
              Submit Your Abstract
            </motion.a>
          </motion.div>
          
          <motion.div
            className="bg-indigo-800 rounded-lg md:p-6 p-3 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-6">Topics of Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'AI & Machine Learning',
                  points: ['Predictive maintenance', 'Safety risk assessment', 'Resource optimization']
                },
                {
                  title: 'IoT Applications',
                  points: ['Remote monitoring', 'Environmental sensing', 'Connected equipment']
                },
                {
                  title: 'Sustainability',
                  points: ['Eco-friendly mining', 'Energy optimization', 'Waste reduction']
                },
                {
                  title: 'Digital Twins',
                  points: ['Mine modeling', 'Process simulation', 'Virtual training']
                }
              ].map((topic, index) => (
                <div key={index} className="bg-indigo-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{topic.title}</h4>
                  <ul className="text-sm text-indigo-100 space-y-1">
                    {topic.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapersSection;
