Model breradcrumb

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  pageTitle: "Corpodsdssrate Social Responsibility",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'C dSR', href: '/csr' }
  ]
};

// Register it globally (no import needed - this pattern works automatically)
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}
