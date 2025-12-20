"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GlobalArrowButton from "../general/global-arrow_button";

const defaultResources = [
  {
    id: 1,
    title: "SCOPUS",
    category: "E-Resources",
    description:
      "Scopus is a comprehensive abstract and citation database used for academic research across various disciplines. Developed by Elsevier, it is widely utilized by researchers, academics, and institutions to access a broad range of scientific literature and track research impact. A total of 49,037 journals from various disciplines are indexed in this database.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-scopus.jpg",
    href: "https://www.elsevier.com/en-in/products/scopus",
    buttonText: "Open Link",
  },
  {
    id: 2,
    title: "LexisNexis",
    category: "E-Resources",
    description:
      "LexisNexis is a global provider of information and analytics solutions for professionals in the legal, risk management, corporate, government, and academic sectors, offering content-enabled workflows, data analytics, and AI-powered tools to enhance decision-making and productivity.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-lexisnexis.jpg",
    href: "https://www.lexisnexis.com/community/insights/professional/resources",
    buttonText: "Open Link",
  },
  {
    id: 3,
    title: "DELNET",
    category: "E-Resources",
    description:
      "DELNET was started at the India International Centre Library in January 1988 and was registered as a society in 1992. It was initially supported by NISSAT and later supported by NIC and the Ministry of Culture, Government of India.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-delnet.jpg",
    href: "https://www.delnet.in/",
    buttonText: "Open Link",
  },
  {
    id: 4,
    title: "DRILLBIT",
    category: "E-Resources",
    description:
      "Drillbit is a cloud-based tool designed to assist educators and students in managing and improving academic writing skills.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-drillbit.jpg",
    href: "https://www.drillbitplagiarism.com/",
    buttonText: "Open Link",
  },
  {
    id: 5,
    title: "TURNITIN",
    category: "E-Resources",
    description:
      "Turnitin is widely used across educational institutions to maintain academic integrity and improve the quality of scholarly work.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-turnitin.jpg",
    href: "https://www.turnitin.com/",
    buttonText: "Open Link",
  },
  {
    id: 6,
    title: "NPTEL",
    category: "E-Resources",
    description:
      "Initiated by seven IITs, NPTEL provides 3000+ courses for self-study with web/video lectures across engineering, sciences, and management.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-nptel.jpg",
    href: "https://nptel.ac.in/",
    buttonText: "Open Link",
  },
  {
    id: 7,
    title: "National Digital Library of India (NDLI)",
    category: "E-Resources",
    description:
      "NDLI collects and collates content from national and international digital libraries and hosts books, articles, videos, audio books, lectures and more.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-ndli.jpg",
    href: "https://club.ndl.iitkgp.ac.in/club-home",
    buttonText: "Open Link",
  },
  {
    id: 8,
    title: "IRINS",
    category: "E-Resources",
    description:
      "IRINS is a web-based Research Information Management service by INFLIBNET for collecting and showcasing scholarly communication activities.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-irins.jpg",
    href: "https://irins.org/",
    buttonText: "Open Link",
  },
  {
    id: 9,
    title: "INFEED",
    category: "E-Resources",
    description:
      "INFED is an access management federation using Shibboleth for secure, seamless access to scholarly e-resources under e-ShodhSindhu.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-infed.jpg",
    href: "https://infeed.in/",
    buttonText: "Open Link",
  },
];

export default function LibraryResource({
  title = "E-Resources",
  subtitle = "Obtain access to premier libraries through your ERP portal.",
  resources = defaultResources,
}) {
  return (
    <section className="bg-white py-12">
      <style jsx global>{`
        .library-resource-pagination {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-top: 22px;
          flex-wrap: wrap;
        }
        .library-resource-pagination .swiper-pagination-bullet {
          width: 78px;
          height: 6px;
          border-radius: 9999px;
          background: #d8d8d8;
          opacity: 1;
        }
        .library-resource-pagination .swiper-pagination-bullet-active {
          background: #f4a21a;
          width: 84px;
        }
      `}</style>

      <div className="w-full px-6 md:px-12">
        <div className="bg-[#F3F3F3] rounded-2xl px-6 md:px-12 py-10">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="mb-2 text-black">{title}</h2>
            <p className="text-black max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            grabCursor
            pagination={{ clickable: true, el: ".library-resource-pagination" }}
          >
            {resources.map((res) => (
              <SwiperSlide key={res.id}>
                <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden bg-white shadow-md border border-black/5">
                  {/* Category Tag */}
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 text-xs rounded-md bg-[var(--dark-blue)] text-white">
                    {res.category}
                  </span>

                  {/* ✅ Image Frame (fixed height + padding + no magnification) */}
                  <div className="md:col-span-4 bg-[#FAFAFA] border-b md:border-b-0 md:border-r border-black/5">
                    <div className="relative h-[210px] md:h-[280px] w-full p-6 md:p-8">
                      <div className="relative w-full h-full">
                        <Image
                          src={res.image}
                          alt={res.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain"
                          priority={res.id === 1}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8 px-6 md:px-10 py-6 md:py-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl mb-2 text-black font-medium">
                      {res.title}
                    </h3>

                    <p className="text-black/80 text-sm md:text-base leading-relaxed">
                      {res.description}
                    </p>

                    <div className="mt-5">
                      <a href={res.href} target="_blank" rel="noreferrer">
                        <GlobalArrowButton className="text-sm">
                          {res.buttonText}
                        </GlobalArrowButton>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="library-resource-pagination" />
        </div>
      </div>
    </section>
  );
}
