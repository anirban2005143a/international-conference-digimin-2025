// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import {
//   ChevronDown,
//   Calendar,
//   Mail,
//   User,
//   Phone,
//   Building,
//   FileText,
//   CreditCard,
//   Loader2
// } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";

// const CollapsibleField = ({ children, show }) => {
//   const ref = useRef(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       setHeight(ref.current.scrollHeight);
//     }
//   }, [show]);

//   return (
//     <AnimatePresence initial={false}>
//       {show && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           className="overflow-hidden mb-6 col-span-1"
//         >
//           <div ref={ref} className="p-0.5 pb-0.75">
//             {children}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     affiliation: "",
//     email: "",
//     phone: "",
//     abstractSubmitted: "",
//     authorName: "",
//     abstractTitle: "",
//     registrationCategory: "",
//     paymentId: "",
//     paymentDate: "",
//   });
//   const [isSending, setisSending] = useState(false);

//   const [isDropdownOpen, setIsDropdownOpen] = useState({
//     abstract: false,
//     category: false,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const toggleDropdown = (dropdown) => {
//     setIsDropdownOpen((prev) => ({
//       ...prev,
//       [dropdown]: !prev[dropdown],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const values = Object.values(formData);
//     const isFormValid = values.every((val, idx) => {
//       if (formData.abstractSubmitted === "no" && (idx === 5 || idx === 6)) {
//         return true;
//       }
//       return val.trim() !== "";
//     });

//     if (!isFormValid) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     console.log("Submitted Form:", formData);
//     sendMail();
//   };

//   const sendMail = async () => {
//     try {
//       setisSending(true);

//       const res = await axios.post(
//         "/api/sendmail",
//         {
//           formData,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(res);
//       showToast(0, res.data.msg);

//       //clear values
//       setFormData({
//         fullName: "",
//         affiliation: "",
//         email: "",
//         phone: "",
//         abstractSubmitted: "",
//         authorName: "",
//         abstractTitle: "",
//         registrationCategory: "",
//         paymentId: "",
//         paymentDate: "",
//       });
//     } catch (error) {
//       console.log(error);
//       showToast(1,error.response?.data?.msg || error.message || "Somthing went wrong. Please try again");
//     } finally {
//       setisSending(false);
//     }
//   };

//   const showToast = (err, msg) => {
//     if (err) {
//       toast.error(msg, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } else {
//       toast.success(msg, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   };

//   return (
//     <>
//       <ToastContainer />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mx-auto sm:p-4 p-2 bg-white rounded-lg shadow-lg border border-blue-100"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
//           DIGMIN 2025 Registration
//         </h2>
//         <p className="text-center text-red-500 font-medium mb-8 text-lg">
//           Early registration deadline: August 15, 2025
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-2 gap-8 items-start"
//         >
//           {[
//             [
//               "fullName",
//               "Full Name",
//               <User className="w-5 h-5 text-blue-800" />,
//             ],
//             [
//               "affiliation",
//               "Affiliation",
//               <Building className="w-5 h-5 text-blue-800" />,
//             ],
//             ["email", "Email", <Mail className="w-5 h-5 text-blue-800" />],
//             [
//               "phone",
//               "Phone Number",
//               <Phone className="w-5 h-5 text-blue-800" />,
//             ],
//           ].map(([name, label, icon]) => (
//             <div className="mb-6 col-span-1" key={name}>
//               <label className="mb-2 font-medium text-blue-800 flex items-center gap-2">
//                 {icon} {label} *
//               </label>
//               <input
//                 type={name === "email" ? "email" : "text"}
//                 name={name}
//                 value={formData[name]}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>
//           ))}

