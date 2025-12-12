'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const whyStudyItems = [
  {
    id: 1,
    title: 'Become Tech-Savvy',
    body:
      "The world needs new technologies, and companies are hunting for skilled professionals who generate code or are good problem solvers. We'll help you turn your ideas into a viral application.",
    variant: 'gray',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg',
  },
  {
    id: 2,
    title: 'Industry-Ready Programs',
    body:
      'We design programs with the latest tools and industry practices so you graduate with the skills employers seek and the confidence to build real-world solutions.',
    variant: 'amber',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/university.svg',
  },
  {
    id: 3,
    title: 'Future-Proof Skills',
    body:
      'Learn critical thinking, communication, and collaboration alongside core tech so you can adapt quickly and lead in fast-changing digital environments.',
    variant: 'gray',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg',
  },
];

export default function WhyStudy({
  items = whyStudyItems,
  sectionTitle = 'Why Study Information Technology?',
  backgroundImage = 'https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp',
}) {
  const [cardExpanded, setCardExpanded] = useState({});
  
  const toggleCard = (id) => setCardExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  
  const collapsedTextStyle = {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };
  return (
    <section className="py-16 pb-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Background Image with Overlay Slider */}
        <div className="relative">
          <Image
            src={backgroundImage}
            alt="Why Study"
            width={1200}
            height={500}
            className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-2xl"
          />
          
          {/* Slider Cards Overlaying the Image at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-6 lg:px-10 pb-4 md:pb-6">
            <div className="text-center">   
            <h2 className="mb-8  text-white">{sectionTitle}</h2>
            </div>
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1280: { slidesPerView: 2 },
                }}
                navigation={{
                  nextEl: '.why-study-next',
                  prevEl: '.why-study-prev',
                }}
                className="why-study-swiper [&_.swiper-wrapper]:items-stretch"
              >
                {items.map((item) => (
                  <SwiperSlide key={item.id} className="h-auto">
                    <div className="h-full">
                      <div className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-7 shadow-xl h-full flex items-center ${item.variant === 'amber' ? 'bg-[var(--card-sandal)] text-black' : 'bg-[var(--card-gray)] text-gray-800'}`} style={{ minHeight: '260px' }}>
                        <div className="flex flex-col gap-3 sm:gap-4 w-full h-full">
                          {item.image && (
                            <div className="flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex-1 flex flex-col">
                            <h4 className="text-lg font-plus-jakarta-sans mb-1.5 sm:mb-2">
                              {item.title}
                            </h4>
                            <p
                              className="text-sm"
                              style={cardExpanded[item.id] ? undefined : collapsedTextStyle}
                            >
                              {item.body}
                            </p>
                            {item.body && (
                              <button
                                onClick={() => toggleCard(item.id)}
                                className="mt-2 text-[var(--button-red)] text-sm hover:opacity-80 transition-opacity self-start !text-[13px]"
                              >
                                {cardExpanded[item.id] ? 'Read Less' : 'Read More'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons - Positioned over slider at corners */}
              <button
                className="why-study-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                aria-label="Previous cards"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                className="why-study-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                aria-label="Next cards"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

