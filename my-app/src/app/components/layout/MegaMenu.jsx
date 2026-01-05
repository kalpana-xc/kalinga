'use client';

import Link from 'next/link';

const MegaMenu = ({ sections }) => {
  return (
    <div className="absolute pt-[25px] !w-screen left-1/2 !w-full -translate-x-1/2 z-[99999] pointer-events-auto">
      <div className="relative max-w-7xl mx-auto px-6  ">
        <div className="bg-white rounded-xl shadow-2xl border-2 border-[var(--button-red)] p-6">
          <div className="grid grid-cols-4 gap-6">

            {/* Image Card */}
            <Link
              href="/about-us"
              className="relative rounded-lg overflow-hidden group block min-h-[220px]"
            >
              <img
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/information.png"
                alt="About Kalinga"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">
                  About Kalinga
                </p>
              </div> */}
            </Link>

            {/* Sections */}
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-3 pb-2 border-b border-gray-300">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="block text-sm text-black hover:text-red-600 hover:pl-2 transition-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
