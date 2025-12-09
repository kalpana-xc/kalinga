'use client'

import { useState, useEffect } from 'react';

// Testimonials data array
const testimonialsData = [
    {
        id: 1,
        name: "David Chen",
        role: "Founder, TechFlow",
        quote: "The mentorship I received was transformative. They didn't just help me refine my pitch; they helped me reshape my entire business model for scalability.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        theme: "orange"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "CEO, InnovateDaily",
        quote: "Kalinga Incubation Centre gave me a perfect platform where I turned my business idea into a successful startup. I am extremely grateful for their guidance.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        theme: "red"
    },
    {
        id: 3,
        name: "Marcus Ray",
        role: "Director, SwiftStart",
        quote: "The network effects here are real. Being surrounded by other ambitious founders pushed us to iterate faster and aim higher than we thought possible.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        theme: "amber"
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Product Lead, CreativeX",
        quote: "We went from zero to MVP in three months thanks to the resources available. The incubation ecosystem is world-class.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        theme: "orange"
    },
    {
        id: 5,
        name: "Thomas Wright",
        role: "CTO, FutureScale",
        quote: "Finding technical co-founders was my biggest challenge. This community bridged that gap immediately.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        theme: "amber"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(1); // Start at index 1
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getSlideStyles = (index) => {
        const total = testimonialsData.length;
        let diff = (index - activeIndex) % total;
        
        if (diff < -total / 2) diff += total;
        if (diff > total / 2) diff -= total;

        let styles = {
            zIndex: 0,
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0.8)',
            bgColor: '#fff',
            borderColor: 'transparent',
            pointerEvents: 'none',
            contentOpacity: 0
        };

        if (diff === 0) {
            // Active Slide
            styles.zIndex = 30;
            styles.opacity = 1;
            styles.transform = 'translate(-50%, -50%) scale(1)';
            styles.bgColor = '#ffffff';
            styles.borderColor = '#f1f5f9';
            styles.pointerEvents = 'auto';
            styles.contentOpacity = 1;
        } else if (diff === -1) {
            // Prev Slide (Left)
            styles.zIndex = 20;
            styles.opacity = 1;
            styles.transform = isMobile 
                ? 'translate(-50%, -50%) scale(0.9) translateZ(-50px)' 
                : 'translate(-62%, -50%) scale(0.92)';
            styles.bgColor = '#FBBF58'; // Dark Yellow
            styles.contentOpacity = 0.4;
            styles.pointerEvents = 'auto';
        } else if (diff === 1) {
            // Next Slide (Right)
            styles.zIndex = 20;
            styles.opacity = 1;
            styles.transform = isMobile 
                ? 'translate(-50%, -50%) scale(0.9) translateZ(-50px)' 
                : 'translate(-38%, -50%) scale(0.92)';
            styles.bgColor = '#FEDCB0'; // Light Yellow
            styles.contentOpacity = 0.6;
            styles.pointerEvents = 'auto';
        } else {
            // Hidden / Stacked behind
            styles.zIndex = 10;
            styles.opacity = 0;
        }

        return styles;
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-12 overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
            <style jsx>{`
                ::-webkit-scrollbar { display: none; }
            `}</style>

            {/* Main Container */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[700px]">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#A82D2D] mb-12 md:mb-16 text-center">
                    What Our Students Say
                </h2>
                {/* Slider Track */}
                <div className="relative w-full flex items-center justify-center h-[500px]" style={{ perspective: '1000px' }}>
                    {testimonialsData.map((item, index) => {
                        const styles = getSlideStyles(index);
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={item.id}
                                className="absolute top-1/2 left-1/2 w-full max-w-4xl p-2 transition-all duration-[600ms] origin-center"
                                style={{
                                    zIndex: styles.zIndex,
                                    opacity: styles.opacity,
                                    transform: styles.transform,
                                    pointerEvents: styles.pointerEvents,
                                    cursor: !isActive ? 'pointer' : 'default',
                                    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
                                }}
                                onClick={() => !isActive && goToSlide(index)}
                            >
                                <div
                                    className="w-full h-full rounded-[2rem] overflow-hidden relative transition-colors duration-500 border"
                                    style={{
                                        backgroundColor: styles.bgColor,
                                        borderColor: isActive ? '#f1f5f9' : 'transparent',
                                        boxShadow: isActive ? '0 20px 50px -12px rgba(0,0,0,0.1)' : 'none'
                                    }}
                                >
                                    <div
                                        className="flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-10 pb-16 md:pb-10 h-full transition-opacity duration-500"
                                        style={{ opacity: styles.contentOpacity }}
                                    >
                                        {/* Image */}
                                        <div className="w-full md:w-5/12 flex-shrink-0 relative">
                                            <div className="aspect-[4/5] w-full bg-slate-200 rounded-2xl border-[6px] border-white shadow-sm relative overflow-hidden">
                                                <img 
                                                    src={item.image} 
                                                    className="w-full h-full object-cover" 
                                                    alt={item.name}
                                                />
                            </div>
                    </div>  
                    
                                        {/* Text Content */}
                                        <div className="flex-1 flex flex-col relative pt-2">
                                            <div className={`mb-6 ${item.theme === 'red' ? 'text-red-500' : 'text-orange-500'}`}>
                                                <svg 
                                                    className="w-12 h-12 fill-current rotate-180" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    strokeWidth="2" 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                                                </svg>
                                            </div>
                                            <p className="text-slate-800 text-lg md:text-xl leading-relaxed md:leading-loose font-normal">
                                                {item.quote}
                                            </p>
                                            <div className="mt-8 md:mt-auto pt-6">
                                                <h4 className="text-slate-900 text-2xl font-medium tracking-tight">{item.name}</h4>
                                                <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-wide">{item.role}</p>
                                            </div>
                                        </div>
                            </div>
                    </div>                  
                </div>
                        );
                    })}
        </div>

                {/* Navigation Controls (Bottom) */}
                <div className="mt-12 md:mt-16 flex items-center justify-center gap-4 z-50">
                    <button
                        onClick={prevSlide}
                        className="group bg-[#A82D2D] hover:bg-white hover:text-[#A82D2D] h-[45px] px-6 rounded-xl shadow-lg text-white font-sans text-base font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2"
                        aria-label="Previous testimonial"
                    >
                        <svg 
                            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Previous</span>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="group bg-[#A82D2D] hover:bg-white hover:text-[#A82D2D] h-[45px] px-6 rounded-xl shadow-lg text-white font-sans text-base font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2"
                        aria-label="Next testimonial"
                    >
                        <span>Next</span>
                        <svg 
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
