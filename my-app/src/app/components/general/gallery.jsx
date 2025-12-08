"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const defaultGalleryImages = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "Garba Night celebration"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "Cultural event gathering"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "Traditional event"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "Festive celebration"
  },
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "University event"
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "Student gathering"
  },
  {
    id: 7,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "Cultural festival"
  },
  {
    id: 8,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    alt: "Community event"
  }
]

const Gallery = ({ 
  images = defaultGalleryImages,
  title = "Gallery",
  backgroundColor = "bg-white"
}) => {
  const useSlider = images.length > 4

  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 md:mb-10 text-[var(--foreground)] text-center">
          {title}
        </h2>

        {useSlider ? (
          /* Slider Layout - when more than 4 images */
          <div className="relative">
            <Swiper
              spaceBetween={16}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="gallery-swiper"
            >
              {images.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[10px] aspect-square group cursor-pointer">
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          /* Grid Layout - when 4 or fewer images */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {images.map((item) => (
              <div 
                key={item.id} 
                className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[10px] aspect-square group cursor-pointer"
              >
                <Image 
                  src={item.image} 
                  alt={item.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery

