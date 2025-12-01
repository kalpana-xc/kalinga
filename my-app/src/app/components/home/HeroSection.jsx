'use client';

import Link from 'next/link';
import GlobalArrowButton from '../general/global-arrow_button';
const HeroSection = () => {
  return (
    <section className="-mt-[92px] relative h-[500px] md:h-[600px] lg:h-[700px]  ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-4xl h-full w-full"
        style={{
          backgroundImage: `url('https://kalinga-university.s3.ap-south-1.amazonaws.com/kalingabanner.webp')`,
          backgroundColor: '#e6e9f2', // fallback color
        }} 
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent  rounded-4xl"></div>
      </div>
      <div className="container relative z-1 mx-auto h-full flex flex-col items-center justify-center text-center text-white gap-4 md:w-10/12 w-full">
        <h1>Transforming Futures with Knowledge & Innovation</h1>
        <p className="md:text-base text-xs md:w-8/12 w-11/12">Kalinga University is a leading institution offering world-class education in engineering, management, science, arts, and more.</p>
        <GlobalArrowButton>Admissions</GlobalArrowButton>
      </div>
    </section>
  );
}

export default HeroSection;
