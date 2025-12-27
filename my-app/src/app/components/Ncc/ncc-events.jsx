"use client";

import StudentActivities from "../department/student_activities";

const nccActivities = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-img-1.webp",
    imageAlt: "NCC Annual Training Camp",
    title: "Annual Training Camp (ATC)",
    description:
      "Cadets undergo structured training focused on drill physical fitness weapon training basics map reading fieldcraft leadership activities and teamwork to build discipline and confidence.",
    buttonText: "Read More",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-3.webp",
    imageAlt: "NCC Parade & Drill",
    title: "Parade, Drill & Ceremonial Practice",
    description:
      "Regular parade and drill sessions help cadets develop impeccable turnout coordination time management and command response while strengthening esprit de corps.",
    buttonText: "Read More",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-img-2.webp",
    imageAlt: "NCC National Events",
    title: "National & Inter-University NCC Events",
    description:
      "Cadets represent the institution at national and inter-university NCC events enhancing leadership communication skills and national integration.",
    buttonText: "Read More",
  },
];

export default function NccEvents() {
  return (
    <div className="ncc-events-wrapper">
      {/* ✅ Adds spacing below heading by increasing the content block top margin */}
      <style jsx global>{`
        .ncc-events-wrapper .container.mt-5 {
          margin-top: 32px !important;
        }
      `}</style>

      <StudentActivities
        title="Events & Activities"
        subtitle="National Cadet Corps (NCC)"
        activities={nccActivities}
        paddingClassName="py-16"
      />
    </div>
  );
}
