import React from 'react'
import SectionHeading from '../components/general/SectionHeading'

const listStyle = { fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px' }

// Model breradcrumb

const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
    pageTitle: "Refund & Cancellation Policy",
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'refund & cancellation policy', href: '/refund-policy' }
    ]
  };
  
  // Register it globally (no import needed - this pattern works automatically)
  if (typeof window !== 'undefined') {
    window.__breadcrumbData = breadcrumbData;
  }


  export default function RefundPolicyPage() {
    return (
        <section className='container mx-auto px-6 py-16'>
          <div className='text-center'>
            <SectionHeading 
              title="Refund & Cancellation Policy"
              subtitle=""
              titleClassName="text-center"
              subtitleClassName="text-center text-sm sm:text-base text-[var(--lite-sand)] max-w-3xl mx-auto"
            />
          </div>
          <div className='mt-8 text-justify'>
            <p className='text-sm'>
            For any refund and cancellation, the University follows guidelines as per the University Grants Commission Policy issued from time to time.
            </p>
            <h3 className='text-2xl pt-6'>Student ERP & Mobile App</h3>
            <p className='text-sm'>
            Kalinga has created a tech–enabled model for teaching and learning. We are a learner-centric University and put the student first.
            </p>
            <ul className='list-disc list-inside' style={listStyle}>
                <li>Interactive learning through an Online Platform</li>
                <li>Goal-oriented and flexible learning.</li>
            </ul>
          </div>
        </section>
    )
}