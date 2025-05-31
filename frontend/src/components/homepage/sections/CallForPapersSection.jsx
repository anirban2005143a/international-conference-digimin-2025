"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, buttonHover } from '@/utils/animations';
import { FileText } from 'lucide-react';
import Link from 'next/link';

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
              DIGMIN-2025 invites original research papers and case studies on digital transformation in mining and industrial networks. We welcome contributions from professionals, regulatory personnel, academic researchers, technologists, sustainability experts, policymakers, and industry leaders.
            </p>
            
            {/* <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Submission Guidelines:</h4>
              <ul className="space-y-2 text-indigo-100">
                {[
  'Abstracts must include: Title (Times New Roman 12 bold), Author (Times New Roman 10.5), Affiliation (Times New Roman 10 italic)',
  'Formatting: Headings (Times New Roman 10 bold), Sub-Headings (Times New Roman 12 bold), Paragraph text (Times New Roman 10)',
  'Figures/Tables: Label as "Figure 1", "Table 2", etc., and place them within the text at their references',
  'References: Must follow Chicago style, cited in-text and listed alphabetically under "References"',
  'Submissions: Original technical documents in MS Word, sent via email to sagarwal@iitism.ac.in by 15 August 2025',
  'Publication: Peer-reviewed papers will be published in the conference proceedings'
].map((text, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div> */}
            
            <Link
              href="/registration"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-md font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
              // whileHover="hover"
              initial="rest"
              variants={buttonHover}
            >
              <FileText size={20} className="mr-2" />
              Submit Your Abstract
            </Link>
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
