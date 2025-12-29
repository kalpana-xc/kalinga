"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CareerPath from "@/app/components/course/career_path";
import Gallery from "@/app/components/general/gallery";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-banner.webp",
  pageTitle: "MSME Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    {
      label: "MSME Training Centre",
      href: "/centres-of-excellence/msme-training-centre",
    },
  ],
};

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Understanding of MSME Business Models & Industrial Practices",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Real-Time Methods Used by Successful MSMEs",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Effective Strategy Planning & Decision-Making Skills",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Market Research & Opportunity Identification",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Financial Planning & Risk Management",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Communication & Negotiation Skills",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-6.svg",
  },
];

const glimpsesImageItems = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-glimpse1.webp",
    imageAlt: "MSME Training Centre Glimpse 1",
    title: "MSME Centre Glimpse",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-glimpse2.webp",
    imageAlt: "MSME Training Centre Glimpse 2",
    title: "MSME Centre Glimpse",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/msme/msme-glimpse3.webp",
    imageAlt: "MSME Training Centre Glimpse 3",
    title: "MSME Centre Glimpse",
  },
];

const galleryImages = glimpsesImageItems.map((g) => ({
  id: g.id,
  image: g.imageSrc,
  alt: g.imageAlt || g.title || "Gallery image",
}));

export default function MSMETrainingCentrePage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <main className="bg-white">
      <ImageContent
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/smeindia.webp"
        title="MSME Training Centre"
        subtitle="In collaboration with IamSMEofIndia"
        description={[
          "We have partnered with India’s first and only “Gold” Category accredited MSME association that provides a wide range of business solutions to MSMEs across India. Their Tried, Tested, Credible, Affordable, and Ready-made solutions help companies save their time, energy, and cost.",
          "Kalinga University has partnered with IamSMEofIndia to train students in developing effective business strategies through their workshops and seminars, in which they provide them with the latest industrial knowledge and develop an entrepreneurial spirit among them. Their industry experts prepare students to make informed business decisions and to understand how companies can overcome their hurdles in the competitive business world.",
        ]}
        certificateLink="https://drive.google.com/file/d/1Lz-kMpsQjxyPBScXs5mpQ3-RYEpF4g89/view?usp=drive_link"
        certificateLinkText="Ministry of Corporate Affairs Certificate"
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery images={galleryImages} title="Glimpses of MSME Centre Activities" />

      <AdmissionCareer />
    </main>
  );
}
