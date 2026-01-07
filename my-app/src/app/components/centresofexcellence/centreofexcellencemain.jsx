"use client";

import { useLayoutEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeadershipCard from "../general/leadership-card";

const centresOfExcellence = [
  {
    id: 1,
    name: "AI & ML Courses Training Centre",
    title: "IBM Innovation Centre for Education",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/ibm.webp",
    href: "/centresofexcellence/ai-ml",
  },
  {
    id: 2,
    name: "Automobile Training Centre",
    title: "JustAuto Solutions",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/justauto.webp",
    href: "/centresofexcellence/automobile",
  },
  {
    id: 3,
    name: "BRIDGE Courses Training Centre",
    title: "In collaboration with BOSCH",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002989.png",
    href: "/centresofexcellence/bosch",
  },
  {
    id: 4,
    name: "Robotics, Coding, & Drone",
    title: "BDS Education",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002988.png",
    href: "/centresofexcellence/robotics",
  },
  {
    id: 5,
    name: "Electric Vehicles Training Centre",
    title: "Godawari Electric Motors Pvt. Ltd. (Eblu)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
    href: "/centresofexcellence/godawari",
  },
  {
    id: 6,
    name: "IIoT Training Centre",
    title: "Technoviz Automation",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002977.png",
    href: "/centresofexcellence/iiot",
  },
  {
    id: 7,
    name: "MSME Training Centre",
    title: "IamSMEofIndia",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/smeindia.webp",
    href: "/centresofexcellence/msme",
  },
];

export default function CenterOfExcellenceMain({
  centres = centresOfExcellence,
  title = "Centres of Excellence",
  description = "At Kalinga, we'll not just build your future with only classroom-based studies, but there's something more to it that will make your learning experience fun and exciting. Presenting to you our Centres of Excellence that will introduce you to the future of technologies.",
  nameOnly = false,
  showDescription = true,
  breadcrumbData = null,
  headerTextMaxWidthClass = "max-w-screen-xl",
}) {
  useLayoutEffect(() => {
    if (!breadcrumbData) return;

    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }

    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, [breadcrumbData]);

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-2">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>

          {showDescription && (
            <p
              className={`text-[var(--light-text-gray)] ${headerTextMaxWidthClass} mx-auto`}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="relative pl-0 md:pl-[50px] overflow-visible">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .centres-swiper .centres-card-wrapper {
              background-color: #F5E6D3 !important;
              min-height: 280px !important;
              border-radius: 12px !important;
            }
            .centres-swiper .centres-card-wrapper > div {
              background-color: #F5E6D3 !important;
              min-height: 280px !important;
              border-radius: 12px !important;
            }
            .centres-swiper .centres-card-wrapper div[class*="relative"][class*="w-full"][class*="mb-4"] {
              height: 180px !important;
              background-color: white !important;
              border-radius: 12px;
              padding: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .centres-swiper .centres-card-wrapper div[class*="relative"][class*="w-full"][class*="mb-4"] img {
              object-fit: contain !important;
              max-width: 80% !important;
              max-height: 80% !important;
              margin: 0 auto;
              position: absolute;
              top: 10% !important;
              left: 50% !important;
              transform: translateX(-50%);
              padding: 10px;
            }
            .centres-swiper .centres-card-wrapper p:first-of-type {
              font-family: plus-jakarta-sans, sans-serif;
              font-size: 16px !important;
              font-weight: 400;
              color: var(--button-red);
              margin-bottom: 8px;
            }
            .centres-swiper .centres-card-wrapper p:last-of-type {
              font-family: plus-jakarta-sans, sans-serif;
              font-size: 13px;
              font-weight: 400;
              color: var(--foreground);
              margin-bottom: 16px;
            }
          `,
          }}
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 2.5, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1000}
          navigation={{
            nextEl: ".centres-swiper-button-next",
            prevEl: ".centres-swiper-button-prev",
          }}
          className="centres-swiper !pb-12 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
          loop={false}
          autoHeight={false}
          centeredSlides={false}
          slidesOffsetBefore={0}
          slidesOffsetAfter={60}
        >
          {centres.map((centre) => (
            <SwiperSlide key={centre.id}>
              <Link
                href={centre.href || "#"}
                className="block h-full w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-red)] rounded-xl"
                prefetch={false}
              >
                <div className="bg-white rounded-xl p-1 h-full relative">
                  <div className="centres-card-wrapper h-full flex flex-col">
                    {nameOnly ? (
                      <div className="flex-1 flex items-center justify-center text-center px-6 py-8">
                        <h3 className="font-jakarta text-lg md:text-xl font-medium text-[var(--foreground)]">
                          {centre.name}
                        </h3>
                      </div>
                    ) : (
                      <LeadershipCard
                        name={centre.name}
                        title={centre.title}
                        image={centre.image}
                        usePTagForName={true}
                      />
                    )}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto px-2">
        <div className="flex justify-end items-center gap-3">
          <button className="centres-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button className="centres-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 50% !important;
        }

        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>
    </section>
  );
}
