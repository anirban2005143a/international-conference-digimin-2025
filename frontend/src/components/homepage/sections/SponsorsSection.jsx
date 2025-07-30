import { motion } from "framer-motion";
import Link from "next/link";

export const sponsors = [
  {
    id: 1,
    name: "BCCL",
    logo: "/sponsors/bccl.jpeg", // Replace with actual logo path if available
    description: "BCCL is a leading coal mining company in India and a subsidiary of Coal India Limited, playing a key role in energy generation and national development.",
    link: "https://www.bcclweb.in",
    category: "Gold",
  },
  {
    id: 2,
    name: "Tvarana",
    logo: "/sponsors/Tvarana.png",
    description:
      "Award-winning Oracle NetSuite Consulting Firm and SDN partner specializing in innovative SuiteApps.",
    link: "https://www.tvarana.com",
    category: "Silver",
  },
  {
    id: 3,
    name: "NLC India Limited",
    logo: "/sponsors/nlcIndiaLimited.jpg",
    description:
      "NLC India Limited, established in November 1956 and headquartered in Neyveli, Tamil Nadu, is a Navratna Central Public Sector Undertaking under the Ministry of Coal, engaged in lignite and coal mining as well as thermal and renewable power generation across India.",
    link: "https://www.nlcindia.in/website/en/",
    category: "Bronze",
  },
  {
    id: 4,
    name: "DVC",
    logo: "/sponsors/dvc.png", // Replace with actual logo path if available
    description:
      "Damodar Valley Corporation (DVC) is one of the premier power utilities in India involved in power generation, transmission, and distribution.",
    link: "https://www.dvc.gov.in",
    category: "Bronze",
  },
  {
    id: 5,
    name: "Tata Steel",
    logo: "/sponsors/tataSteel.svg", // Replace with actual logo path if available
    description:
      "Tata Steel is among the top global steel companies, known for its high-quality products, innovation, and commitment to sustainability.",
    link: "https://www.tatasteel.com",
    category: "Bronze",
  },
  {
    id: 6,
    name: "Jindal Steel & Power",
    logo: "/sponsors/Jindal_Steel_and_power.png", // Replace with actual logo path if available
    description:
      "Jindal Steel and Power is a leading Indian steel and energy company, driving innovation and sustainable growth in infrastructure and manufacturing.",
    link: "https://www.jindalsteelpower.com",
    category: "Bronze",
  },
];


const badgeColors = {
  Diamond: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  Gold: "bg-yellow-400 text-black",
  Silver: "bg-gray-300 text-black",
  Bronze: "bg-orange-400 text-white",
};

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

export const SponsorsSection = () => {
  return (
    <>
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

      
      </section>
    </>
  );
};
