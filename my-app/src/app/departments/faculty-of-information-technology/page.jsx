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
        title: "Annual Research Symposium 2025",
        date: "November 10 · 2025",
        category: "Research & Innovation",
        description: "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.",
      },
      {
        id: 2,
        title: "International Education Summit",
        date: "December 05 · 2025",
        category: "Education",
        description: "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.",
      },
      {
        id: 3,
        title: "Technology & Innovation Conference",
        date: "January 20 · 2026",
        category: "Technology",
        description: "Explore the latest trends in technology, artificial intelligence, and digital transformation in education and industry applications.",
      },
    ]

    const MentorIntroProps = [
      {
        cardClassName: "",
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
        title: "Mr. Omprakash Dewangan",
        subtitle: "Head of Department",
        department: "Faculty of Information Technology",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       }
    ]
  return (
    <div>
       <MainIntro 
      title="Transforming futures with knowledge & innovation"
      description={["Established in 2013, Kalinga University, Raipur has emerged as a premier institution of higher learning in Central India, strategically located in the Smart City of New Raipur, Chhattisgarh. The University is recognized for its academic excellence, global perspective, and commitment to innovation and research.",
      "With a strong focus on quality education, Kalinga University offers 130+ undergraduate, postgraduate, and doctoral programs across diverse disciplines including Arts, Management, Law, Pharmacy, Information Technology, and Science. The curriculum is designed in alignment with the National Education Policy (NEP) 2020, ensuring that students are equipped with contemporary skills and global competencies."
    ,"The University is home to students from over 29+ countries, creating a vibrant, multicultural environment that promotes collaboration and cross-cultural understanding. Through partnerships with global leaders such as IBM, Cisco, Bosch, and Microsoft, Kalinga University integrates academic learning with practical industry experience."
    ,"Spread across a 50-acre green campus, the University features modern infrastructure, advanced laboratories, digital classrooms, and Centres of Excellence, providing an ecosystem that fosters creativity, research, and innovation."
    ,"Driven by its mission to empower learners with knowledge, leadership, and integrity, Kalinga University continues to shape the next generation of professionals, innovators, and changemakers who contribute meaningfully to society and the world."
    ]}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Kalinga University campus"
      />
      <PublicationGrid />
      <ProgramsOffered />
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
        descriptionTextClass="text-gray-600"
        swiperClassName="ccrc-video-slider"
      />
      <Facility />
      <WhyStudy />
      <WeStandOut />
      <UpcomingConference 
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
        showCategory={false}
        showDate={false}
      />
      <StudentActivities />
      <FAQ />
      <AdmissionCareer />
    </div>
  );
}