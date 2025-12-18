"use client";

import { useLayoutEffect } from "react";
import MainIntro from "@/app/components/about/main_intro";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import WeStandOut from "@/app/components/department/we_stand_out";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  pageTitle: "NSS",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "NSS", href: "/nss" },
  ],
};

const aboutP1 =
  "The National Service Scheme has been promoted by the Sports Ministry & Youth Welfare Department, Government of India, and was initiated with the hope that the students engaged in higher education ought to have a sense of respect towards labour with self-motivated discipline. The motto of NSS is “Not Me, But You”, which means putting the community’s needs before individual needs.";

const aboutP2 =
  "We have an active unit of 100 + NSS Volunteers, including both Boys and Girls. NSS at KU is a platform that proves our commitment to community engagement and social responsibility. It encourages students to actively participate in community service or social service activities. With initiatives like healthcare camps, environmental cleanliness and conservation, and educational projects in underprivileged areas, they develop a sense of responsibility and social awareness.";

const objectives = [
  "To understand the community in which they will work",
  "To identify the problems of that community and make efforts to solve them",
  "To develop a sense of social and civic responsibility",
  "To utilise the volunteer’s knowledge and come up with collective solutions to individual and community problems",
  "To develop a capacity to deal with natural disasters or emergencies",
  "To build skills that encourage active people's participation",
  "To practice national integration and social harmony",
  "To develop leadership and fair decision-making skills",
];

const visionMissionData = [
  {
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText:
      "To inspire students to become disciplined and socially responsible citizens who make a real difference in society with unity.",
    missionText:
      "To encourage equality, diversity, and active participation in community-based programs and develop values like empathy, transparency, freedom, honesty, and respect.",
    showImage: true,
  },
];

const benefitsItems = [
  { id: 1, text: "Develop teamwork, leadership skills, and discipline" },
  { id: 2, text: "Improve confidence and build a positive attitude" },
  { id: 3, text: "Participate in community service programs" },
  { id: 4, text: "Participate in state-level and national-level camps" },
  { id: 5, text: "Participate in adventurous camps" },
  { id: 6, text: "Earn an NSS volunteer certificate" },
  { id: 7, text: "Connect with people from different cultures and backgrounds" },
  { id: 8, text: "Get more preference in job interviews" },
];

// ✅ Swap styling: Benefits -> icon boxes
const benefitsBoxItems = benefitsItems.map((b) => ({
  title: b.text,

}));

// ✅ Swap styling: Objectives -> list items
const objectiveItems = objectives.map((t, idx) => ({
  id: idx + 1,
  text: t,
}));

const learningOutcomeCards = [
  { id: 1, text: "Learn the importance of community service" },
  { id: 2, text: "Become a responsible and socially aware citizen" },
  { id: 3, text: "Identify sustainable solutions to social problems" },
  { id: 4, text: "Learn to plan, organise, and execute social issues" },
  { id: 5, text: "Become confident while making correct decisions" },
];

const activities = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NSS Activity",
    title: "NSS Community Awareness Drive",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NSS Activity",
    title: "Cleanliness & Conservation Campaign",
    buttonText: "Read More",
    date: "September 10 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NSS Activity",
    title: "Health Camp Initiative",
    buttonText: "Read More",
    date: "October 05 - 2025",
  },
];

export default function NSSPage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <>
      {/* Title */}
      <section className="pt-10 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-[var(--title-color)]">
            NSS
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            National Service Scheme
          </p>
        </div>
      </section>

      {/* About NSS */}
      <MainIntro
        title="About NSS At KU"
        description={[aboutP1, aboutP2]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="NSS at Kalinga University"
        showReadMore={true}
        readMoreLabel="Read More"
        readLessLabel="Show Less"
      />

      {/* ✅ Objectives now in Benefits-style list */}
      <ImageListItem
        title="Objectives"
        subtitle=""
        items={objectiveItems}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
      />

      {/* Vision / Mission */}
      <VisionMission data={visionMissionData} />

      {/* ✅ Benefits now in Objectives-style icon boxes */}
      <ImageListItem
        title="Benefits Of Joining Our NSS Team"
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        boxItems={benefitsBoxItems}
      />

      {/* Learning Outcomes */}
      <WeStandOut title="Learning Outcomes" cards={learningOutcomeCards} />

      {/* Events & Activities */}
      <StudentActivities activities={activities} title="" subtitle="Student Activities" />

      <AdmissionCareer />
    </>
  );
}
