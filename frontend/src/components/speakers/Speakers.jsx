"use client";
import { motion } from "framer-motion";
import Link from "next/link";

 const speakers = [
   {
    name: "Om Prakash",
    title: "President & CEO – Mining Business",
    department: "Jindal Power Ltd.",
    description: "Focus: Sustainable mining and leadership in India's coal and power sector. (UG and Open Pit Mine Digitalization and Its Effect on Indian Power Generation Capacity and Its Future)",
    linkedIn: "https://www.linkedin.com/in/ACoAAAzKgP4BcSElRqmaakPemRnDTwX_UmR41AI",
    image: "/speakers/opsir.jpg"
  },
  {
    name: "Shailender Sinha",
    title: "Vice President – Exploration",
    department: "International Resources Holding, UAE",
    description: "Expertise: Global mineral exploration and resource strategy.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAJZIeoB5vscDNFyHGFOZlb4kachWh2yqRk",
    image: "/speakers/sssir.gif"
  },
  {
    name: "Prof. D.C. Panigrahi",
    title: "Director, PMRC Research",
    department: "Former Director, IIT (ISM) Dhanbad",
    description: "A visionary in underground mine design and safety systems in India.",
    linkedIn: "https://www.linkedin.com/in/ACoAAFmC_kIBIIj02r8nIHQ2RcJTLphrZZ46eOs",
    image: "/speakers/dcpsir.jpg"
  },
  {
    name: "Prof. Neelima Satyam",
    title: "Professor",
    department: "IIT Indore",
    description: "Leading voice in geotechnical innovation, resilience engineering, and infrastructure safety.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAMBSH8BLEoNID6LxcM-FZ-rRQsG9uaM3FE",
    image: "/speakers/nsma'am.jpg"
  },
  {
    name: "Prof. Rajive Ganguli",
    title: "Associate Dean, College of Mines & Earth Sciences",
    department: "University of Utah",
    description: "Renowned for cutting-edge research in smart mining and engineering education.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAI2D_4BK8VYa2mkKsGhd9Oj84ZaBlfdO-A",
    image: "/speakers/rgsir.jpg"
  },
  {
    name: "Victor Tenorio, Ph.D.",
    title: "Professor of Practice",
    department: "Arizona State University, USA",
    description: "Leader in mine digitization and intelligent mining systems.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAD8kosB8MBS_PFldnfAFu5YV5DecnVZlxE",
    image: "/speakers/vtsir.jpg"
  },
  {
    name: "Abhinav Sengupta",
    title: "Associate Director",
    department: "PwC Rajasthan, India",
    description: "Decarbonization of Mines & Use of Gen AI in Mining & Metals Sector.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAZwwMwB4Z7SSfWgQrjSc27gjTzZpcBaNX8",
    image: "/speakers/assir.jpg"
  },
  {
    name: "Dr. Pedram MASOUDI",
    title: "Geostatistician–Geophysicist",
    department: "France",
    description: "Expert in advanced geostatistics and spatial analytics for exploration and resource evaluation.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAch_JgB_KwGKtCBXm54Rg8UAynRGGTFIMU",
    image: "/speakers/pmsir.jpg"
  },
  {
    name: "Dr. Sihe Nhleko",
    title: "Sustainable Mining | AI in Mining | Mine Planning",
    department: "University of the Witwatersrand, South Africa",
    description: "Driving innovation at the interface of AI and sustainable mining.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAPVQ94B0fG6U4NHkATkNL1pFTf53-DrO-E",
    image: "/speakers/snsir.jpg"
  },
  {
    name: "Satish Penmetsa",
    title: "CEO",
    department: "GroundHog",
    description: "Global Leader in Mine Digitization & Automation for Operations, Maintenance & Safety.",
    linkedIn: "https://www.linkedin.com/in/ACoAAAA1zqQBfs1c6pN0EK0z5Ens_-lbfDODkL4",
    image: "/speakers/spsir.jpg"
  },
  {
    name: "Pramod Kumar Maheshwari",
    title: "Director of Mines Safety (Retd.)",
    department: "DGMS, Ministry of Labour & Employment, Government of India",
    description: "Consultant for Mine Safety.",
    linkedIn: "https://www.linkedin.com/in/ACoAACnYhAUBww0I4kuWammIT1zgVXrok2qtt68",
    image: "/speakers/pkmsir.jpg"
  },
  {
    name: "Sudipto Sen",
    title: "Chief Executive Officer",
    department: "Asterix Innovations Private Limited",
    description: "CEO at the forefront of mining innovation and digital solutions.",
    linkedIn: "https://www.linkedin.com/in/ACoAAADnmjYBClKWW7GfSrJvt2EQ9RsFOIuFB4c",
    image: "/speakers/ssensir.jpg"
  },
];

 const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut",
    },
  },
});

const SpeakersPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <motion.section
        viewport={{ once: true, amount: 0.25 }}
        className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-200 py-30 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            variants={fadeIn("up", "spring", 0.1, 1)}
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-700"
          >
            Keynote Speakers
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-base text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Meet the leaders who are shaping the future of digital mining,
            AI, and sustainability.
          </motion.p>
        </div>
      </motion.section>

      <section id="speakers" className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Distinguished Speakers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experts from around the world with insights on AI, sustainability,
            mining, and innovation.
          </p>
        </motion.div>

        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0, 0.5)}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100  flex flex-col"
            >
              {/* Speaker Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-56 object-cover"
              />

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{speaker.title}</p>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {speaker.department}
                </p>
                <p className="text-gray-600 text-sm flex-grow mb-4">
                  {speaker.description}
                </p>

                {/* LinkedIn */}
                {speaker.linkedIn && (
                  <a
                    href={speaker.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.604c0-1.337-.025-3.063-1.871-3.063-1.872 0-2.158 1.462-2.158 2.971v5.696h-3v-10h2.881v1.366h.041c.401-.758 1.379-1.557 2.84-1.557 3.037 0 3.6 2.001 3.6 4.602v5.589z" />
                    </svg>
                    View LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default SpeakersPage;
