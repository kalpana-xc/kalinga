"use client";
import Image from "next/image";
import Link from "next/link";

export default function LeadershipCard({
    imageSrc,
    name,
    designation,
    quote,
    profileLink = "#",
}) {
    return (
        <div className="bg-[var(--card-sandal)] border border-[var(--button-red)] rounded-xl p-4 overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:shadow-md h-full items-center">
            {/* Image Section */}
            <div className="relative w-full sm:w-[240px] shrink-0 h-[350px] sm:h-[300px]">
                <Link href={profileLink} className="block w-full h-full relative group">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover rounded-xl"
                    />
                    {/* Arrow Button Overlay */}
                    <div className="absolute bottom-3 right-3 bg-[var(--button-red)] group-hover:bg-[var(--dark-orange-red)] text-white w-8 h-8 flex items-center justify-center rounded-lg transition-colors">
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transform -rotate-45"
                        >
                            <path d="M7 0L5.76625 1.23375L10.6538 6.125H0V7.875H10.6538L5.76625 12.7663L7 14L14 7L7 0Z" fill="currentColor" />
                        </svg>
                    </div>
                </Link>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-5 pt-6 sm:p-6 flex flex-col relative gap-10">
                {/* Name and Designation */}
                <div className="mb-4">
                    <h3 className="font-stix mb-1">
                        {name}
                    </h3>
                    <p className="font-plus-jakarta-sans text-[#4A3B32]/80  tracking-wide">
                        {designation}
                    </p>
                    <div className="h-px w-full bg-[var(--foreground)]/60 mt-3" />
                </div>

                {/* Quote Section */}
                <div className="relative flex-1">
                    {/* Decorative Quotation Marks - Top Left */}
                    <div className="absolute -top-5 left-0 text-[var(--button-red)] z-0">
                        <div className="flex gap-1 transform -translate-y-1/2 -translate-x-2">
                            {/* Replaced SVGs with the user provided ones but styled to look like watermark */}
                            <svg width="17" height="25" viewBox="0 0 26 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" />
                            </svg>
                            <svg width="17" height="25" viewBox="0 0 26 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" />
                            </svg>
                        </div>
                    </div>

                    <p className="font-plus-jakarta-sans leading-relaxed pt-2 relative z-10">
                        {quote}
                    </p>

                    {/* Decorative Quotation Marks - Bottom Right */}
                    <div className="absolute -bottom-5 right-0 text-[var(--button-red)] z-0">
                        <div className="flex gap-1 transform translate-y-1/2 translate-x-2 rotate-180 scale-x-[-1]">
                            <svg width="17" height="25" viewBox="0 0 26 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" />
                            </svg>
                            <svg width="17" height="25" viewBox="0 0 26 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
