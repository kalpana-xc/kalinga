"use client"
import React from 'react'
import FeaturedNewsCard from '../general/featured_news_card'
import SectionHeading from '../general/SectionHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Event 1',
      badgeText: 'Day 5 Highlights',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      id: 2,
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Event 2',
      badgeText: 'Day 5 Highlights',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
      id: 3,
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      alt: 'Event 3',
      badgeText: 'Day 5 Highlights',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Title */}
        <SectionHeading 
          title="Upcoming Events"
          titleClassName="text-center mb-6 sm:mb-8 md:mb-10"
        />

        {/* Events Slider - Mobile Only */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: '.upcoming-events-next',
              prevEl: '.upcoming-events-prev',
            }}
            className="upcoming-events-swiper"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <FeaturedNewsCard
                  image={event.image}
                  alt={event.alt}
                  badgeText={event.badgeText}
                  title={event.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3 mt-5">
            <button className="upcoming-events-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="upcoming-events-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Events Grid - Desktop Only */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {events.map((event) => (
            <FeaturedNewsCard
              key={event.id}
              image={event.image}
              alt={event.alt}
              badgeText={event.badgeText}
              title={event.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents

