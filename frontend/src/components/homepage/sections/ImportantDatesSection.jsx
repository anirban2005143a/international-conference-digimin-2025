"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { IMPORTANT_DATES } from '@/constants/conferenceData';
import { Calendar } from 'lucide-react';

const ImportantDatesSection = () => {
  return (
    <section id="dates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 ">Important Dates</h2>
          <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mark your calendar with these critical deadlines
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden shadow-md rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {IMPORTANT_DATES.map((date, index) => {
                  const eventTextClass = date.isHighlighted ? 'text-indigo-900' : 'text-gray-900';
                  const dateTextClass = date.isHighlighted ? 'font-bold text-indigo-900' : 'text-gray-500';
                  const iconColorClass = date.isHighlighted ? 'text-indigo-600' : 'text-gray-500';
                  return (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={date.isHighlighted ? 'bg-indigo-50' : ''}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {date.isHighlighted && (
                            <span
                              className="flex-shrink-0 h-3 w-3 rounded-full bg-indigo-600 mr-2"
                              aria-hidden="true"
                            />
                          )}
                          <div className={`text-sm font-medium ${eventTextClass}`}>
                            {date.title}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Calendar size={16} className={`mr-2 ${iconColorClass}`} />
                          <div className={`text-sm ${dateTextClass}`}>
                            {date.date}
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 bg-indigo-50 rounded-lg p-6 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">Note</h3>
              <div className="mt-2 text-sm text-gray-600">
                <p>
                  All deadlines are set at 23:59 IST (UTC+5:30) on the dates mentioned.
                  Early submissions are encouraged and will receive priority in the review process.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantDatesSection;
