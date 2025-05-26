"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFERENCE_START_DATE } from '@/constants/conferenceData';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +CONFERENCE_START_DATE - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
      // setIsMounted(false);
    };
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  // Professional, harmonious color scheme
  const cardColors = [
    'bg-indigo-500',      // Primary blue
    'bg-teal-500',      // Complementary teal
    'bg-amber-500',     // Warm accent
    'bg-violet-500'     // Sophisticated purple
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Countdown to DIGMIN 2025
          </h2>
          <p className="text-lg text-gray-600">
            {CONFERENCE_START_DATE.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className={`flex flex-col items-center justify-center rounded-lg shadow-md w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative overflow-hidden ${cardColors[index]} text-white`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: 'spring',
                stiffness: 100
              }}
              // whileHover={{ y: -3 }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${unit.label}-${unit.value}`}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs sm:text-sm font-medium text-white/90 mt-1 uppercase tracking-wider">
                  {unit.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Today</span>
            <span>Conference Day</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-violet-600"
              initial={{ width: 0 }}
              whileInView={{ 
                width: `${100 - ((timeLeft.days / 365) * 100)}%` 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                delay: 0.4,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {timeLeft.days > 30 ? (
            <p className="text-gray-600 italic">Preparations underway for this prestigious event</p>
          ) : timeLeft.days > 7 ? (
            <p className="text-gray-700 font-medium">The conference approaches - secure your participation</p>
          ) : timeLeft.days > 0 ? (
            <p className="text-blue-600 font-medium">Final days until this landmark gathering</p>
          ) : (
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <span className="font-semibold">The conference is now in session</span>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CountdownTimer;