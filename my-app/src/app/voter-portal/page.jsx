"use client";

import React from "react";
import Image from "next/image";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";

/// Breadcrumb configuration
const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
    pageTitle: "Voter Portal",
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Voter Portal', href: '/voter-portal' }
    ]
  };
  
  // Register breadcrumb data globally
  if (typeof window !== 'undefined') {
    window.__breadcrumbData = breadcrumbData;
  }

const buttons = [
  {
    id: 1,
    text: "Voter Portal",
    href: "https://voterportal.eci.gov.in/",
  },
];

export default function VoterPortal() {
  return (
    <>
      <section className="pt-16 pb-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/voterportal.png"
                alt="Voter Portal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <a
              href={buttons[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <GlobalArrowButton
                className="!w-auto !px-6 !py-3"
                arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                arrowSize={20}
              >
                {buttons[0].text}
              </GlobalArrowButton>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}