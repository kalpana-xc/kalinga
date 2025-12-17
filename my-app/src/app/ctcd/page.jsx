"use client";

import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  imageposition: "object-top",
  pageTitle: "Corporate Training And Consultancy Division (CTCD)",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "CTCD", href: "/ctcd" },
  ],
};

if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;

export default function CtcdPage() {
  return (
    <main className="w-full">
      {/* IMPORTANT: Breadcrumb overlay spacing (your project needs this) */}
      <div className="mt-[260px]">
        {/* 1) Hero is already handled by breadcrumb global component */}
        {/* 2) Objectives section (you already have / will add) */}
        {/* 3) THEN add this section exactly here: */}
        <div className="container py-10">
          <CtcdTrainingTabs />
        </div>

        {/* 4) Masterclasses section below (as per your 2nd screenshot) */}
      </div>
    </main>
  );
}
