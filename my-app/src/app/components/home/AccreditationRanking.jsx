'use client'

import React from 'react'
import LogoLoop from '../gsap/LogoLoop'

const AccreditationRanking = () => {
  const accreditations = [
    { id: 1, name: 'NAAC Grade B', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.png' },
    { id: 4, name: 'NAAC Grade B', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.png' },
  ]

  // Convert to LogoLoop format
  const logoLoopItems = accreditations.map(accred => ({
    src: accred.logo,
    alt: accred.name,
    title: accred.name
  }))

  return (
    <section className="py-16">
      <div className="">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0.5">
          {/* Left title pill */}
          <div className="flex-none relative w-full md:w-auto md:left-[-130px] z-1">
            <div className="bg-[var(--button-red)] text-white rounded-[80px] sm:rounded-[100px] md:rounded-[120px] flex items-center justify-center shadow-lg w-full md:w-[574px] h-auto min-h-[100px] sm:min-h-[140px] md:h-[172px] px-4 sm:px-6 md:px-0">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-stix leading-tight text-center md:ml-25 py-2 sm:py-0">
                Accreditation<br />&amp; Ranking
              </h2>
            </div>
          </div>

          {/* LogoLoop slider */}
          <div className="flex-1 w-full justify-center items-center md:w-auto md:ml-[-130px] overflow-hidden relative">
            <LogoLoop
              logos={logoLoopItems}
              speed={120}
              direction="left"
              logoHeight={181}
              gap={24}
              pauseOnHover={true}
              ariaLabel="Accreditation and ranking logos"
              renderItem={(item, key) => (
                <div className="flex-shrink-0 bg-[var(--light-gray)] rounded-[15px] sm:rounded-[20px] w-[180px] h-[140px] sm:w-[200px] sm:h-[160px] md:w-[231px] md:h-[181px] flex items-center justify-center shadow-sm overflow-hidden">
                  <div className="relative px-5">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-contain w-full h-full"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccreditationRanking
