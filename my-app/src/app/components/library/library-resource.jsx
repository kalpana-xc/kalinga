"use client";

import { useEffect } from "react";
import UpcomingConference from "../research/upcoming_conference";

const eResources = [
  {
    id: 1,
    title: "SCOPUS",
    description:
      "Scopus is a comprehensive abstract and citation database used for academic research across various disciplines. Developed by Elsevier, it is widely utilized by researchers, academics, and institutions to access a broad range of scientific literature and track research impact. A total of 49,037 journals from various disciplines are indexed in this database.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-scopus.jpg",
    href: "https://www.elsevier.com/en-in/products/scopus",
  },
  {
    id: 2,
    title: "LexisNexis",
    description:
      "LexisNexis is a global provider of information and analytics solutions for professionals in the legal, risk management, corporate, government, and academic sectors, offering content-enabled workflows, data analytics, and AI-powered tools to enhance decision-making and productivity. LexisNexis pioneered the electronic accessibility of legal documents and has since evolved into a comprehensive database offering a vast range of resources such as legal resources, legal news, business and company information, IPR, Taxation and Labour Law etc.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-lexisnexis.jpg",
    href: "https://www.lexisnexis.com/community/insights/professional/resources",
  },
  {
    id: 3,
    title: "DELNET",
    description:
      "DELNET was started at the India International Centre Library in January 1988 and was registered as a society in 1992. It was initially supported by the National Information System for Science and Technology (NISSAT), Department of Scientific and Industrial Research, Government of India. It was subsequently supported by the National Informatics Centre, Department of Information Technology, Ministry of Communications and Information Technology, Government of India and the Ministry of Culture, Government of India.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-delnet.jpg",
    href: "https://www.delnet.in/",
  },
  {
    id: 4,
    title: "DRILLBIT",
    description:
      "Drillbit is a cloud-based tool designed to assist educators and students in managing and improving academic writing skills. Drillbit is designed to enhance the writing process, providing tools and resources that support better writing practices and academic integrity. Its focus on grammar, style, and feedback makes it a valuable resource for both students looking to improve their writing and educators aiming to support their students’ development.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-drillbit.jpg",
    href: "https://www.drillbitplagiarism.com/",
  },
  {
    id: 5,
    title: "TURNITIN",
    description:
      "Turnitin is widely used across educational institutions to maintain academic integrity and improve the quality of scholarly work. It’s important to note that while Turnitin is a powerful tool, it should be used as part of a broader approach to teaching academic integrity and writing skills.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-turnitin.jpg",
    href: "https://www.turnitin.com/",
  },
  {
    id: 6,
    title: "NPTEL",
    description:
      "Initiated by seven Indian Institutes of Technology. The main goal of NPTEL Phase II was to build on the engineering and core science courses launched previously in NPTEL Phase I. An additional 600 web and video courses were created in all major branches of engineering, physical sciences at the undergraduate and postgraduate levels and management courses at the postgraduate level. Several improvements such as indexing of all video and web courses and keyword search were implemented 3000+Courses Available for Self-study.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-nptel.jpg",
    href: "https://nptel.ac.in/",
  },
  {
    id: 7,
    title: "NDLI",
    description:
      "NDLI is a project under Ministry of Human Resource Development, India. The objective is to collect and collate metadata and provide full text index from several national and international digital libraries, as well as other relevant sources. It is a digital repository containing textbooks, articles, videos, audio books, lectures, simulations, fiction and all other kinds of learning media. The NDLI provides access to many books in English and various Indian languages NDL host over 4,58,715+ Item in Repository.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-ndli.jpg",
    href: "https://club.ndl.iitkgp.ac.in/club-home",
  },
  {
    id: 8,
    title: "IRINS",
    description:
      "IRINS is web-based Research Information Management (RIM) service developed by the Information and Library Network (INFLIBNET) Centre. The portal facilitates academic, R&D organizations and faculty members, scientists to collect, curate and showcase scholarly communication activities and provide an opportunity to create the scholarly network. The IRINS is available as free software-as-service to the academic and R&D organizations in India. The IRINS would support to integrate the existing research management system such as HR system, course management, grant management system, institutional repository, open and commercial citation databases, scholarly publishers, etc. It has integrated with academic identity such as ORCID ID, ScopusID, Research ID, Microsoft Academic ID, Google Scholar ID for ingesting the scholarly publication from various sources.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-irins.jpg",
    href: "https://irins.org/",
  },
  {
    id: 9,
    title: "INFEED",
    description:
      "INDIAN Access Management Federation (INFED), the first Federation in India, has adopted Shibboleth, a standard-based open-source software, for authenticating authorized users from colleges and universities and provide them seamless access to e-resources from anywhere, anytime. The INFLIBNET Centre, as one of its core mandates, provides access to scholarly e-resource to universities and colleges in India under the e-ShodhSindhu. The INFED is being set-up as a centralized agency to coordinate with member institutions in the process of implementation of user authentication and access control mechanism distributed across participating institutions using standardized rules and metadata for exchange of attributes.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/library-eresourse-infed.jpg",
    href: "https://infeed.in/",
  },
];

