"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GlobalArrowButton from "../general/global-arrow_button";
import { fetchNewsEvents, parseHtmlToText } from "../../lib/api";

// Fallback defaultConferences only if needed
const defaultConferences = [
  // ... (keep existing static as fallback or remove if not needed)
];

export default function UpcomingConference({
  conferences = defaultConferences,
  title = "Upcoming Conferences",
  backgroundColor = "bg-[var(--light-gray)]",
  backgroundColorcard = "bg-white",
  showCategory = true,
  showDate = true,
  imageWidth = 40,
  imageHeight = 400,
  imageContainerClass = "!w-[40%] object-cover",
  href = null,

  categoryText = "Upcoming Conferences",

  // New Props for Dynamic Data
  categoryId,
  categoryIds,
  fallback = 'all', // 'all' (show all/static if fail) or 'hide' (return null)
  limit
}) {
  const [displayConferences, setDisplayConferences] = useState(conferences);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If no dynamic props are passed, just use the passed 'conferences' prop (static mode)
    // But if category filters are present, we likely want to fetch data.
    if (!categoryId && (!categoryIds || categoryIds.length === 0)) {
      setDisplayConferences(conferences);
      setLoading(false);
      return;
    }

    const loadDynamicEvents = async () => {
      try {
        const data = await fetchNewsEvents();
        if (data && data.results) {
          let results = data.results;

          // 1. Filter
          let filteredResults = [];
          if (categoryIds && categoryIds.length > 0) {
            filteredResults = results.filter(item => categoryIds.includes(String(item.category)));
          } else if (categoryId) {
            filteredResults = results.filter(item => String(item.category) === String(categoryId));
          } else {
            filteredResults = results;
          }

          // 2. Fallback Logic
          if (filteredResults.length === 0) {
            if (fallback === 'hide') {
              setIsVisible(false);
              setLoading(false);
              return;
            }
            // else fallback='all', show all items (or keep empty? usually 'all')
            // user said: "all should hsve a fallback yes if no means hide kinda make all with props"
            // Interpretation: if "hide" requested, hide. If not, maybe show all or show nothing?
            // Let's assume fallback='all' means show unfiltered results.
            filteredResults = results;
          }

          // 3. Limit
          if (limit && filteredResults.length > limit) {
            filteredResults = filteredResults.slice(0, limit);
          }

          // 4. Map to Component Structure
          const mappedEvents = filteredResults.map(item => {
            const plainText = parseHtmlToText(item.content || '');
            const description = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;

            return {
              id: item.id,
              title: item.heading,
              date: item.date,
              category: item.category_name, // e.g. "Sports", "Events"
              description: description,
              image: item.images && item.images.length > 0 ? item.images[0].image : 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
              href: `/news-and-events/${item.slug}`,
              registerButtonText: "Read More"
            };
          });

          setDisplayConferences(mappedEvents);
        }
      } catch (error) {
        console.error("Failed to load dynamic conferences", error);
        // On error, maybe stay with static or hide?
        if (fallback === 'hide') setIsVisible(false);
      } finally {
        setLoading(false);
      }
    };

    loadDynamicEvents();
  }, [categoryId, categoryIds, fallback, conferences]);

  if (!isVisible) return null;
  // If loading and we want to prevent layout shift, maybe return skeleton? 
  // For now just return nothing or initial state (which might be empty if defaults are empty).
  // If static data was passed initially, it renders that until fetch updates it.

  // Only render if we have items
  if (displayConferences.length === 0 && !loading) {
    if (fallback === 'hide') return null;
  }

  const finalTitle = title; // Use prop title

  return (
    <section className={`${backgroundColor} pt-16 pb-16 mx-2 rounded-xl`}>
      <div className="container mx-auto">
        <h2 className="text-center mb-10">{finalTitle}</h2>

        {displayConferences && displayConferences.length > 0 ? (
          <>
            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              grabCursor={true}
              pagination={{
                clickable: true,
                el: ".conference-pagination",
              }}
              onSwiper={(swiper) => {
                if (swiper.params.pagination.el) {
                  swiper.pagination.init();
                  swiper.pagination.render();
                  swiper.pagination.update();
                }
              }}
            >
              {displayConferences.map((conf) => (
                <SwiperSlide key={conf.id}>
                  <div className={`${backgroundColorcard} rounded-2xl shadow-sm  flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center`}>
                    <Image
                      src={conf.image}
                      alt={conf.title}
                      width={600}
                      height={imageHeight}
                      className={`${imageContainerClass} rounded-xl object-contain`}
                      style={{
                        height: `${imageHeight}px`,
                        width: `${imageWidth}%`,
                      }}
                      unoptimized
                    />

                    <div className="w-full md:w-3/5 flex flex-col gap-6 md:px-0 px-5 h-full justify-around pb-5">
                      {/* Badges positioned at top right */}
                      {(showDate || showCategory) && (
                        <div className="flex md:justify-end justify-start gap-5 items-center mr-4 flex-wrap">
                          {showDate && conf.date && (
                            <p className="inline-flex font-light font-plus-jakarta-sans  items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-green)] text-white text-xs whitespace-nowrap">
                              {conf.date}
                            </p>
                          )}
                          {showCategory && conf.category && (
                            <p className="inline-flex font-light font-plus-jakarta-sans items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-blue)] text-white text-xs whitespace-nowrap">
                              {conf.category}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="px-3">
                        <h3 className="text-2xl md:text-4xl  mb-3">
                          {conf.title}
                        </h3>
                        <p className="text-[var(--light-text-gray)] text-sm">
                          {conf.description}
                        </p>
                      </div>

                      {(conf.href || href) ? (
                        <Link href={conf.href || href}>
                          <GlobalArrowButton className="w-fit mt-1 text-sm">
                            {conf.registerButtonText || "Register Now"}
                          </GlobalArrowButton>
                        </Link>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="conference-pagination flex justify-center gap-3 mt-8" />
          </>
        ) : (
          <div className="text-center text-gray-500 py-10">No upcoming events found.</div>
        )}
      </div>
    </section>
  );
}

