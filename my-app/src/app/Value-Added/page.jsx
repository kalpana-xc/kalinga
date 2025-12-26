"use client";
import { useState } from "react";
import MainIntro from "../components/about/main_intro";
import MediaCardSlider from "../components/general/media-card-slider";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-banner.webp",
  pageTitle: "Value-Added",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Value-Added", href: "/Value-Added" },
  ],
};
// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}
/* ---------------- Video Data ---------------- */
const videoItems = [
  {
    id: 1,
    name: "Sujjal Saraf",
    description: "BBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_856d6f87-40aa-4311-9bd2-a4c2854b83b2+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_856d6f87-40aa-4311-9bd2-a4c2854b83b2+(1).mp4",
  },
  {
    id: 2,
    name: "Sangita Jana",
    description: "BSc Forensic Science",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_e260bdb8-0152-4a83-93bd-fc33bb794b02.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_e260bdb8-0152-4a83-93bd-fc33bb794b02.mp4",
  },
  {
    id: 3,
    name: "Debraj Debnath",
    description: "B.Tech CS",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
  },
  {
    id: 4,
    name: "Surya Kumar Srivastava",
    description: "B.Tech CS (AIML)",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
  },
  {
    id: 5,
    name: "Naman Kumar",
    description: "MCA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+08+(1)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+08+(1)+(1).mp4",
  },
  {
    id: 6,
    name: "Karda Karwolor",
    description: "BCS AI ML",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_d95ed852-87bb-43b3-b52e-95c23b096a02.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_d95ed852-87bb-43b3-b52e-95c23b096a02.mp4",
  },
  {
    id: 7,
    name: "Alex Teo",
    description: "MBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+07+(1)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+07+(1)+(1).mp4",
  },
  {
    id: 8,
    name: "Sadiq Isa Yusuf",
    description: "MBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_7fe436a0-5cc2-45e0-90bf-49bf031fb5f2+(1)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_7fe436a0-5cc2-45e0-90bf-49bf031fb5f2+(1)+(1).mp4",
  },
  {
    id: 9,
    name: "Abubakar",
    description: "MCOM BF",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_85b47a2b-6778-43cc-b817-929a4beaf67c+(2)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_85b47a2b-6778-43cc-b817-929a4beaf67c+(2)+(1).mp4",
  },
];

/* ---------------- PDF Data ---------------- */
const pdfData = {
  "2024-25":
    "https://drive.google.com/file/d/1hzWus_AFpBqKlt0690QQG6BetaF7YsHy/view",
  "2023-24":
    "https://drive.google.com/file/d/14fS-akX1vEaPDN9H-jye8Diqga2saUtW/view",
  "2022-23":
    "https://drive.google.com/file/d/1DzWDuZjX_fOYAqKxRXntojpontCQ30bi/view",
  "2021-22":
    "https://drive.google.com/file/d/1wlPqGITz3lUEht4kjdST-laCXVFhBnnp/view",
  "2020-21":
    "https://drive.google.com/file/d/1Ro4cpsnCXRELtjt6babs0n0w5Oku5Q0v/view",
  "2019-20":
    "https://drive.google.com/file/d/10-HYRf1d5PN3MLF7OVCF_cmoSr0A00k_/view",
  "2018-19":
    "https://drive.google.com/file/d/1gtbTx22Bh89psbX21cjqGtDiDvtXDOX0/view",
};

export default function ValueAddedPage() {
  const years = Object.keys(pdfData);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <>
    <section className="research-welfare-intro">
        <MainIntro
          breadcrumbData={breadcrumbData}
          title="Value Added Courses"
          description={[
            "Emerging trends in technical and professional education call for value addition, i.e., students must acquire something more than what is provided in the curriculum and develop skills in their chosen field of study.",
            " Kalinga University offers a range of short-term certificate courses, which are conducted after class hours or during semester breaks. These courses are conducted by professionals and industry experts who help students stand out in the job market.",
          ]}
          imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/banner+(1).webp"
          imageAlt="Value-Added"
          initialVisibleParagraphs={1}
          showKnowMore
        />
      </section>

     {/* ---------- YEAR WISE PDF SECTION ---------- */}
<section className="py-14">
  <div className="mx-auto max-w-6xl rounded-3xl bg-[#0d4a75] p-6">
    <h2 className="text-white text-2xl font-bold mb-6">
      Our Value Added Courses (PDFs)
    </h2>

    {/* Tabs */}
    <div className="flex flex-wrap gap-3 mb-6">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => setActiveYear(year)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition
          ${
            activeYear === year
              ? "text-white"
              : "text-black bg-white hover:text-white"
          }`}
          style={{
            backgroundColor: activeYear === year ? "#A61E1E" : "white",
          }}
          onMouseEnter={(e) => {
            if (activeYear !== year) e.target.style.backgroundColor = "#A61E1E";
          }}
          onMouseLeave={(e) => {
            if (activeYear !== year) e.target.style.backgroundColor = "white";
          }}
        >
          {year}
        </button>
      ))}
    </div>

   

    {/* PDF Preview */}
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={pdfData[activeYear].replace("/view", "/preview")}
        className="w-full h-[600px]"
        allow="autoplay"
      />
    </div>
  </div>
</section>


      {/* Video Slider */}
      <div className="px-2 md:px-0">
        <MediaCardSlider
          categoryTitle="Our Student Experiences"
          videoItems={videoItems}
          nameTextClass="text-[#A61E1E]"
          swiperClassName="value-added-video-slider"
        />
      </div>
    </>
  );
}
