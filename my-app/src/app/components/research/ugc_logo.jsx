import Image from "next/image";
import GlobalRedPlainButton from "../general/global-red_plain_button";

export default function UGCLogo() {
  const logos = [
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-1.png",
      alt: "Survey of India",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-2.png",
      alt: "NCTE",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-3.png",
      alt: "Council of Science & Technology",
      isCenter: true,
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-4.png",
      alt: "Association of Indian Universities",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-5.png",
      alt: "Pharmacy Council of India",
    },
  ];

  return (
    <div className="container mx-auto pt-12 pb-16 px-6">
      <div className="flex flex-wrap justify-around items-start gap-6 md:gap-8 lg:gap-12">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center ${
              logo.isCenter ? "transform scale-110 z-10" : ""
            }`}
          >
            <div
              className={`relative ${
                logo.isCenter
                  ? "ring-1 shadow-[0_0_25px_8px_rgba(59,130,246,0.4)]"
                  : ""
              } rounded-full overflow-hidden transition-all duration-300 bg-white`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={140}
                className="rounded-full object-contain w-[140px] h-[140px]"
              />
            </div>

            {/* Dashed line and button for center logo */}
            {logo.isCenter && (
              <div className="flex flex-col items-center">
                <div className="w-px h-10 border-2 border-dashed border-gray-500"></div>
                <div className="mt-3">
                  <GlobalRedPlainButton>
                    University Grants Commission
                  </GlobalRedPlainButton>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

