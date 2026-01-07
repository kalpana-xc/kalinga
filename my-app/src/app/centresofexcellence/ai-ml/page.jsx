"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from "@/app/components/general/gallery";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-banner.webp",
  pageTitle: "AI & ML Courses Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    { label: "AI & ML Courses Training Centre", href: "/centresofexcellence/ai-ml" },
  ],
};

const aboutCentreDescription = [
  "IBM is a global leader in technology and innovation, and we have partnered with the IBM Innovation Centre for Education to offer a specialised course on B.Tech CS in AI-ML. Their industry-relevant curriculum empowers students to excel in the booming tech industry and get jobs in high-demand roles.",
  "With this CoE, students of this program get hands-on learning experience through real-world projects, case studies and internship programs. They also get the opportunity to interact with IBM subject matter experts in expert-led sessions held at Kalinga University.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Programming Languages & Tools For AI & ML",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Deep Understanding Of Artificial Intelligence & Machine Learning",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Algorithm & Model Development",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Management of Large Data Sets",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Deep Learning & Neural Networks",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Designing Intelligent Systems & Software",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-glimpse1.webp",
    imageAlt: "AI & ML Glimpse",
    title: "Lab Session Glimpse",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-glimpse2.webp",
    imageAlt: "AI & ML Glimpse",
    title: "Project Showcase",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-glimpse3.webp",
    imageAlt: "AI & ML Glimpse",
    title: "Expert-led Workshop",
  },
];

const galleryImages = glimpses.map((g) => ({
  id: g.id,
  image: g.imageSrc,
  alt: g.imageAlt || g.title || "Gallery image",
}));

export default function AIMLCentrePage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <>

      <ImageContent
        title="AI & ML Courses Training Centre"
        subtitle="In collaboration with the IBM Innovation Centre for Education"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/ibm.webp"
        imageAlt="Centre Banner"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery images={galleryImages} title="Glimpses of AI & ML Centre Activities" />

      <AdmissionCareer />
    </>
  );
}
