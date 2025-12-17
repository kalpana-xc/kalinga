'use client'

import { useState } from 'react'
import SectionHeading from '../components/general/SectionHeading'
import { renderProgramCard } from '../components/general/program-cards-slider'
import AdmissionCareer from '../components/general/admission_cta'
import QuickLinks from "../components/general/quick_links";
export default function Academics() {
  const [searchQuery, setSearchQuery] = useState('')

  // Academics content - 9 faculty cards
  const academicsContent = {
    subtitle: "Explore Academics",
    title: "Our Academic Faculties",
    programs: [
      {
        id: 1,
        title: "Faculty of Arts & Humanities",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/arts.webp",
        summary: "Explore literature, history, philosophy, languages, and cultural studies. Develop critical thinking and communication skills through diverse humanities programs.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      {
        id: 2,
        title: "Faculty Of Commerce & Management",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/commerce-management.webp",
        summary: "Develop business acumen and leadership skills through comprehensive programs in commerce, finance, marketing, and management. Prepare for careers in corporate leadership and entrepreneurship.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2).",
      },
      {
        id: 3,
        title: "Faculty Of Education",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/education.webp",
        summary: "Shape the future of education through teacher training, educational research, and curriculum development. Prepare to inspire and educate the next generation.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      {
        id: 4,
        title: "Faculty Of Information Technology",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp",
        summary: "Master cutting-edge technologies, software development, data science, and cybersecurity. Build expertise in programming, cloud computing, and emerging IT solutions.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      {
        id: 7,
        title: "Faculty Of Law",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/law.png",
        summary: "Study constitutional law, criminal law, corporate law, and legal practice. Prepare for careers in judiciary, legal practice, and corporate legal departments.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      {
        id: 5,
        title: "Faculty Of Pharmacy",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/phd-bio.webp",
        summary: "Study pharmaceutical sciences, drug development, and healthcare. Learn about medication management, clinical pharmacy, and pharmaceutical research.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      {
        id: 9,
        title: "Ph.D",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp",
        summary: "Pursue advanced research and doctoral studies across various disciplines. Work with renowned faculty on groundbreaking research projects and contribute to academic knowledge.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      {
        id: 6,
        title: "Faculty Of Science",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/science.webp",
        summary: "Dive into fundamental sciences including physics, chemistry, biology, and mathematics. Conduct research and experiments in state-of-the-art laboratories.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      {
        id: 7,
        title: "Faculty Of Technology",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/information.png",
        summary: "Explore engineering disciplines including computer science, electronics, mechanical, and civil engineering. Gain hands-on experience with modern technology and innovation.",
        scholarships: "Check eligibility",
        qualification: "Pass in Higher Secondary Examinations of (10+2)",
      },
      
    ],
  }

  // Filter programs based on search query
  const filteredPrograms = academicsContent.programs.filter((program) => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return true
    return program.title.toLowerCase().includes(query)
  })

  // QuickLinks content
  const quickLinks = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Programs.svg",
      title: "Student Clubs",
      description: "Our vibrant clubs motivate students to learn and grow with confidence inside and outside their classrooms.",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/teachings.svg",
      title: "Value Added Courses",
      description: "Explore a wide range of short-term value-added certification courses conducted by industry experts at the University. ",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Curriculum.svg",
      title: "Industrial Visits",
      description: "To understand the industry dynamics, we conduct industrial visits where students interact with industry professionals and explore real-world applications.",
    },
    {
      id: 4,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industrial+Visits.svg",
      title: "Internships & Placement",
      description: "Get an on-campus or off-campus internship opportunity and get placed in top companies through our Campus Placement Drives.",
    },
    {
      id: 5,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
      title: "Academic Facilities",
      description: "Our top-notch academic facilities will support your dreams by giving an all-around practical exposure at every step of your journey.",
    },
    {
      id: 6,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Events.svg",
      title: "Conferences & Events",
      description: "Discover various National and International conferences held at Kalinga University, offering a dynamic platform for knowledge sharing.",
    },
  ]

  return (
    <>
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <SectionHeading
            subtitle={academicsContent.subtitle}
            title={academicsContent.title}
            subtitleClassName="text-center !text-[var(--button-red)]"
            titleClassName="text-center"
          />
        </div>

        {/* Search Bar */}
        <div className="mb-5">
          <div className="flex items-center bg-[var(--light-gray)] rounded-lg px-3 sm:px-4 lg:px-5 py-3 sm:py-3.5 shadow-sm border border-gray-200">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Programs...."
              className="bg-transparent outline-none flex-1 text-sm sm:text-base font-plus-jakarta-sans font-medium text-black"
            />
            <button className="text-[var(--button-red)] ml-1 sm:ml-2" aria-label="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="flex justify-center">
              {renderProgramCard(program)}
            </div>
          ))}
        </div>
      </div>
    </section>
    <QuickLinks title="Quick Links" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid" links={quickLinks} titleClassName="text-white" />
    <AdmissionCareer />
    </>
  )
}
