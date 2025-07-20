"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const SponsorsPage = () => {
  const fadeIn = (direction, type, delay, duration) => {
    return {
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
    };
  };
  const sponsors = [
    {
      id: 1,
      name: "Tvarana",
      logo: "/sponsors/Tvarana.png",
      description:
        "Award-winning Oracle NetSuite Consulting Firm and SDN partner specializing in innovative SuiteApps.",
      link: "https://www.tvarana.com",
      category: "Silver",
    },
    {
      id: 1,
      name: "Tvarana",
      logo: "/sponsors/nlcIndiaLimited.jpg",
      description:
        "NLC India Limited, established in November 1956 and headquartered in Neyveli, Tamil Nadu, is a Navratna Central Public Sector Undertaking under the Ministry of Coal, engaged in lignite and coal mining as well as thermal and renewable power generation across India.",
      link: "https://www.nlcindia.in/website/en/",
      category: "Bronze",
    },
  ];

  const badgeColors = {
    Diamond: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    Gold: "bg-yellow-400 text-black",
    Silver: "bg-gray-300 text-black",
    Bronze: "bg-orange-400 text-white",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        viewport={{ once: true, amount: 0.25 }}
        className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-200    py-30 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            variants={fadeIn("up", "spring", 0.1, 1)}
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-700"
          >
            Our Valued Partners
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-base text-gray-600  max-w-3xl mx-auto mb-8"
          >
            We gratefully acknowledge the organizations supporting DIGMIN 2025
            and the future of digital mining.
          </motion.p>
          <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
            <a
              href="#sponsors"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              View All Sponsors
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Sponsors Grid */}
      <section id="sponsors" className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Conference Sponsors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These industry leaders are helping shape the future of digital
            mining through their generous support.
          </p>
        </motion.div>

        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {/** Inside your map */}
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              variants={fadeIn("up", "spring", index * 0.1, 0.5)}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="relative bg-white rounded-xl shadow-md overflow-visible border border-gray-100 transition-all duration-300"
            >
              {/* Badge */}
              <div
                className={`absolute -top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full ${
                  badgeColors[sponsor.category]
                }`}
              >
                {sponsor.category} sponsor
              </div>

              <div className="p-6 flex flex-col items-center h-full">
                <div className="h-32 flex items-center mb-4">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4 flex-grow">
                  {sponsor.description}
                </p>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center transition"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Sponsors
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Become part of DIGMIN 2025 and connect with leaders in digital
            mining innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sponsorshiptiers"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Sponsorship Opportunities
            </Link>
            <a
              href="#contact"
              className="inline-block border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SponsorsPage;
