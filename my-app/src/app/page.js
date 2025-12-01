import HeroSection from "./components/home/HeroSection";
import Link from "next/link";
import Image from "next/image"; 
import FlatIcon from "./components/general/flat-icon";

// TEMP ICON FALLBACK - Fix for FlatIcon not loading
const iconSrcMap = {
  "marketing-plan": "/icons/marketing-plan.svg",
  "academics": "/icons/academics.svg",
  // Add more fallback paths as needed
};

const quickLinks = [
  {
    title: "About Us",
    description: "Learn about our vision, mission, and values",
    href: "/about",
    icon: "marketing-plan"
  },
  {
    title: "Academics",
    description: "Learn about our vision, mission, and values",
    href: "/about",
    icon: "academics"
  },
  {
    title: "Admissions",
    description: "Learn about our vision, mission, and values",
    href: "/about",
    icon: "email"
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Links Section */}
      <section className="container -mt-16 mx-auto px-4 py-16 bg-[var(--dark-blue)]/80 z-2 backdrop-blur-xs relative rounded-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {quickLinks.map((link) => (
            <Link key={link.title} href={link.href} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition flex items-center gap-2">
              {/* Fallback icon logic */}
              <span className="w-6 h-6 flex items-center justify-center">
               <FlatIcon name="call" className="w-6 h-6 text-[var(--dark-blue)]" />
               <h3 className="text-base font-inter mb-2">{link.title}</h3>
             </span>
           </Link>
         ))}
       </div>
     </section>
   </>
 );
}
