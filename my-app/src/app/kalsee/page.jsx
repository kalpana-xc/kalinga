import KalseeExamPattern from "../components/kalsee/kalsee_exam_pattern";

export default function KalseePage() {
  return (
    <main className="w-full">
      <div className="mt-[260px]">
        {/* other KALSEE sections above */}
        <div className="container py-10">
          <KalseeExamPattern />
        </div>
        {/* other KALSEE sections below */}
      </div>
    </main>
  );
}
