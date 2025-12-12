'use client'
import React from "react";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

const defaultContent = {
  title: "Organogram of Kalinga University",
  description: [
    "Kalinga University follows a well-structured governance model to ensure smooth administration and institutional integrity. It begins with the Chancellor, followed by the Vice-Chancellor and Director General. Their roles and responsibilities are well-defined, enabling proper decision-making across all the departments of the university.",
  ],
  buttonLabel: "Explore Now",
};

const OrganogramOfKalinga = ({
  cardBackgroundColor = "bg-[var(--button-red)]",
  title = defaultContent.title,
  description = defaultContent.description,
  buttonLabel = defaultContent.buttonLabel,
  onClick = null,
  href = null,
  buttonClassName = "!bg-white !text-black",
  arrowClassName = "!bg-[var(--dark-orange-red)]",
  arrowIconClassName = "!text-white",
  textClassName = "!text-black",
  collapsedParagraphs = 1,
  readMoreLabel = "Read More",
  readLessLabel = "Show Less",
  showImage = false,
  imageUrl = "",
  imageAlt = "",
  useContainer = false,
}) => {
  const descriptionArray = Array.isArray(description) ? description : [description];
  const [showAll, setShowAll] = React.useState(false);
  const visibleParagraphs = showAll
    ? descriptionArray
    : descriptionArray.slice(0, collapsedParagraphs);

  const ButtonContent = (
    <GlobalArrowButton
      className={buttonClassName}
      arrowClassName={arrowClassName}
      arrowIconClassName={arrowIconClassName}
      textClassName={textClassName}
      onClick={onClick || undefined}
    >
      {buttonLabel}
    </GlobalArrowButton>
  );

  return (
    <section className="py-16 bg-white">
      <div className={`${useContainer ? 'container mx-auto' : ''} px-4 sm:px-5`}>
        <div
          className={`${cardBackgroundColor} rounded-[10px] text-white relative ${showImage ? 'overflow-visible' : 'overflow-hidden'}`}
        >
          <div className={`flex flex-col ${showImage ? 'lg:flex-row' : ''} items-center gap-6 lg:gap-8`}>
            {/* Left Content */}
            <div className={`flex-1 p-5 md:p-8 ${showImage ? 'lg:w-1/2' : 'w-full'}`}>
              {/* Title */}
              <SectionHeading
                title={title}
                titleClassName="text-white"
              />

              {/* Description */}
              <div className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-normal md:leading-relaxed mb-6 font-plus-jakarta-sans space-y-3">
                {visibleParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                {descriptionArray.length > collapsedParagraphs && (
                  <button
                    type="button"
                    className="text-white font-semibold underline underline-offset-4"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? readLessLabel : readMoreLabel}
                  </button>
                )}
              </div>

              {/* Explore Now Button */}
              <div className="flex justify-start">
                {href ? (
                  <a href={href} className="inline-flex">
                    {ButtonContent}
                  </a>
                ) : (
                  ButtonContent
                )}
              </div>
            </div>

            {/* Right Image */}
            {showImage && imageUrl && (
              <div className="flex-shrink-0 lg:w-2/5 relative w-full h-[400px] -mt-[95px]">
                <div className="relative w-full h-full">
                  <Image
                    src={imageUrl}
                    alt={imageAlt || title}
                    fill
                    className="object-contain object-right"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganogramOfKalinga;

