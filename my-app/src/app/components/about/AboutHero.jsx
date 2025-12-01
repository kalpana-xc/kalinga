'use client';

const AboutHero = ({ title = "About Us", backgroundImage = "/about-bg.jpg" }) => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundColor: '#4a7c9e', // Fallback color
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a7c9e]/60 to-[#4a7c9e]/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex items-center justify-center md:justify-start h-full">
          <div className="bg-[#0d3b66]/90 backdrop-blur-sm px-8 md:px-12 py-6 md:py-8 rounded-lg shadow-2xl">
            <h1 className="text-white font-stix text-3xl md:text-4xl lg:text-5xl font-normal">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

