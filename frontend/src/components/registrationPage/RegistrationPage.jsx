"use client"
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { DownloadCloud, Banknote, ArrowRight } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    })
};

export default function RegistrationPage() {
    const containerRef = useRef(null);

    // Section refs and animations
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    return (
        <div ref={containerRef} className=" text-gray-800 min-h-[100dvh] ">
            <div className=" space-y-16">
                {/* Header with Download Button */}
                <motion.header
                    ref={sectionRefs[0]}
                    className=" py-[120px] bg-gradient-to-br from-gray-50 to-indigo-100 px-4"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    <div className='max-w-7xl text-center space-y-8 mx-auto'>
                        <div className="mb-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                                Registration for <span className="text-blue-700">DIGMIN 2025</span>
                            </h1>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Join the premier international conference on Digital Intelligence for Green Mining,
                            hosted at IIT(ISM) Dhanbad.
                        </p>
                        {/* Hero Download Button */}
                        <motion.div
                            variants={fadeUp}
                            custom={1}
                        >
                            <a
                                href="/registration-form.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                            >
                                <DownloadCloud className="w-5 h-5" />
                                Download Registration Form
                            </a>
                            <p className="text-sm text-gray-500 mt-3">
                                Early registration deadline: October 15, 2025
                            </p>
                        </motion.div>
                    </div>

                </motion.header>

                <div className=' max-w-7xl mx-auto px-4 pt-5 pb-10 space-y-5'>
                    {/* Registration Fees */}
                    <motion.section
                        ref={sectionRefs[1]}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-8"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Banknote className="w-5 h-5 text-blue-700" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900">Registration Fees</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-blue-50 text-left">
                                        <th className="py-3 px-6 font-medium text-blue-800 border-b border-gray-200">Category</th>
                                        <th className="py-3 px-6 font-medium text-blue-800 border-b border-gray-200">Indian currency  (INR)</th>
                                        <th className="py-3 px-6 font-medium text-blue-800 border-b border-gray-200">Foreign currency  (USD)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-100 transition-colors">
                                        <td className="py-4 px-6 font-medium">Delegates (Academics & Research Organization)</td>
                                        <td className="py-4 px-6">₹7,000</td>
                                        <td className="py-4 px-6">$150</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition-colors bg-gray-50">
                                        <td className="py-4 px-6 font-medium">Students / Research Scholars</td>
                                        <td className="py-4 px-6">₹3,000</td>
                                        <td className="py-4 px-6">$50</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition-colors">
                                        <td className="py-4 px-6 font-medium">Delegates (Industry/ Govt. Agency)</td>
                                        <td className="py-4 px-6">₹10,000</td>
                                        <td className="py-4 px-6">$200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.section>



                    {/* Bank Details */}
                    <motion.section
                        ref={sectionRefs[2]}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-8"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-green-100 p-2 rounded-lg">
                                <Banknote className="w-5 h-5 text-green-700" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900">Payment Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-4">Bank Details</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-gray-600 font-medium min-w-[120px]">Account Name:</span>
                                        <span>IIT(ISM) SPECIAL FUND</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-gray-600 font-medium min-w-[120px]">Bank:</span>
                                        <span>Canara Bank, Saraidhela Branch, Dhanbad</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-gray-600 font-medium min-w-[120px]">Account No.:</span>
                                        <span>0986101024892</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-4">Other Details</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-gray-600 font-medium min-w-[120px]">IFSC Code:</span>
                                        <span>CNRB0000986</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-gray-600 font-medium min-w-[120px]">GSTIN:</span>
                                        <span>20AAAAI0686D1ZA</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-gray-600 font-medium min-w-[120px]">Address:</span>
                                        <span>Dhanbad, Jharkhand, India</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Download Form (repeated at bottom for convenience) */}
                    <motion.section
                        ref={sectionRefs[3]}
                        className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                    >
                        <div className="flex flex-col items-center space-y-4 max-w-md mx-auto">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <DownloadCloud className="w-6 h-6 text-blue-700" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900">Registration Form</h2>
                            <p className="text-gray-600">
                                Download the registration form and submit it along with payment confirmation.
                            </p>
                            <motion.a
                                href="/registration-form.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Download Form
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.section>

                    {/* Additional Info */}
                    <motion.div
                        className="text-center text-gray-500 text-sm"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={4}
                    >
                        <p>For any registration queries, please contact: registration@digmin2025.org</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}