import Image from "next/image";

const defaultCards = [
  {
    id: 1,
    text: "Get Internship opportunities (on-campus/off-campus) and practical projects before completing your degree.",
  },
  {
    id: 2,
    text: "Our incubation centre offers tools, resources, and guidance to make your startup dream come true.",
  },
  {
    id: 3,
    text: "Win amazing prizes and certificates at Hackathons and tech competitions, and challenge your skills.",
  },
];

export default function WeStandOut({
  title = "Here's How We Stand Out!",
  cards = defaultCards,
  avatarImage = null,
  avatarInitial = "J",
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Title */}
        <h2 className="font-stix text-[var(--foreground)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center">
          {title}
        </h2>

        {/* Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {cards.map((card) => (
            <div className="bg-[var(--card-sandal)] rounded-xl p-2">
              <div
                key={card.id}
                className="bg-[var(--button-red)] rounded-xl p-6 md:p-8 lg:p-10 text-white min-h-[180px] md:min-h-[200px] flex items-center h-full text-center"
              >
                <p className="leading-relaxed font-plus-jakarta-sans">
                  {card.text}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

