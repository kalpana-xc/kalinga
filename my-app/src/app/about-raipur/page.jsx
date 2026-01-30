"use client"

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import RaipurMainIntro from '@/app/components/about-raipur/raipur_main_intro'
import NewRaipur from '@/app/components/about-raipur/new_raipur'
import Highlights from '@/app/components/about-raipur/highlights'
import AdmissionCareer from '../components/general/admission_cta'
import RaipurVideo from '../components/about-raipur/raipurvideo'
import Newraipurvideos from '../components/about-raipur/newraipurvideos'

function page() {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname,
      heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/raipur_breadcrujmb.webp",
      pageTitle: "About Raipur",
      customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "About Raipur", href: "/about-raipur" },
      ],
    };

    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }

    return () => {
      if (typeof window !== "undefined" && window.__breadcrumbData?.pathname === pathname) {
        delete window.__breadcrumbData;
      }
    };
  }, [pathname]);


  return (
    <>
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 40% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
      <RaipurMainIntro
        knowMoreLabel=''
        knowMoreHref='' />
      <RaipurVideo />
      <NewRaipur />
      <Newraipurvideos />
      <Highlights />
      <AdmissionCareer />
    </>
  )
}

export default page