//           {/* Abstract Submitted Dropdown */}
//           <div className="mb-6 col-span-1">
//             <label className="block mb-2 font-medium text-blue-800 flex items-center gap-2">
//               <FileText className="w-5 h-5 text-blue-800" />
//               Abstract Submitted? *
//             </label>
//             <div className="relative">
//               <button
//                 type="button"
//                 className="w-full px-4 py-2.5 border border-blue-200 rounded-lg flex justify-between items-center hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 onClick={() => toggleDropdown("abstract")}
//               >
//                 <span>
//                   {formData.abstractSubmitted === ""
//                     ? "Select Abstract Status"
//                     : formData.abstractSubmitted === "yes"
//                     ? "Yes"
//                     : "No"}
//                 </span>
//                 <ChevronDown
//                   className={`h-5 w-5 text-blue-700 transition-transform ${
//                     isDropdownOpen.abstract ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {isDropdownOpen.abstract && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute z-10 w-full mt-1 bg-white border border-blue-200 rounded-lg shadow-lg overflow-hidden"
//                   >
//                     {["yes", "no"].map((val) => (
//                       <li
//                         tabIndex={0}
//                         key={val}
//                         onClick={() => {
//                           handleChange({
//                             target: { name: "abstractSubmitted", value: val },
//                           });
//                           toggleDropdown("abstract");
//                         }}
//                         className="px-4 py-2.5 cursor-pointer hover:bg-blue-50"
//                       >
//                         {val === "yes" ? "Yes" : "No"}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Collapsible Fields */}
//           <CollapsibleField show={formData.abstractSubmitted === "yes"}>
//             <div className="space-y-6">
//               <div>
//                 <label className="mb-2 font-medium text-blue-800 flex items-center gap-2">
//                   <User className="w-5 h-5 text-blue-800" />
//                   Author Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="authorName"
//                   value={formData.authorName}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 font-medium text-blue-800 flex items-center gap-2">
//                   <FileText className="w-5 h-5 text-blue-800" />
//                   Abstract Title *
//                 </label>
//                 <input
//                   type="text"
//                   name="abstractTitle"
//                   value={formData.abstractTitle}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 />
//               </div>
//             </div>
//           </CollapsibleField>

//           {/* Registration Category Dropdown */}
//           <div className="mb-6 col-span-1">
//             <label className="block mb-2 font-medium text-blue-800 flex items-center gap-2">
//               <CreditCard className="w-5 h-5 text-blue-800" />
//               Registration Category *
//             </label>
//             <div className="relative">
//               <button
//                 type="button"
//                 className="w-full px-4 py-2.5 border border-blue-200 rounded-lg flex justify-between items-center hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 onClick={() => toggleDropdown("category")}
//               >
//                 <span>
//                   {formData.registrationCategory === ""
//                     ? "Select Registration Category"
//                     : {
//                         student: "Student/Research Scholar (₹3,000/$50)",
//                         academic:
//                           "Academic/Research Organization (₹7,000/$150)",
//                         industry: "Industry/Govt. Agency (₹10,000/$200)",
//                       }[formData.registrationCategory]}
//                 </span>
//                 <ChevronDown
//                   className={`h-5 w-5 text-blue-700 transition-transform ${
//                     isDropdownOpen.category ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {isDropdownOpen.category && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute z-10 w-full mt-1 bg-white border border-blue-200 rounded-lg shadow-lg overflow-hidden"
//                   >
//                     {[
//                       {
//                         label: "Student/Research Scholar (₹3,000/$50)",
//                         value: "student",
//                       },
//                       {
//                         label: "Academic/Research Organization (₹7,000/$150)",
//                         value: "academic",
//                       },
//                       {
//                         label: "Industry/Govt. Agency (₹10,000/$200)",
//                         value: "industry",
//                       },
//                     ].map((item) => (
//                       <li
//                         tabIndex={0}
//                         key={item.value}
//                         onClick={() => {
//                           handleChange({
//                             target: {
//                               name: "registrationCategory",
//                               value: item.value,
//                             },
//                           });
//                           toggleDropdown("category");
//                         }}
//                         className="px-4 py-2.5 cursor-pointer hover:bg-blue-50"
//                       >
//                         {item.label}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Payment Info */}
//           {[
//             [
//               "paymentId",
//               "Payment Confirmation ID",
//               <CreditCard className="w-5 h-5 text-blue-800" />,
//             ],
//             [
//               "paymentDate",
//               "Payment Date",
//               <Calendar className="w-5 h-5 text-blue-800" />,
//             ],
//           ].map(([name, label, icon]) => (
//             <div className="mb-6 col-span-1" key={name}>
//               <label className="block mb-2 font-medium text-blue-800 flex items-center gap-2">
//                 {icon} {label} *
//               </label>
//               <input
//                 type={name === "paymentDate" ? "date" : "text"}
//                 name={name}
//                 max={new Date().toISOString().split("T")[0]}
//                 value={formData[name]}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>
//           ))}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="col-span-1 sm:col-span-2 w-full py-3.5 px-6 cursor-pointer bg-blue-800  text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200"
//           >
//             {isSending ? (
//               <Loader2 className="z-10 animate-spin mx-auto text-white relative" />
//             ) : (
//               "Submit Registration"
//             )}
//           </button>
//         </form>
//       </motion.div>
//     </>
//   );
// };



