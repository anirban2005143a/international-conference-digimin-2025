"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '@/utils/animations';
import { CONFERENCE_START_DATE } from '@/constants/conferenceData';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.section
      className="py-12 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl font-bold text-center mb-10 text-gray-800"
          variants={scaleIn}
        >
          Countdown to DIGMIN-2025
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md w-24 h-24 md:w-32 md:h-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="text-3xl md:text-4xl font-bold text-indigo-700">
                {unit.value.toString().padStart(2, '0')}
              </span>
              <span className="text-gray-600 text-sm md:text-base">{unit.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CountdownTimer;
