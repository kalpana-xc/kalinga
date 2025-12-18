"use client";

import { useState } from "react";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

export default function CampusLife() {
  const videoId = "dQw4w9WgXcQ"; // put your YouTube video ID here
  const [play, setPlay] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] rounded-xl md:rounded-2xl overflow-hidden relative mx-2">

        {/* If not playing → show YouTube thumbnail */}
        {!play && (
          <img
            src={`/student.jpg`}
            alt="Campus Life"
            className="w-full h-[380px] sm:h-[420px] md:h-[520px] object-cover"
          />
        )}

        {/* If playing → show YouTube video */}
        {play && (
          <iframe
            className="w-full h-[380px] sm:h-[420px] md:h-[520px]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Campus Life Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}

        {/* Dark Overlay only when not playing */}
        {!play && <div className="absolute inset-0"></div>}

        {/* Bottom Gradient Overlay */}
        {!play && <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>}

        {/* Play Button (hidden when playing) */}
        {!play && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              onClick={() => setPlay(true)}
              className="w-14 h-14 md:w-16 md:h-16 bg-[var(--background)]/30 backdrop-blur-md rounded-full flex justify-center items-center cursor-pointer hover:bg-[var(--background)]/40 transition mb-4 md:mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--background)"
                viewBox="0 0 24 24"
                className="w-7 h-7 md:w-8 md:h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="absolute bottom-6 md:bottom-10 w-full text-center px-4 md:px-6">
          <div className="mb-2 md:mb-3">
            <SectionHeading title="Campus Life" titleClassName="text-white !text-2xl md:!text-[40px]" />
          </div>
          <div className="max-w-5xl mx-auto">
            <p className={`text-white text-xs sm:text-sm md:text-base leading-relaxed ${
              !isExpanded ? 'line-clamp-2 md:line-clamp-none' : ''
            }`}>
              At Kalinga University, experience a campus life that's vibrant, inspiring, and feels like home. Here, every day is a new opportunity to learn, explore, and grow — both personally and professionally.
              From academic excellence and cultural festivals to sports, innovation hubs, and student clubs, the University offers an environment that encourages creativity, collaboration, and leadership. Our 50-acre green campus provides the perfect setting for students to discover their potential and create lifelong memories.
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden mt-2 text-white text-xs font-semibold underline hover:no-underline transition-all"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
