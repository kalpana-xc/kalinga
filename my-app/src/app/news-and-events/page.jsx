"use client"
import { useEffect } from 'react'
import EventCalendar from "../components/news_and_events/event_calendar";
import ThreeCardSider from "../components/general/three_card_sider";
import UpcomingEvents from "../components/admissions/upcoming_events";
import UpcomingConferences from "../components/research/upcoming_conference";
import Gallery from "../components/general/gallery";
import AdmissionCareer from "../components/general/admission_cta";

const breadcrumbData = {
  pageTitle: "News & Events",
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/news-and-event.jpg",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'News & Events', href: '/news-and-events' }
  ]
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

function NewsAndEvents() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  return (
    <div>
      <EventCalendar />
      <UpcomingEvents />
      <UpcomingConferences 
        conferences={newsConferences}
        title="Newly Adds"
        backgroundColor="bg-white"
        backgroundColorcard="bg-[var(--light-gray)]"
      />
      <ThreeCardSider />
      <Gallery />
      <AdmissionCareer />
    </div>
  );
}

export default NewsAndEvents;