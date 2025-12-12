import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

const defaultActivities = [
  {
    id: 1,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 3,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
];

export default function StudentActivities({
  title = "Student Activities",
  subtitle = "Lorem ipsum dolor sit amet, consectetur",
  activities = defaultActivities,
}) {
  return (
    <section className="bg-white py-16">
      <SectionHeading
        title={title}
        subtitle={subtitle}
        subtitleClassName="text-center"
        titleClassName="text-center"
      />
      <div className="container mx-auto px-6 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-[var(--light-gray)] rounded-lg p-5">
              <div className="relative">
                <Image
                  src={activity.imageSrc}
                  alt={activity.imageAlt}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
                {activity.date && (
                  <div className="absolute bottom-3 right-3 bg-[var(--dark-orange-red-light)] px-3 py-1.5 rounded text-[#000] text-sm font-medium">
                    {activity.date}
                  </div>
                )}
              </div>
              <h3 className="text-left text-lg mt-5 mb-2 leading-normal">{activity.title}</h3>
              <p className="text-left">{activity.description}</p>
              <GlobalArrowButton
                className="w-fit mt-1 !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                textClassName="!text-[var(--button-red)]  "
                arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
              >
                {activity.buttonText}
              </GlobalArrowButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}