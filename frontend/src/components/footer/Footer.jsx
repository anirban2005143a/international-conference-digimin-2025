"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { Mail, Phone, MapPin } from 'lucide-react';
import StayVenues from './StayValues';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-10 mb-12">
          {/* Conference Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-bold mb-4 underline-offset-8 underline text-gray-300">DIGMIN-2025</h3>
            <motion.div
              className="flex gap-10 mb-4 "
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }
              }}
            >
              <motion.img
                src="/ism-logo.png" // Replace with your image path
                alt="Logo 1"
                className="w-20 h-20 object-contain bg-white"
              />
              <motion.img
                src="/centenry_logo.png" // Replace with your image path
                alt="Logo 2"
                className="w-20 h-20 object-contain "
              />
            </motion.div>
            <p className="text-gray-400 mb-4 text-sm">
              International Conference on "Digital Intelligence for Green Mining and Industrial Networks"
            </p>
            <p className="text-gray-400 text-sm">
              12-13 September 2025<br />
              Venue: GJLT, IIT-ISM, Dhanbad
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-bold mb-4 underline-offset-8 underline text-gray-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Conference Email</p>
                  <a href="mailto:digmin2025@iitism.ac.in" className="hover:text-blue-400 transition-colors">
                    digmin2025@iitism.ac.in
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Convener</p>
                  <a href="tel:+917766908001" className="hover:text-blue-400 transition-colors">
                    Prof. Anindya Sinha: +91 7766908001
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Co-Convener</p>
                  <a href="tel:+919335536412" className="hover:text-blue-400 transition-colors">
                    Prof. Siddhartha Agarwal: +91 9335536412
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* stay venues  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-bold mb-4 underline-offset-8 underline text-gray-300">Stay Guide</h3>
            <StayVenues />
          </motion.div>

          {/* Address */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-bold mb-4 underline-offset-8 underline text-gray-300">Address</h3>
            <a
              target='_blank'
              href={`https://maps.app.goo.gl/dAuYdJb6HSfQn3q49`}
              className="flex items-start">
              <MapPin size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
              <div className=' hover:underline underline-offset-4'>
                <p className="text-gray-400">Department of Mining Engineering</p>
                <p>Indian Institute of Technology (ISM) Dhanbad</p>
                <p>Jharkhand, India - 826004</p>
              </div>
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 DIGMIN Conference. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Organized by Department of Mining Engineering, IIT (ISM) Dhanbad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;