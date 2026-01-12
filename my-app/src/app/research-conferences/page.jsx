"use client"


import React, { useEffect } from 'react'
import SectionHeading from '../components/general/SectionHeading'
import DataTable from '../components/general/data-table';


/// Breadcrumb configuration
const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
    pageTitle: "Research Conferences",
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Research Conferences', href: '/research-conferences' }
    ]
  };
  
  // Register breadcrumb data globally
  if (typeof window !== 'undefined') {
    window.__breadcrumbData = breadcrumbData;
  }
  
  const tableColumns = [
    { key: "slNo", label: "S. No", width: "w-10" },
    { key: "faculty", label: "Faculty", width: "w-35" },
    { key: "conferenceName", label: "Name of The Conference", width: "w-55" },
    { key: "type", label: "National/ International", width: "w-20" },
    { key: "date", label: "Date", width: "w-32" },
    { key: "year", label: "Year", width: "w-10" },
  ];

  const tableData = [
    { slNo: 1, faculty: "IEEE", conferenceName: "2025 World Conference on Communication & Computing (WCONF)", type: "International", date: "25.07.2025 to 27.07.2025", year: "2025" },
    { slNo: 2, faculty: "Faculty of CS IT", conferenceName: "Recent Trends in Emerging Technologies for Sustainable Innovation, Management and Development (ICRETE SIMD 2025)", type: "International", date: "27.03.2025 to 28.03.2025", year: "2025" },
    { slNo: 3, faculty: "Faculty of Pharmacy", conferenceName: "Emerging Perspectives and Future Trends in Pharmaceutical and Allied Sciences For Global Health and Wellbeing", type: "International", date: "25.03.2025 to 26.03.2025", year: "2025" },
    { slNo: 4, faculty: "Faculty of Arts & Humanities", conferenceName: "Viksit Bharat @2047: Progress and Development", type: "National", date: "21.03.2025 to 22.03.2025", year: "2025" },
    { slNo: 5, faculty: "Faculty of Law", conferenceName: "2-Days Global Conference on \"Recent Trends in Law, Arbitration, Meditation, Economy & Society\"", type: "International", date: "28.02.2025 to 01.03.2025", year: "2025" },
    { slNo: 6, faculty: "Faculty of Commerce & Management", conferenceName: "2-Days International Conference on \"International Conference on Innovative Management Techniques for Sustainable Development\" (IMTSD)", type: "International", date: "21.02.2025 to 22.02.2025", year: "2025" },
    { slNo: 7, faculty: "Faculty of Education", conferenceName: "2-Days International Conference on \"Innovative Education Strategies NEP 2020 in Chhattisgarh and Beyond\".", type: "International", date: "21.01.2025 to 22.01.2025", year: "2025" },
    { slNo: 8, faculty: "IEEE", conferenceName: "2024 World Conference on Communication & Computing (WCONF)", type: "International", date: "12.07.2024 to 14.07.2024", year: "2024" },
    { slNo: 9, faculty: "Faculty of Science", conferenceName: "Future Aspects of Science & Technology", type: "International", date: "03.04.2024 to 04.04.2024", year: "2024" },
    { slNo: 10, faculty: "Faculty of Pharmacy", conferenceName: "Current challenges and Novel strategies in global Adverse drug reaction (ADR) Monitoring", type: "International", date: "15.03.2024 to 16.03.2024", year: "2024" },
    { slNo: 11, faculty: "Faculty of Law", conferenceName: "Constitutionalism and the Present Democracy: The Challenges Ahead", type: "International", date: "27.10.2023 to 28.10.2023", year: "2023" },
    { slNo: 12, faculty: "Faculty of Arts & Humanities", conferenceName: "Strengthening women entrepreneurship for achieving sustainable development goals", type: "National", date: "06.10.2023 to 07.10.2023", year: "2023" },
    { slNo: 13, faculty: "IEEE", conferenceName: "2023 World Conference on Communication & Computing (WCONF)", type: "International", date: "14.07.2023 to 16.07.2023", year: "2023" },
    { slNo: 14, faculty: "Faculty of Commerce & Management", conferenceName: "The New Normal-Recent trends in Business and Management", type: "National", date: "27.05.2023 to 28.05.2023", year: "2023" },
    { slNo: 15, faculty: "Faculty of Science", conferenceName: "International Conference on Climate Change, Sustainable Development & Smart Agriculture", type: "International", date: "06.04.2023 to 07.04.2023", year: "2023" },
    { slNo: 16, faculty: "Faculty of Science", conferenceName: "National Climate Change Conference on Suggestions and recommendations for fostering Adaptation and Resilience", type: "National", date: "17.03.2023", year: "2023" },
    { slNo: 17, faculty: "Faculty of Science", conferenceName: "Hodiernal Aspect of Science and Technology", type: "International", date: "24.02.2023 to 25.02.2023", year: "2023" },
    { slNo: 18, faculty: "Faculty of Education", conferenceName: "National Conference on Intellectual Property Rights", type: "National", date: "15.02.2023 to 17.02.2023", year: "2023" },
    { slNo: 19, faculty: "Faculty of Technology", conferenceName: "National Conference on Advance Approaches in Pure and Applied Mathematics", type: "National", date: "14.02.2023 to 15.02.2023", year: "2023" },
    { slNo: 20, faculty: "Faculty of Arts & Humanities", conferenceName: "Global Crisis in the Present Scenario", type: "International", date: "02.12.2022 to 03.12.2022", year: "2022" },
    { slNo: 21, faculty: "Faculty of Commerce & Management", conferenceName: "Emerging Business and Technology Issues with Emergence of Industry 4.0", type: "National", date: "29.11.2022 to 30.11.2022", year: "2022" },
    { slNo: 22, faculty: "Faculty of Pharmacy", conferenceName: "Current Scenario and Innovation in Pharma Industry for Drug Discovery and Development", type: "National", date: "24.11.2022", year: "2022" },
    { slNo: 23, faculty: "Faculty of Law", conferenceName: "Rights of Differently Abled Person in India", type: "National", date: "23.11.2022 to 24.11.2022", year: "2022" },
    { slNo: 24, faculty: "Faculty of Technology", conferenceName: "Recent Innovations In Emerging Computing Technologies", type: "National", date: "14.11.2022 to 15.11.2022", year: "2022" },
    { slNo: 25, faculty: "Faculty of Technology", conferenceName: "Recent Innovations in Engineering & Technology", type: "National", date: "06.05.2022", year: "2022" },
    { slNo: 26, faculty: "Faculty of CS & IT", conferenceName: "Recent Advancements in Engineering & Computing Technologies", type: "National", date: "04.05.2022 to 05.05.2022", year: "2022" },
    { slNo: 27, faculty: "Faculty of Education", conferenceName: "Indian Culture And Modern Challenges of Education", type: "International", date: "02.05.2022 to 03.05.2022", year: "2022" },
    { slNo: 28, faculty: "Faculty Arts & Humanities", conferenceName: "Women Leadership in Contemporary Scenario", type: "International", date: "25.04.2022 to 26.04.2022", year: "2022" },
    { slNo: 29, faculty: "Faculty Arts & Humanities", conferenceName: "Over The Horizon Introspecting The Self in Flux", type: "National", date: "15.11.2019 to 16.11.2019", year: "2019" },
    { slNo: 30, faculty: "Faculty of Science", conferenceName: "Advanced Material & Environmental Science", type: "National", date: "14.10.2019 to 15.10.2019", year: "2019" }
    
  ]


  export default function Kalingapublication() {
    return (
      <>  
       
        {/* <ResearchSixGridButtons buttons={buttons} /> */}
        <SectionHeading 
            title="Research Conferences"
            subtitle=""
            titleClassName="text-center mt-10 mb-10"
            subtitleClassName=""
            
          />
        <DataTable
         columns={tableColumns} data={tableData}
         DataTableclassname= "py-10"
        />
      </>
    );
  }
