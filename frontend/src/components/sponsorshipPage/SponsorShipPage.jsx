"use client"
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, stagger } from 'framer-motion';
import { Briefcase, Star, Contact2, ChevronRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

export default function SponsorshipPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] text-gray-800 min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Hero Section */}
        <motion.header
          className="text-center space-y-6 py-[80px]"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={item}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Exhibition & <span className="text-blue-700">Sponsorship</span>
            </h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Elevate your brand presence and connect with key decision-makers at DIGMIN-2025, 
              the premier mining industry conference.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
        </motion.header>

        {/* Sponsorship Tiers */}
        <motion.section
          className="bg-white py-8 px-3 sm:p-10 shadow-lg rounded-xl border-t-4 border-blue-600"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Sponsorship Opportunities</h2>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { 
                title: "Diamond Sponsor", 
                price: "₹10,00,000", 
                benefits: ["Prime logo placement", "10 free delegates", "Keynote speaking opportunity", "Full-page ad in proceedings"] 
              },
              { 
                title: "Gold Sponsor", 
                price: "₹7,00,000", 
                benefits: ["Prominent logo display", "7 free delegates", "Session chair opportunity", "Half-page ad"] 
              },
              { 
                title: "Silver Sponsor", 
                price: "₹5,00,000", 
                benefits: ["Logo in main hall", "5 free delegates", "Exhibition space", "Quarter-page ad"] 
              },
              { 
                title: "Bronze Sponsor", 
                price: "₹3,00,000", 
                benefits: ["Logo on website", "3 free delegates", "Recognition in materials"] 
              }
            ].map((tier, index) => (
              <motion.div 
                key={tier.title}
                variants={item}
                className="border border-gray-200 rounded-lg py-6 px-3 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tier.title}</h3>
                <p className="text-blue-600 font-bold text-lg mb-4">{tier.price} <span className="text-gray-500 text-sm">+ GST</span></p>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Advertisement & Exhibition */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Souvenir Advertisement */}
          <motion.section
            variants={item}
            className="bg-white p-8 shadow-lg rounded-xl border-t-4 border-purple-600"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Souvenir Advertisement</h2>
            <div className="space-y-4">
              {[
                { position: "Back Cover", price: "₹30,000" },
                { position: "Front Inside Cover", price: "₹25,000" },
                { position: "Back Inside Cover", price: "₹25,000" },
                { position: "Full Page", price: "₹15,000" }
              ].map((ad, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium">{ad.position}</span>
                  <span className="text-purple-600 font-semibold">{ad.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">* All advertisement prices exclude GST @18%</p>
          </motion.section>

          {/* Exhibition Stall */}
          <motion.section
            variants={item}
            className="bg-white p-8 shadow-lg rounded-xl border-t-4 border-green-600"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Exhibition Stalls</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Stall Specifications</h3>
                <p className="text-gray-700">3m × 3m space with electricity, table, chairs, and backdrop</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Indian Exhibitors</span>
                <span className="text-green-600 font-semibold">₹1,50,000</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 font-medium">Overseas Exhibitors</span>
                <span className="text-green-600 font-semibold">USD 2,000</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                * Price includes registration for 2 representatives. GST @18% excluded for Indian exhibitors.
              </p>
            </div>
          </motion.section>
        </motion.div>

        {/* Contact Section */}
        <motion.section
          className="bg-gradient-to-r from-blue-600 to-blue-800 md:p-10 py-5 px-4 rounded-xl text-white"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/20 rounded-lg">
                <Contact2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Contact Our Sponsorship Team</h2>
            </div>
            
            <motion.div 
              className="grid sm:grid-cols-2 gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={item} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Mr. Rajul Dwivedi</h3>
                <p className="flex items-center gap-2 mb-2">
                  <span className="opacity-80">Phone:</span>
                  <a href="tel:+917772969347" className="hover:underline">+91 7772969347</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="opacity-80">Email:</span>
                  <a href="mailto:23dp0082@iitism.ac.in" className="hover:underline">23dp0082@iitism.ac.in</a>
                </p>
              </motion.div>
              
              <motion.div variants={item} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Ms. Pratibha Sharma</h3>
                <p className="flex items-center gap-2 mb-2">
                  <span className="opacity-80">Phone:</span>
                  <a href="tel:+916372685665" className="hover:underline">+91 6372685665</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="opacity-80">Email:</span>
                  <a href="mailto:23dr0280@iitism.ac.in" className="hover:underline">23dr0280@iitism.ac.in</a>
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="mt-8 text-center"
            >
              <p className="text-blue-100 max-w-2xl mx-auto">
                For customized sponsorship packages or additional information, please contact our team. 
                We're happy to discuss opportunities tailored to your organization's goals.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}