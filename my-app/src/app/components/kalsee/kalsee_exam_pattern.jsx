"use client";

import { useMemo, useState } from "react";
import SectionHeading from "../general/SectionHeading";

/* ---------------- DATA MAP (UNCHANGED) ---------------- */
const dataMap = {
  btech: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Physics", questions: 25 },
      { sl: 2, section: "Section B", subject: "Chemistry", questions: 25 },
      { sl: 3, section: "Section C", subject: "Maths", questions: 25 },
      { sl: 4, section: "Section D", subject: "English Communication", questions: 15 },
    ],
  },
  ug: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "English Communication", questions: 25 },
      { sl: 2, section: "Section B", subject: "Logical Reasoning", questions: 25 },
      { sl: 3, section: "Section C", subject: "Quantitative Aptitude", questions: 250 },
      { sl: 4, section: "Section D", subject: "General Aptitude", questions: 20 },
    ],
  },
  pg: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "English Communication", questions: 25 },
      { sl: 2, section: "Section B", subject: "Logical Reasoning", questions: 25 },
      { sl: 3, section: "Section C", subject: "Quantitative Aptitude", questions: 20 },
      { sl: 4, section: "Section D", subject: "General Aptitude", questions: 20 },
    ],
  },
  llm: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "English Communication", questions: 25 },
      { sl: 2, section: "Section B", subject: "Legal Awareness and Aptitude", questions: 25 },
      { sl: 3, section: "Section C", subject: "Quantitative Aptitude", questions: 20 },
      { sl: 4, section: "Section D", subject: "Logical Reasoning", questions: 20 },
    ],
  },
  phd: {
    note: "All questions carry 1 mark each.",
    rows: [],
  },
};

/* ---------------- Ph.D. CONTENT ---------------- */
const phdContent = {
  eligibility:
    "Master’s Degree required with 55% marks or more for General and 50% marks or more for SC/ST/OBC/Physically Handicapped Candidates.",

  govtExams:
    "Candidates must clear any of the following exams: M.Phil. / NET / GATE / SLET / SET or equivalent, and should be a regular teacher in any college or university. Such candidates are exempted from appearing for KALSEE for Ph.D.",

  examPattern: [
    "Paper 1 – Common for all; 50 MCQs",
    "Paper 2 – As per the specialisation applied; 50 MCQs",
  ],

  fee: "India and SAARC – INR 3,000/-",
};

export default function KalseeExamPattern() {
  const items = useMemo(
    () => [
      { key: "btech", label: "B.Tech" },
      { key: "ug", label: "All Undergraduate Courses (except B.Tech)" },
      { key: "pg", label: "All Postgraduate Courses" },
      { key: "llm", label: "LLM" },
      { key: "phd", label: "Ph.D." },
    ],
    []
  );

  const [active, setActive] = useState("ug");

  const activeData = dataMap[active] ?? dataMap.ug;

  const total = activeData.rows.reduce(
    (sum, r) => sum + (Number(r.questions) || 0),
    0
  );

  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full container px-4 sm:px-6">
        <SectionHeading
          title="Pattern Of KALSEE Exam"
          titleClassName="text-center leading-tight sm:leading-normal md:leading-[54px]"
        />

        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:grid md:grid-cols-[420px_1fr] gap-6 md:gap-8">
          {/* LEFT: selections */}
          <div className="flex md:flex-col gap-3 md:gap-5 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {items.map((it) => {
              const isActive = it.key === active;

              return (
                <button
                  key={it.key}
                  type="button"
                  onClick={() => setActive(it.key)}
                  className={[
                    "flex-shrink-0 md:w-full rounded-[10px] px-4 sm:px-6 py-4 sm:py-6 text-left font-semibold transition cursor-pointer text-sm sm:text-base",
                    "border border-black/10 whitespace-nowrap md:whitespace-normal",
                    isActive
                      ? "bg-[var(--button-red)] text-white"
                      : "bg-[var(--card-sandal)] text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {it.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT: panel */}
          <div className="rounded-[18px] bg-[var(--dark-blue)] p-4 sm:p-6 md:p-7">
            <p className="text-xs sm:text-sm md:text-[14px] font-semibold text-white/90">
              {activeData.note}
            </p>

            <div className="mt-4">
              {active === "phd" ? (
                /* ----------- Ph.D. BOX (SAME FONT SCALE) ----------- */
                <div className="rounded-[14px] bg-white p-5 sm:p-6 md:p-7 space-y-5 text-[var(--foreground)] text-xs sm:text-sm md:text-[14px]">
                  <div>
                    <p className="font-semibold mb-1">Eligibility</p>
                    <p>{phdContent.eligibility}</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Government Exams</p>
                    <p>{phdContent.govtExams}</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      KALSEE for Ph.D. – Exam Pattern
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {phdContent.examPattern.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-semibold mb-1">Exam Fee</p>
                    <p>{phdContent.fee}</p>
                  </div>
                </div>
              ) : (
                /* ---------------- TABLE (UNCHANGED) ---------------- */
                <div className="overflow-x-auto rounded-[10px] bg-white">
                  <table className="w-full min-w-[400px] border-collapse text-left text-xs sm:text-sm md:text-[14px]">
                    <thead>
                      <tr className="bg-[var(--button-red)] text-white">
                        <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold">
                          Sl. No
                        </th>
                        <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold">
                          Section
                        </th>
                        <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold">
                          Subject
                        </th>
                        <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-right font-semibold">
                          Questions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-[var(--foreground)]">
                      {activeData.rows.map((r, idx) => (
                        <tr key={idx} className="border-t border-black/10">
                          <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4">
                            {r.sl}
                          </td>
                          <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4">
                            {r.section}
                          </td>
                          <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4">
                            {r.subject}
                          </td>
                          <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-right">
                            {r.questions}
                          </td>
                        </tr>
                      ))}

                      <tr className="border-t border-black/10 bg-[#fffaf2]">
                        <td
                          colSpan={3}
                          className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold text-center"
                        >
                          Total
                        </td>
                        <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-right font-semibold">
                          {total}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
