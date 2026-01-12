"use client";

import { useLayoutEffect } from "react";
import APITable from "../components/general/api-table";
import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";

const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alumini.webp", // detailed placeholder
    pageTitle: "Patents",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Patents", href: "/patents" },
    ],
};

export default function PatentsPage() {
    useLayoutEffect(() => {
        if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
        return () => {
            if (typeof window !== "undefined") delete window.__breadcrumbData;
        };
    }, []);

    const patentTabs = Array.from({ length: 5 }, (_, i) => {
        const id = 9 + i; // 9 to 13
        const year = 2025 - i; // 2025 to 2021
        const label = `${year}`;

        return {
            value: `year-${year}`,
            label,
            content: (
                <APITable
                    tableId={id.toString()}
                    title={`Patents ${label}`}
                    className="py-16"
                    overflowX={true}
                />
            ),
        };
    });

    return (
        <main className="bg-white font-jakarta">
            <CtcdTrainingTabs customTabs={patentTabs} />
        </main>
    );
}
