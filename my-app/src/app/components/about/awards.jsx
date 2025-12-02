"use client";
import { useState, useRef, useEffect } from "react";

const awardsData = [
  {
    title: "Walk-a- cause Award",
    awardingBody: "by Prayag Foundation",
    year: "2018-2019",
  },
  {
    title: "Excellence Work In Educational Sector",
    awardingBody: "by National Majesty Awards",
    year: "2018-2019",
  },
  {
    title: "Best Research And Innovation University",
    awardingBody: "by Globel Leaders Award",
    year: "2018-2019",
  },
  {
    title: "Best Private University",
    awardingBody: "by ASSOCHAM National Education",
    year: "2019-2020",
  },
  {
    title: "Best Private University",
    awardingBody: "by ASSOCHAM National Education",
    year: "2019-2020",
  },
  {
    title: "Best Private University",
    awardingBody: "by ASSOCHAM National Education",
    year: "2019-2020",
  }
];

// Laurel Wreath Icon Component
const LaurelWreathIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C8 2 5 5 5 9C5 11 6 13 7.5 14.5L12 19L16.5 14.5C18 13 19 11 19 9C19 5 16 2 12 2Z"
      fill="currentColor"
    />
    <path
      d="M7 8C6.5 8 6 8.5 6 9C6 9.5 6.5 10 7 10C7.5 10 8 9.5 8 9C8 8.5 7.5 8 7 8Z"
      fill="white"
    />
    <path
      d="M17 8C16.5 8 16 8.5 16 9C16 9.5 16.5 10 17 10C17.5 10 18 9.5 18 9C18 8.5 17.5 8 17 8Z"
      fill="white"
    />
    <path
      d="M12 6C11.5 6 11 6.5 11 7C11 7.5 11.5 8 12 8C12.5 8 13 7.5 13 7C13 6.5 12.5 6 12 6Z"
      fill="white"
    />
  </svg>
);

