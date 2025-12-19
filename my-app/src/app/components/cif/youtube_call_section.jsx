"use client";

import React from "react";
import SectionHeading from "@/app/components/general/SectionHeading";

export default function CifYoutubeCallSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <SectionHeading
            title="CIF In Action"
            subtitle=""
            titleClassName="text-center"
            subtitleClassName="text-center text-sm sm:text-base text-[var(--light-text-gray)] max-w-3xl mx-auto"
          />
          <p className="">Check out the experience of our research scholars performing groundbreaking research using our advanced research tools.</p>
        </div>

        <div className="w-full rounded-2xl bg-[var(--light-gray)] border border-gray-200 overflow-hidden">
          {/* 16:9 responsive iframe wrapper */}
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src=""
              title="CIF In Action"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}


