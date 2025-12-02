"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

const admissionSteps = [
  {
    id: 1,
    stepNumber: "01",
    title: "Step 1",
    description: "Visit Website",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
    isActive: true,
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Step 2",
    description: "Register for the entrance exam",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
    isActive: true,
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Step 3",
    description: "Take the computer-based exam and get shortlisted",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
    isActive: false,
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Step 4",
    description: "Offer letter",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
    isActive: false,
  },
];

export default function AdmissionSteps() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--light-gray)]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h3 className="text-[var(--button-red)] text-lg md:text-xl font-semibold mb-2">
              Admission Procedure
            </h3>
            <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl">
              Steps To Get Admission Into KU
            </h2>
          </div>
          <div className="flex-shrink-0">
            <GlobalArrowButton className="!w-full md:!w-auto">
              Explore Now
            </GlobalArrowButton>
          </div>
        </div>

        {/* Steps Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            loop={false}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".admission-steps-button-next",
              prevEl: ".admission-steps-button-prev",
            }}
            className="admission-steps-swiper !pb-12 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto"
          >
            {admissionSteps.map((step, index) => (
              <SwiperSlide key={step.id} className="!h-auto">
                <div className="relative h-full">
                  {/* Connecting Line (Dashed) - Between cards */}
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 border-t-2 border-dashed border-gray-400 transform -translate-y-1/2 z-20 pointer-events-none"></div>
                  )}
                  
                  {/* Step Card */}
                  <div
                    className={`h-full min-w-[280px] md:min-w-[320px] lg:min-w-[360px] rounded-xl p-4 relative overflow-hidden ${
                      step.isActive
                        ? "bg-[#F5E6D3] text-[var(--foreground)]"
                        : "bg-[var(--button-red)] text-white"
                    }`}
                  >
                    {/* Background Number */}
                    <div
                      className={`absolute top-4 right-4 text-7xl md:text-8xl font-bold leading-none opacity-20 font-stix ${
                        step.isActive ? "text-gray-400" : "text-white"
                      }`}
                    >
                      {step.stepNumber}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon and Text Row */}
                      <div className="flex items-end gap-4 flex-1 pt-4">
                        {/* Icon Image */}
                        {step.image && (
                          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}

                        {/* Title and Description */}
                        <div className="flex-1">
                          {/* Title */}
                          <h4 className={`text-lg md:text-xl mb-1 ${step.isActive ? "text-[var(--foreground)]" : "text-white"}`}>
                            {step.title}
                          </h4>

                          {/* Description */}
                          <p className={`text-sm md:text-base ${step.isActive ? "text-[var(--light-text-gray)]" : "text-white"}`}>
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Button (only for active steps) - Separate div with justify-end */}
                      {step.isActive && (
                        <div className="flex justify-end">
                          <button className="w-8 h-8 bg-white hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors shadow-md">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="black"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17L17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3 mt-4">
            <button className="admission-steps-button-prev w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#c41e3a] flex items-center justify-center transition-colors shadow-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="admission-steps-button-next w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[var(--light-gray)] hover:bg-gray-300 flex items-center justify-center transition-colors shadow-md border border-gray-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

