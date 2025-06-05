'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, CONFERENCE_ACRONYM } from '../../constants/conferenceData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  // Check if current path includes link name (case-insensitive)
  const isActive = pathname.toLowerCase().includes(link.name.split(" ")[0].toLowerCase());

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="relative"
    >
      <Link
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={link.href}
        className={`text-sm font-medium text-gray-800 hover:text-indigo-600 transition-colors`}
      >
        {link.name}
        <motion.span
          layoutId="underline"
          className={`absolute left-0 bottom-0 h-0.5 bg-indigo-600`}
          initial={{ width: isActive ? '100%' : '0%' }}
          animate={{
            width: isActive || isHovered ? '100%' : '0%',
            opacity: isActive || isHovered ? 1 : 0
          }}
          transition={{ duration: 0.2, ease: easeInOut }}
        />
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [width, setwidth] = useState(null)

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

  useEffect(() => {
    document.body.style.overflow = `${mobileMenuOpen ? "hidden" : "auto"}`
  }, [mobileMenuOpen])

  useEffect(() => {
    setwidth(window.innerWidth)
  }, [])


  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 `}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  backdrop-blur-md">
        <nav className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold  "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`text-indigo-900 md:hidden`}>
              {CONFERENCE_ACRONYM}
            </span>
          </Link>

          {/* Desktop Navigation */}
          {width && <div className={` ${width > 950 ? "flex" : "hidden"} space-x-4 justify-end items-center`}>
            {NAVIGATION_LINKS.map((link, index) => (
              <NavLink key={index} link={link} index={index} />
            ))}
            <Link
              href="/registration"
              className="px-4 py-2 rounded-md bg-indigo-700 text-white text-sm font-medium hover:bg-indigo-800 transition-colors"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              custom={NAVIGATION_LINKS.length}
            >
              Register Now
            </Link>
          </div>}

          {/* Mobile Menu Button */}
          {width && <div className={`${width > 950 ? "hidden" : ""}`}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={` rounded-md text-gray-800 hover:bg-gray-100 hover:text-gray-500 transition`}
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && width && (
          <motion.div
            key="mobileMenu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`${width > 950 ? "hidden" : "fixed"} top-0 right-0 h-[100dvh] overflow-auto w-screen max-w-md bg-[#000000b8] backdrop-blur-sm shadow-lg z-50`}
          >
            <div className="px-10 pt-5 h-full">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white cursor-pointer focus:outline-none p-2 bg-white/5 rounded-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col items-start gap-10 py-[20px] text-white">

                {NAVIGATION_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    onClick={() => setMobileMenuOpen(false)}
                    href={link.href}
                    className="hover:underline nav-menu-mobile text-sm ml-2">{link.name}</Link>
                ))}
                {/* Add more links as needed */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;
