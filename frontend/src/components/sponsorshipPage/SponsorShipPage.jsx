"use client"
import { motion } from 'framer-motion';
import { Briefcase, Star, Contact2, Banknote, Calendar, Zap } from 'lucide-react';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }
  }
};

export default function SponsorshipPage() {
  return (
    <div className=" max-w-5xl mx-auto sm:px-4 px-2 py-5 ">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.header
          className="text-center py-[120px]"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Exhibition & <span className="text-blue-700">Sponsorship</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.header>

        {/* Exhibition Section */}
        <motion.section
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="px-3 py-8 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-sky-50">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Exhibition Stalls</h2>
            </div>
            <p className="text-gray-700">
              Showcase your products and software to industry leaders and decision-makers.
            </p>
          </div>

          <div className="px-3 py-8 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  Stall Details
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className='sm:max-w-none max-w-[90%]'>Size: 3.0 m × 3.0 m (9.0 sq. m.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className='sm:max-w-none max-w-[90%]'>Electricity connection provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className='sm:max-w-none max-w-[90%]'>Includes registration for 2 company representatives</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Exhibition Dates
                </h3>
                <p className="text-gray-700">
                  12-13 September 2025<br />
                  9:30 AM to 6:00 PM daily
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-gray-800 mb-2">Pricing</h4>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-700">Indian Exhibitors</span>
                    <span className="font-bold text-blue-700">₹1,50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Overseas Exhibitors</span>
                    <span className="font-bold text-blue-700">USD 2,000</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">* Prices exclude GST @18% for Indian exhibitors</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Sponsorship Section */}
        <motion.section
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="py-6 px-3 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-sky-50">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Sponsorship Packages</h2>
            </div>
            <p className="text-gray-700">
              Gain visibility among mining industry professionals and academia.
            </p>
          </div>

          <div className="py-6 px-3 sm:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="sm:px-4 px-2 py-3 text-center font-medium text-gray-700">Category</th>
                    <th className="sm:px-4 px-2 py-3 text-center font-medium text-gray-700">Amount (INR)</th>
                    <th className="sm:px-4 px-2 py-3 text-center font-medium text-gray-700">Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="sm:px-4 px-2 py-4 font-medium text-gray-800">Diamond Sponsor</td>
                    <td className="sm:px-4 px-2 py-4">10,00,000</td>
                    <td className="sm:px-4 px-2 py-4">10 delegates free of cost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="sm:px-4 px-2 py-4 font-medium text-gray-800">Gold Sponsor</td>
                    <td className="sm:px-4 px-2 py-4">7,00,000</td>
                    <td className="sm:px-4 px-2 py-4">7 delegates free of cost</td>
                  </tr>
                  <tr>
                    <td className="sm:px-4 px-2 py-4 font-medium text-gray-800">Silver Sponsor</td>
                    <td className="sm:px-4 px-2 py-4">5,00,000</td>
                    <td className="sm:px-4 px-2 py-4">5 delegates free of cost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="sm:px-4 px-2 py-4 font-medium text-gray-800">Bronze Sponsor</td>
                    <td className="sm:px-4 px-2 py-4">3,00,000</td>
                    <td className="sm:px-4 px-2 py-4">3 delegates free of cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">* All sponsorship amounts exclude GST @18%</p>
          </div>
        </motion.section>

        {/* Registration & Advertisement */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Registration Fees */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="py-6 px-3 sm:p-8 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Registration Fees</h2>
              <p className="text-gray-700">(excluding GST@18%)</p>
            </div>
            <div className="py-6 px-3 sm:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="sm:px-4 px-2 py-3 font-medium text-gray-700">Category</th>
                      <th className="sm:px-4 px-2 py-3 font-medium text-gray-700">INR</th>
                      <th className="sm:px-4 px-2 py-3 font-medium text-gray-700">USD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="sm:px-4 px-2 py-4 font-medium text-gray-800">Academics & Research</td>
                      <td className="sm:px-4 px-2 py-4">7,000</td>
                      <td className="sm:px-4 px-2 py-4">150</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="sm:px-4 px-2 py-4 font-medium text-gray-800">Students/Research Scholars</td>
                      <td className="sm:px-4 px-2 py-4">3,000</td>
                      <td className="sm:px-4 px-2 py-4">50</td>
                    </tr>
                    <tr>
                      <td className="sm:px-4 px-2 py-4 font-medium text-gray-800">Industry/Govt. Agency</td>
                      <td className="sm:px-4 px-2 py-4">10,000</td>
                      <td className="sm:px-4 px-2 py-4">200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Souvenir Advertisement */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="py-6 px-3 sm:p-8 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Souvenir Advertisement</h2>
              <p className="text-gray-700">(excluding GST@18%)</p>
            </div>
            <div className="py-6 px-3 sm:p-8">
              <div className="space-y-4">
                {[
                  { position: "Back Cover", price: "₹30,000" },
                  { position: "Front Inside", price: "₹25,000" },
                  { position: "Back Inside", price: "₹25,000" },
                  { position: "Full Page", price: "₹15,000" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 font-medium">{item.position}</span>
                    <span className="font-bold text-blue-700">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className='grid md:grid-cols-4 grid-cols-1 space-y-5 space-x-3'>
          {/* Payment Details */}
          <motion.section
            className="bg-white rounded-xl shadow-md overflow-hidden mb-12 col-span-3"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="py-6 px-3 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-sky-50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Banknote className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Bank Details for Payment</h2>
              </div>
            </div>

            <div className="py-6 px-3 sm:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Account Information</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-medium">Name:</span> IIT(ISM) SPECIAL FUND
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">A/C No.:</span> 0986101024892
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">GSTIN:</span> 20AAAAAI0686D1ZA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Bank Information</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-medium">Bank:</span> Canara Bank
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Branch:</span> Saraidhela Branch, Dhanbad
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">IFSC:</span> CNRB0000986
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">MICR:</span> 826015003
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* qr code  */}
          <div>
            <Image
              width={500}
              height={500}
              loading='lazy'
              className=' col-span-1'
              src={"/qr.png"}
            />
          </div>
        </div>

        {/* Contact Information */}
        {/* <motion.section
          className="bg-blue-700 rounded-xl shadow-md overflow-hidden text-white"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="py-6 px-3 sm:p-8 border-b border-blue-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Contact2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Contact for Booking</h2>
            </div>
            <p className="text-blue-100">
              Contact the Conference Secretariat to book stalls or discuss sponsorship opportunities.
            </p>
          </div>

          <div className="py-6 px-3 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Mr. Rajul Dwivedi</h3>
                <p className="mb-2">
                  <span className="opacity-80">Phone:</span> +91 7772969347
                </p>
                <p>
                  <span className="opacity-80">Email:</span> 23dp0082@iitism.ac.in
                </p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Ms. Pratibha Sharma</h3>
                <p className="mb-2">
                  <span className="opacity-80">Phone:</span> +91 6372685665
                </p>
                <p>
                  <span className="opacity-80">Email:</span> 23dr0280@iitism.ac.in
                </p>
              </div>
            </div>
          </div>
        </motion.section> */}
      </div>
    </div>
  );
}