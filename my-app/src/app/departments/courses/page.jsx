import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import DeptHeadIntro from "../../components/department/dept_head_intro";
import DeptSyllabus from "../../components/department/dept_syllabus";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";
import EligibilityCriteria from "../../components/course/eligibility_criteria";
import CareerPath from "../../components/course/career_path";
import BoardStudies from "../../components/course/board-studies";
import WhyStudy from "@/app/components/department/why-study";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CourseNavigation from "@/app/components/general/course-navigation";
import QuickLinks from "@/app/components/general/quick_links";

function Courses() {
  // MainIntro content
  const mainIntroContent = {
    title: "Transforming futures with knowledge & innovations",
    description: [
      "Kalinga University blends rigorous academics with hands-on learning, ensuring students are industry-ready from day one. Our curriculum aligns with NEP 2020, supported by experienced faculty, modern labs, and strong industry partnerships.",
      "With students from 50+ countries, a green smart campus, and vibrant clubs, we nurture global citizens who thrive in research, entrepreneurship, and community impact.",
    ],
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    imageAlt: "Kalinga University campus",
  };

  // PublicationGrid content
  const publicationStats = [
    {
      title: "Publications",
      value: "1250 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Startups",
      value: "12 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Awards",
      value: "63 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Conferences",
      value: "78 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ];

  // EligibilityCriteria content
  const eligibilityContent = {
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/course_page.webp",
    imageAlt: "Students",
    duration: "3 Years (6 Semesters)",
    title: "Eligibility Criteria",
    criteria: [
      "The candidate should be a 12th pass with 45% aggregate marks.",
      'Take the Entrance Test: <a href="#" class="text-[var(--dark-orange-red)] hover:underline inline-flex items-center gap-1">KALSEE<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[var(--dark-orange-red)]"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a>',
    ],
    admissionTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    admissionButtonLabel: "Admission Open",
  };

  // CareerPath content
  const careerPathContent = {
    title: "Career Pathway",
    description: "Get ready to turn your unique ideas into reality in the world of tech and design with limitless career opportunities.",
    careers: [
      {
        id: 1,
        title: "3D Animators",
        description: "Create 3D space, characters, and objects using advanced animation techniques.",
      },
      {
        id: 2,
        title: "VFX Artist",
        description: "Create realistic effects like a transformation or an explosion by combining footage.",
      },
      {
        id: 3,
        title: "Storyboard Artist",
        description: "Plan camera angles, shots, and scenes before production begins.",
      },
      {
        id: 4,
        title: "Motion Graphics Artist",
        description: "Create engaging visual content and animated graphics for various media platforms.",
      },
      {
        id: 5,
        title: "Game Developer",
        description: "Create engaging games and interactive experiences for various platforms.",
      },
    ],
  };

  // WhyStudy content
  const whyStudyContent = {
    sectionTitle: "Specialization",
    backgroundImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp",
    items: [
      {
        id: 1,
        title: "Become Tech-Savvy",
        body: "The world needs new technologies, and companies are hunting for skilled professionals who generate code or are good problem solvers. We'll help you turn your ideas into a viral application.",
        variant: "gray",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg",
      },
      {
        id: 2,
        title: "Industry-Ready Programs",
        body: "We design programs with the latest tools and industry practices so you graduate with the skills employers seek and the confidence to build real-world solutions.",
        variant: "amber",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/university.svg",
      },
      {
        id: 3,
        title: "Future-Proof Skills",
        body: "Learn critical thinking, communication, and collaboration alongside core tech so you can adapt quickly and lead in fast-changing digital environments.",
        variant: "gray",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg",
      },
    ],
  };

  // FAQ content
  const faqContent = {
    title: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "What is the admission process?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 2,
        question: "What are the eligibility criteria?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 3,
        question: "What documents are required?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 4,
        question: "How can I apply for scholarships?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 5,
        question: "What is the fee structure?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
    ],
  };

  // QuickLinks content
  const quickLinksContent = {
    title: "Quick Links",
    description: "Explore our comprehensive resources and services designed to support your academic journey and career development.",
    links: [
      {
        id: 1,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Admissions",
        description: "Learn about our admission process, eligibility criteria, and how to apply to your desired program.",
      },
      {
        id: 2,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Scholarships",
        description: "Discover various scholarship opportunities available to help fund your education at Kalinga University.",
      },
      {
        id: 3,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Placements",
        description: "Explore our placement opportunities and career services that connect students with top employers.",
      },
    ],
  };

  return (
    <div>
      <CourseNavigation />
      <div id="about">
        <MainIntro 
          title={mainIntroContent.title}
          description={mainIntroContent.description}
          imageUrl={mainIntroContent.imageUrl}
          imageAlt={mainIntroContent.imageAlt}
        />
      </div>
      <PublicationGrid stats={publicationStats} />
      <div id="eligibility">
        <EligibilityCriteria 
          imageUrl={eligibilityContent.imageUrl}
          imageAlt={eligibilityContent.imageAlt}
          duration={eligibilityContent.duration}
          title={eligibilityContent.title}
          criteria={eligibilityContent.criteria}
          admissionTitle={eligibilityContent.admissionTitle}
          admissionButtonLabel={eligibilityContent.admissionButtonLabel}
        />
      </div>
      <div id="career">
        <CareerPath 
          title={careerPathContent.title}
          description={careerPathContent.description}
          careers={careerPathContent.careers}
        />
      </div>
      <div id="specialization">
        <WhyStudy 
          sectionTitle={whyStudyContent.sectionTitle}
          backgroundImage={whyStudyContent.backgroundImage}
          items={whyStudyContent.items}
        />
      </div>
      <OrganogramOfKalinga
        title="Organogram of Kalinga University"
        description="Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence."
        buttonLabel="Explore Now"
        href="/about-us"
        buttonClassName="!bg-white !text-black"
        arrowClassName="!bg-[var(--dark-orange-red)]"
        arrowIconClassName="!text-white"
        textClassName="!text-black"
        cardBackgroundColor="bg-[var(--button-red)]"
      />
      <div id="facilities">
        <Facility />
      </div>
      <QuickLinks 
        title={quickLinksContent.title}
        description={quickLinksContent.description}
        links={quickLinksContent.links}
        titleClassName="text-white"
      />
      <FAQ 
        title={faqContent.title}
        items={faqContent.items}
      />
      {/* <BoardStudies /> */}
      <div id="activities">
        <StudentActivities />
      </div>
      <AdmissionCareer />
    </div>
  );
}

export default Courses;