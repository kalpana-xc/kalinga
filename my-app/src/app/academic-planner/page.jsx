"use client";

import React, { useState, useEffect } from 'react'
import EventCalendar from "@/app/components/news_and_events/event_calendar";
import { fetchNewsEvents, fetchAllDepartments } from "@/app/lib/api";


const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Academic Planner",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Academic Planner", href: "/academic-planner" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}


export default function Page() {
  const [events, setEvents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [newsEventsData, departmentsData] = await Promise.all([
          fetchNewsEvents(),
          fetchAllDepartments()
        ]);

        // Handle both array and object with results property
        const allEvents = newsEventsData.results || newsEventsData || [];

        // Extract unique categories from all news/events data
        const categoryMap = new Map();
        allEvents.forEach(item => {
          if (item.category && item.category_name) {
            categoryMap.set(String(item.category), {
              id: String(item.category),
              name: item.category_name
            });
          }
        });
        const uniqueCategories = Array.from(categoryMap.values());

        setEvents(allEvents);
        setDepartments(departmentsData || []);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error loading academic planner data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">Loading academic events...</div>
      </div>
    );
  }

  return (
    <div>
      <EventCalendar
        items={events}
        departments={departments}
        categories={categories}
        showNews={false}
        hideNewsCategory={true}
      />
    </div>
  )
}