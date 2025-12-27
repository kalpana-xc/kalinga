"use client";

import React from "react";
import Image from "next/image";
import ImageListItem from "../ccrc/imagelistitem";

function SportsAndWellnessHero() {
  const boxItems = [
    {
      id: 1,
      title: "Expert Training & Professional Guidance",
      description: "",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/experttraining.svg"
          alt="Expert Training"
          width={40}
          height={40}
          className="svg-ivory"
        />
      ),
    },
    {
      id: 2,
      title: "Avail Exclusive Sports Scholarship",
      description: "",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/sportscholarship.svg"
          alt="Scholarship"
          width={40}
          height={40}
          className="svg-ivory"
        />
      ),
    },
    {
      id: 3,
      title: "Develop a Winning Mindset",
      description: "",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/winningmindset.svg"
          alt="Winning Mindset"
          width={40}
          height={40}
          className="svg-ivory"
        />
      ),
    },
  ];

  return (
    <>
      <style jsx global>{`
        .sports-wellness-bg {
          background-color: #f3f4f6;
        }

        /* 🔥 IMPORTANT: kill any white bg coming from ImageListItem wrapper */
        .sports-imagelistitem .bg-white {
          background: transparent !important;
        }

        .sports-imagelistitem img.col-span-6.rounded-xl {
          width: 100% !important;
          height: 500px !important;
          object-fit: cover !important;
          max-width: 100% !important;
        }

        .svg-ivory {
          filter: brightness(0) invert(1) sepia(8%) saturate(140%)
            hue-rotate(8deg);
        }
      `}</style>

      <section className="sports-wellness-bg py-16">
        <div className="sports-imagelistitem max-w-7xl mx-auto px-6">
          <ImageListItem
            imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/chess.webp"
            boxItems={boxItems}
            title="Turning Passionate Players Into Athletes"
            description=""
            textClassName="text-[var(--foreground)]"
            headingClassName="text-[var(--foreground)]"
            className="bg-transparent"
            cardBackgroundColor="bg-[var(--button-red)]"
            cardTitleClassName="text-white"
            listItemTextClassName="text-white"
          />
        </div>
      </section>
    </>
  );
}

export default SportsAndWellnessHero;
