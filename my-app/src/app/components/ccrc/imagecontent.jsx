"use client";
import { useState } from "react";
import Image from "next/image";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

const additionalContent = [
  "With skill-based training programs, workshops, guest lectures, corporate mentorship, industrial visits, soft skill trainings, personality development workshops, internships, industrial training, campus placement drives, and industry-certified programs, we’re able to maximise the output and save the time of students and working professionals, and build a future-ready workforce. The Centre features state-of-the-art infrastructure and resources that meet industry standards and has earned high appreciation from leading organisations across India and abroad. With experiential learning strategies and an updated curriculum, our students are placed at top companies, and corporate professionals have learned to deliver maximum output and maintain consistent performance."
];

export default function ImageContent({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
  imageAlt = "CCRC Banner",
  imageWidth = 600,
  imageHeight = 400,
  title = "Career and Corporate Resource Centre",
  subtitle = "About CCRC",
  description = "The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support. ",
  buttonText = "Read More",
  className = "",
  hasImage = true,
  subtitleclassName = "",
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // grid-cols-6 if hasImage, grid-cols-12 if no image
  const gridColsClass = hasImage ? "grid-cols-6" : "grid-cols-6";
  // Main content col-span - 8 if image, 12 if no image, both centered horizontally
  const mainContentColSpan = hasImage ? "md:col-span-8 text-start" : "md:col-span-12  items-center justify-center text-center";

  return (
    <section className={`container rounded-xl mx-auto bg-[var(--light-gray)] my-16  md:p-12 p-6 py-10 ${className}`}>
      <div className={`grid items-center md:grid-cols-12  ${gridColsClass} gap-6`}>
        {hasImage && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="md:col-span-4 col-span-6 w-9/12 md:w-4/5"
          />
        )}
        <div
          className={`col-span-6 gap-2 flex flex-col  ${mainContentColSpan} md:mx-auto`}
        >
          <SectionHeading title={title} subtitle={subtitle} titleClassName="!py-2" subtitleClassName={`!py-2 ${subtitleclassName}`} />
          <div className="text-sm pb-4 space-y-3">
            <p>{description}</p>
            {isExpanded && (
              <div className="space-y-3 mt-3">
                {additionalContent.map((item, index) => (
                  <p key={index} className="text-sm">{item}</p>
                ))}
              </div>
            )}
          </div>
          <GlobalArrowButton
            variant="transparent"
            onClick={toggleExpand}
            className={isExpanded ? '' : ''}
          >
            {isExpanded ? 'Read Less' : buttonText}
          </GlobalArrowButton>
        </div>
      </div>
    </section>
  );
}
