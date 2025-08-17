import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-5xl mx-auto lg:p-6 p-2 h-screen flex md:gap-4 gap-2 md:flex-row flex-col pt-10">
      {/* Left Side - QR + International Info */}
      <div className="md:w-[20%]  w-full flex md:flex-col sm:flex-row flex-col items-center gap-4 md:order-1 order-2 pb-4">
        {/* QR Code */}
        <Image
          width={500}
          height={500}
          loading="lazy"
          className="w-full object-contain"
          src={"/qr.png"}
          alt="UPI QR Code"
        />

        {/* International Payment Section */}
        <div className="bg-blue-50 border border-blue-300 rounded-xl p-3 text-sm w-full">
          <h2 className="font-semibold text-blue-700 mb-1">
            🌍 For International Participants
          </h2>
          <p className="text-gray-700">
            Please use the following <strong>SWIFT Code</strong> for wire
            transfers:
          </p>
          <div className="mt-2">
            <p>
              <span className="font-medium">SWIFT Code:</span>{" "}
              <code className="bg-white px-1 py-0.5 rounded border text-gray-800">
                CNRBINBBBFD
              </code>
            </p>
            <p className="text-xs mt-1 text-gray-500">
              (Valid for all Canara Bank branches in India, including Dhanbad
              and Seraidhela)
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Iframe */}
      <iframe
        src="https://registration-form-digimin-2025.vercel.app"
        className="border-none md:order-2 order-1 md:w-[80%] w-full h-full min-h-[600px]"
        title="Registration Form"
      ></iframe>
    </div>
  );
};

export default page;
