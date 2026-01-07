"use client";

import { useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import CenterOfExcellence from "../about/center_of_excellence";

export default function ResearchCE() {
  const router = useRouter();
  const wrapperRef = useRef(null);

  // ✅ Your same content (unchanged)
  const centres = useMemo(
    () => [
      {
        id: 1,
        name: "Electric Vehicles Training Centre",
        title: "In collaboration with Godawari Electric Motors Pvt. Ltd. (Eblu)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-godawari.jpg",
        href: "/centresofexcellence/godawari",
      },
      {
        id: 2,
        name: "IIoT Training Centre",
        title: "In collaboration with Technoviz Automation",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-technoviz.jpg",
        href: "/centresofexcellence/iiot",
      },
      {
        id: 3,
        name: "Robotics, Coding, & Drones Training Centre",
        title: "In collaboration with BDS Education",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-bds.jpg",
        href: "/centresofexcellence/robotics",
      },
      {
        id: 4,
        name: "MSME Training Centre",
        title: "In collaboration with IamSMEofIndia",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-iamsmeofindia.jpg",
        href: "/centresofexcellence/msme",
      },
      {
        id: 5,
        name: "BRIDGE Courses Training Centre",
        title: "In collaboration with BOSCH",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-bosch.jpg",
        href: "/centresofexcellence/bosch",
      },
      {
        id: 6,
        name: "AI-ML Courses Training Centre",
        title: "In collaboration with IBM Innovation Centre for Education",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-IBM.jpg",
        href: "/centresofexcellence/ai-ml",
      },
      {
        id: 7,
        name: "Automobile Training Centre",
        title: "In collaboration with JustAuto Solutions",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-justauto.jpg",
        href: "/centresofexcellence/automobile",
      },
    ],
    []
  );

  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;

    // ✅ 1) Inject per-card "Read More" toggle for the collaboration line (2nd <p>)
    const applyReadMore = () => {
      const slides = Array.from(root.querySelectorAll(".swiper-slide"));
      slides.forEach((slide, idx) => {
        slide.setAttribute("data-ce-idx", String(idx));

        // The LeadershipCard inside CenterOfExcellence renders text in <p> tags.
        // In your existing CSS you target:
        //  - p:first-of-type (name)
        //  - p:last-of-type (title/collaboration)
        // We'll target the LAST <p> inside the card wrapper for clamping.
        const cardWrap =
          slide.querySelector(".centres-card-wrapper") || slide; // safe fallback
        const ps = Array.from(cardWrap.querySelectorAll("p"));
        if (ps.length < 2) return;

        const titleP = ps[ps.length - 1]; // collaboration line
        titleP.classList.add("ce-clamp-text");
        titleP.setAttribute("data-ce-clamp", "1");

        // Remove older button if any
        const oldBtn = cardWrap.querySelector(".ce-readmore-btn");
        if (oldBtn) oldBtn.remove();

        // If not overflowing (no need button)
        // We must measure AFTER layout; use rAF
        requestAnimationFrame(() => {
          // if expanded already, keep button label "Read Less"
          const isExpanded = titleP.classList.contains("is-expanded");

          // If collapsed height equals scrollHeight, no need Read More
          // Temporarily ensure collapsed for measurement
          if (!isExpanded) {
            // ok
          } else {
            // measure in collapsed state without losing expanded state permanently
            titleP.classList.remove("is-expanded");
          }

          const needsButton = titleP.scrollHeight > titleP.clientHeight + 2;

          // restore expanded state if it was expanded
          if (isExpanded) titleP.classList.add("is-expanded");

          if (!needsButton) return;

          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "ce-readmore-btn";
          btn.textContent = isExpanded ? "Read Less" : "Read More";

          btn.addEventListener("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();

            const nowExpanded = titleP.classList.toggle("is-expanded");
            btn.textContent = nowExpanded ? "Read Less" : "Read More";
          });

          titleP.insertAdjacentElement("afterend", btn);
        });
      });
    };

    applyReadMore();

    const mo = new MutationObserver(() => applyReadMore());
    mo.observe(root, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);

  // ✅ 2) Click card → route (but NOT when clicking Read More button)
  const handleClickCapture = (e) => {
    const btn = e.target?.closest?.(".ce-readmore-btn");
    if (btn) return;

    const slide = e.target?.closest?.(".swiper-slide");
    if (!slide) return;

    const idx = Number(slide.getAttribute("data-ce-idx"));
    const picked = centres[idx];
    if (picked?.href) router.push(picked.href);
  };

  return (
    <div ref={wrapperRef} onClickCapture={handleClickCapture}>
      {/* ✅ ONLY ResearchCE changes — CenterOfExcellence untouched */}
      <style jsx global>{`
        /* Clamp ONLY the collaboration paragraph inside the CoE cards */
        .centres-card-wrapper .ce-clamp-text {
          display: -webkit-box !important;
          -webkit-box-orient: vertical !important;
          -webkit-line-clamp: 2 !important;
          overflow: hidden !important;
          line-height: 1.5 !important;
        }

        .centres-card-wrapper .ce-clamp-text.is-expanded {
          -webkit-line-clamp: unset !important;
          overflow: visible !important;
          display: block !important;
        }

        /* Per-card Read More button: match your font style */
        .centres-card-wrapper .ce-readmore-btn {
          margin-top: 6px !important;
          width: fit-content !important;
          background: transparent !important;
          border: 0 !important;
          padding: 0 !important;
          cursor: pointer !important;
          text-decoration: underline !important;

          font: inherit !important;
          font-size: 13px !important; /* matches your centre title sizing */
          line-height: 1.5 !important;
          font-weight: 600 !important;
          color: var(--button-red) !important;
        }

        /* Make whole slide feel clickable */
        .swiper-slide {
          cursor: pointer;
        }

        /* But the Read More button should not look like slide click */
        .centres-card-wrapper .ce-readmore-btn {
          cursor: pointer !important;
        }
      `}</style>

      <CenterOfExcellence
        title="Introducing Our Centres of Excellence (CoE)"
        description="To align academic learning with industrial knowledge, we have partnered with seven leading companies that offer skill-based training to students in various high-demanding sectors like electric vehicles, drone technology, AI, cybersecurity, automobiles, and many more. We’re a leading research university, empowering students to go from textbooks to real-world innovation and become ready to stand out in the competitive job market."
        centres={centres}
      />
    </div>
  );
}
