"use client";

import React, { useEffect } from "react";
import ContactForm from "@/app/components/forms/ContactForm";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FollowUs from "@/app/components/contact_us/follow_us";
import Map from "@/app/components/contact_us/map_section";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Contact Us",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact_us' }
  ]
};

const ContactUs = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  return (
    <>
      <ContactForm />
      <FollowUs />
      <Map />
      <AdmissionCareer />
    </>
  );
};

export default ContactUs;