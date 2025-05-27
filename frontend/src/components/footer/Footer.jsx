"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { CONFERENCE_ACRONYM, NAVIGATION_LINKS } from '@/constants/conferenceData';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-4 ">{CONFERENCE_ACRONYM}</h3>
            <p className="text-gray-400 mb-4">
              International Conference on Digital Intelligence for Green Mining and Industrial Networks
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {[...Array(4)].map((_, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Replace with specific icon paths or use icons dynamically */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@digmin2025.org" className="hover:text-indigo-400 transition-colors">
                    info@digmin2025.org
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+919876543210" className="hover:text-indigo-400 transition-colors">
                    +91 (987) 654-3210
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>GJLT, IIT-ISM, Dhanbad</p>
                  <p>Jharkhand, India - 826004</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates about the conference.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 DIGMIN Conference. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
