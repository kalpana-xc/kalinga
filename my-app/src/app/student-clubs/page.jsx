import MainIntro from "../components/about/main_intro";
import AdmissionCareer from "../components/general/admission_cta";
import AutoBreadcrumb from "../components/layout/BreadcrumbData";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campuslife.webp",
  pageTitle: "Student Clubs",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Student Clubs", href: "student-clubs" },
  ],
};

/* ---------------- DATA (Easy to Update) ---------------- */
const clubSections = [
  {
    id: 1,
    title: "Commerce & Management",
    clubs: [
      {
        name: "Finance Club – Bull",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Finance+Club+%E2%80%93+Bull.webp",
      },
      {
        name: "Marketing Club – Mercadeo",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Marketing+Club+-+Mercadeo.webp",
      },
      {
        name: "HR Club – Sapiens",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/HR+Club+-+Sapiens.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Pharmacy",
    clubs: [
      {
        name: "Pharma Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Pharmacy.webp",
      },
      
    ],
  },
  {
    id: 3,
    title: "Education",
    clubs: [
      {
        name: "Educraft Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Educraft+Club.webp",
      },
      
    ],
  },
  {
    id: 4,
    title: "Arts & Humanities",
    clubs: [
      {
        name: "Behavioural Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Behavioural+Club.webp",
      },
      {
        name: "Literary Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Literary+Club.webp",
      },
      {
        name: "Bhoomi Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Bhoomi+Club.webp",
      },
    ],

  },
  {
    id: 5,
    title: "Science",
    clubs: [
      {
        name: "The Microbiologists society India (MBSI) Student Chapter",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/(MBSI)+Student+Chapter.webp",
      },
      {
        name: "Green Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Green+Club.webp",
      },
     
    ],
    
  },
  {
    id: 6,
    title: "Technology",
    clubs: [
      {
        name: "Spark Club (Electrical Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Spark+Club+(Electrical+Engineering).webp",
      },
      {
        name: "Avishkar Club (Civil Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Avishkar+Club+(Civil+Engineering).webp",
      },
      {
        name: "Royal Mechanical Club (Mechanical Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Royal+Mechanical+Club+(Mechanical+Engineering).webp",
      },
      {
        name: "Standard Club under BIS (Mechanical and Mining Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Standard+Club+under+BIS+(Mechanical+and+Mining+Engineering).webp",  
      }
    ],
    
  },
  {
    id: 7,
    title: "Information Technology",
    clubs: [
      {
        name: "Infinity Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Infinity+Club.webp",
      },
     
    ],
    
  },
  {
    id: 8,
    title: "Law",
    clubs: [
      {
        name: "Moot Court Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Moot+Court+Club.webp",
      },
      {
        name: "Legal Aid Clinic",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Legal+Aid+Clinic.webp",
      },
      {
        name: "Pro Bono Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Pro+Bono+Club.webp",
      },
    ],
    
  },
 

];

/* ---------------- PAGE ---------------- */
export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <AutoBreadcrumb data={breadcrumbData} />

      {/* Intro */}
      <MainIntro
        title="Student Clubs"
        description={[
          "The vibrant clubs of KU encourage leadership, creativity, collaboration, and holistic development beyond classrooms.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campus-life-intro-1.webp"
        imageAlt="Student Clubs"
        showButton={false}
        showKnowMore={false}
      />

      {/* Universal Title + Subheading */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-stix text-[var(--foreground)] mb-3">
            Academic Clubs

          </h2>
          <p className="max-w-6xl mx-auto text-[var(--light-text-gray)]">
           Our academic clubs provide students with the resources and practical exposure that supplement their studies. We believe that knowledge should go beyond classroom studies, and students must be professionally prepared to take up any challenge in their field of study. Our academic clubs will expand their network and connect them with our faculty members. 

          </p>
        </div>
      </section>

      {/* Club Sections */}
      {clubSections.map((section) => (
        <section key={section.id} className="py-14 bg-white">
          <div className="container mx-auto px-4">

            {/* Smaller Section Title */}
            <h3 className="  text-[var(--foreground)] mb-8 text-center">
              {section.title}
            </h3>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.clubs.map((club, index) => (
                <div
                  key={index}
                  className="bg-[#F5E6D3] rounded-xl p-6 min-h-[280px] flex flex-col items-center justify-between"
                >
                  {/* Image Box */}
                  <div className="bg-white rounded-xl w-full h-[180px] flex items-center justify-center">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="max-w-[80%] max-h-[80%] object-contain"
                    />
                  </div>

                  {/* Club Name */}
                  <p className="mt-2 text-center text-[var(--foreground)]">
                    {club.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <AdmissionCareer />
    </>
  );
}
