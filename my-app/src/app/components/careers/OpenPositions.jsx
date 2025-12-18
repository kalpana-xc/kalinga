'use client'

import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";
export default function OpenPositions() {

  const positions = [
    {
      title: "Teaching Positions",
      description:
        "Join our team of distinguished faculty members committed to academic excellence and innovation. We seek educators who inspire learning, foster research, and shape the leaders of tomorrow."
    },
    {
      title: "Non–Teaching Positions",
      description:
        "Be a part of Kalinga University’s dynamic administrative and operational teams. We value professionals who bring expertise, efficiency, and integrity to support our academic mission."
    },{
      title: "Internships & Training",
      description:
        "Kickstart your career with hands-on experience in a vibrant academic environment. Our internship and training programs provide practical exposure, mentorship, and real-world learning opportunities."
    }
  ];

  return (
    <section className="w-full px-2">
      <div className="bg-[var(--dark-blue)] rounded-2xl py-16 px-2">

      <div className="max-w-6xl mx-auto text-center mb-12">
        <SectionHeading 
          subtitle="Open Positions"
          title="Discover opportunities that match your passion and expertise."
          subtitleClassName=""
          titleClassName="text-white"
          subtitleTextColor="!text-[var(--dark-orange-red-light)]"
        />
      </div>

      <div className="container mx-auto space-y-6">
        {positions.map((position, index) => (
          <div key={index} className="bg-[var(--background)] rounded-[15px] p-6 sm:p-8 shadow-lg">
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              <div className="flex-1">
                <h3 className="text-[var(--button-red)] mb-4">
                  {position.title}
                </h3>
                <p className="leading-relaxed max-w-[650px]">
                  {position.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">

               <GlobalArrowButton className="!bg-[var(--dark-orange-red)] hover:!bg-[var(--background)] hover:!text-[var(--dark-orange-red)]">
                 Check Eligibility
               </GlobalArrowButton>

              <GlobalArrowButton>Apply Now</GlobalArrowButton>
              </div>

            </div>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
}
