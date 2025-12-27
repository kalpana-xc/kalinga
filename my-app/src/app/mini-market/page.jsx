"use client";
import React,{useEffect}from 'react'
import MiniMarketFacility from '../components/mini-market/minimarket-facility'
import AdmissionCareer from '../components/general/admission_cta'

const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Mini Market",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Mini Market", href: "/mini-market" },
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
    <MiniMarketFacility/>
    <AdmissionCareer/>
    </>
  )
}

export default page