'use client';

import Link from 'next/link';

const MegaMenu = ({ sections }) => {
  return (
    <div className="absolute left-0 top-full pt-2 w-max min-w-[400px] animate-fadeIn z-[10100] pointer-events-auto">
      <div className="bg-white text-black rounded-lg shadow-2xl border border-gray-100 p-6 z-[10100] relative">
        <div className="grid grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="block text-sm text-gray-600 hover:text-red-600 hover:pl-2 transition-all duration-200 normal-case"
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
  );
};

export default MegaMenu;

