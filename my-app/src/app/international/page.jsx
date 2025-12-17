import VisaFroFrroGuidelines from "../components/international/visa_frofrro_guidelines";

export default function InternationalPage() {
  return (
    <main className="w-full">
      {/* spacing because breadcrumb/header overlaps */}
      <div className="mt-[280px]">
        <VisaFroFrroGuidelines viewAllHref="#" />
      </div>
    </main>
  );
}
