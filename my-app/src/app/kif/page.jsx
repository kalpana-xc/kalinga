import ImageContent from "@/app/components/ccrc/imagecontent";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import Testimonials from "@/app/components/home/Testimonials";
import QuickLinks from "@/app/components/general/quick_links";
import AdmissionSteps from "@/app/components/admissions/admission-steps";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import CenterOfExcellence from "@/app/components/about/center_of_excellence";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

export default function KIFPage({
    visionMissionData: visionMissionDataProp,
    boxItems: boxItemsProp,
    testimonials: testimonialsProp,
    links: linksProp,
    kifSteps: kifStepsProp,
    organogram: organogramProp,
    centres: centresProp,
} = {}) {
    const visionMissionData = visionMissionDataProp ?? [{
        visionTitle: "Vision",
        missionTitle: "Mission",
        visionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        missionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageAlt: "Vision and Mission",
        className: "",
        showImage: false,
    }];
    const boxItems = boxItemsProp ?? [{
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },
    {
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },{
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },{
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },{
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },{
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },{
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },{
        title: "Startup Incubation",
        description: "The core theme emphasizes joint efforts between different sectors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 8h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 2m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 14h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 8m0 6a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 14 20h-4a1 1 0 0 1-.894-1.447l2-4A1 1 0 0 1 12 14" />
            </svg>
        ),
    },];
    const testimonials = testimonialsProp ?? [{
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/person-standing-1.png",
        imageAlt: "Vision and Mission",
        className: "",
    }];

    const kifSteps = kifStepsProp ?? [
        {
            id: 1,
            stepNumber: "01",
            title: "Apply Online",
            description: "Submit your incubation idea with required details.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 2,
            stepNumber: "02",
            title: "Screening",
            description: "Our panel reviews feasibility and impact.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 3,
            stepNumber: "03",
            title: "Pitch Session",
            description: "Present your idea and receive expert feedback.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 4,
            stepNumber: "04",
            title: "Onboard & Build",
            description: "Join the cohort, access labs, mentors, and funding support.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
    ];

    const links = linksProp ?? [
        {
          id: 1,
          icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
          title: "Conferences",
          description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 2,
          icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
          title: "IPR",
          description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 3,
          icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
          title: "Patents",
          description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 4,
          icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
          title: "Book Chapters",
          description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 5,
          icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
          title: "Research Papers",
          description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 6,
          icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
          title: "Awards",
          description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ]

    const organogram = organogramProp ?? {
        title: "Join Us on Your Entrepreneurial Journey",
        description: [
            "Unlock resources, mentorship, and structured support to turn your ideas into reality."
        ],
        buttonLabel: "Download PTS Application Form",
        readMoreLabel: "Read More",
        readLessLabel: "Show Less",
    };

    const centres = centresProp ?? [
        {
            id: 1,
            name: "Startup Incubation Lab",
            title: "Rapid prototyping & mentoring",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
        {
            id: 2,
            name: "Innovation Garage",
            title: "Hands-on builds with tooling support",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
        {
            id: 3,
            name: "Pitch Studio",
            title: "Investor-ready decks and mock pitches",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
        {
            id: 4,
            name: "Pitch Studio",
            title: "Investor-ready decks and mock pitches",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
    ];
    const activities = [
        {
          id: 1,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
          buttonText: "Read More",
          date: "August 25 - 2025",
        },
        {
          id: 2,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
            buttonText: "Read More",
          date: "August 25 - 2025",
        },
        {
          id: 3,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
           buttonText: "Read More",
          date: "August 25 - 2025",
        },
    ];
      
  return (
    <div>
      <ImageContent title="Kalinga Incubation Foundation" subtitle="About KIF" description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality." />
      <VisionMission data={visionMissionData} showImg={false} />
      <ImageListItem imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" boxItems={boxItems} title="Our Key Offerings " subtitle="About KIF" description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality." />
      <QuickLinks links={links} title="What Awaits You At KIF?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
       backgroundColor="bg-white" textColorClassName="text-black" showReadMore={false} />
      <ImageContent title="Kalinga Incubation Foundation" subtitle="About CCRC" description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality." />
      <AdmissionSteps
        steps={kifSteps}
     subtitleClassName="hidden"
        title="Your Step-By-Step Startup Process"
        ctaLabel="Apply Now"
        showReadMore={false}
        showHeaderButton={false}
        showIcon={false}
        showImage={false}
      />
      <Testimonials testimonials={testimonials} />

      <OrganogramOfKalinga
        title={organogram.title}
        description={organogram.description}
        buttonLabel={organogram.buttonLabel}
        readMoreLabel={organogram.readMoreLabel}
        readLessLabel={organogram.readLessLabel}
      />
      <CenterOfExcellence
        centres={centres}
        title="Startup Partners"
        description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation."
      />
      <StudentActivities activities={activities} title="" subtitle="KIF  Glimpse" />
      <AdmissionCareer />

     
    </div>
  );
}