"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Calendar,
  Mail,
  User,
  Phone,
  Building,
  FileText,
  CreditCard,
  Loader2,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const CollapsibleField = ({ children, show }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [show]);

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden mb-6 col-span-1"
        >
          <div ref={ref} className="p-1">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    affiliation: "",
    email: "",
    phone: "",
    abstractSubmitted: "",
    authorName: "",
    abstractTitle: "",
    registrationCategory: "",
    paymentId: "",
    paymentDate: "",
  });
  const [isSending, setisSending] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    abstract: false,
    category: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(formData);
    const isFormValid = values.every((val, idx) => {
      if (formData.abstractSubmitted === "no" && (idx === 5 || idx === 6)) {
        return true;
      }
      return val.trim() !== "";
    });

    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }

    sendMail();
  };

  const sendMail = async () => {
    try {
      setisSending(true);
      const res = await axios.post(
        "/api/sendmail",
        { formData },
        { headers: { "Content-Type": "application/json" } }
      );
      showToast(0, res.data.msg);
      setFormData({
        fullName: "",
        affiliation: "",
        email: "",
        phone: "",
        abstractSubmitted: "",
        authorName: "",
        abstractTitle: "",
        registrationCategory: "",
        paymentId: "",
        paymentDate: "",
      });
    } catch (error) {
      showToast(1, error.response?.data?.msg || error.message);
    } finally {
      setisSending(false);
    }
  };

  const showToast = (err, msg) => {
    const opts = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    };
    err ? toast.error(msg, opts) : toast.success(msg, opts);
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto p-2 sm:p-4 bg-white rounded-lg shadow-lg border border-blue-100 text-[clamp(0.9rem,1.2vw,1.1rem)]"
      >
        <h2 className="text-[clamp(1.4rem,2vw,2rem)] font-bold text-center text-gray-800 mb-2">
          DIGMIN 2025 Registration
        </h2>
        <p className="text-center text-red-500 font-medium mb-8 text-[clamp(1rem,1.4vw,1.2rem)]">
          Early registration deadline: August 15, 2025
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-8 items-start"
        >
          {[
            ["fullName", "Full Name", <User className="w-5 h-5 text-blue-800" />],
            ["affiliation", "Affiliation", <Building className="w-5 h-5 text-blue-800" />],
            ["email", "Email", <Mail className="w-5 h-5 text-blue-800" />],
            ["phone", "Phone Number", <Phone className="w-5 h-5 text-blue-800" />],
          ].map(([name, label, icon]) => (
            <div className="mb-6 col-span-1" key={name}>
              <label className="mb-2 font-medium text-blue-800 flex items-center gap-2">
                {icon} {label} *
              </label>
              <input
                type={name === "email" ? "email" : "text"}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
          ))}

          {/* Abstract Submitted Dropdown */}
          <div className="mb-6 col-span-1">
            <label className="block mb-2 font-medium text-blue-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-800" /> Abstract Submitted? *
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg flex justify-between items-center hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-800"
                onClick={() => toggleDropdown("abstract")}
              >
                <span>
                  {formData.abstractSubmitted === ""
                    ? "Select Abstract Status"
                    : formData.abstractSubmitted === "yes"
                    ? "Yes"
                    : "No"}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-700 transition-transform ${
                    isDropdownOpen.abstract ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen.abstract && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 w-full mt-1 bg-white border border-blue-200 rounded-lg shadow-lg overflow-hidden"
                  >
                    {["yes", "no"].map((val) => (
                      <li
                        tabIndex={0}
                        key={val}
                        onClick={() => {
                          handleChange({
                            target: { name: "abstractSubmitted", value: val },
                          });
                          toggleDropdown("abstract");
                        }}
                        className="px-4 py-2.5 cursor-pointer hover:bg-blue-50"
                      >
                        {val === "yes" ? "Yes" : "No"}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          <CollapsibleField show={formData.abstractSubmitted === "yes"}>
            <div className="space-y-6">
              <div>
                <label className="mb-2 font-medium text-blue-800 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-800" /> Author Name *
                </label>
                <input
                  type="text"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="mb-2 font-medium text-blue-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-800" /> Abstract Title *
                </label>
                <input
                  type="text"
                  name="abstractTitle"
                  value={formData.abstractTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>
          </CollapsibleField>

          {/* Category Dropdown */}
          <div className="mb-6 col-span-1">
            <label className="block mb-2 font-medium text-blue-800 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-800" /> Registration Category *
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg flex justify-between items-center hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-800"
                onClick={() => toggleDropdown("category")}
              >
                <span>
                  {formData.registrationCategory === ""
                    ? "Select Registration Category"
                    : {
                        student: "Student/Research Scholar (₹3,000/$50)",
                        academic: "Academic/Research Organization (₹7,000/$150)",
                        industry: "Industry/Govt. Agency (₹10,000/$200)",
                      }[formData.registrationCategory]}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-700 transition-transform ${
                    isDropdownOpen.category ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen.category && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 w-full mt-1 bg-white border border-blue-200 rounded-lg shadow-lg overflow-hidden"
                  >
                    {["student", "academic", "industry"].map((value) => (
                      <li
                        tabIndex={0}
                        key={value}
                        onClick={() => {
                          handleChange({
                            target: { name: "registrationCategory", value },
                          });
                          toggleDropdown("category");
                        }}
                        className="px-4 py-2.5 cursor-pointer hover:bg-blue-50"
                      >
                        {{
                          student: "Student/Research Scholar (₹3,000/$50)",
                          academic: "Academic/Research Organization (₹7,000/$150)",
                          industry: "Industry/Govt. Agency (₹10,000/$200)",
                        }[value]}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Payment Info */}
          {["paymentId", "paymentDate"].map((name) => (
            <div className="mb-6 col-span-1" key={name}>
              <label className="block mb-2 font-medium text-blue-800 flex items-center gap-2">
                {name === "paymentId" ? (
                  <CreditCard className="w-5 h-5 text-blue-800" />
                ) : (
                  <Calendar className="w-5 h-5 text-blue-800" />
                )} {name === "paymentId" ? "Payment Confirmation ID" : "Payment Date"} *
              </label>
              <input
                type={name === "paymentDate" ? "date" : "text"}
                name={name}
                max={name === "paymentDate" ? new Date().toISOString().split("T")[0] : undefined}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
          ))}

          <button
            type="submit"
            className="col-span-2 w-full py-3.5 px-6 cursor-pointer bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            {isSending ? (
              <Loader2 className="animate-spin mx-auto text-white" />
            ) : (
              "Submit Registration"
            )}
          </button>
        </form>
      </motion.div>
    </>
  );
};
