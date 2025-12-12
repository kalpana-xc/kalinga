'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const BreadcrumbContext = createContext(null);

export function BreadcrumbProvider({ children }) {
  const [breadcrumbData, setBreadcrumbData] = useState(null);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbData, setBreadcrumbData }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}

// Hook for pages to set breadcrumb data
export function useBreadcrumbData(data) {
  const context = useBreadcrumb();
  
  useEffect(() => {
    if (context && data) {
      context.setBreadcrumbData(data);
    }
    // Cleanup: reset when component unmounts
    return () => {
      if (context) {
        context.setBreadcrumbData(null);
      }
    };
  }, [data, context]);
}

