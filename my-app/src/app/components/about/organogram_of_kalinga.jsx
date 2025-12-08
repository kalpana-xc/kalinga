import React from 'react'
import GlobalArrowButton from '../general/global-arrow_button'

const OrganogramOfKalinga = ({ cardBackgroundColor = "bg-[var(--button-red)]" }) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="px-4 sm:px-5">
        <div className={`${cardBackgroundColor} rounded-[10px] p-6 sm:p-8 md:p-8 text-white`}>
          {/* Title */}
          <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 md:mb-8">
            Organogram of Kalinga University
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-normal md:leading-relaxed mb-6 sm:mb-8 md:mb-10 font-plus-jakarta-sans">
            Kalinga University follows a well-structured governance model to ensure smooth administration and institutional integrity. It begins with the Chancellor, followed by the Vice-Chancellor and Director General. Their roles and responsibilities are well-defined, enabling proper decision-making across all the departments of the university.
          </p>

          {/* Explore Now Button */}
          <div className="flex justify-start">
            <GlobalArrowButton 
              className="!bg-white !text-black"
              arrowClassName="!bg-[var(--dark-orange-red)]"
              arrowIconClassName="!text-white"
              textClassName="!text-black"
            >
              Explore Now
            </GlobalArrowButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrganogramOfKalinga

