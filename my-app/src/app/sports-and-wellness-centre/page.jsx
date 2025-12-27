"use client"
import React from 'react'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'
import SportsWellnessOverview from '@/app/components/sports-and-wellness-centre/sportsandwellnesshero'
import SportsandwellnessMainIntro from '@/app/components/sports-and-wellness-centre/sportsandwellness_main_intro'
import SportsFacilitiesTabs from '@/app/components/sports-and-wellness-centre/sportsfacilitiestabs'
import Sportsandwellnessevents from '@/app/components/sports-and-wellness-centre/sportsandwellnessevents'
import AdmissionCareer from '@/app/components/general/admission_cta'

function Sportsandwellnesscentre() {

    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/sportsmain.webp",
        pageTitle: "Sports & Wellness Centre",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Sports & Wellness", href: "/sports-and-wellness-centre" },
        ],
    };

    return (
        <>
            <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 60% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
            <AutoBreadcrumb data={breadcrumbData} />
            <SportsandwellnessMainIntro />
            <SportsWellnessOverview />  
            <div className="container py-10">
                <SportsFacilitiesTabs />
            </div>
            <Sportsandwellnessevents />
            <AdmissionCareer />
        </>
    )
}

export default Sportsandwellnesscentre
