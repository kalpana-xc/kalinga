'use client'

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import GlobalArrowButton from '../general/global-arrow_button'
import SectionHeading from '../general/SectionHeading'

const researchItems = [
  {
    id: 1,
    title: 'Total Number of Centres of Excellence (CoE)',
    number: '7',

  },
  {
    id: 2,
    title: 'Total Number of Laboratories',
    number: '90+',

  },

]

export default function ResearchGrid() {
  const canLoop = researchItems.length > 1 // ✅ allow loop even if only 2 items

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .research-swiper .swiper-slide > div {
          transition: all 0.4s ease-in-out !important;
        }
        .research-swiper .swiper-slide-active > div {
          min-height: 320px !important;
          background-color: var(--dark-skin) !important;
        }
        .research-swiper .swiper-slide:not(.swiper-slide-active) > div {
          min-height: 280px !important;
          background-color: var(--light-gray) !important;
        }
        @media (min-width: 640px) {
          .research-swiper .swiper-slide-active > div {
            min-height: 360px !important;
            background-color: var(--dark-skin) !important;
          }
          .research-swiper .swiper-slide:not(.swiper-slide-active) > div {
            min-height: 300px !important;
            background-color: var(--light-gray) !important;
          }
        }
        .research-nav-buttons {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          margin-top: 16px;
        }
        .research-swiper {
          padding-bottom: 60px !important;
          min-height: 320px !important;
        }
        @media (min-width: 640px) {
          .research-swiper {
            padding-bottom: 0 !important;
            min-height: 360px !important;
          }
          .research-nav-buttons {
            position: absolute;
            bottom: 0;
            left: calc(50% + 10px);
            transform: none;
            margin-top: 0;
            z-index: 1;
          }
        }
        @media (min-width: 1024px) {
          .research-nav-buttons {
            left: calc(50% + 12px);
          }
        }
      `,
        }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Heading and Button */}
            <div className="flex flex-col justify-center">
              <SectionHeading
                title="Research at a Glance"
                titleClassName="text-[var(--foreground)] mb-6 lg:mb-8"
              />
              <div>
                <Link href="/research" className="inline-flex">
                  <GlobalArrowButton className="w-full sm:w-[180px] h-[44px] justify-between">
                    Learn More
                  </GlobalArrowButton>
                </Link>
              </div>
            </div>

            {/* Right Side - Swiper Slider */}
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="research-nav-buttons flex items-center gap-3 justify-center sm:justify-start pointer-events-auto !z-[9]">
                <div className="bg-white p-[2px] shadow-lg rounded-lg pointer-events-none">
                  <button
                    type="button"
                    className="research-swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto relative z-20"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="bg-white p-[2px] shadow-lg rounded-lg pointer-events-none">
                  <button
                    type="button"
                    className="research-swiper-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors cursor-pointer pointer-events-auto relative"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: '.research-swiper-button-next',
                  prevEl: '.research-swiper-button-prev',
                }}
                autoplay={
                  researchItems.length > 1
                    ? {
                      delay: 3000,
                      disableOnInteraction: false,
                    }
                    : false
                }
                loop={canLoop}
                watchOverflow={false} // ✅ do NOT disable swiper when items are few
                centeredSlides={researchItems.length === 1}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: researchItems.length === 1 ? 1 : 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: researchItems.length === 1 ? 1 : 2,
                    spaceBetween: 24,
                  },
                }}
                className="research-swiper [&_.swiper-wrapper]:!items-start [&_.swiper-slide]:!h-auto"
              >
                {researchItems.map((item) => (
                  <SwiperSlide key={item.id} className="!h-auto">
                    <div className="bg-[var(--light-gray)] rounded-xl p-10 md:p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-stix text-[var(--foreground)] mb-4">
                          {item.title}
                        </h3>
                        <div className="w-full h-px bg-[var(--foreground)] mb-4"></div>
                      </div>

                      <div>
                        <h2 className="font-stix text-[var(--foreground)] mb-4">
                          {item.number}
                        </h2>
                        <p className="text-[var(--light-text-gray)] leading-relaxed text-justifyfont-plus-jakarta-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