export default function LibraryResource() {
  useEffect(() => {
    const wrapper = document.querySelector(".library-e-resources-wrapper");
    if (!wrapper) return;

    // 1) Change "Register Now" text to "Open Link"
    const replaceButtonText = () => {
      const all = wrapper.querySelectorAll("*");
      all.forEach((el) => {
        const txt = el.textContent?.trim();
        if (txt === "Register Now") {
          if (el.children.length === 0) el.textContent = "Open Link";
        }
      });
    };

    replaceButtonText();
    const mo = new MutationObserver(() => replaceButtonText());
    mo.observe(wrapper, { childList: true, subtree: true });

    // 2) Make "Open Link" open href of active slide
    const getActiveHref = () => {
      const active = wrapper.querySelector(".swiper-slide-active");
      if (!active) return null;

      const rawIdx = active.getAttribute("data-swiper-slide-index");
      if (rawIdx !== null && rawIdx !== "") {
        const idx = Number(rawIdx);
        return eResources[idx]?.href || null;
      }

      const titleEl = active.querySelector("h3, h2, h1");
      const title = titleEl?.textContent?.trim();
      const found = eResources.find((r) => r.title === title);
      return found?.href || null;
    };

    const clickHandler = (e) => {
      let el = e.target;
      while (el && el !== wrapper) {
        const t = el.textContent?.trim();
        if (t === "Open Link" || t === "Register Now") {
          const href = getActiveHref();
          if (href) window.open(href, "_blank", "noopener,noreferrer");
          return;
        }
        el = el.parentElement;
      }
    };

    wrapper.addEventListener("click", clickHandler, true);

    // ✅ Read More / Read Less for the description paragraph inside UpcomingConference
    const initReadMore = () => {
      const slides = wrapper.querySelectorAll(".swiper-slide");

      slides.forEach((slide) => {
        // The description in your UpcomingConference:
        // <p class="text-[var(--light-text-gray)] text-sm">{conf.description}</p>
        const desc = slide.querySelector("p.text-\\[var\\(--light-text-gray\\)\\]");
        if (!desc) return;

        // Remove previous button if any
        const oldBtn = slide.querySelector(".ku-readmore-btn");
        if (oldBtn) oldBtn.remove();

        // Reset to collapsed on rerender
        desc.classList.remove("is-expanded");
        desc.classList.add("ku-readmore-text");

        requestAnimationFrame(() => {
          const cs = window.getComputedStyle(desc);
          let lineHeight = parseFloat(cs.lineHeight);
          if (Number.isNaN(lineHeight)) {
            const fontSize = parseFloat(cs.fontSize) || 16;
            lineHeight = fontSize * 1.4;
          }

          const maxLines = 3;
          const maxHeight = Math.ceil(lineHeight * maxLines);

          // If doesn't exceed 3 lines, no Read More
          if (desc.scrollHeight <= maxHeight + 2) return;

          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "ku-readmore-btn";
          btn.textContent = "Read More";

          btn.addEventListener("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();

            const expanded = desc.classList.toggle("is-expanded");
            btn.textContent = expanded ? "Read Less" : "Read More";
          });

          desc.insertAdjacentElement("afterend", btn);
        });
      });
    };

    initReadMore();
    const mo2 = new MutationObserver(() => initReadMore());
    mo2.observe(wrapper, { childList: true, subtree: true });

    return () => {
      wrapper.removeEventListener("click", clickHandler, true);
      mo.disconnect();
      mo2.disconnect();
    };
  }, []);

  return (
    <div className="library-e-resources-wrapper py-12 md:py-16">
      <style jsx global>{`
        /* =============================
           IMAGE WIDTH FIX (your existing)
           ============================= */
        .library-e-resources-wrapper :global(.swiper-slide > div > div) {
          align-items: flex-start !important;
        }

        .library-e-resources-wrapper
          :global(.swiper-slide .overflow-hidden.rounded-xl) {
          flex: 0 0 34% !important;
          max-width: 34% !important;
          height: 170px !important;
          background: transparent !important;

          display: flex !important;
          justify-content: center !important;
          align-items: center !important;

          padding: 0 !important;
          margin: 0 auto !important;
        }

        .library-e-resources-wrapper
          :global(.swiper-slide .overflow-hidden.rounded-xl > span),
        .library-e-resources-wrapper
          :global(.swiper-slide .overflow-hidden.rounded-xl > div) {
          width: 100% !important;
          height: 100% !important;

          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }

        .library-e-resources-wrapper :global(.swiper-slide img.object-cover) {
          width: auto !important;
          max-width: 85% !important;
          max-height: 95% !important;
          object-fit: contain !important;
          object-position: center !important;
          display: block !important;
          margin: 0 auto !important;
        }

        .library-e-resources-wrapper :global(.swiper-slide > div) {
          padding-top: 32px !important;
        }

        /* =============================
           ✅ READ MORE (works with your UpcomingConference markup)
           ============================= */
        .library-e-resources-wrapper :global(.ku-readmore-text) {
          display: -webkit-box !important;
          -webkit-box-orient: vertical !important;
          -webkit-line-clamp: 3 !important;
          overflow: hidden !important;

          /* keep consistent measurement */
          line-height: 1.5 !important;
        }

        .library-e-resources-wrapper :global(.ku-readmore-text.is-expanded) {
          -webkit-line-clamp: unset !important;
          overflow: visible !important;
          display: block !important;
        }

        .library-e-resources-wrapper :global(.ku-readmore-btn) {
          margin-top: 6px !important;

          /* ✅ match component font automatically */
          font: inherit !important;
          font-size: inherit !important;
          line-height: inherit !important;

          font-weight: 600 !important;
          color: #7b4b2a !important; /* ✅ brown */

          background: transparent !important;
          border: 0 !important;
          padding: 0 !important;
          cursor: pointer !important;
          text-decoration: underline !important;
          width: fit-content !important;
        }
      `}</style>

      <UpcomingConference
        conferences={eResources}
        title="E-Resources"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
        showCategory={false}
        showDate={false}
        imageHeight={170}
      />
    </div>
  );
}
