import Image from "next/image";

const AbstractTemplate = () => {
    return (
        <div className=" lg:col-span-2 md:p-6 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Instructions to Prepare an ABSTRACT for DIGMIN 2025
            </h1>

            {/* header  */}
            <div className="flex flex-col items-center mb-8 border-b pb-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <Image
                        width={100}
                        height={100}
                        loading="lazy"
                        src="/centenry_logo.png"
                        alt="Conference Logo 1"
                        className="w-25 h-25 object-contain"
                    />
                    <Image
                        width={100}
                        height={100}
                        loading="lazy"
                        src="/ism-logo.png"
                        alt="Conference Logo 2"
                        className="w-25 h-25 object-contain"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-normal text-gray-800 italic ">International Conference on</h2>
                    <h1 className="text-2xl md:text-3xl font-bold text-red-800 my-2">
                        Digital Intelligence for Green Mining and Industrial Networks (DIGMIN)
                    </h1>
                    <p className="text-gray-600">Department of Mining Engineering</p>
                    <p className="text-gray-600">
                        Indian Institute of Technology (Indian School of Mines) Dhanbad – 826 004
                    </p>
                </div>
                <h2 className="mt-6 text-xl font-bold text-gray-800 border-t pt-4 w-full text-center">
                    Title of Your Abstract for DIGMIN 2025 Conference
                </h2>
            </div>

            {/* Author Information Section */}
            <div className="mb-8 p-4 bg-gray-50 rounded-md mx-auto w-fit">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Author Information</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-medium text-gray-800">First A. Author*</p>
                        <p className="text-sm text-gray-600">Affiliation</p>
                        <p className="text-sm text-gray-600">Postal Address</p>
                        <p className="text-sm text-blue-600">E-mail address and URL</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Second B. Author† and Third C. Author†</p>
                        <p className="text-sm text-gray-600">Affiliation</p>
                        <p className="text-sm text-gray-600">Postal Address</p>
                        <p className="text-sm text-blue-600">E-mail address and URL</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">* Corresponding author † Co-authors</p>
                </div>
            </div>

        

            {/* Abstract Guidelines */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Abstract Guidelines</h2>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400 mb-4">
                    <p className="text-gray-700">
                        DIGMIN 2025 is not just another mining conference. Still, it aims explicitly to bring together the mining, software, computing industries, and academia to discuss applied digital and AI/ML methods that target real-world applications from the computational sciences. Fields are mentioned in the themes on the next page.  We hope that this conference will benefit from the breakthroughs shared at DIGMIN 2025. With this first-of-its-kind thematic conference, we aim to create a platform where participants can exchange ideas about non-orthodox, creative ways of using quantum devices, such as in hybrid configurations with classical computing hardware.
                    </p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Submit an abstract of <strong>about 500 words or less</strong></li>
                    <li>Include <strong>one or two figures</strong> that illustrate your work</li>
                    <li>Submission deadline: <strong>July 15, 2025</strong></li>
                    <li>Submit through the abstract submission system</li>
                </ul>
            </div>

                {/* Guidelines */}
            <p className=" font-light text-sm italic mb-4 ">
                * You can find detailed information about the conference themes in the attached brochure. To help the abstract review process and the assignment of presentations to slots in the program, we request that you prepare your abstract according to the following structure: The email address of the primary author must be provided in the footer. The email address should be double-checked, as it will be used as the primary means of contacting the authors. The abstract must be submitted in word format. At the end of abstract, two to four keywords should be provided. Keywords are a tool to help indexers and search engines find relevant papers.
            </p>

            {/* Keywords */}
            <div className="mb-8 border-t border-gray-800 pt-5">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Keywords</h2>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                    <p className="text-sm text-gray-700 italic">
                        MAX 6 (eg. Key Words: Mining Industry 5.0, Sustainable Mining, Digital, Intelligent)
                    </p>
                </div>
            </div>

            {/* Conference Themes */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Conference Themes</h2>
                <p className="text-sm text-gray-600 mb-3">Identify one theme that corresponds to your paper:</p>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "1. Digital Foundations for Smart Mining",
                        "2. Robotics and Automation in Harsh Mining Environments",
                        "3. Edge AI and Real-Time Analytics in Mining",
                        "4. Geospatial Intelligence and Digital Mapping",
                        "5. Digital Resilience and Disaster Management in Mining",
                        "6. Energy Efficiency and Process Optimization"
                    ].map((theme, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded border border-gray-200">
                            <p className="font-medium text-gray-800">{theme}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Abstract Structure */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Abstract Structure</h2>
                {[
                    {
                        title: "1. Problem description and relevance (50 words)",
                        desc: "Describe the concrete problem that your approach is going to solve and its relevance as a real-world application."
                    },
                    {
                        title: "2. Methodology (50 words)",
                        desc: "Describe the concrete methodology of your work and how results are extracted. As the specific aim of DIGMIN 2025 is to discuss applied quantitative or qualitative methods, presentations should discuss the underlying methodology rather than focusing exclusively on results."
                    },
                    {
                        title: "3. Practical demonstration (50 words)",
                        desc: "Describe how you demonstrate the correct functioning of your approach through a simple figure"
                    },
                    {
                        title: "4. Application potential (50 words)",
                        desc: "Describe the potential of your approach to be scaled up to solve realistic problem sizes, \n e.g. The total number of words should not exceed 500 words. Abstracts that do not follow this structure might not be considered in the review process."
                    }
                ].map((section, index) => (
                    <div key={index} className="mb-4 p-3 bg-gray-50 rounded">
                        <h3 className="font-medium text-gray-800 mb-1">{section.title}</h3>
                        <p className="text-sm text-gray-600">{section.desc}</p>
                    </div>
                ))}
                <p className="text-sm text-gray-600 mt-2 italic ">
                    * The total number of words should not exceed 500 words. Abstracts that do not follow this structure might not be considered in the review process.
                </p>
            </div>

            {/* Presentation Preference */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Presentation Preference</h2>
                <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="presentation" className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Oral presentation</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="presentation" className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Poster presentation</span>
                    </label>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    The final decision on oral or poster presentation will be made by the scientific committee.
                </p>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-4 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h2>
                <p className="text-sm text-gray-600 mb-1">
                    Official website: <a href="https://international-conference-digimin-2025.vercel.app" className="text-blue-600 hover:underline">https://international-conference-digimin-2025.vercel.app</a>
                </p>
                <p className="text-sm text-gray-600">
                    Submissions and queries: <span className="text-blue-600">digmin2025@iitism.ac.in</span> or <span className="text-blue-600">sagarwal@iitism.ac.in</span>
                </p>
            </div>
        </div>
    );
};

export default AbstractTemplate;