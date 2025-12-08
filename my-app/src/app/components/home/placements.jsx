'use client'

import React, { useState, useRef } from 'react'
import Stack from '../gsap/Stack'
import LogoLoop from '../gsap/LogoLoop'

const logos = ['Infosys','Citi','Microsoft','Adobe','Cognizant','PayPal','Google','Dell']

const Placements = () => {
  const stackRef = useRef(null)
  const placementImages = [
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp',
    'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg'
  ]
  
  // Convert logos to LogoLoop format
  const logoLoopItems = logos.map(logo => ({
    node: <span>{logo}</span>,
    title: logo
  }))
  
  return (
    <>
    <section className="pt-20 sm:py-20 md:py-16 md:pt-0 bg-white overflow-x-hidden">
      <div className="container mx-auto px-3 md:px-16 ">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center md:items-center">
          {/* Left: title + stats */}
          <div className="w-full">
            <h5 className="text-sm sm:text-base md:!text-[25px] text-[var(--button-red)] mb-2 sm:mb-2.5 lg:mb-3 font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px]">
              Placements
            </h5>
            <h2 className="font-stix text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[50px] mb-2 sm:mb-3 lg:mb-4 leading-tight text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 max-w-xl mb-4 sm:mb-5 lg:mb-6 font-plus-jakarta-sans leading-relaxed sm:leading-normal lg:leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3 lg:gap-6 text-gray-800">
              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">3300 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Students Placed</h6>
              </div>

              <div className="hidden sm:block self-stretch border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">500 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Corporate Recruiters</h6>
              </div>

              <div className="hidden sm:block self-stretch border-r border-gray-500" />

              <div className="flex-1 w-full sm:w-auto">
                <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">1300 +</h3>
                <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Internships Offered</h6>
              </div>
            </div>
          </div>

          {/* Right: Stack card component */}
          <div className="flex justify-center md:justify-end md:mr-20 mt-6 md:mt-0 -mb-28 z-2">
            <div className="w-full max-w-[420px]">
              <div style={{ width: '100%', height: '480px' }}>
                <Stack
                  ref={stackRef}
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  autoplay={true}
                  cards={placementImages.map((src, i) => (
                    <img 
                      key={i} 
                      src={src} 
                      alt={`placement-${i + 1}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ))}
                />
              </div>
              <div className="flex justify-center gap-3 -mt-10 mb-10 z-10 relative">
                <button
                  type="button"
                  onClick={() => stackRef.current?.triggerNext('left')}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors shadow-md"
                  aria-label="Previous placement"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => stackRef.current?.triggerNext('right')}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors shadow-md"
                  aria-label="Next placement"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Logos strip */}
        <div className="mt-6 sm:mt-8 lg:mt-8 px-3 sm:px-4 lg:px-6">
          <div className="bg-[var(--dark-blue)] py-4 sm:py-5 md:py-6 lg:py-8 items-center justify-center overflow-hidden relative w-full h-auto min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:h-[200px] rounded-xl">
            {/* Text stacked above logos */}
            <div className="flex flex-col items-center text-left gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
              <h5
                className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg leading-tight sm:leading-[25px] text-white text-left w-full px-4 sm:px-6 lg:px-8"
              >
                Trusted by 500+ Global Recruiters
              </h5>

              <div className="w-full overflow-hidden relative px-4 sm:px-6 lg:px-8">
                <LogoLoop
                  logos={logoLoopItems}
                  speed={120}
                  direction="left"
                  logoHeight={70}
                  gap={16}
                  pauseOnHover={true}
                  ariaLabel="Company recruiters logos"
                  renderItem={(item, key) => (
                    <div className="flex-shrink-0 bg-white rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-sm text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-gray-700 flex items-center justify-center w-[60px] h-[45px] sm:w-[70px] sm:h-[50px] md:w-[80px] md:h-[55px] lg:w-[90px] lg:h-[60px] xl:w-[110px] xl:h-[70px]"
                      style={{
                        borderRadius: '10px'
                      }}
                    >
                      {item.node}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Placements
