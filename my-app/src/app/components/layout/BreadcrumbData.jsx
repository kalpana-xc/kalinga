'use client';

import { useBreadcrumbData } from './BreadcrumbContext';

/**
 * AutoBreadcrumb - Automatically reads breadcrumbData from the same file
 * Just render this component once in your page, and it will use the breadcrumbData const
 * 
 * Usage:
 * const breadcrumbData = { heroImage: "...", pageTitle: "...", customBreadcrumbs: [...] };
 * 
 * export default function MyPage() {
 *   return (
 *     <>
 *       <AutoBreadcrumb data={breadcrumbData} />
 *       rest of your page
 *     </>
 *   );
 * }
 */
export default function AutoBreadcrumb({ data }) {
  useBreadcrumbData(data);
  return null; // This component doesn't render anything
}

