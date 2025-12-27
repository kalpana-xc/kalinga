"use client";

import React from 'react'
import Campusfacilitymainintro from '@/app/components/campus-facilities/campusfacilitymainintro'
import AdmissionCareer from '../components/general/admission_cta'
import { useEffect } from 'react'
import Campusfacilitiescard from '../components/campus-facilities/campusfacilitiescard';

const breadcrumbData = {
    heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campus-life-intro-1.webp",
    pageTitle: "Campus Facilities",
    customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Campus Facilities", href: "/campus-facilities" },
    ],
};

function CampusFacilities() {

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.__breadcrumbData = breadcrumbData;
        }
    }, []);

    return (
        <>
            <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 15% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>

            <Campusfacilitymainintro />
            <Campusfacilitiescard />
            <AdmissionCareer />
        </>
    )
}

export default CampusFacilities
