"use client";

import { useLayoutEffect, useState } from "react";
import MainIntro from "@/app/components/about/main_intro";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import DataTable from "@/app/components/general/data-table";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/grievance/grievance-banner.webp",
  pageTitle: "Grievance Redressal Cell",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Grievance Redressal Cell", href: "/grievance-redressal" },
  ],
};

const aboutP1 =
  "The Grievance Redressal Cell is established at KU as per the UGC guidelines to record the complaints of students and staff members regarding academic, administrative, discrimination, harassment, examination, finance, facilities, and infrastructure-related issues.";

const aboutP2 =
  "The dedicated committee members look after the seriousness of the problems and take necessary action.";

const functionsList = [
  { id: 1, text: "To accept written complaints from students and staff members" },
  { id: 2, text: "To follow a proper procedure set by the committee to fairly handle issues" },
  { id: 3, text: "To listen, record, and examine the grievances, and immediately take necessary action" },
  { id: 4, text: "To send evidence and suggestions to higher authorities in case of serious matters or beyond control" },
  { id: 5, text: "To identify if the complaints are genuine or not" },
  { id: 6, text: "To conduct regular meetings to discuss the status of complaints" },
  { id: 7, text: "To keep a follow-up for each case until they are completely resolved" },
  { id: 8, text: "To maintain the confidentiality of the complaints, if needed" },
];

const committeeMembers = [
  { sno: 1, name: "Dr. Rahul Mishra", position: "Dean, Academic Affairs – Chairperson of the Committee" },
  { sno: 2, name: "Dr. Sandeep Gandhi", position: "Registrar" },
  { sno: 3, name: "Dr. Lincy Roy", position: "Deputy Registrar" },
  { sno: 4, name: "Dr. C. P. Jawahar", position: "Dean, Faculty of Technology" },
  { sno: 5, name: "Dr. Shilpi Bhattacharya", position: "Dean, Faculty of Arts & Humanities" },
  { sno: 6, name: "Dr. A. Vijayanand", position: "Chief Proctor" },
  { sno: 7, name: "Dr. Shilpi Shrivastava", position: "HoD, Dept. of Chemistry" },
  { sno: 8, name: "Ms. Mariyan Ahmed", position: "Student Representative" },
  { sno: 9, name: "Mrs. Shilpi Nishant Tanwani", position: "Academic Officer" },
  { sno: 10, name: "Mr. Manish Singh", position: "Administration Head" },
  { sno: 11, name: "Mr. Rajesh Saini", position: "Accounts Head" },
  { sno: 12, name: "Dr. D. M. Sahu", position: "Transport In-charge" },
  { sno: 13, name: "Dr. Honey Gaur", position: "Dy COE" },
  { sno: 14, name: "Mrs. T. Gayatri Murty", position: "Assistant Registrar - Admissions" },
  { sno: 15, name: "Ms. Priyanka Singh", position: "Student Coordinator" },
];

