"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import MediaCardSlider from '../components/general/media-card-slider';


// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Kalinga Podcast",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Podcast", href: "/podcast" },
  ],
};

const videoItems = [
  {
    id: 1,
    name: "Dr. Sunayana Shukla",
    description: "Dr. Sunayana Shukla",
    videoUrl: "https://www.youtube.com/watch?v=WdKMix0cahA",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/podcast/podcast-2.png",
  },
  {
    id: 2,
    name: "Sandeep Gandhi",
    description: "Sandeep Gandhi",
    videoUrl: "https://www.youtube.com/watch?v=eSTWPTAJ-N8",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/podcast/podcast-3.png",
  },
  {
    id: 3,
    name: "Saurabh Banwar",
    description: "Saurabh Banwar",
    videoUrl: "https://www.youtube.com/watch?v=gwcT3TN_5iM",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/podcast/podcast-4.png",
  },
]


// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}


const Podcast = () => {
  return (
    <div>
      <MainIntro
        title="Kalinga Podcast"
        subtitle="An Initiative By Kalinga University"
        description={[
          <>
            <strong>Big Ideas, Bold Voices, and Conversations that Inspire</strong> - Welcome to Kalinga Podcast!
          </>,
          "A platform that shapes the voice of our students, faculty members, alumni, and industry leaders. From inspiring talks to engaging conversations, experience a whole new vibe at our podcast studio. Our students don’t just learn by listening, but they also learn how to create and host their own podcasts. ",
          "So, plug in your earphones and discover new stories and ideas that will inspire you.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/podcast.webp"
        imageAlt="Kalinga University Podcast"
        showKnowMore={false}
        showButton={false}
        initialVisibleParagraphs={5}
      />

      <MediaCardSlider
        categoryTitle=""
        title="Our Podcast"
        description=""
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
    </div>
  );
};

export default Podcast; 