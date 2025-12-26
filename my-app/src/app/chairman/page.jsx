"use client";

import React from 'react'
import ChairmanMessage from '@/app/components/leadership/chairman_message'

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Chairman  ",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Chairman', href: '/chairman' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

export default function Leadership() {
  return (
    <>
      <ChairmanMessage 
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Rajeev+Kumar.png"
        imageAlt="Dr. Rajeev Kumar"
        name="Dr. Rajeev Kumar"
        title="Chairman"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        message={[
          "It gives me immense pleasure to welcome you to the Kalinga University, where we believe that education is not just about classroom learning but about inspiring learners to achieve lifelong knowledge.",
          "Due to globalization, the competition has tremendously increased in every field including education. To cope with that, we have developed a robust curriculum that turns students into job-ready professionals. We focus on imparting a holistic learning experience to make them well-rounded in emotional, intellectual, and ethical standards.",
          "With an aim to deliver quality education, we are proud to inform you that we are in between 101-150 top universities in India under the NIRF Rankings, 2023. We are also NAAC B+ accredited university, proving our commitment to academic excellence.",
          "We have a multi-cultural campus environment with students from 24 countries, 20 different range of programs, a sustainable campus, an interdisciplinary teaching environment, centers of excellence, advanced research labs, expert faculty members, an industry-ready curriculum, and impeccable career development cell.",
          "Academics are just one part of our university, but we also emphasize co-curricular, extracurricular, and community service. We just don't nurture young minds, but we also prepare responsible global citizens. Every leader is encouraged to go beyond their boundaries, discover their strengths and weaknesses, and become a responsible citizen.",
          "At KU, students don't just earn degrees; they graduate with confidence and purpose to make a thoughtful change in society. As you step into a new journey with us, we assure you that you'll always feel motivated and inspired every single day of your life.",
          "I welcome you all to Kalinga University and wish all the best in your career and life."
        ]}
      />
    </>
  )
}