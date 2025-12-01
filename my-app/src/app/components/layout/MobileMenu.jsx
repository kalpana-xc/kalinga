'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const MobileMenu = ({ navItems, onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(108);
  const menuRef = useRef(null);

  useEffect(() => {
    // Get the header element and calculate its height
    const header = document.querySelector('header');
    if (header) {
      const height = header.offsetHeight;
      setHeaderHeight(height);
    }

    // Update height on resize
    const handleResize = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = (id) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  return (
    <>
      {/* Overlay */}
      {/* <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden animate-fadeIn"
        onClick={onClose}
      /> */}

      {/* Menu Panel */}
      <div 
        ref={menuRef}
        className="fixed left-0 right-0 bottom-0 bg-white z-12 lg:hidden overflow-y-auto animate-slideDown shadow-lg"
        style={{ top: `${headerHeight}px` }}
      >
        <div className="container mx-auto px-4 py-6">
          {/* Navigation Items */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 py-3 font-medium transition ${
                      item.id === 'admissions' 
                        ? 'text-[#c92a27] font-semibold' 
                        : 'text-gray-800 hover:text-[#c92a27]'
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu && (
                    <button
                      onClick={() => toggleMenu(item.id)}
                      className="p-3 hover:bg-[var(--red)] text-var(--dark-gray) hover:text-white  rounded transition"
                      aria-label={`Toggle ${item.label} menu`}
                    >
                      <svg
                        className={`w-5 h-5 transition-transform ${expandedMenu === item.id ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.megaMenu && expandedMenu === item.id && (
                  <div className="pl-4 pb-3 space-y-3 animate-slideDown bg-gray-50">
                    {item.megaMenu.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-2 pt-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.links.map((link, linkIdx) => (
                            <li key={linkIdx}>
                              <Link
                                href={link.href}
                                className="block py-1 text-sm text-gray-600 hover:text-[#c92a27] transition"
                                onClick={onClose}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

