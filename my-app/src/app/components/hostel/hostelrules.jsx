"use client";

import React from "react";
import FAQ from "../general/faq";

const TickIcon = () => (
    <svg
        fill="none"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 bg-[var(--card-skin)] fill-black rounded-md p-1 flex-shrink-0 mt-0.5"
        aria-hidden
    >
        <path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z" />
    </svg>
);

const Answer = ({ lines = [], penalty }) => {
    return (
        <div className="space-y-2 text-[var(--light-text-gray)] leading-relaxed">
            {lines.map((l, idx) => (
                <p key={idx}>{l}</p>
            ))}

            {penalty ? (
                <p className="pt-1">
                    <span className="font-semibold text-[var(--foreground)]">Penalty:</span>{" "}
                    {penalty}
                </p>
            ) : null}
        </div>
    );
};

// ✅ QC Note UI (clean + compact)
function NoteBox({ children }) {
    return (
        <div className="rounded-xl border border-black/10 bg-black/5 px-4 py-3 my-2">
            <div className="text-[var(--foreground)] leading-relaxed">
                {children}
            </div>
        </div>
    );
}


export default function Hostelrules() {
    // ✅ Notes content (NOTE keyword bold)
    const topNoteText =
        "Violation of any of the following rules will invite a penalty, disciplinary action, or expulsion from the hostel as deemed appropriate by the university authorities.";

    const bottomNoteText =
        "If any student is found violating the above rules and regulations, the university reserves the right to take strict disciplinary action, including warning, fines, suspension, or expulsion from the hostel or university.";

    const defaultFAQItems = [
        {
            id: 1,
            question: "Prohibition of Ragging",
            answer: (
                <Answer
                    lines={[
                        "Ragging is strictly prohibited in all hostels and across the campus.",
                        "Strict disciplinary action will be taken against any student found involved in ragging.",
                    ]}
                    penalty="May include suspension, rustication, or expulsion from the hostel/university."
                />
            ),
        },
        {
            id: 2,
            question: "Hostel Stay Duration",
            answer: (
                <Answer
                    lines={[
                        "Students are allowed to enter the hostel 3 days before the academic session begins.",
                        "It is mandatory to vacate the hostel within 3 days after the end of the final examination.",
                    ]}
                    penalty="Students violating this will face strict action, including monetary fines."
                />
            ),
        },
        {
            id: 3,
            question: "Handling of Hostel Property",
            answer: (
                <Answer
                    lines={[
                        "Rough handling or damage to hostel furniture, fittings, or property is strictly forbidden."
                    ]}
                    penalty="The cost of the damaged property will be recovered. If identified, the individual/group will pay double the cost,Repeated violations will result in expulsion from the hostel"
                />
            ),
        },
        {
            id: 4,
            question: "Personal Belongings",
            answer: (
                <Answer
                    lines={[
                        "Students are personally responsible for the safety of their belongings.",
                        "The university/hostel authority is not liable for any loss or theft.",
                    ]}
                />
            ),
        },
        {
            id: 5,
            question: "Mess Rules",
            answer: (
                <Answer
                    lines={[
                        "Students must join and eat in the mess of the allotted hostel only.",
                        "No food is allowed to be taken to the rooms.",
                    ]}
                    penalty="Violation will attract disciplinary action and possible fines."
                />
            ),
        },
        {
            id: 6,
            question: "Resource Conservation",
            answer: (
                <Answer
                    lines={["Wastage of food, electricity, or water is strictly prohibited."]}
                    penalty="Students found wasting any of these resources will be penalised."
                />
            ),
        },
        {
            id: 7,
            question: "Prohibited Items and Activities",
            answer: (
                <Answer
                    lines={[
                        "The following are strictly prohibited:",
                        "Smoking.",
                        "Gambling (including card games).",
                        "Consumption/possession of alcohol or intoxicants.",
                        "Possession of weapons.",
                    ]}
                    penalty="Severe disciplinary action under university rules. If the offender is not identified, all roommates will be penalised jointly."
                />
            ),
        },
        {
            id: 8,
            question: "Class Hours",
            answer: (
                <Answer
                    lines={[
                        "University class hours are from 09:00 A.M. to 03:45 P.M. (Monday to Friday).",
                        "Students are not allowed to stay in the hostel during class hours without written permission from the Warden.",
                    ]}
                    penalty="Unauthorised stay will result in disciplinary action."
                />
            ),
        },
        {
            id: 9,
            question: "Dress Code",
            answer: (
                <Answer lines={["Students must wear decent attire while on the university campus."]} />
            ),
        },
        {
            id: 10,
            question: "Leave Policy",
            answer: (
                <Answer
                    lines={["No student is allowed to leave the hostel without prior permission from the hostel warden."]}
                    penalty="Unauthorised absence may attract fines or disciplinary action."
                />
            ),
        },
        {
            id: 11,
            question: "Roll Call Attendance",
            answer: (
                <Answer
                    lines={["Daily Roll Call at prescribed times is mandatory."]}
                    penalty="Absenteeism without permission will be penalised."
                />
            ),
        },
        {
            id: 12,
            question: "Changing of Rooms",
            answer: (
                <Answer
                    lines={[
                        "Students are not allowed to change/switch their rooms or shift to AC rooms after opting for non-AC rooms.",
                    ]}
                    penalty="Unauthorised stay will result in disciplinary action/fine."
                />
            ),
        },
        {
            id: 13,
            question: "Night Stay Restrictions",
            answer: (
                <Answer
                    lines={[
                        "Students are not allowed to remain absent from the hostel between 08:00 P.M. and 06:00 A.M. without a night-out pass.",
                    ]}
                    penalty="Unauthorised absence during night hours will invite disciplinary action."
                />
            ),
        },
        {
            id: 14,
            question: "Health Conditions",
            answer: (
                <Answer
                    lines={[
                        "Students with any chronic or communicable disease are not allowed to stay in the hostel.",
                        "Students falling sick must report to the Warden for necessary action.",
                        "First-time transport to hospital: Free by university vehicle.",
                        "Subsequent transport: Students bear the cost.",
                        "Doctor's consultation charges: To be borne by students.",
                    ]}
                />
            ),
        },
        {
            id: 15,
            question: "Visitors",
            answer: (
                <Answer
                    lines={[
                        "Parents/Guardians/Visitors may meet students in the hostel meeting room only before 7:00 P.M. and with the warden’s permission.",
                        "Visitors are not allowed to stay in student rooms.",
                    ]}
                    penalty="Violation may lead to disciplinary action against the student."
                />
            ),
        },
        {
            id: 16,
            question: "Noise and Music",
            answer: (
                <Answer
                    lines={["Playing loud music in rooms or common areas is strictly prohibited."]}
                    penalty="Confiscation of devices and/or monetary fines."
                />
            ),
        },
        {
            id: 17,
            question: "Notice Boards",
            answer: (
                <Answer
                    lines={["Students are not permitted to post notices on university notice boards."]}
                    penalty="Unauthorised postings will result in disciplinary action."
                />
            ),
        },
        {
            id: 18,
            question: "Agitations and Strikes",
            answer: (
                <Answer
                    lines={[
                        "Taking part in any movement, agitation, or strike, directly or indirectly, is strictly prohibited.",
                    ]}
                    penalty="May include expulsion or rustication if deemed disruptive to university discipline."
                />
            ),
        },
        {
            id: 19,
            question: "Day Scholar Entry",
            answer: (
                <Answer
                    lines={["Day scholars are not allowed to enter the hostel premises under any circumstances."]}
                    penalty="Entry will result in disciplinary action against both the day scholar and the hosteller involved."
                />
            ),
        },
        {
            id: 20,
            question: "Electricity Usage",
            answer: (
                <Answer
                    lines={["Electrical appliances like fans and lights must be switched off when the room is unoccupied."]}
                    penalty="Repeated negligence will attract fines."
                />
            ),
        },
        {
            id: 21,
            question: "Leave Intimation",
            answer: (
                <Answer
                    lines={[
                        "Leave must be sanctioned by the competent authority and informed to the hostel warden in advance.",
                    ]}
                    penalty="Unauthorised absence will lead to disciplinary action."
                />
            ),
        },
        {
            id: 22,
            question: "Electricity Meter Tampering",
            answer: (
                <Answer
                    lines={["Tampering/damage to electricity meters is strictly prohibited."]}
                    penalty="Full replacement cost will be imposed on the student’s ERP account."
                />
            ),
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-2 space-y-3">
                {/* ✅ Before 1st rule: NOTE */}
                <NoteBox>
                    <span className="font-semibold">NOTE:</span> {topNoteText}
                </NoteBox>

                <FAQ title="Rules & Regulations" subtitle="" items={defaultFAQItems} />

                {/* ✅ After last point: NOTE */}
                <NoteBox>
                    <span className="font-semibold">NOTE:</span> {bottomNoteText}
                </NoteBox>
            </div>
        </section>
    );
}
