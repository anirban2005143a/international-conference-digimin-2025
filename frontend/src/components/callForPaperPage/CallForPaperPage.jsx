"use client"

import { useEffect, useRef } from 'react';
import { Mail, Calendar, FileText, ListChecks, ArrowRight, Send } from 'lucide-react';
import { motion, useAnimation, useInView, stagger } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.15, 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function CallForPapers() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-20">
        {/* Hero Section */}
        <motion.section
          ref={ref}
          className="text-center py-12 md:py-16 lg:py-20"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={item}>
            <motion.div 
              className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              custom={0}
            >
              Digital Intelligence in Green Mining
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Call for <span className="text-blue-600">Papers</span>
            </h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Contribute your research to shape the future of Digital Intelligence in Green Mining.
            </p>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#submission" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Submission Guidelines
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="#deadlines" 
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-medium px-6 py-3 rounded-lg transition-all border border-blue-200 shadow-sm hover:shadow-md"
            >
              View Deadlines
              <Calendar className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </motion.section>

        {/* Grid Layout for Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section: Instructions to Authors */}
          <motion.section
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Instructions to Authors
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-gray-700 mb-4">
                Submit your original technical paper related to the conference themes. Papers will be peer-reviewed by our technical committee.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-1">
                <li>Papers must be original, unpublished work</li>
                <li>Maximum length: 8 pages (including references)</li>
                <li>All submissions must be in English</li>
                <li>Submissions should follow the formatting guidelines</li>
                <li>Include 3-5 keywords with your submission</li>
                <li>Clearly state the contribution to the field</li>
              </ul>
            </div>
          </motion.section>

          {/* Section: Format Guidelines */}
          <motion.section
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ListChecks className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Format Guidelines
              </h2>
            </div>
            <div className="pl-16">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">Title:</span>
                  <span className="text-gray-700">Times New Roman 12 bold</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">Author Name:</span>
                  <span className="text-gray-700">Times New Roman 10.5</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">Affiliation:</span>
                  <span className="text-gray-700">Times New Roman 10 italic</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">Headings:</span>
                  <span className="text-gray-700">Times New Roman 10 bold</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">Sub-Headings:</span>
                  <span className="text-gray-700">Times New Roman 12 bold</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">Paragraphs:</span>
                  <span className="text-gray-700">Times New Roman 10</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">References:</span>
                  <span className="text-gray-700">Chicago Style (alphabetical)</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-800 w-36">Page Size:</span>
                  <span className="text-gray-700">A4, single column</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Section: Deadlines - Full width */}
          <motion.section
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={3}
            id="deadlines"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Key Deadlines
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { 
                  title: "Call for Abstracts", 
                  date: "01 June 2025",
                  icon: <Calendar className="w-5 h-5 text-blue-600" />
                },
                { 
                  title: "Abstract Submission", 
                  date: "30 June 2025",
                  icon: <Send className="w-5 h-5 text-blue-600" />
                },
                { 
                  title: "Review Notification", 
                  date: "15 July 2025",
                  icon: <FileText className="w-5 h-5 text-blue-600" />
                },
                { 
                  title: "Full Paper Submission", 
                  date: "15 August 2025",
                  icon: <Send className="w-5 h-5 text-blue-600" />
                },
                { 
                  title: "Final Acceptance", 
                  date: "31 August 2025",
                  icon: <ListChecks className="w-5 h-5 text-blue-600" />
                },
              ].map((deadline, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100 hover:border-blue-200 transition-all"
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={index + 4}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                    {deadline.icon}
                  </div>
                  <h3 className="font-medium text-gray-900">{deadline.title}</h3>
                  <p className="text-blue-600 mt-1 font-medium">{deadline.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Contact Section */}
        <motion.section
          className="flex flex-col items-center bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={8}
          id="submission"
        >
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center">
            Ready to Submit Your Paper?
          </h2>
          <p className="text-blue-100 mb-6 text-center max-w-2xl">
            Submit your research paper via email with the subject line: "DIGM Conference Submission - [Your Paper Title]".
            Include all authors' details and affiliations in the email body.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="mailto:sagarwal@iitism.ac.in"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-blue-600 font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Email Your Submission
            </a>
          </motion.div>
          <p className="text-blue-200 mt-4 text-sm">
            Contact email: <span className="font-medium">sagarwal@iitism.ac.in</span>
          </p>
        </motion.section>
      </div>
    </div>
  );
}