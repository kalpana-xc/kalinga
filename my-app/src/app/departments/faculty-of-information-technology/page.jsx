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
  return (
    <div>
      <MainIntro />
      <PublicationGrid />
      <ProgramsOffered />
      <DeptHeadIntro />
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