"use client"
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgendaPage() {
  useEffect(() => {
    document.title = 'DIGMIN 2025 | Agenda';
  }, []);

  // Color palette
  const colors = {
    primary: '#1a56db',
    primaryLight: '#3f83f8',
    primaryLighter: '#ebf5ff',
    dark: '#1f2d3d',
    text: '#3d4852',
    lightText: '#606f7b',
    accent: '#7c3aed',
    background: '#f8fafc'
  };

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const cardHover = {
    y: -5,
    transition: { duration: 0.3 }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
   
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-35">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase px-4 py-2 rounded-full bg-blue-50">
              September 12-13, 2025 • GJLT, IIT-ISM, Dhanbad
            </span>
          </motion.div>
          <motion.h1 
            className="text-3xl md:text-4xl font-bold pb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            DIGMIN-2025 Conference Agenda
          </motion.h1>
          <div className=' w-20 h-1 bg-blue-700 mb-4 mx-auto'></div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Digital Intelligence for Green Mining and Industrial Networks
          </motion.p>
        </motion.header>

        {/* Conference Concept */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <motion.div 
            variants={item}
            className="bg-white md:p-8 p-4 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800">Conference Concept</h2>
                <p className="mt-2 text-gray-600">
                  Part of the Centenary Celebrations of IIT (ISM) Dhanbad, DIGMIN-2025 brings together professionals, 
                  researchers, technologists, and leaders to discuss the adoption of next-generation digital technologies 
                  in mining and allied industrial ecosystems.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-blue-50">
                <h3 className="font-semibold text-blue-800 mb-2">Key Focus Areas</h3>
                <ul className="space-y-2">
                  {[
                    "AI/ML-driven risk prediction",
                    "Robotics in harsh environments",
                    "IoT-enabled automation",
                    "Eco-efficient mining practices",
                    "Digital twins for mining operations"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      custom={i}
                      variants={item}
                      className="flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-blue-50">
                <h3 className="font-semibold text-blue-800 mb-2">Conference Goals</h3>
                <ul className="space-y-2">
                  {[
                    "Accelerate digital transformation",
                    "Drive sustainable resource management",
                    "Build resilient mining ecosystems",
                    "Foster technology integration",
                    "Promote environmental responsibility"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      custom={i}
                      variants={item}
                      className="flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Agenda Days */}
        <div className="space-y-16">
          {/* Day 1 */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 text-lg translate-y-0.5">1</span>
                <p className='w-[90%]'> Day 1: Thursday, September 12, 2025</p>
              </h2>
            </motion.div>
            
            <div className="space-y-4">
              {[
                {
                  time: "09:00 AM - 10:00 AM",
                  title: "Inaugural Session",
                  description: [
                    "Welcome Address",
                    "Introduction to DIGMIN-2025",
                    "Keynote Speech",
                    "Commemoration of IIT (ISM) Dhanbad's Centenary"
                  ]
                },
                {
                  time: "10:00 AM - 10:30 AM",
                  title: "Tea/Coffee Break & Networking"
                },
                {
                  time: "10:30 AM - 12:30 PM",
                  title: "Technical Session 1: Digital Foundations for Smart Mining",
                  description: [
                    "Theme: Integration of IoT, cloud, and edge computing in mine operations",
                    "Oral Presentations & Discussions"
                  ]
                },
                {
                  time: "12:30 PM - 01:30 PM",
                  title: "Lunch"
                },
                {
                  time: "01:30 PM - 03:30 PM",
                  title: "Technical Session 2: Robotics and Automation in Harsh Mining Environments",
                  description: [
                    "Theme: Autonomous drilling, blasting, and hauling systems",
                    "Swarm robotics for exploration and maintenance",
                    "Human-robot collaboration in underground spaces",
                    "Oral Presentations & Discussions"
                  ]
                },
                {
                  time: "03:30 PM - 04:00 PM",
                  title: "Tea/Coffee Break & Exhibition Visit",
                  description: [
                    "Opportunity to visit exclusive stalls showcasing products and software"
                  ]
                },
                {
                  time: "04:00 PM - 05:30 PM",
                  title: "Panel Discussion: Accelerating Digital Transformation in Mining",
                  description: [
                    "Participants: Mining professionals, regulators, researchers, technologists, policymakers",
                    "Discussion on adoption of next-generation digital technologies"
                  ]
                },
                {
                  time: "05:30 PM onwards",
                  title: "Networking Reception"
                }
              ].map((session, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={item}
                  whileHover={cardHover}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="w-full md:w-1/4 mb-3 md:mb-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                        {session.time}
                      </span>
                    </div>
                    <div className="w-full md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-800">{session.title}</h3>
                      {session.description && (
                        <ul className="mt-2 space-y-1">
                          {session.description.map((item, j) => (
                            <li key={j} className="flex items-start text-gray-600">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Day 2 */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg mr-3 translate-y-0.5">2</span>
                <p className='w-[90%]'> Day 2: Friday, September 13, 2025</p>
              </h2>
            </motion.div>
            
            <div className="space-y-4">
              {[
                {
                  time: "09:30 AM - 11:30 AM",
                  title: "Technical Session 3: Edge AI and Real-Time Analytics in Mining",
                  description: [
                    "Theme: Low-latency AI applications for critical mine operations",
                    "Edge devices for environmental monitoring",
                    "Federated learning in distributed mine networks",
                    "Oral Presentations & Discussions"
                  ]
                },
                {
                  time: "11:30 AM - 12:00 PM",
                  title: "Tea/Coffee Break & Exhibition Visit"
                },
                {
                  time: "12:00 PM - 01:30 PM",
                  title: "Technical Session 4: Geospatial Intelligence and Digital Mapping",
                  description: [
                    "Theme: AI-powered remote sensing and satellite imaging",
                    "3D subsurface modeling using LiDAR and hyperspectral data",
                    "Integration of GIS, drones, and ground-penetrating radar",
                    "Oral Presentations & Discussions"
                  ]
                },
                {
                  time: "01:30 PM - 02:30 PM",
                  title: "Lunch"
                },
                {
                  time: "02:30 PM - 04:00 PM",
                  title: "Technical Session 5: Digital Resilience and Disaster Management in Mining & Energy Efficiency",
                  description: [
                    "Sub-theme 1: Intelligent operation centers with AR/VR for remote inspections",
                    "Sub-theme 2: AI for optimizing crushing, grinding, and material handling",
                    "Dynamic control using digital feedback systems",
                    "Oral Presentations & Discussions"
                  ]
                },
                {
                  time: "04:00 PM - 04:30 PM",
                  title: "Policy Roundtable / Collaborative Session",
                  description: [
                    "Fostering collaboration between institutions and industry",
                    "Building a roadmap for technology-integrated mining ecosystem"
                  ]
                },
                {
                  time: "04:30 PM - 05:00 PM",
                  title: "Valedictory Session",
                  description: [
                    "Summary of Conference Outcomes",
                    "Closing Remarks"
                  ]
                }
              ].map((session, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={item}
                  whileHover={cardHover}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="w-full md:w-1/4 mb-3 md:mb-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                        {session.time}
                      </span>
                    </div>
                    <div className="w-full md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-800">{session.title}</h3>
                      {session.description && (
                        <ul className="mt-2 space-y-1">
                          {session.description.map((item, j) => (
                            <li key={j} className="flex items-start text-gray-600">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Footer Info */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-20 grid md:grid-cols-2 gap-8 "
        >
          {/* General Info */}
          <motion.div 
            variants={item}
            className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-100 overflow-x-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              General Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Call for Papers</h3>
                  <p className="text-gray-600">Submission Deadline: 15 August 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Official Email</h3>
                  <p className="text-gray-600">sagarwal@iitism.ac.in</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Exhibition Hours</h3>
                  <p className="text-gray-600">9:30 AM to 6:00 PM (12-13 September 2025)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Contacts */}
          <motion.div 
            variants={item}
            className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-100 overflow-x-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Key Contacts
            </h2>
            <div className="space-y-4">
              {[
                {
                  role: "Convener and Chairman",
                  name: "Prof. Anindya Sinha",
                  contact: "7766908001",
                  email: "anindya@iitism.ac.in"
                },
                {
                  role: "Co-Convener",
                  name: "Prof. Siddhartha Agarwal",
                  contact: "9335536412",
                  email: "sagarwal@iitism.ac.in"
                },
                {
                  role: "Treasurer",
                  name: "Prof. Ajeet Yadav",
                  contact: "7607222169",
                  email: "ajeet@iitism.ac.in"
                },
                {
                  role: "Student Coordinator",
                  name: "Mr. Rajul Dwivedi",
                  contact: "7772969347",
                  email: "23dp0082@iitism.ac.in"
                },
                {
                  role: "Student Coordinator",
                  name: "Ms. Pratibha Sharma",
                  contact: "6372685665",
                  email: "23dr0280@iitism.ac.in"
                }
              ].map((contact, i) => (
                <motion.div 
                  key={i}
                  custom={i}
                  variants={item}
                  className="p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-800">{contact.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{contact.role}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="mr-3">{contact.contact}</span>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{contact.email}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}