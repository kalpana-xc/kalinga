"use client";
import MainIntro from "../components/about/main_intro";
import ResearchIntro from "@/app/components/research-resources/research_intro";
import BoardOfStudiesTable from "@/app/components/general/board_of_studies_table";
import AccreditationRanking from "@/app/components/home/AccreditationRanking";
import AdmissionCareer from "../components/general/admission_cta";
import { useEffect } from "react";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/DSC02606+2.jpg",
  pageTitle: "Research Resources",
  objectPosition: "center",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Research Resources", href: "/research-resources" },
  ],
};

export default function ResearchPapersAndBooksPublished() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  return (
    <>
      <MainIntro
        title="Transforming Your Results Into Publications"
        description="Kalinga University actively supports its researchers by providing them with resources, guidance, and support in their publication journey. From expert mentorship to providing access to publication tools and final printing, we’re with them at every step. We also help them present their work in front of a wider audience on both physical and digital platforms. "
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="Kalinga University Research"
        showKnowMore={true}

      />

      <BoardOfStudiesTable className="text-center"
        title="List of Books Published"
        description="Explore the published research works of our scholars, whose hard work in researching and putting their ideas together in one place can be seen in their impactful books."
        columns={[" ", " ", " "]}
        emptyRows={4}
      />

      <BoardOfStudiesTable className="text-center"
        title="List of Research Papers Published"
        description="Explore the list of published papers that reflect their contribution to student research work and academic excellence. "
        columns={[" ", " ", " "]}
        emptyRows={4}
      />

      <BoardOfStudiesTable className="text-center"
        title="Kalinga University Patents"
        columns={[" ", " ", " "]}
        emptyRows={4}
      />

      <AccreditationRanking />
      <AdmissionCareer />
    </>
  );
}
