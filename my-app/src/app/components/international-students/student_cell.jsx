"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";
import GlobalArrowButton from "../general/global-arrow_button";

export default function StudentCell({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/student-cell.webp",
  imageAlt = "International students",
  tag = "International Students Cell",
  title = "Supporting Global Students At Every Step",
  description = "The International Students Cell at Kalinga University has been established to streamline the academic processes of our global students, helping them seize the best opportunities and resources of our University. The members of our cell take utmost care of our students from their arrival and admission into our programs to providing support and guidance until they receive their degree. Not just academically, but they also provide details of events, competitions, and training programs, and encourage them to actively participate in events outside the classroom. They even provide complete immigration support, make accommodation arrangements, and arrange language classes. From organising BRIDGE Classes to providing counselling sessions for academic and personal growth, their aim is to make every student feel at home.",
  ctaLabel = "Read More",
  ctaHref = "#",
  subtitle = "International Students Cell",
  subtitleClassName = "",
  titleClassName = "!text-white",
  subtitleTextColor = "text-[var(--dark-orange-red)]",
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split description into paragraphs by splitting on periods followed by space and capital letter
  const paragraphs = useMemo(() => {
    // Split by periods followed by space and capital letter, but keep the period
    const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
    
    // Group sentences into paragraphs (2 sentences per paragraph, or logical breaks)
    const paras = [];
    let currentPara = '';
    
    sentences.forEach((sentence, index) => {
      currentPara += sentence.trim() + ' ';
      
      // Create a paragraph after every 2 sentences, or if it's the last sentence
      if ((index + 1) % 2 === 0 || index === sentences.length - 1) {
        if (currentPara.trim()) {
          paras.push(currentPara.trim());
          currentPara = '';
        }
      }
    });
    
    return paras;
  }, [description]);

  const hasMoreThanTwoParagraphs = paragraphs.length > 2;
  const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 2);

  return (
    <section className="mx-2">
      <div className="bg-[var(--dark-blue)] text-white rounded-2xl shadow-lg overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-2xl"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>

            <div className="flex flex-col">
              <SectionHeading
                subtitle={subtitle}
                title={title}
                subtitleClassName={subtitleClassName}
                titleClassName={titleClassName}
                subtitleTextColor={subtitleTextColor}
              />
              <div className="space-y-4">
                {visibleParagraphs.map((para, index) => (
                  <p 
                    key={index}
                    className="text-sm md:text-base text-white/80 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
              {hasMoreThanTwoParagraphs && (
                <GlobalArrowButton
                  className="!bg-[var(--dark-blue)] !text-white shadow-none !p-0 mt-2"
                  arrowClassName="!bg-[var(--button-red)]"
                  arrowIconClassName="!text-white"
                  textClassName="!text-white text-xs sm:text-base !pl-0"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read Less" : ctaLabel}
                </GlobalArrowButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