export default function Awards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const scrollbarRef = useRef(null);
  const isScrolling = useRef(false);

  // Sync scrollbar with timeline
  const handleTimelineScroll = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    
    const timeline = e.target;
    const scrollLeft = timeline.scrollLeft;
    const scrollWidth = timeline.scrollWidth;
    const clientWidth = timeline.clientWidth;
    const scrollWidthDiff = scrollWidth - clientWidth;
    
    // Calculate scroll progress percentage
    if (scrollWidthDiff > 0) {
      const progress = (scrollLeft / scrollWidthDiff) * 100;
      setScrollProgress(progress);
    }
    
    if (scrollbarRef.current) {
      const scrollbar = scrollbarRef.current;
      const scrollbarScrollWidth = scrollbar.scrollWidth - scrollbar.clientWidth;
      const timelineScrollWidth = scrollWidth - clientWidth;
      
      if (timelineScrollWidth > 0) {
        const scrollPercentage = scrollLeft / timelineScrollWidth;
        scrollbar.scrollLeft = scrollPercentage * scrollbarScrollWidth;
      }
    }
    
    // Update active index based on scroll position
    const itemWidth = timeline.scrollWidth / awardsData.length;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < awardsData.length) {
      setActiveIndex(newIndex);
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 50);
  };

  // Sync timeline with scrollbar
  const handleScrollbarScroll = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    
    const scrollbar = e.target;
    const scrollLeft = scrollbar.scrollLeft;
    const scrollWidth = scrollbar.scrollWidth;
    const clientWidth = scrollbar.clientWidth;
    const scrollWidthDiff = scrollWidth - clientWidth;
    
    // Calculate scroll progress percentage
    if (scrollWidthDiff > 0) {
      const progress = (scrollLeft / scrollWidthDiff) * 100;
      setScrollProgress(progress);
    }
    
    if (timelineRef.current) {
      const timeline = timelineRef.current;
      const timelineScrollWidth = timeline.scrollWidth - timeline.clientWidth;
      const scrollbarScrollWidth = scrollWidth - clientWidth;
      
      if (scrollbarScrollWidth > 0) {
        const scrollPercentage = scrollLeft / scrollbarScrollWidth;
        timeline.scrollLeft = scrollPercentage * timelineScrollWidth;
      }
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 50);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        .awards-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .awards-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .awards-timeline-scroll {
          scroll-behavior: smooth;
        }
      `}} />
      <div className="container mx-auto px-4 lg:px-6">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-stix text-[var(--foreground)] text-4xl md:text-5xl lg:text-6xl mb-4">
            Awards and Accolades
          </h2>
          <p className="text-[var(--light-text-gray)] text-sm md:text-base max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Awards Timeline - Scrollable */}
        <div className="relative mb-12 w-full">
          {/* Dashed Timeline Line */}
          <div className="absolute top-32 md:top-28 left-0 right-0 h-0.5 border-t-2 border-dashed border-gray-300 z-0 hidden md:block"></div>

          {/* Scrollable Awards Container */}
          <div
            ref={timelineRef}
            className="overflow-x-auto awards-timeline-scroll awards-scrollbar-hide w-full"
            onScroll={handleTimelineScroll}
            style={{ 
              maxWidth: '100%',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-6 md:gap-8 lg:gap-12 min-w-max px-4" style={{ width: `${awardsData.length * 320}px` }}>
              {awardsData.map((award, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative z-10 flex-shrink-0 w-[250px] md:w-[280px] lg:w-[300px]"
                >
                  {/* Award Content */}
                  <div className="text-center mb-8 md:mb-6">
                    <div className="flex items-start justify-center gap-2 md:gap-3 mb-3">
                      <LaurelWreathIcon className="w-6 h-6 md:w-7 md:h-7 text-black flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-stix text-[var(--foreground)] text-sm md:text-base lg:text-lg font-semibold mb-1 leading-tight">
                          {award.title}
                        </h3>
                        <p className="text-[var(--light-text-gray)] text-xs md:text-sm">
                          {award.awardingBody}
                        </p>
                      </div>
                      <LaurelWreathIcon className="w-6 h-6 md:w-7 md:h-7 text-black flex-shrink-0 mt-1" />
                    </div>
                  </div>

                  {/* Date Box */}
                  <div
                    className={`rounded-lg px-5 py-2.5 md:px-6 md:py-3 transition-all ${
                      index === activeIndex
                        ? "bg-[var(--button-red)] text-white"
                        : "bg-gray-200 text-[var(--foreground)]"
                    }`}
                  >
                    <span className="text-sm md:text-base font-semibold">
                      {award.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Scrollable Scrollbar */}
        <div className="relative mt-8 w-full">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden relative">
            {/* Orange Progress Indicator */}
            <div
              className="h-full bg-[#F5A623] rounded-full absolute left-0 transition-all duration-300 ease-out"
              style={{
                width: `${scrollProgress}%`,
              }}
            ></div>
          </div>
          <div
            ref={scrollbarRef}
            className="h-2 bg-transparent rounded-full overflow-x-auto overflow-y-hidden awards-scrollbar-hide cursor-grab active:cursor-grabbing w-full mt-[-8px]"
            onScroll={handleScrollbarScroll}
            onMouseDown={(e) => {
              e.preventDefault();
              const startX = e.pageX - e.currentTarget.offsetLeft;
              const scrollLeft = e.currentTarget.scrollLeft;
              
              const onMouseMove = (e) => {
                e.preventDefault();
                const x = e.pageX - e.currentTarget.offsetLeft;
                const walk = (x - startX) * 2;
                e.currentTarget.scrollLeft = scrollLeft - walk;
              };
              
              const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              };
              
              document.addEventListener('mousemove', onMouseMove);
              document.addEventListener('mouseup', onMouseUp);
            }}
          >
            <div className="h-full" style={{ width: `${awardsData.length * 320}px` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
