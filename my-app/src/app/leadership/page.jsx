"use client";

import React, { useEffect } from 'react'
import ChairmanMessage from '../components/leadership/chairman_message'

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Leadership",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Leadership', href: '/leadership' }
  ]
};

export default function Leadership() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  return (
    <>
      <ChairmanMessage />
    </>
  )
}