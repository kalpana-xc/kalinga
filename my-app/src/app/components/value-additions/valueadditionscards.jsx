// ✅ 1) VALUE ADDITION CARDS (Modal + Link Navigation)
// File: valueadditioncards.jsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

function Valueadditioncards() {
    const wrapperRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", description: "" });

    const cards = [
        {
            title: "Incubation Center",
            description:
                "Kalinga Incubation Foundation supports students’ innovative business ideas and turns them into successful business ventures.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif.png",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            // link: "/incubation-centre",
        },
        {
            title: "CTCD",
            description:
                "Our Corporate Training and Consultancy Division (CTCD) provides customised training to organisations using experiential learning methods.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects.webp",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            link: "/ctcd", // ✅ example navigation
        },
        {
            title: "CIF Labs",
            description:
                "Facilitating researchers and students with high-end instruments in basic, applied, and life sciences.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/modernlabrotary.webp",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            // link: "/cif-labs",
        },
        {
            title: "CoEs",
            description:
                "Our Centres of Excellence include: Electric Vehicles (Godawari Electric Motors Pvt. Ltd. - Eblu), IIoT (Technoviz Automation), Robotics, Coding, & Drones (BDS Education), AI-ML (IBM Innovation Centre for Education - ICE), MSME (IamSMEofIndia), BRIDGE Courses (BOSCH), Automobile Training Centre (JustAuto Solutions).",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002977.png",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            link: "/centres-of-excellence", // ✅ example navigation
        },
        {
            title: "New Age Programs",
            description:
                "Our next-gen programs will prepare you for future career roles in the tech and creative world.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/career.webp",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            // link: "/new-age-programs",
        },
    ];

    useEffect(() => {
        const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
        if (open) document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleClickCapture = (e) => {
        const btn = e.target?.closest?.("button, a");
        if (!btn) return;

        const label = (btn.textContent || "").trim().toLowerCase();
        if (!label.includes("know more")) return;

        e.preventDefault();

        const root = wrapperRef.current;
        if (!root) return;

        const knowMoreButtons = Array.from(root.querySelectorAll("button, a")).filter((el) =>
            (el.textContent || "").trim().toLowerCase().includes("know more")
        );

        const idx = knowMoreButtons.indexOf(btn);
        const picked = cards[idx];
        if (!picked) return;

        // ✅ Navigate if link exists
        if (picked.link) {
            window.location.assign(picked.link);
            return;
        }

        // ✅ Else modal
        setModalData({
            title: picked?.title || "Details",
            description: picked?.description || "",
        });
        setOpen(true);
    };

    return (
        <>
            <style jsx global>{`
        .valueadd-cards-wrapper img {
          width: 100% !important;
          height: 340px !important;
          object-fit: cover !important;
        }

        .valueadd-cards-wrapper img[src=""],
        .valueadd-cards-wrapper img:not([src]) {
          display: none !important;
        }
      `}</style>

            <div ref={wrapperRef} onClickCapture={handleClickCapture} className="valueadd-cards-wrapper">
                <Cards cards={cards} />
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
                    role="dialog"
                    aria-modal="true"
                    onMouseDown={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    <div
                        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                                {modalData.title}
                            </h3>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="mt-4 text-[var(--light-text-gray)] leading-relaxed">
                            {modalData.description}
                        </p>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Valueadditioncards;
