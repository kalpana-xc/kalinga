"use client";
import React,{useEffect}from 'react'
import NccIntro from '../components/ncc/ncc-intro'
import NccBenefits from '../components/ncc/ncc-benefits'
import NccHeadMessage from '../components/ncc/ncc-coordinator-message'
import NccVisionMission from '../components/ncc/ncc-visionmission'
import NccEvents from '../components/ncc/ncc-events'
import AdmissionCareer from '../components/general/admission_cta';
const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-3.webp",
        pageTitle: "National Cadet Corps",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "National Cadet Corps", href: "/Ncc" },
        ],
    };
const page = () => {

   
    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.__breadcrumbData = breadcrumbData;
        }
      }, []); 
  return (
    
    <>
    <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 10% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>
    <NccIntro/>
    <NccBenefits/>
     <NccVisionMission/>
    <NccHeadMessage/>
    <NccEvents/>
    <AdmissionCareer/>
    </>
  )
}

export default page