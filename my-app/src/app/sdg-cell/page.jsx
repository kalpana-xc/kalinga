"use client";

import React from "react";
import FAQ from "../components/general/faq";
import { useBreadcrumbData } from "../components/layout/BreadcrumbContext";
import ImageContent from "../components/ccrc/imagecontent";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "SDG Cell",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "SDG Cell", href: "/sdg-cell" },
  ],
};

export default function SDGCell() {
  useBreadcrumbData(breadcrumbData);

  // FAQ items for different sections
  const faqItems = [
    {
      id: 1,
      question: "17 Sustainable Development Goals",
      answer: [
        "No Poverty",
        "Zero Hunger",
        "Good Health and Well-being",
        "Quality Education",
        "Gender Equality",
        "Clean Water and Sanitation",
        "Affordable and Clean Energy",
        "Decent Work and Economic Growth",
        "Industry, Innovation and Infrastructure",
        "Reduced Inequality",
        "Sustainable Cities and Communities",
        "Responsible Consumption and Production",
        "Climate Action",
        "Life Below Water",
        "Life on Land",
        "Peace, Justice and Strong Institutions",
        "Partnership for the Goals",
      ],
    },
    {
      id: 3,
      question: "Objectives of the Practice",
      answer: [
        "To provide a Holistic Sustainability Strategy",
        "To introduce programs to promote good health and well-being",
        "To provide quality education among students and also spread education to society",
        "To offer courses to educate on gender equity",
        "To generate and utilise green energy",
        "To incorporate a culture of innovation",
        "To spread awareness on climate change and sustainability",
        "To promote peace, justice, and educate people about various laws",
        "To establish collaborations with industries and academia in meeting the SDGs",
      ],
    },
    {
      id: 4,
      question: "The Practice - Holistic Sustainability Strategy",
      answer: "The university adopts a comprehensive sustainability strategy that aligns with and contributes to various SDGs, including those related to environmental protection, social equity, and economic development.",
    },
    {
      id: 5,
      question: "The Practice - Campus-wide Eco-Friendly Infrastructure",
      answer: "The University has implemented energy-efficient buildings, green roofs, and sustainable landscaping practices. It has also integrated renewable energy sources, such as solar panels, to reduce the carbon footprint of campus operations. Besides, the biogas plant on the campus helps the effective utilisation of food waste. The green and clean campus provides fresh air to the staff and students.",
    },
    {
      id: 6,
      question: "The Practice - Sustainable Transportation",
      answer: "Kalinga University promotes sustainable transportation options, including cycling infrastructure, electric vehicles, etc. Such initiatives are taken to reduce the carbon emissions associated with commuting and campus-related travel.",
    },
    {
      id: 7,
      question: "The Practice - Interdisciplinary Sustainability Curriculum",
      answer: "Integrated sustainability principles into the curriculum across various academic disciplines. Introduced courses focused on sustainability studies, environmental science, and social responsibility.",
    },
    {
      id: 8,
      question: "The Practice - Research and Collaboration for Sustainable Solutions",
      answer: "The University has taken initiatives to address SDGs through various projects in line with at least one of the 17 SDGs. Faculty members are encouraged to prepare research projects which will find solutions to any of the SDGs. Collaboration with industry and government agencies is involved in preparing some of the research projects.",
    },
    {
      id: 9,
      question: "The Practice - Community Engagement and Outreach",
      answer: "Implemented various community-based projects that directly contribute to SDGs, addressing local challenges. IEEE Kalinga University Student Branch, Unnat Bharat Abhiyan, etc., are some of the bodies that are working towards this. Kalinga University regularly hosts awareness campaigns, workshops, and events to involve the broader community in sustainability initiatives.",
    },
    {
      id: 10,
      question: "The Practice - Sustainable Procurement Practices",
      answer: "The University has adopted an ethical and sustainable procurement system for campus supplies and services. The University gives priority to environmentally friendly and fair trade products when purchasing any products.",
    },
    {
      id: 11,
      question: "The Practice - Health and Well-being Programs",
      answer: "The University has a provision of mental health resources and counselling services for students and staff. Programs related to stress management, healthy heart, etc., are regularly conducted for the well-being of staff and students.",
    },
    {
      id: 12,
      question: "The Practice - Sustainable Events and Conferences",
      answer: "The University is organising various conferences, symposiums, and summits to address global needs, especially in climate change and sustainability, peace, justice and strong institutions, etc.",
    },
    {
      id: 13,
      question: "Economic Empowerment - Smart Dustbins Project",
      answer: "The University received funding from various agencies, like IEEE, for addressing global needs in the form of Smart Dustbins. Intervention of technology was a part of the project where students and faculty members extended their efforts. These were distributed to schools in nearby villages to maintain a green campus.",
    },
    {
      id: 14,
      question: "Economic Empowerment - Pond Cleaning Robot",
      answer: "The University provided seed funding to work on a pond cleaning robot. The robot is used in preventing the accumulation of organic matter, which could otherwise lead to water quality issues.",
    },
    {
      id: 15,
      question: "Economic Empowerment - E-Loader from Waste Materials",
      answer: "Faculty members and students developed a model of e-loader from waste materials in and around the campus. The rickshaw is used for the transportation of lightweight materials inside the university campus. For executing this project, the University has provided seed funding.",
    },
    {
      id: 16,
      question: "Economic Empowerment - Climate Change Conference",
      answer: "Various government bodies, like NABARD, extended their support with funds in organising a conference to address climate change and sustainability issues. Participants published papers with solutions to various challenges related to climate change nowadays.",
    },
    {
      id: 17,
      question: "Economic Empowerment - International Leadership Summit",
      answer: "IEEE Kalinga University Student Branch organised an International Leadership Summit where leaders like Innovators, Scientists, and Entrepreneurs working towards sustainable development presented their thoughts to bring a better future.",
    },
    {
      id: 18,
      question: "SDG Cell Establishment and Mission",
      answer: [
        "The University has established a Sustainable Development Goals (SDGs) cell to promote, implement, and monitor initiatives related to the SDGs. The cell serves as a dynamic hub dedicated to advancing the principles and objectives outlined in the United Nations' 2030 Agenda for Sustainable Development. This specialised unit operates at the intersection of education, research, and community engagement, embodying the University's commitment to providing a more sustainable and equitable world.",
        "One of the primary functions of this cell is to cultivate awareness and advocacy for the SDGs within the university community. Through targeted campaigns, educational programs, and outreach initiatives, the cell endeavours to instil a deep understanding of the global challenges addressed by the SDGs and the imperative for collective action.",
        "Integral to its mission is the integration of sustainable development principles into the university's academic landscape. The SDGs cell collaborates with faculty to infuse relevant content into diverse courses, ensuring that students from various disciplines are equipped with the knowledge and skills needed to contribute meaningfully to sustainable development.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ImageContent
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sdg-cover-img.webp"
        imageAlt="SDG Cell Cover"
        imageWidth={1200}
        imageHeight={600}
        title="Harmony in Action: Implementing Sustainable Development Goals for a Better World"
        subtitle="SDG Cell - Year of Establishment: 12/04/2022"
        description="Kalinga University, Naya Raipur, is committed to serving in community development by introducing a skill development centre for rural women. Kalinga University has adopted five nearby villages and is continuously serving the development of these villages. The practice is dedicated to empowering women in these villages through skill development and capacity building."
        hasImage={true}
        readmore={false}
        className="!my-8"
      />
      <FAQ
        title=""
        subtitle=""
        variant="table-display"
        items={faqItems}
        pyClassName="py-8 md:py-12"
        headerBgColor="bg-[var(--button-red)]"
      />
    </div>
  );
}

