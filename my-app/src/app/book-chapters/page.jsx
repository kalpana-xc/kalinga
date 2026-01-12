"use client";

import { useLayoutEffect } from "react";
import APITable from "../components/general/api-table";
import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";

const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alumini.webp",
    pageTitle: "Book Chapters",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Book Chapters", href: "/book-chapters" },
    ],
};

export default function BookChaptersPage() {
    useLayoutEffect(() => {
        if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
        return () => {
            if (typeof window !== "undefined") delete window.__breadcrumbData;
        };
    }, []);

    // 8 tabs: IDs 27-34
    // Mapping logic:
    // 27 -> 2025-2026
    // 28 -> 2024-2025
    // ...
    // 34 -> 2018-2019
    const bookChapterTabs = Array.from({ length: 8 }, (_, i) => {
        const id = 27 + i; // 27 to 34
        const yearStart = 2025 - i; // 2025 to 2018
        const yearEnd = yearStart + 1;
        const label = `${yearStart}-${yearEnd}`;

        return {
            value: `year-${id}`,
            label,
            content: (
                <APITable
                    tableId={id.toString()}
                    title={`Book Chapters ${label}`}
                    className="py-16"
                    overflowX={true}
                />
            ),
        };
    });

    return (
        <main className="bg-white font-jakarta">
            <CtcdTrainingTabs customTabs={bookChapterTabs} />
        </main>
    );
}
