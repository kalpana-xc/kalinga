import HeroSection from "./components/home/HeroSection";
import Link from "next/link";
import Image from "next/image";
import AccreditationRanking from "./components/home/AccreditationRanking";
import AboutKalinga from "./components/home/AboutKalinga";
import Programs from "./components/home/programs";
import FeatureCards from "./components/home/featurecard";
import Facilities from "./components/home/facilities";
import Placements from "./components/home/placements";
import GlobalPresence from "./components/home/global_presence";
import ResearchInnovation from "./components/home/research_innovation";
import CampusTour from "./components/home/campus_tour";
import NewsEvents from "./components/home/news_and_events";
import SocialThumbs from "./components/home/social_thumbnail";
import AdmissionCareer from "./components/general/admission_cta";
import Achievements from "./components/home/achievements";

const quickLinks = [
  {
    title: "News & Events",
    href: "/news-and-events",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/marketing-icon.png"
  },
  {
    title: "Campus Life",
    href: "/students/campus-life",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/school-icon.png"
  },
  {
    title: "International",
    href: "/international",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/worldwide-icon.png"
  },
  {
    title: "Chat with Student",
    href: "/students",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/student-icon.png"
  },
  {
    title: "Admission",
    href: "/admissions",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/educational-icon.png"
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Links Section */}
      <section className="container -mt-16 sm:-mt-20 md:-mt-25 mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-6 bg-[var(--dark-blue)]/80 z-2 backdrop-blur-xs relative rounded-xl sm:rounded-2xl lg:rounded-4xl max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-3 sm:p-4 md:p-5 bg-white rounded-lg hover:shadow-xl hover:-translate-y-5 transition-all duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 min-h-[100px] sm:min-h-[120px]"
            >
              {/* Icon */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0">
                <Image
                  src={link.icon}
                  alt={link.title}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Label */}
              <p className="text-gray-600 text-center leading-tight text-xs sm:text-sm md:text-base">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <Achievements />
      <AccreditationRanking />
      <AboutKalinga />
      {/* <Programs /> */}
      <FeatureCards />
      <Facilities />
      <Placements />
      <GlobalPresence />
      <ResearchInnovation />
      <CampusTour />
      <NewsEvents />
      <SocialThumbs />
      <AdmissionCareer />
    </>
  );
}
