"use client";

import React, { useState } from "react";
import SectionHeading from "../components/general/SectionHeading";
import GlobalArrowButton from "../components/general/global-arrow_button";
import CenterOfExcellence from "../components/about/center_of_excellence";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Media",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function Page() {

  /* -------- Media Grid Images -------- */
  const mediaImages = [

  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WORKSHOP+FOR+SCIENCE+%26+KOLLOTICS+8TH+DECEMBER%2C+2015.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/Dainik+Bhaskar-24.07.17.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/kalingaaug172021.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/dainik_bhaskar_26_09_2017.jpg",
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-11-25+at+11.44.38+(2).jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-11-25+at+11.44.38+(2).jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/TREE+PLANTATION+BY+KALING+STUDENTS%2C+JUNE%2C+2015_1.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-24+at+11.44.31+(1).jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/INDUCTION+SESSION+OF+NEW+STUDENTS+2015-16+JULY%2C+2015.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-19+at+09.06.35.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-11-25+at+11.44.39.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-24+at+11.44.31.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-15+at+10.01.10.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-23+at+11.41.34.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-07+at+10.36.37.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-15+at+10.02.04.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/NCC+CAMP+20TH+JULY+TO+29TH+JULY%2C+2015_2.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_1.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_1+(1).jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/New+Doc+2018-08_03_dainik_bhaskar.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-09-21+at+15.16.32.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-10-23+at+11.41.33+(3).jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-1.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-2.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/TREE+PLANTATION+BY+KALINGA+STUDENTS+JUNE%2C+2015_2.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-3.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WhatsApp+Image+2020-11-24+at+18.47.25.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WORKSHOP+FOR+CITIZEN+COP+APP+2ND+DECEMBER%2C+2015_3.jpg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/8july2021-4.jpeg",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/WORKSHOP+FOR+CITIZEN+COP+APP+2ND+DECEMBER%2C+2015_2.jpg",
  ];

  /* -------- Slider Images (Centre of Excellence) -------- */
  const excellenceImages = [
    {
      id: 1,
      name: " fff",
      title: "ff ",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/34.jpg",
    },
    {
      id: 2,
      name: " ",
      title: " ",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/awards.jpg",
    },
    {
      id: 3,
      name: " ",
      title: " ",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/1.jpg",
    },
    {
      id: 4,
      name: " ",
      title: " ",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/2.jpg",
    },
    {
      id: 5,
      name: " ",
      title: " ",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/35.jpg",
    },
     {
    id: 6,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/3.jpg",
  },
  {
    id: 7,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/36.jpg", },
  {
    id: 8,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/4.jpg",
  },
  {
    id: 9,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/media/5.jpg",
  },
  {
    id: 10,
    name: " ",
    title: " ",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Health+Clinic3.webp",
  },

  ];

  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? mediaImages : mediaImages.slice(0, 9);

  return (
    <>
      <SectionHeading
        title={
          <>
           Media Coverage
          </>
        }
        titleClassName="text-center text-2xl md:text-5xl font-stix mt-20"
      />

      {/* -------- Media Grid -------- */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={img}
                alt={`media-${index}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <GlobalArrowButton onClick={() => setShowAll(true)}>
              Read More
            </GlobalArrowButton>
          </div>
        )}
      </section>

      {/* -------- Center Of Excellence Slider -------- */}
      <CenterOfExcellence
        centres={excellenceImages}
        title="Awards"
        description={false}
        nameOnly={false}
      />
    </>
  );
}
