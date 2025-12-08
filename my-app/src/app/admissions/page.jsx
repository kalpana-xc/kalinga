import OurPrograms from "../components/admissions/our_programs";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import AdmissionSteps from "../components/admissions/admission-steps";
import Facility from "../components/admissions/facility";
import EntranceExam from "../components/general/entrance_exam";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
export default function Admissions() {
  return (
    <div>
      <OurPrograms />
      {/* <EntranceExam /> */}
      <AdmissionSteps />
      <OrganogramOfKalinga cardBackgroundColor="bg-[var(--dark-blue)]" />
      <ScholarshipsSlider />
      <Facility />
      <QuickLinks />
      <FAQ />
      <AdmissionCareer />
    </div>
  );
}