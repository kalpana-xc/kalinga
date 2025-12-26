"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const defaultVideoInterviews = [
    {
        id: 1,
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    },
    {
        id: 2,
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    },
    {
        id: 3,
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    },
    {
        id: 4,
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    },
    {
        id: 5,
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    },
    {
        id: 6,
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    },
];

// Video Card Component
function VideoCardSlider({ 
  image, 
  title = "Lorem Ipsum Dolor Sit Amet, Consectetur",
  isActive = false 
}) {
  const playButtonSize = isActive ? 60 : 50;
  // Same border for mobile, different for desktop
  const borderClass = isActive 
    ? "border border-gray-300 md:border-2 md:border-[var(--button-red)]" 
    : "border border-gray-300";
  
  // Active card has higher z-index, inactive cards scale down to go behind active card (desktop only)
  const transformClass = isActive 
    ? "relative md:z-50" 
    : "md:scale-95 relative md:z-0";
  
  // Active card is smaller, inactive cards are larger
  // Normal size for mobile, special sizes for desktop
  const sizeClass = isActive 
    ? "w-full max-w-[90%] mx-auto h-[230px] md:w-[250px] md:h-[33%]" 
    : "w-full max-w-[90%] mx-auto h-[230px] md:w-[400px] md:h-[330px]";

  return (
    <div
      className={`bg-[var(--lite-sand)] rounded-[10px] overflow-hidden transition-all duration-300 ${sizeClass} flex flex-col ${borderClass} ${transformClass}`}>
      {/* Video Thumbnail */}
      <div className="relative w-full flex-1 flex-shrink-0 p-3 pb-0 box-border">
        <div className="relative w-full h-full">
          <Image
            src={image || "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png"}
            alt={title}
            fill
            className="!object-cover rounded-[20px]"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/play-icon.png"
                alt="Play"
                width={playButtonSize}
                height={playButtonSize}
                className="object-contain w-[50px] h-[50px] md:w-auto md:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card Title */}
      <div className={`${isActive ? 'p-2 !pt-5 md:p-4 md:!pt-3 pl-[12px] pr-[25px]' : 'p-3'}`}>
        <h3 className={`text-left leading-tight ${isActive ? '!text-[12px] !leading-[15px]' : 'text-xs'}`}>
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function SustainableSlider({ 
    videos = defaultVideoInterviews,
    subtitle = "Video Interviews",
    title = "Alumni Talk",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    backgroundColor = "bg-[var(--light-gray)]",
    showPagination = true,
    showNavigation = true
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={`${backgroundColor} pt-16`}>
            <div className="w-full container mx-auto my-0">
                {/* Heading Section */}
                <div className="text-center px-4">
                    {subtitle && (
                        <h5 className="text-[var(--button-red)] !sm:text-lg md:!text-xl !lg:text-[25px] font-plus-jakarta-sans mb-2">
                            {subtitle}
                        </h5>
                    )}
                    {title && (
                        <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto font-plus-jakarta-sans mb-0">
                            {description}
                        </p>
                    )}
                </div>

                <div className="swiper-container h-[350px] md:h-[600px] relative !m-0 p-0 !-mt-8 md:!-mt-15">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        speed={500}
                        autoplay={{
                            delay: 12000000,
                            disableOnInteraction: false,
                        }}
                        pagination={showPagination ? {
                            clickable: true,
                            dynamicBullets: false,
                            el: '.three-card-pagination',
                        } : false}
                        navigation={showNavigation ? {
                            nextEl: '.three-card-button-next',
                            prevEl: '.three-card-button-prev',
                        } : false}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="sustainable-swiper h-full"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2.75,
                            spaceBetween: 0,
                        },
                        1080: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={video.id}>
                            <div className="relative overflow-hidden transition-all duration-700 transform h-full flex items-center justify-center">
                                <VideoCardSlider
                                    image={video.image}
                                    title={video.title}
                                    isActive={activeIndex === index}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons - Positioned over middle card */}
                {showNavigation && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] md:bottom-[80px] flex justify-center items-center gap-3 z-50">
                        <button
                            className="three-card-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-white text-white hover:text-black flex items-center justify-center transition-opacity shadow-md"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="three-card-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-white text-white hover:text-black flex items-center justify-center transition-opacity shadow-md border border-gray-300"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            
            

            <style jsx global>{`
                .swiper-container {
                    width: 100%;
                    padding: 10px 20px;
                }
                @media (max-width: 768px) {
                    .swiper-container {
                        padding: 10px;
                    }
                }
                .sustainable-swiper .swiper-pagination-bullet {
                    background: var(--button-red);
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                }
                .sustainable-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: var(--button-red);
                }
                .sustainable-swiper .swiper-slide {
                    opacity: 1;
                    overflow: hidden;
                    transition: .5s;
                    border-radius: 16px;
                    height: 100%;
                }
                .sustainable-swiper .swiper-slide-active {
                    opacity: 1;
                    z-index: 1;
                    transform: scale(2);
                }
                @media (max-width: 639px) {
                    .sustainable-swiper .swiper-slide-active {
                        transform: scale(1);
                    }
                }
                @media (min-width: 640px) and (max-width: 768px) {
                    .sustainable-swiper .swiper-slide-active {
                        transform: scale(2);
                    }
                }
                .sustainable-swiper .swiper-slide img {
                    width: 100%;
                    object-fit: contain;
                    border-radius: 10px;
                    position: relative !important;
                    
                }
                .sustainable-swiper .swiper-wrapper {
                    align-items: center;
                    height: 100%;
                }
                .sustainable-swiper {
                    height: 100%;
                }
                .three-card-button-prev.swiper-button-disabled,
                .three-card-button-next.swiper-button-disabled {
                    opacity: 0.35;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
        </section>
    );
} 