"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import WhatYouLearnSlider from "@/app/components/centresofexcellence/what-you-learn-slider";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  pageTitle: "AI & ML Courses Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    {
      label: "AI & ML Courses Training Centre",
      href: "/centres-of-excellence/ai-ml",
    },
  ],
};

// ✅ Content from your doc
const aboutCentreDescription =
  "IBM is a global leader in technology and innovation, and we have partnered with the IBM Innovation Centre for Education to offer a specialised course on B.Tech CS in AI-ML. Their industry-relevant curriculum empowers students to excel in the booming tech industry and get jobs in high-demand roles.\n\nWith this CoE, students of this program get hands-on learning experience through real-world projects, case studies and internship programs. They also get the opportunity to interact with IBM subject matter experts in expert-led sessions held at Kalinga University.";

// ✅ Slider cards content (your bullet points)
const whatYouLearnItems = [
  {
    id: 1,
    title: "Programming Languages & Tools for AI & ML",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 2,
    title: "Deep understanding of Artificial Intelligence & Machine Learning",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 3,
    title: "Algorithm & Model Development",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
  {
    id: 4,
    title: "Management of Large Data Sets",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 5,
    title: "Deep learning and Neural Networks",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 6,
    title: "Designing Intelligent Systems & Software",
    description: "",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
];

// Placeholders as per your UI note (“Add Images - 1”)
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

export default function CentreInnerPage() {
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
            AI &amp; ML Courses Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with the IBM Innovation Centre for Education
          </p>
        </div>
      </section>

      {/* 1) ImageContent block (About the Centre of Excellence content) */}
      <ImageContent
        title="AI & ML Courses Training Centre"
        subtitle="In collaboration with the IBM Innovation Centre for Education"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="Centre Banner"
        readmore={false}
      />

      {/* ✅ 2) What You’ll Learn as SLIDER */}
      <WhatYouLearnSlider
        title="What You’ll Learn"
        subtitle=""
        items={whatYouLearnItems}
      />

      {/* 3) StudentActivities block (Glimpses / Events and Activities section) */}
      <StudentActivities
        activities={activities}
        title="Events and Activities"
        subtitle="Glimpses"
      />

      <AdmissionCareer />
    </main>
  );
}
