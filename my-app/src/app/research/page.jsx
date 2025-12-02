import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import ProgramsOffered from "../components/department/programs-offered"; 
import DeptHeadIntro from "../components/department/dept_head_intro";
import DeptSyllabus from "../components/department/dept_syllabus";
import StudentActivities from "../components/department/student_activities";
import EligibilityCriteria from "../components/course/eligibility_criteria";
import CareerPath from "../components/course/career_path";
import BoardStudies from "../components/course/board-studies";
import EventCalendar from "../components/news_and_events/event_calendar";
import ThreeCardSider from "../components/general/three_card_sider";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import WhoWeAre from "../components/about/who_we_are";
import OurJourney from "../components/about/our_journey";
import OurPrograms from "../components/admissions/our_programs";
import AdmissionSteps from "../components/admissions/admission-steps";

export default function Research() {
  return (
    <div>
      <PublicationGrid />
      <UGCLogo />
      <UpcomingConference />
      <ProgramsOffered />
      <DeptHeadIntro />
      <DeptSyllabus />
      <StudentActivities />
      <EligibilityCriteria />
      <CareerPath />
      <BoardStudies />
      <EventCalendar />
      <ThreeCardSider />
      <MainIntro />
      <VisionMission />
      <WhoWeAre />
      <OurJourney />
      <OurPrograms />
      <AdmissionSteps />
      <ResearchSixGridButtons />
    </div>
  );        
}