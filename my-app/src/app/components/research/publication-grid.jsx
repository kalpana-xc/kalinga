"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PublicationGrid({ 
  stats = [
    {
      title: "Publications",
      value: "1250 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Startups",
      value: "12 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Awards",
      value: "63 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Conferences",
      value: "78 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ]
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const StatCard = ({ stat, index }) => (
    <div
      key={index}
      className="bg-[var(--light-gray)] hover:bg-[var(--dark-skin)] rounded-lg p-6 text-left transition-colors flex flex-col gap-15 h-full"
    >
      <div>
        <h3 className="mb-2">{stat.title}</h3>
        <div className="w-full h-px bg-black mb-4"></div>
      </div>
      <div>
        <h3 className="!text-6xl mb-3">{stat.value}</h3>
        <p className="text-[var(--light-text-gray)]">{stat.description}</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6 py-16">
      {/* Mobile Swiper */}
      <div className="md:hidden relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="publication-swiper"
        >
          {stats.map((stat, index) => (
            <SwiperSlide key={index}>
              <StatCard stat={stat} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons - Bottom Right */}
        <div className="flex justify-end items-center gap-3 mt-4">
          <button
            ref={prevRef}
            className="publication-swiper-button-prev w-10 h-10 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
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
          <button
            ref={nextRef}
            className="publication-swiper-button-next w-10 h-10 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
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

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
}