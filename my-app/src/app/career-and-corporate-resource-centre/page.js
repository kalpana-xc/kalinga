 "use client" 
 import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ImageContent from "@/app/components/ccrc/imagecontent";
import Cards from "@/app/components/ccrc/cards";
import Hearfrom from "@/app/components/ccrc/Hearfrom";
import Partner from "@/app/components/ccrc/partner";
import AccreditationRanking from "@/app/components/home/AccreditationRanking";
import UpcomingConferences from "@/app/components/research/upcoming_conference";
import Gallery from "@/app/components/general/gallery";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";
import AdmissionCareer from "@/app/components/general/admission_cta";
import MediaCardSlider from "@/app/components/general/media-card-slider";

// Model breradcrumb

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
 imageposition:"object-top",
  pageTitle: "Career and Corporate Resource Centre",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Career and Corporate Resource Centre', href: '/career-and-corporate-resource-centre' }
  ]
};

// Register it globally (no import needed - this pattern works automatically)
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}
const newsConferences = [
  {
    id: 1,
    title: "Annual Research Symposium 2025",
    date: "November 10 · 2025",
    category: "Research & Innovation",
    description:
      "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 2,
    title: "International Education Summit",
    date: "December 05 · 2025",
    category: "Education",
    description:
      "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 3,
    title: "Technology & Innovation Conference",
    date: "January 20 · 2026",
    category: "Technology",
    description:
      "Explore the latest trends in technology, artificial intelligence, and digital transformation in education and industry applications.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
];
const cards = [
  {
    title: "Corporate Training And Consultancy Division (CTCD)",
    description: "Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ctcd.png",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/logo-ctcd.svg",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
  {
    title: "Corporate Social Responsibility (CSR) ",
    description: "Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/csr.png",
    logoSrc: "",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
  {
    title: "Kalinga Incubation Foundation (KIF)",
    description: "KIF was established in 2023, where students' bold and unique ideas are supported so that their entrepreneurial ambitions can be turned into ACTION.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif.png",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/logo-kif.svg",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
  {
    title: "Training & Placements",
    description: "The Career and Corporate Centre of Kalinga University is a hub for career guidance, training and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/placement.png",
    logoSrc: "",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
]


const sliderItems = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/hear-clients-1.webp",
    text: "Goeld"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Jayaswal+Neco+Industries+Ltd.webp",
    text: "Jayaswal Neco Industries Ltd"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/hear-clients-3.webp",
    text: "पुलिस प्रशिक्षण विद्यालय"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/hear-clients-4.webp",
    text: "Real Ispat and Power Ltd."
  },
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Ramkrishna+Care+Hospitals.webp",
    text: "Ramkrishna Care Hospitals "
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Sarda+Energy+%26+Minerals+Ltd..webp",
    text: "Sarda Energy & Minerals Ltd."
  },
  {
    id: 7,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/TMC.webp",
    text: "TMC"
  },
  {
    id: 8,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/94.3+MY+FM.webp",
    text: "94.3 MY FM"
  },
  {
    id: 9,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Technoviz+Automation.webp",
    text: "Technoviz Automation"
  },
  {
    id: 10,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/from-clients-12.webp",
    text: "छत्तीसगढ़ पर्यावरण संरक्षण मंडल"
  }
]
const Items = [
  {
    id: 1,
    text: "Improved performance and output"
  },
  {
    id: 2,
    text: "Better decision-making"
  },
  {
    id: 3,
    text: "Enhanced employee engagement rate"
  },
  {
    id: 4,
    text: "Increased competitiveness"
  },
  {
    id: 5,
    text: "Improved leadership and team collaboration"
  },
  {
    id: 6,
    text: "Improved client/customer satisfaction"
  },
  {
    id: 7,
    text: "Stronger work culture and long-term profitability"
  }
]
const blueItems = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+68.svg",
    imageAlt: "CCRC Logo-1",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+70.svg",
    imageAlt: "CCRC Logo-2",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+71.svg",
    imageAlt: "CCRC Logo-3",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+72.svg",
    imageAlt: "CCRC Logo-4",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+75.svg",
    imageAlt: "CCRC Logo-5",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+77.svg",
    imageAlt: "CCRC Logo-6",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+80.svg",
    imageAlt: "CCRC Logo-7",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+81.svg",
    imageAlt: "CCRC Logo-8",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+82.svg",
    imageAlt: "CCRC Logo-9",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+83.svg",
    imageAlt: "CCRC Logo-10",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+84.svg",
    imageAlt: "CCRC Logo-11",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+85.svg",
    imageAlt: "CCRC Logo-12",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+86.svg",
    imageAlt: "CCRC Logo-13",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+87.svg",
    imageAlt: "CCRC Logo-14",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+88.svg",
    imageAlt: "CCRC Logo-15",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+89.svg",
    imageAlt: "CCRC Logo-16",
  }
]
const redItems = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+68.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+70.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+71.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+72.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+75.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+77.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+80.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+81.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+82.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+83.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+84.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+85.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+86.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+87.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+88.svg",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+89.svg",
    imageAlt: "CCRC Logo",
  },
]
const accreditations = [
  { id: 1, name: 'clients-1', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-1.webp' },
  { id: 2, name: 'clients-2', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-2.webp' },
  { id: 3, name: 'clients-3', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-3.webp' },
  { id: 4, name: 'clients-4', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-4.webp' },
  { id: 5, name: 'clients-5', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-5.webp' },
  { id: 6, name: 'clients-6', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-6.webp' },
  { id: 7, name: 'clients-7', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-7.webp' },
  { id: 8, name: 'Clients-8', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-8.webp' },
  { id: 9, name: 'Clients-9', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-9.webp' },
  { id: 10, name: 'Clients-10', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-10.webp' },
  { id: 11, name: 'Clients-11', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-11.webp' },
]
const videoItems = [
  {
    id: 1,
    name: "Name",
    description: "Lorem ipsum",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 2,
    name: "Name",
    description: "Lorem ipsum",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 3,
    name: "Name",
    description: "Lorem ipsum",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
]

const MentorIntroProps = [
  {
    cardClassName: "",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/Mr.+Pankaj+Tiwari.webp",
    title: "Mr. Pankaj Tiwari",
    subtitle: "Career & Corporate Resource Centre",
    department: "Director, Kalinga University",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   }
]
export default function CCRCPage() {
  return <>
   
    <ImageContent imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp" />
    <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp" title="Benefits for Organisations"  />
    <DeptHeadIntro items={MentorIntroProps} />

    <Cards cards={cards} />
    <Hearfrom items={sliderItems  } title="Hear From Our Clients" />
    <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass="text-gray-600"
        swiperClassName="ccrc-video-slider"
      />
    <Partner 
      blueTitle="Industry Partner" 
      redTitle="MoU Partners" 
      blueItems={blueItems} 
      redItems={redItems}
      ccrcLogo="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp"
    />
    <AccreditationRanking 
      heading="Clients We Served"
          accreditations={accreditations} 
    />
  <UpcomingConferences 
        conferences={newsConferences}
        title="Upcoming CCRC Events"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
      />
      <Gallery title=" CCRC  Glimpse" />
     
      <AdmissionCareer />


        {/* <CCrcContent /> */}
  </>;  
}