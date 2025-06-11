"use client";
import React from "react";
import { committeeMembers } from "./allMembersData";
import MemberCard from "./MemberCard";
import { Users } from "lucide-react";
import { universityLogos } from "@/constants/conferenceData";
import { motion } from "framer-motion";

const CommitteePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-25">
        <section className="py-16 bg-blue-50">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              <Users size={24} className="text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
              Our Committee
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Meet our distinguished committee members from around the world
              leading innovation and excellence in mining education and
              research.
            </p>
          </div>

          {/* Logos Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 max-w-6xl mx-auto"
          >
            {universityLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={logo}
                  alt={`University Logo ${index + 1}`}
                  className="h-16 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {committeeMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
