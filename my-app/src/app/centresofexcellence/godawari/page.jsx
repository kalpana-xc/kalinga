"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ScholarshipCard from "@/app/components/general/scholarship-card";
import Image from "next/image";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  pageTitle: "Electric Vehicles Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    { label: "Electric Vehicles Training Centre", href: "/centres-of-excellence/electric-vehicles-training-centre" },
  ],
};

const aboutCentreDescription =
  "Eblu by Godawari Electric Motors Pvt. Ltd. is one of the leading electric vehicle brands, offering a wide range of EVs, including E-Auto, E-Cycle, E-Scooter, and E-Cargo vehicles. They design these vehicles from scratch by focusing on consumer needs such as safety, comfort, and performance.\n\nWith this CoE, students get the opportunity to learn one of the most futuristic skills, the A-Z manufacturing and functioning of two-wheeler and three-wheeler electric vehicles from their industry experts through practical training sessions. This helps them build essential EV knowledge and stand out in the industry.";

const learnCards = [
  { id: 1, title: "Complete Electric Vehicle Architecture", description: "", icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg" },
  { id: 2, title: "Battery Technology & Management Systems", description: "", icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg" },
  { id: 3, title: "Motor & Controller Operations", description: "", icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png" },
  { id: 4, title: "EV Diagnostics & Troubleshooting", description: "", icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg" },
  { id: 5, title: "Assembly & Disassembly of EV Components", description: "", icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg" },
  { id: 6, title: "Safety, Maintenance & Repair Techniques", description: "", icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png" },
];

const activities = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "Glimpses",
    title: "Glimpses",
    buttonText: "Read More",
    date: "",
  },
];

function WhatYoullLearnSlider({ title = "What You’ll Learn", cards = [] }) {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-2">
        <div className="mb-8 md:mb-12">
          <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl mb-4 text-center">
            {title}
          </h2>
        </div>

        <div className="relative pt-8 rounded-xl">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: ".learn-swiper-button-next",
              prevEl: ".learn-swiper-button-prev",
            }}
            className="learn-swiper !p-6 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:overflow-visible"
            loop={false}
            autoHeight={false}
          >
            {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full w-full overflow-visible">
                  <div className="bg-white rounded-xl p-1 h-full relative min-h-[220px] max-w-[380px] mx-auto overflow-visible">
                    <ScholarshipCard
                      title={item.title}
                      description=""
                      icon={
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={180}
                          height={180}
                          className="object-contain"
                        />
                      }
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-end items-center gap-3 pr-6">
            <button className="learn-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center shadow-md">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="learn-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center shadow-md">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ElectricVehiclesTrainingCentrePage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-10 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-[var(--title-color)]">
            Electric Vehicles Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with Godawari Electric Motors Pvt. Ltd. (Eblu)
          </p>
        </div>
      </section>

      <ImageContent
        title="Electric Vehicles Training Centre"
        subtitle="In collaboration with Godawari Electric Motors Pvt. Ltd. (Eblu)"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="Electric Vehicles Training Centre"
        readmore={false}
      />

      <WhatYoullLearnSlider title="What You’ll Learn" cards={learnCards} />

      <StudentActivities activities={activities} title="Events and Activities" subtitle="Glimpses" />

      <AdmissionCareer />
    </main>
  );
}
