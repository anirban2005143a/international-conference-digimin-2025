'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, CONFERENCE_ACRONYM } from '../../constants/conferenceData';
import Link from 'next/link';

// Framer Motion variants
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1 }
  }),
};


const NavLink = ({ link, index }) => {

  const [isHovered, setisHovered] = useState(false)
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="relative"
    >
      <Link
        onMouseOver={() => {
          setisHovered(true)
        }}
        onMouseLeave={() => {
          setisHovered(false)
        }}
        href={link.href}
        className="text-sm font-medium text-gray-800 hover:text-indigo-600 transition-colors"
      >
        {link.name}
        <motion.span
          layoutId="underline"
          className="absolute left-1/2 -bottom-1 h-0.5 w-full bg-indigo-600 -translate-x-1/2 "
          initial={{scaleX:0}}
          animate={{scaleX : isHovered ? 1 : 0}}
          transition={{duration:0.2 , ease:easeInOut}}
        />
      </Link>
    </motion.div>
  )
};



const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll behavior for sticky and hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };

    const throttled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md `}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`text-indigo-900`}>
              {CONFERENCE_ACRONYM}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {NAVIGATION_LINKS.map((link, index) => (
              <NavLink key={index} link={link} index={index} />
            ))}
            <Link
              href="#register"
              className="px-4 py-2 rounded-md bg-indigo-700 text-white text-sm font-medium hover:bg-indigo-800 transition-colors"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              custom={NAVIGATION_LINKS.length}
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md text-gray-800 hover:bg-gray-100 hover:text-gray-500 transition`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-2">
              {NAVIGATION_LINKS.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-gray-800 hover:text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#register"
                className="block w-full text-center px-4 py-2 rounded-md bg-indigo-700 text-white font-medium hover:bg-indigo-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
