export default function PublicationGrid() {
  const stats = [
    {
      title: "Publications",
      value: "1250 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Startups",
      value: "12 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Awards",
      value: "63 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Conferences",
      value: "78 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 pb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[var(--light-gray)] hover:bg-[var(--dark-skin)] rounded-lg p-10 text-left transition-colors flex flex-col gap-15"
        >
          <div>
          <h3 className="mb-2">{stat.title}</h3>
          <div className="w-full h-px bg-black mb-4"></div>
          </div>
          <div>
          <h3 className="!text-6xl font-semibold mb-3">{stat.value}</h3>
          <p className="text-[var(--light-text-gray)]">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}