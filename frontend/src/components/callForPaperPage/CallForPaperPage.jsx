"use client"

import { useEffect, useRef } from 'react';
import { Mail, Calendar, FileText, ListChecks, ArrowRight, Send, CheckCircle, AlertCircle, Circle, Type, Info } from 'lucide-react';
import { motion, useAnimation, useInView, stagger, delay } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 1,
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
      <div className="max-w-6xl mx-auto px-4 py-5 space-y-12">
        {/* Hero Section */}
        <motion.section
          ref={ref}
          className="text-center py-20"
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
            <Link
              href="/callforpapers/#submission"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Submission Guidelines
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/callforpapers/#deadlines"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-medium px-6 py-3 rounded-lg transition-all border border-blue-200 shadow-sm hover:shadow-md"
            >
              View Deadlines
              <Calendar className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </motion.section>

        {/* Grid Layout for Content Sections */}
        <section id='submission' className="grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-5  ">
          {/* Section: Paper Submission */}
          <motion.section
            className="bg-gradient-to-br from-blue-50 to-sky-50 p-3 py-5 sm:p-5 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-shadow mx-2 sm:mx-0"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={1}
          >
            <div className="flex items-center mb-3 sm:mb-5">
              <div className="bg-blue-100/80 p-2 rounded-xl mr-3 shadow-inner border border-blue-200">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Paper Submission Guidelines
              </h2>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="p-3 bg-white/90 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <p className="text-xs sm:text-sm text-gray-700">
                  Technical papers on the Conference theme are invited for oral presentation.
                  All submissions will undergo peer-review for publication in the Conference Proceedings.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
                <div className="bg-white p-2 sm:p-3 rounded-lg border border-blue-100 shadow-sm">
                  <h3 className="font-semibold text-xs sm:text-sm text-blue-700 mb-1 flex items-center">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Submission Details
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                      <span>Email to: <span className="font-mono text-blue-600 break-all">sagarwal@ittism.ac.in</span></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                      <span>Deadline: <span className="font-semibold">15 August 2025</span></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                      <span>Format: MS Word document</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-2 sm:p-3 rounded-lg border border-blue-100 shadow-sm">
                  <h3 className="font-semibold text-xs sm:text-sm text-blue-700 mb-1 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Important Notes
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start">
                      <Circle className="w-2 h-2 mt-1.5 mr-1 text-blue-500 flex-shrink-0" />
                      <span>Original, unpublished work only</span>
                    </li>
                    <li className="flex items-start">
                      <Circle className="w-2 h-2 mt-1.5 mr-1 text-blue-500 flex-shrink-0" />
                      <span>Strict formatting compliance required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section: Format Specifications */}
          <motion.section
            className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 sm:p-5 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-shadow mx-2 sm:mx-0 py-5"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div className="flex items-center mb-3 sm:mb-5">
              <div className="bg-blue-100/80 p-2 rounded-xl mr-3 shadow-inner border border-blue-200">
                <Type className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Format Specifications
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
              <div className="bg-white p-2 sm:p-3 rounded-lg border border-blue-100 shadow-sm">
                <h3 className="font-semibold text-xs sm:text-sm text-blue-700 mb-2 border-b pb-1">Typography</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Title:</span>
                    <span className="font-medium">TNR 12 bold</span>
                  </li>
                  <li className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Author:</span>
                    <span className="font-medium">TNR 10.5</span>
                  </li>
                  <li className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Affiliation:</span>
                    <span className="font-medium">TNR 10 italic</span>
                  </li>
                  <li className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Headings:</span>
                    <span className="font-medium">TNR 10 bold</span>
                  </li>
                  <li className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Sub-headings:</span>
                    <span className="font-medium">TNR 12 bold</span>
                  </li>
                  <li className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Body text:</span>
                    <span className="font-medium">TNR 10</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-2 sm:p-3 rounded-lg border border-blue-100 shadow-sm">
                <h3 className="font-semibold text-xs sm:text-sm text-blue-700 mb-2 border-b pb-1">Other Requirements</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="text-xs sm:text-sm">
                    <div className="text-gray-600 mb-0.5">Figures/Tables:</div>
                    <div className="font-medium">Label as Figure 1, Table 2, etc.</div>
                    <div className="text-[0.65rem] sm:text-xs text-gray-500 mt-0.5">Place at text references</div>
                  </li>
                  <li className="text-xs sm:text-sm">
                    <div className="text-gray-600 mb-0.5">References:</div>
                    <div className="font-medium">Chicago style</div>
                    <div className="text-[0.65rem] sm:text-xs text-gray-500 mt-0.5">Alphabetical order</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-2 sm:mt-3 bg-blue-50/50 p-1.5 sm:p-2 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <Info className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                <p className="text-[0.65rem] sm:text-xs text-gray-700">
                  All formatting requirements are mandatory for paper acceptance. Use Times New Roman (TNR) font throughout.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section: Deadlines - Full width */}
          <motion.section
            className="bg-white md:p-6 py-6 px-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
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
                  className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100 hover:border-blue-200 shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
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
        </section>

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
            Submit your research paper via email with the subject line: "DIGMIN Conference Paper Submission - [Your Paper Title]".
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