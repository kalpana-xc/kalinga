'use client';

import { useState, useEffect } from 'react';

const defaultTabs = [
  { id: 'about', label: 'About' },
  { id: 'eligibility', label: 'Eligibility Criteria' },
  { id: 'career', label: 'Career Pathways' },
  { id: 'specialization', label: 'Specialization' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'activities', label: 'Student Activities' },
];

export default function CourseNavigation({ 
  tabs = defaultTabs,
  activeTab = 'about',
  onTabClick = null,
}) {
  const [currentActive, setCurrentActive] = useState(activeTab);

  useEffect(() => {
    setCurrentActive(activeTab);
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setCurrentActive(tabId);
    if (onTabClick) {
      onTabClick(tabId);
    } else {
      // Default behavior: scroll to section
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="pt-16 md:py-6 bg-white">
      <div className="container mx-auto px-2">
        <div className="bg-[var(--lite-sand)] rounded-full px-4 py-3 md:px-4 md:py-4 flex md:flex-wrap md:items-center md:justify-center overflow-x-auto scrollbar-hide gap-3 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`font-plus-jakarta-sans text-sm md:text-base lg:text-lg px-3 md:px-4 py-1.5 md:py-2 transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                currentActive === tab.id
                  ? 'text-[var(--button-red)] font-semibold'
                  : 'text-[var(--foreground)] font-normal hover:text-[var(--button-red)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

