'use client';

import Image from "next/image";
import { useState } from "react";

export default function ResearchIntro({
  title,
  subtitle,
  secondarySubtitle,
  description,
  imageUrl,
  imageAlt,
  initialVisibleParagraphs = 1,
}) {
  const paragraphs = Array.isArray(description) ? description : [description];
  const [expanded, setExpanded] = useState(false);

  const visibleText = expanded
    ? paragraphs
    : paragraphs.slice(0, initialVisibleParagraphs);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div>
            {/* Red Title */}
            <h1 className="text-[36px] md:text-[42px] font-stix text-[var(--button-red)]">
              {title}
            </h1>

            {/* Black Subtitle */}
            {subtitle && (
              <p className="mt-2 text-[18px] font-semibold text-black">
                {subtitle}
              </p>
            )}

            {/* Red Secondary Subtitle */}
            {secondarySubtitle && (
              <p className="mt-6 text-[20px] font-semibold text-[var(--button-red)]">
                {secondarySubtitle}
              </p>
            )}

            {/* Description */}
            <div className="mt-4 text-[15px] leading-[28px] text-[var(--light-text-gray)]">
              <p>{paragraphs[0]}</p>

              <div
                className={`transition-all duration-300 overflow-hidden ${expanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
              >
                {paragraphs.slice(1).map((text, idx) => (
                  <p key={idx} className="mt-4">
                    {text}
                  </p>
                ))}
              </div>
            </div>


            {/* Read More */}
            {paragraphs.length > initialVisibleParagraphs && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-[var(--button-red)] font-semibold hover:underline"
              >
                {expanded ? "Show Less" : "Read more"}
              </button>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:sticky lg:top-24">
            <div className="relative w-full overflow-visible">
              <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] w-full overflow-hidden rounded-2xl shadow-lg transform-3d-slant">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
