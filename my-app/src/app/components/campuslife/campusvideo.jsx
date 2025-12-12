"use client";

import { useState } from "react";
import GlobalArrowButton from "../general/global-arrow_button";

export default function CampusLife() {
  const videoId = "dQw4w9WgXcQ"; // put your YouTube video ID here
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1200px] rounded-2xl overflow-hidden relative">

        {/* If not playing → show YouTube thumbnail */}
        {!play && (
          <img
            src={`/student.jpg`}
            alt="Campus Life"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
        )}

        {/* If playing → show YouTube video */}
        {play && (
          <iframe
            className="w-full h-[420px] md:h-[520px] "
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Campus Life Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}

        {/* Dark Overlay only when not playing */}
        {!play && <div className="absolute inset-0 bg-black/40 "></div>}

        {/* Play Button (hidden when playing) */}
        {!play && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              onClick={() => setPlay(true)}
              className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex justify-center items-center cursor-pointer hover:bg-white/40 transition mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="absolute bottom-10 w-full text-center px-6">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-3">
            Campus Life
          </h2>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          At Kalinga University, experience a campus life that’s vibrant, inspiring, and feels like home. Here, every day is a new opportunity to learn, explore, and grow — both personally and professionally.
From academic excellence and cultural festivals to sports, innovation hubs, and student clubs, the University offers an environment that encourages creativity, collaboration, and leadership. Our 50-acre green campus provides the perfect setting for students to discover their potential and create lifelong memories.

          </p>
        </div>

      </div>
    </div>
  );
}
