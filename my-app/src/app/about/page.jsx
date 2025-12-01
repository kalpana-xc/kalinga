import AboutHero from "../components/about/AboutHero";

export default function About() {
  return (
    <div>
      <AboutHero title="About Us" />
      
      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-stix text-4xl md:text-5xl mb-6">Welcome to Kalinga University</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Kalinga University is a leading institution dedicated to transforming futures through knowledge and innovation. 
            Our commitment to excellence in education, research, and community engagement has established us as a premier 
            destination for students seeking world-class learning experiences.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded with the vision of creating a center of academic excellence, we offer a wide range of programs across 
            various disciplines, combining theoretical knowledge with practical skills to prepare students for successful careers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-stix text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a globally recognized institution that fosters innovation, creativity, and excellence in education, 
                research, and societal development.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-stix text-2xl mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education, promote research and innovation, and develop skilled professionals who 
                contribute to the betterment of society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

