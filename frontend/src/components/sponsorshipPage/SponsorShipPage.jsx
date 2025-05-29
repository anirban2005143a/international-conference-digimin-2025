"use client"
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Briefcase, Star, Contact2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: 'easeOut'
    }
  })
};

export default function SponsorshipPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <div ref={ref} className="bg-gradient-to-br from-[#eef2f7] via-white to-[#e0f2fe] text-gray-800 min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-24">

        <motion.header
          className="text-center space-y-4"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-tight">
            Exhibition & Sponsorship
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase your brand and engage with industry leaders at DIGMIN-2025.
          </p>
        </motion.header>

        <motion.section
          className="bg-white p-10 shadow-xl rounded-3xl border-l-8 border-yellow-500"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          custom={1}
        >
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-yellow-800">Sponsorship Tiers</h2>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Diamond Sponsor:</strong> ₹10,00,000 (10 delegates free)</li>
            <li><strong>Gold Sponsor:</strong> ₹7,00,000 (7 delegates free)</li>
            <li><strong>Silver Sponsor:</strong> ₹5,00,000 (5 delegates free)</li>
            <li><strong>Bronze Sponsor:</strong> ₹3,00,000 (3 delegates free)</li>
            <li className="text-sm text-gray-500">(All prices exclude GST @18%)</li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-white p-10 shadow-xl rounded-3xl border-l-8 border-pink-500"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          custom={2}
        >
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Souvenir Advertisement Rates</h2>
          <ul className="text-gray-700 space-y-1">
            <li><strong>Back Cover:</strong> ₹30,000 (color)</li>
            <li><strong>Front Inside:</strong> ₹25,000 (color)</li>
            <li><strong>Back Inside:</strong> ₹25,000 (color)</li>
            <li><strong>Full Page (other):</strong> ₹15,000 (color)</li>
            <li className="text-sm text-gray-500">(All prices exclude GST @18%)</li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-white p-10 shadow-xl rounded-3xl border-l-8 border-cyan-600"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          custom={3}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-cyan-700" />
            <h2 className="text-2xl font-bold text-cyan-800">Exhibition Stall Details</h2>
          </div>
          <p className="text-gray-700 mb-4">
            10 exclusive stalls (3m x 3m) with electricity will be available at:
          </p>
          <ul className="text-gray-700 space-y-1">
            <li><strong>Indian Exhibitors:</strong> ₹1,50,000</li>
            <li><strong>Overseas Exhibitors:</strong> USD 2000</li>
            <li className="text-sm text-gray-500">(Price includes registration for 2 representatives. GST @18% excluded)</li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-white p-10 shadow-xl rounded-3xl border-l-8 border-blue-700"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          custom={4}
        >
          <div className="flex items-center gap-3 mb-6">
            <Contact2 className="w-6 h-6 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-800">Stall Booking & Sponsorship Contact</h2>
          </div>
          <ul className="text-gray-700 space-y-1">
            <li><strong>Mr. Rajul Dwivedi</strong> – 7772969347</li>
            <li><strong>Ms. Pratibha Sharma</strong> – 6372685665</li>
            <li>Email: <a href="mailto:23dp0082@iitism.ac.in" className="text-blue-600 hover:underline">23dp0082@iitism.ac.in</a></li>
            <li>Email: <a href="mailto:23dr0280@iitism.ac.in" className="text-blue-600 hover:underline">23dr0280@iitism.ac.in</a></li>
          </ul>
        </motion.section>

      </div>
    </div>
  );
}
