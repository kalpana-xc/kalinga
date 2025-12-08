import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'

export default function ResearchInnovation() {
  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">

          {/* Left content */}
          <div className="pt-4 sm:pt-6 md:pt-12">
            <div className="text-lg sm:text-xl md:text-[25px] text-[var(--button-red)] font-plus-jakarta-sans font-medium leading-[25px] mb-2 sm:mb-3">
              Research & Innovation
            </div>
            <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight mb-4 sm:mb-6 text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <div className="mt-4 sm:mt-6">
              <GlobalArrowButton className="w-full sm:w-[173px] h-[40px] sm:h-[44px]">
                Learn More
              </GlobalArrowButton>
            </div>
          </div>

          {/* Right side with image and cards */}
          <div className="relative flex justify-center md:justify-end items-end mt-6 md:mt-0">
            {/* Main image */}
            <div className="relative w-full max-w-[496px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-[10px] overflow-hidden shadow-2xl z-6">
              <Image 
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
                alt="Research & Innovation"
                fill
                className="object-cover"
              />
            </div>

            {/* Cards container - overlapping bottom of image, aligned to right */}
            <div className="absolute bottom-[-60px] sm:bottom-[-80px] md:bottom-[110px] right-0 hidden md:flex items-center justify-end z-20 gap-3 sm:gap-4 md:gap-6 bg-gray-200/50 rounded-[20px] px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  className="bg-white rounded-[10px] shadow-md flex-shrink-0 w-[180px] sm:w-[200px] md:w-[230px] h-[100px] sm:h-[120px] md:h-[130px] p-5"
                >
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
