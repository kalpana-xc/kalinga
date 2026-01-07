"use client";

import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import ProgramsOffered from "../../components/department/programs-offered";
import DeptHeadIntro from "../../components/department/dept_head_intro";
import DeptSyllabus from "../../components/department/dept_syllabus";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";
import WhyStudy from "../../components/department/why-study";
import Placements from "../../components/home/placements";
import AdmissionCareer from "../../components/general/admission_cta";
import FAQ from "../../components/general/faq";
import MediaCardSlider from "../../components/general/media-card-slider";
import WeStandOut from "../../components/department/we_stand_out";
import UpcomingConference from "../../components/research/upcoming_conference";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/student-computer.webp",
  pageTitle: "Faculty of Information Technology",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Faculty of Information Technology', href: '/departments/faculty-of-information-technology' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

export default function FacultyOfInformationTechnology() {

  const videoItems = [
    {
      id: 1,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 2,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 3,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 4,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
  ]

  const newsConferences = [
    {
      id: 1,
      title: "Infinity Club: Become a Tech Champion!",
      date: "",
      category: "Student Club",
      description: "We just don't talk about technology, but we believe in creating it. Join the Infinity Club and turn your curiosity into powerful tech. Explore coding, cybersecurity, artificial intelligence, data science, machine learning, Internet of Things (IoT), and Robotics & Automation through practical projects and workshops provided by the club. Take advantage of the resources and expert mentorship, and learn to debug the most complex problems.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/infinity-club-1.webp",
    },
  ]

  const programsOffered = [
    {
      id: 1,
      title: "Bachelor of Animation & Visual Effects",
      duration: "3 Year",
      level: "UG",
    },
    {
      id: 2,
      title: "B.CS in AI & ML and Cybersecurity",
      duration: "3 Year",
      level: "UG",
    },
    {
      id: 3,
      title: "BCA in AI & ML",
      duration: "3 Year",
      level: "UG",
    },
    {
      id: 4,
      title: "M.CS in AI & ML and Cybersecurity",
      duration: "2 Year",
      level: "PG",
    },
    {
      id: 5,
      title: "MCA",
      duration: "2 Year",
      level: "PG",
    },
    {
      id: 6,
      title: "Master of Animation & Visual Effects",
      duration: "2 Year",
      level: "PG",
    },
    {
      id: 7,
      title: "Master of Data Science",
      duration: "2 Year",
      level: "PG",
    },
    {
      id: 8,
      title: "DCA",
      duration: "1 Year",
      level: "Diploma",
    },
    {
      id: 9,
      title: "PGDCA",
      duration: "1 Year",
      level: "Diploma",
    },
  ]

  const whyStudyItems = [
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
      body: "KU ditches the outdated textbook knowledge and focuses on trending IT skills that matter. With our customised programs, you can choose your favourite field of study and become a pro.",
      variant: "amber",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industry-Relevant+Curriculum.svg",
    },
    {
      id: 3,
      title: "Tech Pays Huge",
      body: "Your learning can have a big payback! CS and IT graduates land the highest-paying jobs in the world. Develop the right skill set and knowledge, and let jobs chase you.",
      variant: "gray",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Campus+Placement+Drives.svg",
    },
    {
      id: 4,
      title: "Make Valuable Connections",
      body: "With our workshops, seminars, and industry meetings, you'll connect with tech leaders, innovators, and recruiters who can give proper guidance and level up your career.",
      variant: "amber",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg",
    },
  ]

  const weStandOutCards = [
    {
      id: 1,
      text: "Get internship opportunities (on-campus/off-campus) and practical projects before completing your degree.",
    },
    {
      id: 2,
      text: "Our incubation centre offers tools, resources, and guidance to make your startup dream come true.",
    },
    {
      id: 3,
      text: "Win amazing prizes and certificates at Hackathons and tech competitions, and challenge your skills.",
    },
    {
      id: 4,
      text: "Get your DREAM JOB with our on-campus placement assistance at big tech companies.",
    },
    {
      id: 5,
      text: "Get a global learning experience through international trips.",
    },
  ]

  const faqItems = [
    {
      id: 1,
      question: "Is Information Technology a good career path?",
      answer: "Yes, the IT industry is growing rapidly worldwide, and the demand for skilled professionals is increasing every day. This field offers competitive salary packages, strong job security, and various specialisations to choose from.",
    },
    {
      id: 2,
      question: "Is Kalinga University recognized and approved by UGC?",
      answer: "Yes, Kalinga University is recognized and approved by the University Grants Commission (UGC).",
    },
    {
      id: 3,
      question: "Are scholarships available for me at Kalinga University?",
      answer: "Yes, we offer scholarships under different categories, like merit scholarships, sports scholarships, research scholarships, and more. For more details, check out our scholarships.",
    },
    {
      id: 4,
      question: "Do I need prior coding knowledge before choosing a program?",
      answer: "No. Even if you have zero coding knowledge, our faculty members will guide you with each step, starting from basic to advanced concepts.",
    },
    {
      id: 5,
      question: "What makes our Faculty of IT stand out?",
      answer: "With our updated curriculum, strong industrial connections, modern lab facilities, training in emerging technologies, Hackathons, and workshops, we prepare students for demanding roles in the tech field.",
    },
    {
      id: 6,
      question: "Will I get internship opportunities while pursuing my course?",
      answer: "Yes, we offer internships to our students both on-campus and off-campus, enabling them to understand how theoretical concepts are applied in real-world problems.",
    },
  ]

  const MentorIntroProps = [
    {
      cardClassName: "",
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
      title: "Mr. Omprakash Dewangan",
      subtitle: "Dean of Faculty",
      department: "Faculty of Information Technology",
      message: [
        "I welcome you to the Faculty of Computer Science and Information Technology of Kalinga University. As a Dean of the faculty, I believe that Kalinga University is leading in technological education and excellence in Chhattisgarh. Our curriculum is designed to provide students with an unmatched practical experience so that they can fulfil the needs of the IT industry and become future tech leaders.",
        "We encourage them to explore AI-ML, Cybersecurity, and Data Science and develop a passion for research in trending technologies. Students will get the opportunity to work on practical projects with our industry partnerships. With our Centre of Excellence for technology, you will get hands-on learning opportunities in different tools and technologies.",
        "The Faculty of IT not only focuses on academics but also conducts seminars, conferences, workshops, hackathon competitions, and guest lectures so you can get the most out of your program at Kalinga University. Our faculty members and students work together to shape the future of our tech industry. I believe that every student has the potential to make an impactful change not only in the computing field but also in society. Now, it's your turn to make a difference."
      ],
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    }
  ]
  return (
    <div>
      <MainIntro
        title="About the Faculty Of IT"
        subtitle="About the Faculty Of IT"
        description={["Tech is running the world, and the demand for coders is increasing at lightning speed. Whether it's Artificial Intelligence, Machine Learning, Cybersecurity, Data Science, Gaming, or Cloud Computing, careers in IT are booming.",
          "The Faculty of Computer Science and Information Technology is a department of skilled professionals who combine theoretical and practical knowledge and prepare students with the trending IT skills that will keep them ahead in the digital world.",
          "With our modern computer laboratories and digital classrooms, you can learn, experiment, and innovate, and turn your ideas into a new technology. Apart from offering competitive programs, our faculty of information technology also conducts workshops, seminars, hackathons, and hands-on learning programs, and even provides certificates that will add value to your resumes. Ready to begin a new journey of becoming a tech leader?"
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
        imageAlt="Kalinga University campus"
        initialVisibleParagraphs={2}
        showButton={true}
        buttonLabel="Read More"
        showKnowMore={false}
      />
      <PublicationGrid />
      <ProgramsOffered
        programs={programsOffered}
        title="Programs Offered"
        description="Explore our comprehensive range of undergraduate, postgraduate, and diploma programs designed to equip you with cutting-edge IT skills. From Artificial Intelligence and Machine Learning to Cybersecurity and Data Science, our programs are tailored to meet the demands of the rapidly evolving tech industry."
      />
      <DeptHeadIntro items={MentorIntroProps} />
      <DeptSyllabus />
      <Placements />
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <Facility />
      <WhyStudy
        items={whyStudyItems}
        sectionTitle="Why Study Information Technology?"
      />
      <WeStandOut cards={weStandOutCards} />
      <UpcomingConference
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
        showCategory={false}
        showDate={false}
        imageContainerClass="w-full md:w-1/3 flex justify-center"
      />
      <StudentActivities />
      <FAQ items={faqItems} />
      <AdmissionCareer />
    </div>
  );
}