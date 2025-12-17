import ResearchIntro from "@/app/components/research-resources/research_intro";

export default function ResearchResources() {
    return (
        <>
            <ResearchIntro
                title="Research Resources"
                subtitle="Powering Your Curiosity At Every Step"
                secondarySubtitle="Comprehensive Research Resources And Tools"
                description={["Kalinga University is one of the best Research-Intensive University as it is more than just your academic curriculum; it’s about generating curiosity, creativity, and a continuous learning environment. From the first year, we encourage our students to develop a passion for research and execute their ideas into a paper, a book, or a startup. Our tech-savvy research scholars transform their ideas into impactful outcomes through our abundant research facilities. ",
                    "With our open-access tools and next-gen facilities, our research team ensures that your output is not only academically correct but also socially and economically relevant. Our National and Global tie-ups will change the game of your research work by extending your networking opportunities. "
                ]}
                initialVisibleParagraphs={1}
                buttonLabel="Read more"
                showButton={true}
                showKnowMore={false}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
                imageAlt="Kalinga University campus"
            />
        </>
    )
}