function GrievanceFormCard() {
  const [form, setForm] = useState({
    studentName: "",
    courseName: "",
    semesterYear: "",
    enrollmentNo: "",
    mobile: "",
    email: "",
    grievance: "",
  });

  const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = () => {
    console.log("Grievance Submitted:", form);
  };

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="bg-[var(--button-red)] rounded-2xl px-6 sm:px-12 py-14">
          <h2 className="text-white text-center text-3xl sm:text-[40px] font-light font-stix">
            Kalinga University Grievance Cell
          </h2>

          <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-14 gap-y-10">
            <div>
              <label className="text-white text-sm sm:text-base font-plus-jakarta-sans">
                Student Name
              </label>
              <input
                value={form.studentName}
                onChange={onChange("studentName")}
                placeholder="Student Name"
                className="w-full mt-2 bg-transparent border-b border-white/60 text-white py-3 outline-none placeholder:text-white/60 focus:border-white font-plus-jakarta-sans"
              />
            </div>

            <div>
              <label className="text-white text-sm sm:text-base font-plus-jakarta-sans">
                Course Name
              </label>
              <input
                value={form.courseName}
                onChange={onChange("courseName")}
                placeholder="Course Name"
                className="w-full mt-2 bg-transparent border-b border-white/60 text-white py-3 outline-none placeholder:text-white/60 focus:border-white font-plus-jakarta-sans"
              />
            </div>

            <div>
              <label className="text-white text-sm sm:text-base font-plus-jakarta-sans">
                Semester / Year
              </label>
              <input
                value={form.semesterYear}
                onChange={onChange("semesterYear")}
                placeholder="Semester / Year"
                className="w-full mt-2 bg-transparent border-b border-white/60 text-white py-3 outline-none placeholder:text-white/60 focus:border-white font-plus-jakarta-sans"
              />
            </div>

            <div>
              <label className="text-white text-sm sm:text-base font-plus-jakarta-sans">
                Enrollment No
              </label>
              <input
                value={form.enrollmentNo}
                onChange={onChange("enrollmentNo")}
                placeholder="Enrollment No"
                className="w-full mt-2 bg-transparent border-b border-white/60 text-white py-3 outline-none placeholder:text-white/60 focus:border-white font-plus-jakarta-sans"
              />
            </div>

            <div>
              <label className="text-white text-sm sm:text-base font-plus-jakarta-sans">
                Please Enter Mobile No
              </label>
              <input
                value={form.mobile}
                onChange={onChange("mobile")}
                placeholder="Please Enter Mobile No"
                className="w-full mt-2 bg-transparent border-b border-white/60 text-white py-3 outline-none placeholder:text-white/60 focus:border-white font-plus-jakarta-sans"
              />
            </div>

            <div>
              <label className="text-white text-sm sm:text-base font-plus-jakarta-sans">
                Email
              </label>
              <input
                value={form.email}
                onChange={onChange("email")}
                placeholder="Email"
                className="w-full mt-2 bg-transparent border-b border-white/60 text-white py-3 outline-none placeholder:text-white/60 focus:border-white font-plus-jakarta-sans"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-white text-sm sm:text-base font-plus-jakarta-sans">
                Grievance
              </label>
              <input
                value={form.grievance}
                onChange={onChange("grievance")}
                placeholder="Grievance"
                className="w-full mt-2 bg-transparent border-b border-white/60 text-white py-3 outline-none placeholder:text-white/60 focus:border-white font-plus-jakarta-sans"
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <GlobalArrowButton variant="white" onClick={onSubmit}>
              Submit
            </GlobalArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GrievanceRedressalPage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  const columns = [
    { key: "sno", label: "S. No.", width: "w-24" },
    { key: "name", label: "Name Of Member", width: "flex-1" },
    { key: "position", label: "Position", width: "w-[420px]" },
  ];

  const data = committeeMembers.map((m) => ({
    sno: m.sno,
    name: m.name,
    position: m.position,
  }));

  return (
    <main className="bg-white font-plus-jakarta-sans">
      <MainIntro
        title="Grievance Redressal Cell"
        description={[aboutP1, aboutP2]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/grievance/grievance-main-intro.webp"
        imageAlt="Grievance Redressal Cell"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />

      <ImageListItem
        title="Functions"
        subtitle=""
        items={functionsList}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/grievance/grievance-functions.webp"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl text-[var(--title-color)] font-stix">
            <center>Grievance Redressal Committee</center>
          </h2>

          <div className="mt-10">
            <DataTable columns={columns} data={data} overflowX={true} />
          </div>
        </div>
      </section>

      <GrievanceFormCard />
      <AdmissionCareer />

      {/* Existing breadcrumb image position override + font harmoniser */}
      <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 35% !important;
        }

        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }

        main.font-plus-jakarta-sans p,
        main.font-plus-jakarta-sans li,
        main.font-plus-jakarta-sans label,
        main.font-plus-jakarta-sans input,
        main.font-plus-jakarta-sans textarea,
        main.font-plus-jakarta-sans table {
          font-family: var(--font-plus-jakarta-sans), ui-sans-serif, system-ui !important;
        }

        main.font-plus-jakarta-sans h1,
        main.font-plus-jakarta-sans h2,
        main.font-plus-jakarta-sans h3 {
          font-family: var(--font-stix), ui-serif, Georgia, serif;
        }
      `}</style>
    </main>
  );
}
