'use client';

import Image from 'next/image';

const cardData = [
    {
        icon: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg',
        title: "Become Tech-Savvy",
        description: "The world needs new technologies, and companies are hunting for skilled professionals who generate code or are good problem solvers. We'll help you turn your ideas into a viral application."
    },
    {
        icon: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg',
        title: "Innovation & Creativity",
        description: "Transform your innovative ideas into reality with cutting-edge technology and creative problem-solving approaches that make a real impact in the digital world."
    },
    {
        icon: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg',
        title: "Fast-Track Your Career",
        description: "Accelerate your professional growth with industry-relevant skills and hands-on experience that employers are actively seeking in today's competitive market."
    },
    {
        icon: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg',
        title: "Fast-Track Your Career",
        description: "Accelerate your professional growth with industry-relevant skills and hands-on experience that employers are actively seeking in today's competitive market."
    }
];

export default function TestPage() {
    // Calculate dynamic top positions and widths based on number of cards
    const calculateTopPosition = (index) => {
        const baseTop = 100; // Starting top position for first card
        const increment = 30; // Increment for each subsequent card
        return baseTop + (index * increment);
    };

    const calculateWidth = (index) => {
        const baseWidth = 70; // Starting width percentage for first card
        const increment = 5; // Increment percentage for each subsequent card
        return `${baseWidth + (index * increment)}%`;
    };

    return (
        <div className="relative flex flex-col gap-6 my-[50px] mx-auto items-center bg-white">
            {cardData.map((card, index) => {
                // Alternate colors: 0 = light sandal, 1 = white, 2 = light sandal
                const backgroundColor = index % 2 === 0 ? 'bg-[var(--card-skin)]' : 'bg-[var(--card-white)]';
                
                return (
                    <div
                        key={index}
                        className={`mx-5 box-border min-h-[330px] rounded-[32px] sticky flex items-center justify-center font-sans p-8 border-3 border-gray-300 ${backgroundColor}`}
                        style={{
                            top: `${calculateTopPosition(index)}px`,
                            width: calculateWidth(index)
                        }}
                    >
                        <div className={`${backgroundColor} rounded-2xl p-6 md:p-8 w-full flex items-center gap-6 md:gap-12`}>
                            {/* Left Side - Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 relative">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            
                            {/* Right Side - Title and Description */}
                            <div className="flex-1">
                                <h2 className=" mb-3 md:mb-4  text-[var(--foreground)]">
                                    {card.title}
                                </h2>
                                <p className="leading-relaxed font-plus-jakarta-sans">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}