import Image from "next/image";

const stats = [
  {
    number: "3300 +",
    label: "Student",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    number: "100 +",
    label: "Research Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    number: "100 +",
    label: "Research Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    number: "100 +",
    label: "Research Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

export default function WhoWeAre() {
  return (
    <section className="relative px-5">
      {/* Top Section - Image with Overlay */}
      <div className="relative w-full rounded-2xl overflow-visible h-[450px] sm:h-[500px] md:h-[550px] lg:h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/who-we-are.webp"
            alt="Who We Are"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        {/* Text Overlay */}
        <div className="relative container mx-auto px-4 lg:px-6 h-full flex items-center sm:items-center justify-center">
          <div className="text-center max-w-5xl pt-12 sm:pt-16 md:pt-24 lg:pt-[200px] pb-20 sm:pb-24 md:pb-16">
            <h2 className="font-stix text-white text-[40px] sm:text-[50px] md:text-[70px] lg:!text-[100px] mb-4 sm:mb-6 md:mb-8 font-bold" style={{
                WebkitTextStroke: '1px #fff',
                color: 'transparent',
            }}>
              Who We Are
            </h2>
            <div className="space-y-3 sm:space-y-4 text-white/90 px-2 sm:px-0">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section - Statistics Cards (Overlapping) */}
      <div className="relative pb-12 lg:pb-16 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] lg:mt-[-140px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[var(--light-gray)] rounded-xl p-6 lg:p-8 shadow-lg"
              >
                <h2 className="text-[var(--button-red)] !font-stix mb-2">
                  {stat.number}
                </h2>
                <h3 className="text-[var(--foreground)] !font-stix mb-3">
                  {stat.label}
                </h3>
                <p className="text-[var(--light-text-gray)] text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

