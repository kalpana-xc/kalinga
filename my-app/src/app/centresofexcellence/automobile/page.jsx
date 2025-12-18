"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import WhatYouLearnSlider from "@/app/components/centresOfExcellence/what-you-learn-slider";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  pageTitle: "Automobile Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    {
      label: "Automobile Training Centre",
      href: "/centres-of-excellence/automobile-training-centre",
    },
  ],
};

const aboutText =
  "JustAuto Solutions Pvt. Ltd. is an ISO-certified company that specialises in automotive training and the supply of tools and equipment. Kalinga University has partnered with JustAuto Solutions to provide industry-focused training in the repair and maintenance of 2 & 3-wheelers. Through hands-on practice, expert-led sessions, and certification-based learning, students gain practical technical exposure and become employable in the fast-growing automobile industry.";

const whatYouLearnItems = [
  {
    id: 1,
    title: "Fundamentals of 2 & 3-Wheeler Systems",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 2,
    title: "Diagnostic Skills Using Modern Tools",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 3,
    title: "Engine Service & Maintenance",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
  {
    id: 4,
    title: "Repair Procedures for 2 & 3 Wheelers",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 5,
    title: "Preventive & Predictive Maintenance Techniques",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 6,
    title: "Exposure to Emerging Technologies in Mobility",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
];

const activities = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    imageAlt: "Automobile Training Centre",
    title: "Workshop Session / Training Glimpse",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    imageAlt: "Automobile Training Centre",
    title: "Industry Expert Talk",
    buttonText: "Read More",
    date: "September 10 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    imageAlt: "Automobile Training Centre",
    title: "Hands-on Diagnostic Practice",
    buttonText: "Read More",
    date: "October 05 - 2025",
  },
];

export default function AutomobileTrainingCentrePage() {
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
            Automobile Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with JustAuto Solutions
          </p>
        </div>
      </section>

      {/* 1) ImageContent block */}
      <ImageContent
        title="Automobile Training Centre"
        subtitle="In collaboration with JustAuto Solutions"
        description={aboutText}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
        imageAlt="Automobile Training Centre"
        readmore={false}
      />

      {/* 2) What You’ll Learn Here (cards slider) */}
      <WhatYouLearnSlider
        title="What You’ll Learn Here"
        subtitle=""
        items={whatYouLearnItems}
      />

      {/* 3) Events and Activities */}
      <StudentActivities
        activities={activities}
        title="Events and Activities"
        subtitle="Glimpses"
      />

      <AdmissionCareer />
    </main>
  );
}
