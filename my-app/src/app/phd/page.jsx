"use client";
import AdmissionCareer from "../components/general/admission_cta";
import AutoBreadcrumb from "../components/layout/BreadcrumbData";
import PhdGrid from "../components/phd/phd-grid";
import PhdIntro from "../components/phd/phd-intro";
import PhdObjectivesPanel from "../components/phd/phd-objectives";
import FAQ from "../components/general/faq";
import ScholarStats from "../components/phd/scholar_stats";
import WhyChoosePhd from "../components/phd/why-phd";


export default function PhdPage() {
  const breadcrumbData = {
    heroImage:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Phd-BannerImage.webp",
    pageTitle: "Ph.D",
    customBreadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Ph.D", href: "/phd" },
    ],
  };

  const phdResources = [
    {
      id: 1,
      title: "Ph.D. Ordinance",
      description: "Download the complete ordinance documents governing the Ph.D. program.",
      buttons: [
        { label: "Ordinance No. 48", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Ordinance+No.+48+(16.09.2013).pdf", "_blank") },
        { label: "Revised Ordinance No. 48", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Amended+Ordinance+No.+48+(18.02.2022).pdf", "_blank") },
      ]
    },
    {
      id: 2,
      title: "Thesis Format",
      description: "Guidelines and templates for thesis submission.",
      buttons: [
        { label: "Cover Page Format", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University-+Cover+Page+-Thesis.pdf", "_blank") },
        { label: "Synopsis Format", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University+-Synopsis+Format+-Cover+Page+(1).pdf", "_blank") },
        { label: "Summary Format", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University+-Summary+Format-+Cover+page.pdf", "_blank") },
        { label: "Arrangement of Thesis Content", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/ARRANGEMENT+OF+THESIS+CONTENTS.pdf", "_blank") },
        { label: "Thesis Chapterization", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University-+Thesis+Chapterization_Final.pdf", "_blank") },
      ]
    },
    {
      id: 3,
      title: "Ph.D. Admission Policy",
      description: "Detailed policy document regarding Ph.D. admissions.",
      buttons: [
        { label: "Ph.D. Admission Policy", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/2.+Admission+poilcy+(1).pdf", "_blank") },
      ]
    },
    {
      id: 4,
      title: "Detailed Syllabus of Research Methodology",
      description: "Course syllabus for Research Methodology coursework.",
      buttons: [
        { label: "Detailed Syllabus", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Detailed+Syllabus.pdf", "_blank") },
      ]
    },
    {
      id: 5,
      title: "Fellowship Scholarship Policy for Ph.D. Scholars",
      description: "Policy details for research fellowships and scholarships.",
      buttons: [
        { label: "Fellowship Scholarship Policy", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/3.+Fellowship+Scholarship+Policy+for+Ph.D.+Scholars.pdf", "_blank") },
      ]
    },
    {
      id: 6,
      title: "Policy for the Grievance Redress Mechanism of Scholars",
      description: "Mechanism for addressing scholar grievances.",
      buttons: [
        { label: "Grievance Redress Policy", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/6+POLICY+FOR+GRIEVANCE+REDRESS+MECHANISM+OF+SCHOLARS.pdf", "_blank") },
      ]
    },
    {
      id: 7,
      title: "Ph.D. Process Improvement",
      description: "Best practices and process improvement guidelines.",
      buttons: [
        { label: "Best Practices & Process Improvement", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Best+Practices+%26+Process+Improvement+(1).pdf", "_blank") },
      ]
    },
    {
      id: 8,
      title: "UGC Regulations",
      description: "Relevant University Grants Commission regulations.",
      buttons: [
        { label: "2022", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGC+Regulation+2022+(1).pdf", "_blank") },
        { label: "2016", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGC+Regulations+2016+(1).pdf", "_blank") },
        { label: "2018 (Plagiarism)", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGCNotification_Plagiarism_2018.pdf", "_blank") },
      ]
    },
    {
      id: 9,
      title: "Ph.D. Notification 2025-26",
      description: "Latest notifications for the upcoming academic year.",
      buttons: [
        { label: "Ph.D. Notification 2025-26", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Ph.+D.+2025+Notification+26-07-2025.pdf", "_blank") },
      ]
    },
    {
      id: 10,
      title: "Details of Currently Enrolled Ph.d. Scholars and Supervisors",
      description: "View details of current scholars and supervisors.",
      buttons: [
        { label: "Open Page", onClick: () => window.open("/research", "_blank") },
      ]
    },
    {
      id: 11,
      title: "Undertaking",
      description: "Download the undertaking format.",
      buttons: [
        { label: "Undertaking", onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf", "_blank") },
      ]
    },
  ];

  return (
    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 35% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>
      <AutoBreadcrumb data={breadcrumbData} />
      <PhdIntro />
      <PhdGrid />
      <WhyChoosePhd />
      <PhdObjectivesPanel />
      <FAQ
        title="Ph.D. Resources"
        variant="button"
        buttons={phdResources}
        subtitle=""
      />
      <ScholarStats />
      <AdmissionCareer />
    </>
  );
}
