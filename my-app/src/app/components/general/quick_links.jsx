"use client"
import React from 'react'
import QuickLinkCard from './quick_link_card'

const defaultQuickLinks = [
  {
    id: 1,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Conferences",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "IPR",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Patents",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Book Chapters",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Research Papers",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Awards",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
]

const QuickLinks = ({
  links = defaultQuickLinks,
  title = "Quick Links",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  backgroundColor = "bg-[var(--dark-blue)]",
  cardBackgroundColor = "bg-[var(--lite-sand)]"
}) => {
  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {title}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-4xl mx-auto font-plus-jakarta-sans">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {links.map((link) => (
            <QuickLinkCard
              key={link.id}
              icon={link.icon}
              title={link.title}
              description={link.description}
              cardBackgroundColor={cardBackgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickLinks

