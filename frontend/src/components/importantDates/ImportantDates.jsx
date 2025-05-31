"use client"
import { motion, useAnimation, useInView, stagger } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const ImportantDates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const dates = [
    { 
      event: "Call for abstracts", 
      date: "01.06.2025",
      icon: <AlertCircle className="w-5 h-5 text-blue-600" />,
      status: "Upcoming"
    },
    { 
      event: "Receipt of abstracts", 
      date: "30.06.2025",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      status: "Submission Open"
    },
    { 
      event: "Review of abstracts and decision notification", 
      date: "15.07.2025",
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
      status: "Review Period"
    },
    { 
      event: "Receipt of full papers", 
      date: "15.08.2025",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      status: "Submission Open"
    },
    { 
      event: "Review of full papers and decision intimation", 
      date: "21.08.2025",
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
      status: "Review Period"
    },
    { 
      event: "Intimation of acceptance of papers", 
      date: "31.08.2025",
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      status: "Final Decision"
    }
  ];

  return (
    <div ref={ref} className="bg-gradient-to-br from-[#f8fafc] to-[#f0f9ff] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          className="text-center mb-16 py-[80px]"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
              }
            }
          }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Important Dates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key deadlines and milestones for DIGMIN-2025
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
        </motion.header>

        {/* Timeline */}
        <motion.div
          className="space-y-2"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {dates.map((dateItem, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg mt-1">
                      {dateItem.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{dateItem.event}</h3>
                      <span className={`inline-block mt-1 text-sm px-2 py-1 rounded-full ${
                        dateItem.status === "Upcoming" ? "bg-blue-100 text-blue-800" :
                        dateItem.status === "Submission Open" ? "bg-amber-100 text-amber-800" :
                        dateItem.status === "Review Period" ? "bg-purple-100 text-purple-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {dateItem.status}
                      </span>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-gray-500 text-sm">Deadline</p>
                    <p className="text-lg font-bold text-gray-900">{dateItem.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        {/* <motion.div
          className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-700">
            <strong className="text-blue-600">Note:</strong> All deadlines are at 11:59 PM Indian Standard Time (IST). 
            Late submissions will not be considered.
          </p>
        </motion.div> */}
      </div>
    </div>
  );
};

export default ImportantDates;