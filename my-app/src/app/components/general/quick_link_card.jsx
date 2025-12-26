"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const QuickLinkCard = ({
  icon,
  title,
  description,
  cardBackgroundColor = "bg-[var(--lite-sand)]",
  showReadMore = true, // default is false, can set to true inline if needed
  href = null
}) => {
  const isImageUrl = typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/'))

  return (
    <div
      className={`${cardBackgroundColor} rounded-lg p-5 sm:p-6 shadow-lg flex flex-col h-full`}
    >
      {/* Icon */}
      <div className="mb-8">
        {isImageUrl ? (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="text-[var(--button-red)] text-3xl sm:text-4xl">
            {icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl mb-2 pb-2 border-b border-gray-700 text-[var(--foreground)]">
        {title}
      </h3>

      {/* Description */}
      <p className=" text-sm mb-4 sm:mb-6 flex-grow font-plus-jakarta-sans">
        {description}
      </p>
      {showReadMore && (
        <div className="flex justify-end mt-auto">
          {href ? (
            <Link href={href} className="inline-flex">
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[var(--button-red)] text-white flex items-center justify-center shadow-sm hover:bg-[#a2a2a2] transition-colors">
                <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--background)]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          ) : (
            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[var(--button-red)] text-white flex items-center justify-center shadow-sm hover:bg-[#a2a2a2] transition-colors">
              <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--background)]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default QuickLinkCard

