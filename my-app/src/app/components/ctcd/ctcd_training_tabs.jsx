"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import { AccordionItem } from "../general/accordion";


function BulletList({ items }) {
    return (
        <ul className="mt-3 space-y-2 pl-4">
            {items.map((item, idx) => (
                <li
                    key={idx}
                    className="relative text-[14px] leading-[26px] text-[var(--foreground)]/80"
                >
                    <span className="absolute -left-4 top-[10px] h-[6px] w-[6px] rounded-full bg-[var(--button-red)]"></span>
                    {item}
                </li>
            ))}
        </ul>
    );
}

const trainingGlimpse = [
    // Replace these URLs with your actual CTCD images (same as Figma)
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
];

export default function CtcdTrainingTabs() {
    return (
        <section className="w-full">
            {/* Outer dark-blue container */}
            <div className="rounded-[28px] bg-[var(--dark-blue)] p-[18px] md:p-[22px]">
                {/* Top tabs row (4 buttons) */}
                <Tabs defaultValue="domains">
                    <TabsList className="px-[10px] pt-[6px] md:px-[18px] md:pt-[10px]">
                        <TabsTrigger value="domains" className="min-w-[170px]">
                            Training Domains
                        </TabsTrigger>

                        <TabsTrigger value="details" className="min-w-[160px]">
                            Training Details
                        </TabsTrigger>

                        <TabsTrigger value="assessments" className="min-w-[360px]">
                            Our Behavioural and Psychometric Assessments
                        </TabsTrigger>

                        <TabsTrigger value="projects" className="min-w-[280px]">
                            Our Corporate Training Projects
                        </TabsTrigger>
                    </TabsList>

                    {/* White inner panel */}
                    <div className="mt-[16px] rounded-[18px] bg-white px-[26px] py-[22px] md:px-[36px] md:py-[28px]">
                        {/* TAB 1 — Training Domains (FULL pixel layout like screenshot) */}
                        <TabsContent value="domains">
                            <h2 className="font-stix text-[44px] leading-[54px] text-[var(--foreground)]">
                                Training Domains
                            </h2>

                            <p className="mt-[10px] max-w-[980px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                Our training programs are designed based on one mission, i.e., empowering organisations to utilise their PEOPLE effectively.
                                CTCD covers a wide range of training domains under behavioural and technical competencies. Through our customised modules,
                                we aim to build professionals who not only understand PROCESSES but also PEOPLE. They will be ready to meet the changing
                                demands of the industries and adapt to new business challenges.
                            </p>

                            {/* Two beige cards */}
                            <div className="mt-[26px] grid gap-[22px] md:grid-cols-2">
                                <div className="rounded-[16px] bg-[var(--card-sandal)] p-[22px] md:p-[26px]">
                                    <h3 className="font-stix text-[24px] leading-[30px] text-[var(--button-red)]">
                                        Behavioural Topics
                                    </h3>
                                    <p className="mt-[10px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        Our behavioural training programs focus on building skills like creativity, teamwork, communication, stress management,
                                        leadership, emotional intelligence, and professionalism. The sessions include real-world case studies where participants
                                        learn how to build a mindset of adaptability and performance excellence that boosts organisational growth.
                                    </p>
                                </div>

                                <div className="rounded-[16px] bg-[var(--card-sandal)] p-[22px] md:p-[26px]">
                                    <h3 className="font-stix text-[24px] leading-[30px] text-[var(--button-red)]">
                                        Technical Topics
                                    </h3>
                                    <p className="mt-[10px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        Our technical training programs emphasise skill development that is required to perform tasks smoothly and efficiently.
                                        Participants get practical training in automation tools, artificial intelligence, robotics, sustainable manufacturing practices,
                                        advanced manufacturing techniques, data analysis, and much more. They don’t just learn but build technical precision that drives
                                        operational excellence.
                                    </p>
                                </div>
                            </div>

                            {/* Training Glimpse */}
                            <h3 className="mt-[28px] font-stix text-[34px] leading-[44px] text-[var(--foreground)]">
                                Training Glimpse
                            </h3>

                            <div className="mt-[14px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-4">
                                {trainingGlimpse.map((src, idx) => (
                                    <div key={idx} className="overflow-hidden rounded-[14px]">
                                        <Image
                                            src={src}
                                            alt={`Training glimpse ${idx + 1}`}
                                            width={600}
                                            height={400}
                                            className="h-[150px] w-full object-cover md:h-[130px]"
                                            priority={idx === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* TAB 2 */}
                        <TabsContent value="details">
                            <h2 className="font-stix text-[44px] leading-[54px] text-[var(--foreground)]">
                                Training Details
                            </h2>
                            {/* Four beige cards */}
                            <div className="mt-[26px] grid gap-[22px] md:grid-cols-1">


                                {/* Training Duration */}
                                <AccordionItem title="Training Duration" defaultOpen>
                                    <p className="mt-[10px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        The duration of all proposed training programs largely depends on the training objectives of the organisation.
                                    </p>

                                    <BulletList
                                        items={[
                                            "Full Days (6 Hours)",
                                            "Half Days (4 Hours)",
                                            "A session of two hours per day",
                                        ]}
                                    />

                                    <p className="mt-4 text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        Certain training programs are delivered on a nomination basis from organisations for a prescheduled calendar.
                                        Training can also be delivered before and after office hours.
                                    </p>
                                </AccordionItem>

                                {/* Training Venue */}
                                <AccordionItem title="Training Venue" defaultOpen>
                                    <p className="mt-[10px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        The training venue can be mutually decided. It can be delivered at our end, at your end, or at third-party venues like a hotel or a resort, depending upon the client's choice.

                                        If the training is conducted at our end, at the Kalinga Campus at Naya Raipur, we will be providing:

                                    </p>

                                    <BulletList
                                        items={[
                                            "Auditorium ( Having a capacity of 150 )",
                                            "Board Room - 1 - Having a capacity of 20",
                                            "Board Room - 2 - Having a capacity of 25",
                                            "Board Room - 3 - Having a capacity of 10",
                                            "Board Room - 4 - Having a capacity of 30",
                                        ]}
                                    />

                                    <p className="mt-4 text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        All of the above are equipped with air conditioning, Interactive Panels for projection, and soundproofing compliant.
                                    </p>

                                    <BulletList
                                        items={[
                                            "Computers and Laptops (if the training requires the use of computers)",
                                            "Training Kit",
                                            "Lush Green Gardens for outdoor activities",
                                            "Tea / Coffee / Light Snacks and Lunch",
                                            "Parking",
                                        ]}
                                    />

                                    <p className="mt-4 text-[14px] leading-[26px] text-[var(--foreground)]/80">

                                        If the Training is conducted at your end or a third venue, you have to provide:

                                    </p>

                                    <BulletList
                                        items={[
                                            "Training Hall or Board Room with sufficient capacity",
                                            "Projection Device (Projector or TV, or Interactive Panel)*",
                                            "White Board or Glass Board and Marker*",
                                            "Air-conditioning",
                                            "Tea/Coffee and Lunch for the trainer",
                                        ]}
                                    />
                                    <p className="mt-[3px] text-[14px] leading-[26px] text-[var(--foreground)]/80">

                                        * If not available, can be hired and installed at your venue.

                                    </p>

                                    <p className="mt-4 text-[14px] leading-[26px] text-[var(--foreground)]/80">

                                        To be provided by us if the training is conducted at your end

                                    </p>

                                    <BulletList
                                        items={[
                                            "Trainer",
                                            "Training Kits",
                                        ]}
                                    />
                                </AccordionItem>

                                {/* Trainers Profile */}
                                <AccordionItem title="Trainers Profile" defaultOpen>
                                    <p className="mt-[10px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        We offer trainers who have rich experience and knowledge, and considerable training experience.

                                        Depending upon the training objectives, the trainer profile will be shared, and a discussion with the trainer will be conducted offline or online if desired by the client.

                                        Only after the approval of the trainer will the training be initiated.
                                    </p>
                                </AccordionItem>

                                {/* Training Cost */}
                                <AccordionItem title="Training Cost" defaultOpen>

                                    <p className="mt-[10px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        The training cost is dependent upon the Trainer, duration of the training, venue and training aids availability, which can be mutually discussed.
                                    </p>
                                </AccordionItem>


                            </div>

                            {/* Training Glimpse */}
                            <h3 className="mt-[28px] font-stix text-[34px] leading-[44px] text-[var(--foreground)]">
                                Training Glimpse
                            </h3>

                            <div className="mt-[14px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-4">
                                {trainingGlimpse.map((src, idx) => (
                                    <div key={idx} className="overflow-hidden rounded-[14px]">
                                        <Image
                                            src={src}
                                            alt={`Training glimpse ${idx + 1}`}
                                            width={600}
                                            height={400}
                                            className="h-[150px] w-full object-cover md:h-[130px]"
                                            priority={idx === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* TAB 3 */}
                        <TabsContent value="assessments">
                            <h2 className="font-stix text-[44px] leading-[54px] text-[var(--foreground)]">
                                Our Behavioural and Psychometric Assessments
                            </h2>
                            {/* Two beige cards */}
                            <div className="mt-[26px] grid gap-[22px] md:grid-cols-1">
                                <div className="rounded-[16px] bg-[var(--card-sandal)] p-[22px] md:p-[26px]">
                                    <p className="mt-[10px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        A Comprehensive Analysis of Learning Styles, Behavioural (Attitude + Aptitude), and 15 Emotional Intelligence Dimensions Indicative of Personality Strengths and Areas of Improvement.
                                    </p>

                                    <p className="mt-4 text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                        Topics Covered:
                                    </p>

                                    <BulletList
                                        items={[
                                            "System Orientation",
                                            "People Orientation",
                                            "Adaptability",
                                            "Readiness to Change",
                                            "Knowledge",
                                            "Learning Styles",
                                            "Emotional Quotient",
                                        ]}
                                    />
                                </div>
                            </div>

                            {/* Training Glimpse */}
                            <h3 className="mt-[28px] font-stix text-[34px] leading-[44px] text-[var(--foreground)]">
                                Training Glimpse
                            </h3>

                            <div className="mt-[14px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-4">
                                {trainingGlimpse.map((src, idx) => (
                                    <div key={idx} className="overflow-hidden rounded-[14px]">
                                        <Image
                                            src={src}
                                            alt={`Training glimpse ${idx + 1}`}
                                            width={600}
                                            height={400}
                                            className="h-[150px] w-full object-cover md:h-[130px]"
                                            priority={idx === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* TAB 4 */}
                        <TabsContent value="projects">
                            <h2 className="font-stix text-[44px] leading-[54px] text-[var(--foreground)]">
                                Our Corporate Training Projects
                            </h2>
                            <p className="mt-[12px] text-[14px] leading-[26px] text-[var(--foreground)]/80">
                                (Add Projects content exactly as per Figma.)
                            </p>
                        </TabsContent>
                    </div>
                </Tabs>
            </div >
        </section >
    );
}
