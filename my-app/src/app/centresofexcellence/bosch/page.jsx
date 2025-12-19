"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import WhatYouLearnSlider from "@/app/components/centresofexcellence/what-you-learn-slider";

import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  pageTitle: "BRIDGE Courses Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    { label: "BRIDGE Courses Training Centre", href: "/centres-of-excellence/bridge" },
  ],
};

/* =========================
   ABOUT CONTENT
========================= */
const aboutCentreDescription =
  "BOSCH is a globally renowned leader in engineering and electronics, and we have partnered with them to offer programs for school dropout students (18–25 years) that bridge their educational gaps on their academic campus.\n\nBRIDGE Courses Training Centre at Kalinga University focuses on two major aspects—skill development and employability—by teaching industry-relevant skills and providing placement opportunities in the automotive and manufacturing sectors.";

/* =========================
   WHAT YOU’LL LEARN
   (Mapped into SLIDER)
========================= */
const learnSliderItems = [
  {
    id: 1,
    title: "Automotive & Manufacturing Fundamentals",
    description: "Fundamentals of automotive and manufacturing systems.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 2,
    title: "Problem Identification & Troubleshooting",
    description: "Develop skills to identify problems and perform technical troubleshooting.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 3,
    title: "Industry-Relevant Vocational Training",
    description: "Hands-on vocational training aligned with industry needs.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
  {
    id: 4,
    title: "Hands-On Technical Training",
    description: "Practical exposure to real-world tools and technologies.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 5,
    title: "Analytical & Problem-Solving Skills",
    description: "Build analytical thinking and structured problem-solving abilities.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 6,
    title: "Workplace & Communication Skills",
    description: "Enhance teamwork, communication, and professional workplace skills.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
];

/* =========================
   GLIMPSES / ACTIVITIES
========================= */
const activities = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "BRIDGE Training Glimpses",
    title: "Training & Skill Development Glimpses",
    buttonText: "Read More",
    date: "",
  },
];

export default function BridgeCentrePage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <main className="bg-white">
      {/* Page Title */}
      <section className="pt-10 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-[var(--title-color)]">
            BRIDGE Courses Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with BOSCH
          </p>
        </div>
      </section>

      {/* About the Centre */}
      <ImageContent
        title="BRIDGE Courses Training Centre"
        subtitle="In collaboration with BOSCH"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="BRIDGE Centre Banner"
        readmore={false}
      />

      {/* What You’ll Learn – Slider (REUSED COMPONENT) */}
        <WhatYouLearnSlider
              title="What You’ll Learn"
              subtitle=""
              items={learnSliderItems}
            />
      
      {/* Glimpses / Events */}
      <StudentActivities
        activities={activities}
        title="Events and Activities"
        subtitle="Glimpses"
      />

      <AdmissionCareer />
    </main>
  );
}
