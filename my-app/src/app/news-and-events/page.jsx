"use client"
import { useEffect, useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EventCalendar from "../components/news_and_events/event_calendar";
import ThreeCardSider from "../components/general/three_card_sider";
import UpcomingEvents from "../components/admissions/upcoming_events";
import UpcomingConference from "../components/research/upcoming_conference";
import Gallery from "../components/general/gallery";
import AdmissionCareer from "../components/general/admission_cta";
import { fetchNewsEvents, fetchAllDepartments, parseHtmlToText } from '../lib/api';

const breadcrumbData = {
  pageTitle: "News & Events",
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/news-and-event.jpg",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'News & Events', href: '/news-and-events' }
  ]
}

function NewsAndEvents() {
  const [newsItems, setNewsItems] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }

    // Fetch departments
    const loadDepartments = async () => {
      try {
        const deps = await fetchAllDepartments();
        setDepartments(deps);
      } catch (err) {
        console.error("Failed to load departments", err);
      }
    };
    loadDepartments();
  }, []);

  const loadNews = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch all items to handle distinct sections client-side for smoother transition
      const params = {};
      const data = await fetchNewsEvents(params);

      if (data && data.results) {
        setNewsItems(data.results);

        // Extract unique categories from the data
        const categoryMap = new Map();
        data.results.forEach(item => {
          if (item.category && item.category_name) {
            categoryMap.set(String(item.category), {
              id: String(item.category),
              name: item.category_name
            });
          }
        });
        const uniqueCategories = Array.from(categoryMap.values());
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error("Failed to fetch news", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  // --- Derived Data Processing ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 1. Future Events (Date > Today) - For Top Section
  const futureEvents = useMemo(() => {
    return newsItems.filter(item => {
      if (!item.date) return false;
      return new Date(item.date) > today;
    }).map(item => ({
      id: item.id,
      image: item.images?.[0]?.image || 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      title: item.heading,
      badgeText: item.date,
      slug: item.slug
    }));
  }, [newsItems]);

  // 2. Newly Adds (This Week) - For Bottom Section
  const newlyAdds = useMemo(() => {
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const oneWeekFuture = new Date(today);
    oneWeekFuture.setDate(today.getDate() + 7);

    return newsItems.filter(item => {
      if (!item.date) return false;
      const d = new Date(item.date);
      return d >= oneWeekAgo && d <= oneWeekFuture;
    }).slice(0, 3).map(item => ({
      id: item.id,
      title: item.heading,
      date: item.date,
      category: item.category_name,
      description: parseHtmlToText(item.content).substring(0, 80) + "...",
      image: item.images?.[0]?.image || 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      href: `/news-and-events/${item.slug}`,
      registerButtonText: "Read More"
    }));
  }, [newsItems]);



  return (
    <div>


      {/* 1. Upcoming Events (Future items) */}
      {futureEvents.length > 0 && (
        <UpcomingEvents events={futureEvents} />
      )}

      {/* 2. Main Filters & List */}
      <EventCalendar items={newsItems} departments={departments} categories={categories} />

      {/* 3. Newly Adds (This Week) */}
      {newlyAdds.length > 0 && (
        <UpcomingConference
          conferences={newlyAdds}
          title="This Week's Updates"
          backgroundColor="bg-[var(--light-gray)]"
          categoryText="New" // Override category badge if needed
        />
      )}

      {/* Static Sections */}
      <ThreeCardSider />
      <Gallery />
      <AdmissionCareer />

      {/* Scrollbar Styles */}
      <style jsx global>{`
        .date-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default NewsAndEvents;