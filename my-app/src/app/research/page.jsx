import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ProgramsOffered from "../components/department/programs-offered"; 

import MainIntro from "../components/about/main_intro";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
export default function Research() {

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
  ];
  return (
    <div>
      <MainIntro />
      <PublicationGrid />
      <UGCLogo />
      <QuickLinks />
      <FAQ title="Frequently Asked Questions" />
      <UpcomingConferences 
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
        backgroundColor="bg-white"
        backgroundColorcard="bg-[var(--light-gray)]"
      />
      <ResearchSixGridButtons />
      <AdmissionCareer />
    </div>
  );        
}