"use client";
import { useState } from "react";
import GlobalArrowButton from "../general/global-arrow_button";

const programsData = [
  {
    title: "B.Tech",
    specialization: "C.S in AI & ML in collaboration with IBM",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  }
];

export default function OurPrograms() {
  const [selectedDiploma, setSelectedDiploma] = useState("Diploma");
  const [selectedFaculty, setSelectedFaculty] = useState("Faculty of Engineering & Technology");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-stix text-[var(--foreground)] text-4xl md:text-5xl lg:text-6xl mb-4">
            Explore Our Programs
          </h2>
          <p className="text-[var(--light-text-gray)] text-sm md:text-base max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        {/* Programs Container */}
        <div className="bg-[var(--dark-blue)] rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
          {/* Search and Filter Section - Single White Bar */}
          <div className="bg-[var(--light-gray)] border border-white rounded-lg flex flex-col md:flex-row items-stretch mb-8 relative z-20 overflow-hidden">
            {/* Diploma Dropdown - Left Section */}
            <div className="relative flex-shrink-0 md:w-32 lg:w-36 border-r border-gray-200">
              <select
                value={selectedDiploma}
                onChange={(e) => setSelectedDiploma(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-[var(--button-red)] text-sm md:text-base font-medium appearance-none pr-8 focus:outline-none cursor-pointer"
              >
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree</option>
                <option value="Certificate">Certificate</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="var(--button-red)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Faculty Dropdown - Middle Section */}
            <div className="relative flex-1 border-r border-gray-200">
              <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-[var(--foreground)] text-sm md:text-base appearance-none pr-10 focus:outline-none cursor-pointer"
              >
                <option value="Faculty of Engineering & Technology">Faculty of Engineering & Technology</option>
                <option value="Faculty of Management">Faculty of Management</option>
                <option value="Faculty of Science">Faculty of Science</option>
                <option value="Faculty of Arts">Faculty of Arts</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none bg-[var(--background)] rounded p-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="var(--button-red)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Search Bar - Right Section (Red) */}
            <div className="relative flex-1 bg-[var(--button-red)] border border-white rounded-lg">
              <input
                type="text"
                placeholder="Search Programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-4 py-3 pr-12 text-white placeholder-white text-sm md:text-base focus:outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {programsData.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Background UG Text - Top Right */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 text-6xl md:text-8xl !font-bold text-gray-200 leading-none opacity-50 z-0 font-stix">
                  {program.type}
                </div>

                {/* Program Content */}
                <div className="relative z-10">
                  {/* Program Title - Dark Red */}
                  <h3 className="text-[var(--button-red)] text-xl md:text-2xl lg:text-3xl !font-bold mb-2 font-plus-jakarta-sans">
                    {program.title}
                  </h3>

                  {/* Specialization - Dark Gray */}
                  <p className="text-[var(--button-red)] text-xs md:text-sm lg:text-base mb-3 md:mb-4 leading-relaxed font-plus-jakarta-sans">
                    {program.specialization}
                  </p>

                  {/* Program Details Section */}
                  <div className="mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    {/* Duration */}
                    <p className="text-[var(--light-text-gray)] !text-[11px] md:!text-[12px] whitespace-nowrap">
                      Duration : {program.duration}
                    </p>

                    {/* Links Row */}
                    <div className="flex items-center gap-3 md:gap-4 justify-start flex-wrap md:flex-nowrap">
                      <a
                        href="#"
                        className="text-[var(--button-red)] text-xs md:text-sm font-medium hover:underline flex items-center gap-1 whitespace-nowrap !text-[11px] md:!text-[12px]"
                      >
                        Scholarships
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:w-[14px] md:h-[14px]"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-[var(--button-red)] text-xs md:text-sm font-medium hover:underline flex items-center gap-1 whitespace-nowrap !text-[11px] md:!text-[12px]"
                      >
                        Explore Program
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:w-[14px] md:h-[14px]"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    {/* Check Eligibility Button - Dark Red with white arrow in white square */}
                    <GlobalArrowButton
                      className="!bg-[var(--dark-orange-red)] !text-[var(--background)] !w-full whitespace-nowrap text-xs md:text-sm lg:text-base !h-[38px] md:!h-[40px] !rounded-lg !px-1"
                      arrowClassName="!bg-[var(--background)] !px-1"
                      arrowIconClassName="!text-[var(--button-red)]"
                      textClassName="!text-[12px] md:!text-[14px] !px-2 md:!px-3"
                    >
                      Check Eligibility
                    </GlobalArrowButton>

                    {/* Apply Now Button - Dark Red with white arrow in white square */}
                    <GlobalArrowButton
                      className="!bg-[var(--button-red)] !text-[var(--background)] !w-full whitespace-nowrap !text-xs md:!text-sm lg:!text-base !h-[38px] md:!h-[40px] !rounded-lg !px-1"
                      arrowClassName="!bg-[var(--background)] !px-1 !text-white"
                      arrowIconClassName="!text-[var(--button-red)]"
                      textClassName="!text-[12px] md:!text-[14px] !px-2 md:!px-3"
                    >
                      Apply Now
                    </GlobalArrowButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

