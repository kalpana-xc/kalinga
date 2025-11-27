import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";

export default function Research() {
  return (
    <div>
      <PublicationGrid />
      <UGCLogo />
      <UpcomingConference />
      <ResearchSixGridButtons />
    </div>
  );        
}