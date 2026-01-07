'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useBreadcrumb } from './BreadcrumbContext';
import { useEffect, useRef } from 'react';

const imageposition = "object-top";

// Function to convert text to proper title case
// applyLowercaseRestrictions: if true, applies lowercase restrictions (of, and, the, etc.) for department/course pages
// if false, preserves existing capitalizations and capitalizes all words normally without restrictions
const toTitleCase = (str, applyLowercaseRestrictions = false) => {
  if (!str) return '';

  const words = str.split(' ');

  // If lowercase restrictions should not be applied, preserve existing caps and capitalize normally
  if (!applyLowercaseRestrictions) {
    return words
      .map((word) => {
        // If word is already all caps (like "SDG", "SGD"), preserve it
        if (word === word.toUpperCase() && word.length > 1) {
          return word;
        }
        // Otherwise, capitalize first letter and lowercase the rest
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  }

  // Words that should be lowercase unless they're the first word (for department/course pages)
  const lowercaseWords = ['of', 'and', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];

  return words
    .map((word, index) => {
      const lowerWord = word.toLowerCase();

      // If word is already all caps (like "SDG", "SGD"), preserve it
      if (word === word.toUpperCase() && word.length > 1) {
        return word;
      }

      // Always capitalize first word, or if word is not in lowercase list
      if (index === 0 || !lowercaseWords.includes(lowerWord)) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // Keep lowercase for words in the list (except first word)
      return lowerWord;
    })
    .join(' ');
};

// Static page titles mapping
const STATIC_PAGE_TITLES = {
  '/about-us': 'About Us',
  '/admissions': 'Admissions',
  '/placements': 'Placements',
  '/research': 'Research',
  '/campuslife': 'Campus Life',
  '/contact-us': 'Contact Us',
  '/downloads': 'Downloads',
  '/blog': 'Blog',
  '/news-and-events': 'News & Events',
  '/student-clubs': 'Student Clubs',
  '/student-welfare': 'Student Welfare Services',
  '/kif': 'Kalinga Incubation Foundation',
  '/training-and-placement-cell': 'Career Development Centre',
  '/ncc': 'National Cadet Corps (NCC)',
  '/alumini': 'Alumni',
  '/international': 'International',
  '/iqac': 'IQAC',
  '/nirf': 'NIRF',
  '/naac': 'NAAC',
  '/careers': 'Careers',
};

const Breadcrumb = ({ customBreadcrumbs, heroImage, pageTitle }) => {
  const pathname = usePathname();
  const breadcrumbContext = useBreadcrumb();
  const { breadcrumbData: contextData, isLoading: contextLoading, setBreadcrumbData, setIsLoading } = breadcrumbContext || {};
  const prevPathnameRef = useRef(pathname);

  // Clear old data and window.__breadcrumbData immediately when pathname changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      // Clear previous page's data immediately
      if (setBreadcrumbData) {
        setBreadcrumbData(null);
      }
      if (setIsLoading) {
        setIsLoading(true);
      }
      // Clear any stale window.__breadcrumbData from previous page
      if (typeof window !== 'undefined' && window.__breadcrumbData) {
        delete window.__breadcrumbData;
      }
      prevPathnameRef.current = pathname;
    }
  }, [pathname, setBreadcrumbData, setIsLoading]);

  // Check for new breadcrumb data from window.__breadcrumbData (legacy support)
  useEffect(() => {
    if (!breadcrumbContext?.setBreadcrumbData) return;

    // Check immediately for new data
    if (typeof window !== 'undefined' && window.__breadcrumbData) {
      const data = window.__breadcrumbData;
      breadcrumbContext.setBreadcrumbData(data);
      delete window.__breadcrumbData;
      if (setIsLoading) {
        setIsLoading(false);
      }
      return;
    }

    // Also check after a microtask
    const timeoutId = setTimeout(() => {
      if (typeof window !== 'undefined' && window.__breadcrumbData) {
        const data = window.__breadcrumbData;
        breadcrumbContext.setBreadcrumbData(data);
        delete window.__breadcrumbData;
        if (setIsLoading) {
          setIsLoading(false);
        }
      } else {
        // If no data arrives, check if we're on a static page or can generate from URL
        // We set loading to false to prevent infinite loading state
        const fallbackTimeout = setTimeout(() => {
          if (setIsLoading) {
            setIsLoading(false);
          }
        }, 800); // 800ms timeout for legacy data checks
        return () => clearTimeout(fallbackTimeout);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname, breadcrumbContext, setBreadcrumbData, setIsLoading]);

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null;

  // Excluded pages
  const excludedPaths = [
    '/corporate-training-and-consultancy-division',
    '/kalsee',
    '/kalmat'
  ];
  if (excludedPaths.includes(pathname)) return null;

  // 1. Prioritize props
  let finalHeroImage = heroImage;
  let finalPageTitle = pageTitle;
  let finalCustomBreadcrumbs = customBreadcrumbs;

  // 2. Use Static Map if no props provided and matches exact path
  if (!finalPageTitle && STATIC_PAGE_TITLES[pathname]) {
    finalPageTitle = STATIC_PAGE_TITLES[pathname];
  }

  // 3. Use Context Data if available
  if (!finalHeroImage) finalHeroImage = contextData?.heroImage;
  if (!finalPageTitle) finalPageTitle = contextData?.pageTitle;
  if (!finalCustomBreadcrumbs) finalCustomBreadcrumbs = contextData?.customBreadcrumbs;

  const finalImagePosition = contextData?.imageposition || imageposition;

  // Generate breadcrumbs helper
  const generateBreadcrumbs = () => {
    if (finalCustomBreadcrumbs !== undefined) return finalCustomBreadcrumbs;

    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', href: '/' }];

    paths.forEach((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');

      // Use static title map for label if available, otherwise title case the path segment
      let label = STATIC_PAGE_TITLES[href];
      if (!label) {
        label = path
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }

      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // LOADING LOGIC:
  // Show loading ONLY if:
  // 1. Context says loading AND
  // 2. We don't have enough data (no image AND (no title OR title came from fallback URL logic))
  // However, for static pages in our map, we should NEVER show loading if we have the title.

  const isDynamicRoute = pathname.includes('/courses/') || pathname.includes('/departments/');
  const isStaticKnownPage = !!STATIC_PAGE_TITLES[pathname];

  // If we have data from props or static map, we are NOT loading for the purpose of the UI
  const hasData = !!(finalHeroImage || (finalPageTitle && (isStaticKnownPage || !isDynamicRoute)) || (finalCustomBreadcrumbs && finalCustomBreadcrumbs.length > 0));

  // If it's a dynamic route and we don't have data yet, respect context loading
  // If it's a static route, we can likely show what we have (URL-based title) immediately
  const isLoading = contextLoading && !hasData && isDynamicRoute;

  // Apply lowercase restrictions only for department or course pages
  const applyLowercaseRestrictions = isDynamicRoute;

  // Use pageTitle if provided, otherwise use last breadcrumb label
  const currentPageTitle = finalPageTitle || toTitleCase(breadcrumbs[breadcrumbs.length - 1]?.label || '', applyLowercaseRestrictions);

  // Use resolved image or placeholder
  const resolvedHeroImage = finalHeroImage || null;

  return (
    <div key={pathname} className="relative px-2">
      {/* Hero Image Section */}
      <div className="relative h-[400px] rounded-4xl md:h-[400px] lg:h-[400px] w-full overflow-visible bg-gradient-to-br from-[var(--dark-blue)] to-[var(--foreground)] z-0 pb-20 md:pb-24 lg:pb-28">
        {isLoading ? (
          <>
            {/* Loading state with spinner */}
            <div className="absolute rounded-4xl inset-0 bg-gradient-to-br from-[var(--dark-blue)] via-[var(--dark-blue)]/90 to-[var(--foreground)]/95"></div>
            <div className="absolute rounded-4xl inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-sm font-medium">Loading...</p>
              </div>
            </div>
          </>
        ) : resolvedHeroImage ? (
          <>
            <div className="absolute inset-0 overflow-hidden rounded-4xl">
              <Image
                key={`${pathname}-${resolvedHeroImage}`}
                src={resolvedHeroImage}
                alt={currentPageTitle}
                fill
                className={`object-cover ${finalImagePosition}`}
                priority
                unoptimized
              />
              {/* Gradient Overlay for image */}
              <div className="absolute inset-0"></div>
            </div>
          </>
        ) : (
          <>
            {/* Placeholder gradient background */}
            <div className="absolute rounded-4xl inset-0 bg-gradient-to-br from-[var(--dark-blue)] via-[var(--dark-blue)]/90 to-[var(--foreground)]/95"></div>
            {/* Placeholder icon */}
            <div className="absolute rounded-4xl inset-0 flex items-center justify-center">
              <div className="text-center text-white/30">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-medium">No Image Available</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* White Section */}
      <div className="relative bg-white py-4 md:py-6 lg:py-8 z-0">
        {/* Spacer to maintain layout and prevent overlap with breadcrumb */}
      </div>

      {/* Page Title Card */}
      {isLoading ? (
        <div className="container mx-auto">
          <div className="absolute z-[10] flex md:flex-row flex-col md:items-end items-start gap-2 md:gap-6 left-1/2 -translate-x-1/2 md:left-auto md:right-auto md:translate-x-0 md:bottom-[25px] -bottom-[35px] translate-y-1/2 mb-12 md:mb-16">
            <div className="p-5 bg-[var(--dark-blue)]/80 backdrop-blur-md rounded-2xl md:min-h-[150px] min-h-[100px] flex justify-center items-center min-w-[330px] md:max-w-4/5 max-w-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          </div>
        </div>
      ) : currentPageTitle && (
        <div className="container mx-auto">
          <div className="absolute z-[10] flex md:flex-row flex-col md:items-end items-start gap-2 md:gap-6 left-1/2 -translate-x-1/2 md:left-auto md:right-auto md:translate-x-0 md:bottom-[25px] -bottom-[35px] translate-y-1/2 mb-12 md:mb-16 ">
            <div className="p-5 bg-[var(--dark-blue)]/80 backdrop-blur-md rounded-2xl md:min-h-[150px] min-h-[100px] flex justify-center items-center min-w-[330px] md:max-w-4/5 max-w-full wraptext-center">
              <h1 className="font-stix capitalize text-center text-white text-2xl md:text-4xl lg:text-5xl font-normal ">
                {currentPageTitle}
              </h1>
            </div>
            {/* Breadcrumb positioned next to the title card */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center h-auto min-h-[40px] md:min-h-[50px] gap-1 md:pl-0 pl-4 md:mb-0 MD:-translate-y-1/2 mt-3 mb-15">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <div key={crumb.href} className="flex items-center flex-shrink-0">
                    {index > 0 && (
                      <span className="text-[var(--dark-gray)] mx-2 text-sm">»</span>
                    )}
                    {isLast ? (
                      <span className="text-sm font-medium text-[var(--red)] break-normal">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-sm text-[var(--dark-gray)] hover:text-[var(--red)] transition-colors whitespace-nowrap"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;

