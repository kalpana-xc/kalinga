import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'

const AboutKalinga = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .about-kalinga-text {
          font-size: 50px !important;
        }
        @media (min-width: 768px) {
          .about-kalinga-text {
            font-size: 100px !important;
          }
        }
        @media (min-width: 1024px) {
          .about-kalinga-text {
            font-size: 110px !important;
          }
        }
      `}} />
      <section className="py-16 ">
        <div className="container mx-auto px-5 flex justify-center relative">
          {/* Single dark blue panel with overlapping image */}
          <div className="relative bg-[var(--dark-blue)] rounded-2xl p-8 md:p-12 lg:p-16 text-white overflow-visible shadow-2xl w-full max-w-[1254px] h-auto md:min-h-[561px]">
            <div className="grid md:grid-cols-2 gap-8 items-start relative z-1">
              {/* Left: Title and button */}
              <div className="space-y-6">
                <h2 className="font-stix text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing eli
                </h2>
                <div className="mt-6">
                <GlobalArrowButton className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                >Admissions</GlobalArrowButton>
                </div>
              </div>

              {/* Right: Body text */}
              <div className="text-sm md:text-base text-white/90 leading-relaxed space-y-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do
                </p>
              </div>
            </div>

            {/* Decorative large outlined "About Kalinga" text (panel-relative and visible) */}
            <div className="pointer-events-none absolute left-6 md:left-10 bottom-6 md:bottom-15   opacity-100 select-none z-2">
              <h2
                className="font-stix about-kalinga-text leading-none whitespace-nowrap"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1.57px #FFFFFF',
                  fontWeight: 400,
                  fontStyle: 'normal'
                }}
              >
                About Kalinga
              </h2>
            </div>

          {/* Overlapping student image on the right side */}
          <div className="absolute right-8 md:right-16 lg:right-15 top-1/2 -translate-y-27 z-1 hidden md:block">
            <div className="relative w-[555px] h-[452px] rounded-[10px] overflow-hidden shadow-2xl">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile: show image below on small screens */}
          <div className="mt-8 md:hidden flex justify-center">
            <div className="relative w-full max-w-[320px] h-[280px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutKalinga
