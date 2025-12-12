"use client"
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'

const defaultFAQItems = [
  {
    id: 1,
    question: "What is the admission process?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 2,
    question: "What are the eligibility criteria?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 3,
    question: "What documents are required?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 4,
    question: "How can I apply for scholarships?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 5,
    question: "What is the fee structure?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  }
]

const FAQ = ({
  items = defaultFAQItems,
  title = "Frequently Asked Questions",
  backgroundColor = "bg-white",
  allowMultipleOpen = false
}) => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (!allowMultipleOpen) {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <SectionHeading 
       title={title} 
       subtitle="FAQ"
       titleClassName="text-center"
       subtitleClassName="text-center"
       />

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mt-5">
          {items.map((item) => {
            const isOpen = openItems.has(item.id)
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`w-full flex items-center justify-between p-4  transition-colors ${
                    isOpen 
                      ? 'bg-[var(--button-red)] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200        '
                  }`}
                  aria-expanded={isOpen}
                >
                  <h3 className=" text-left text-xl  pr-4  font-plus-jakarta-sans">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`bg-white rounded-lg p-1.5 sm:p-2 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        {/* Arrow - open triangle with vertical line */}
                        <path
                          d="M12 4L6 12M12 4L18 12M12 4L12 20"
                          fill="none"
                          stroke="var(--button-red)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-5 md:p-6 bg-[var(--lite-sand)]">
                    <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ

