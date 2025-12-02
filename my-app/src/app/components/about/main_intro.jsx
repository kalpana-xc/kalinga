import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

export default function MainIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto pl-4 lg:pl-4 pr-4 lg:pr-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 lg:pl-0 lg:pr-4">
            <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl leading-tight">
              Lorem ipsum dolor sit
              <br />
              amet, consectetur
            </h2>
            
            <div className="space-y-4">
              <p className="text-[var(--light-text-gray)] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-[var(--light-text-gray)] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Read More Button */}
            <div className="mt-4">
            <GlobalArrowButton
                        className="w-fit !bg-white !shadow-none hover:!shadow-none gap-3 !px-0"
                        textClassName="!text-[#000] !font-semibold !ml-0 !px-0"
                        arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                      >
                        Read More
            </GlobalArrowButton>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="order-1 lg:order-2 lg:pl-4 lg:pr-8">
            <div className="relative w-full overflow-visible">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
                alt="Kalinga University students celebrating graduation"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg transform-3d-slant"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

