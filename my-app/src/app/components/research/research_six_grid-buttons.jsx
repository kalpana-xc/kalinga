"use client";

import { useState, useEffect } from "react";
import GlobalArrowButton from "../general/global-arrow_button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import DataTable from "../general/data-table";

const defaultButtons = [
  // Left Column
  {
    id: 1,
    text: "Research, Consultancy & IPR Policy",
    href: "/ipr-cell",
  },
  {
    id: 2,
    text: "Ethics Committee Constitution",
    href: "",
  },
  {
    id: 3,
    text: "Software used for Plagiarism",
    href: "/research-resources",
  },
  {
    id: 4,
    text: "Research Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/1.+Research+Policy+(2).pdf",
  },
  {
    id: 5,
    text: "Constitution of the Ethics Board for Maintaining Research Integrity",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/5.+CONSTITUTION+OF+ETHICS+BOARD+FOR+MAINTAINING+RESEARCH+INTEGRITY.pdf"
  },
  {
    id: 6,
    text: "Research Facilities and Resources",
    href: "/research-facilities",
  },
  // Right Column
  {
    id: 7,
    text: "Research Advisory Committee",
    href: "",
    isTable: true,
  },
  {
    id: 8,
    text: "Plagiarism Policy",
    href: "/research-resources",
  },
  {
    id: 9,
    text: "Ph.D. Admissions",
    href: "/phd",
  },
  {
    id: 10,
    text: "Research Integrity & Ethics Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/RESEARCH+Ethics.pdf",
  },
  {
    id: 11,
    text: "Constitution Of the Research Advisory Committee",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Constitution+of+Research+Advisory+Committee.pdf",
  },
  {
    id: 12,
    text: "Doctoral Research Committee",
    href: "/phd",
  },
];

// Research Advisory Committee Table Data
const researchAdvisoryCommitteeData = [
  { slNo: 1, name: "Dr. Sushma Dubey", designation: "Associate Professor", department: "Biotechnology" },
  { slNo: 2, name: "Dr. Suchitra Ku Panigrahy", designation: "Assistant Professor", department: "Biotechnology" },
  { slNo: 3, name: "Dr. Deepa Biswas", designation: "Associate Professor", department: "Botany" },
  { slNo: 4, name: "Dr. Shilpi Shrivastava", designation: "Professor", department: "Chemistry" },
  { slNo: 5, name: "Dr. Preeti Pandey", designation: "Assistant Professor", department: "Chemistry" },
  { slNo: 6, name: "Dr. Eshwara Raghvendra Rao", designation: "Professor", department: "Civil Engineering" },
  { slNo: 7, name: "Dr. Shinki Katyayani Pandey", designation: "Assistant Professor", department: "Commerce And Management" },
  { slNo: 8, name: "Dr. Deepti Patnaik", designation: "Assistant Professor", department: "Commerce And Management" },
  { slNo: 9, name: "Dr. Anupa Sinha", designation: "Assistant Professor", department: "Computer Science And Engineering" },
  { slNo: 10, name: "Dr. R. Udaya Kumar", designation: "Professor", department: "Computer Science And Engineering" },
  { slNo: 11, name: "Dr. Chandra Saha Roy", designation: "Assistant Professor", department: "Economics" },
  { slNo: 12, name: "Dr. Harsha Patil", designation: "Associate Professor", department: "Education" },
  { slNo: 13, name: "Dr. Shraddha Verma", designation: "Associate Professor", department: "Education" },
  { slNo: 14, name: "Dr. Manoj Kumar Nigam", designation: "Professor", department: "Electrical Engineering" },
  { slNo: 15, name: "Dr. Vijayalaxmi Biradar", designation: "Professor", department: "Electronics And Communication" },
  { slNo: 16, name: "Dr. Shilpi Bhattacharya", designation: "Professor", department: "English" },
  { slNo: 17, name: "Dr. A. Vijayanand", designation: "Assistant Professor", department: "English" },
  { slNo: 18, name: "Dr. A. Rajshekhar", designation: "Professor", department: "Geography" },
  { slNo: 19, name: "Dr. Ajay Kumar Shukla", designation: "Professor", department: "Hindi" },
  { slNo: 20, name: "Dr. Shraddha Hirkane", designation: "Assistant Professor", department: "Hindi" },
  { slNo: 21, name: "Dr. Dolamani Sahu", designation: "Associate Professor", department: "History" },
  { slNo: 22, name: "Dr. Sanjana Singh", designation: "Professor", department: "History" },
  { slNo: 23, name: "Dr. Yogesh Vaishnaw", designation: "Assistant Professor", department: "Journalism And Mass Communication" },
  { slNo: 24, name: "Dr. Azim Khan", designation: "Professor", department: "Law" },
  { slNo: 25, name: "Dr. Narendra Kumar Singh", designation: "Associate Professor", department: "Law" },
  { slNo: 26, name: "Dr. R. Jayakumar", designation: "Professor", department: "Life Sciences" },
  { slNo: 27, name: "Dr. Byju John", designation: "Professor", department: "Management" },
  { slNo: 28, name: "Dr. G. V. V. Jagannadha Rao", designation: "Assistant Professor", department: "Mathematics" },
  { slNo: 29, name: "Dr. Tejaswini Pradhan", designation: "Assistant Professor", department: "Mathematics" },
  { slNo: 30, name: "Dr. Vinay Chandra Jha", designation: "Professor", department: "Mechanical Engineering" },
  { slNo: 31, name: "Dr. Rahul Mishra", designation: "Assistant Professor", department: "Mechanical Engineering" },
  { slNo: 32, name: "Dr. Kalidoss", designation: "Associate Professor", department: "Physical Education" },
  { slNo: 33, name: "Dr. Sanjeev Kumar Yadav", designation: "Assistant Professor", department: "Physical Education" },
  { slNo: 34, name: "Dr. Aloke Verma", designation: "Assistant Professor", department: "Physics" },
  { slNo: 35, name: "Dr. Anita Verma", designation: "Assistant Professor", department: "Physics" },
  { slNo: 36, name: "Dr. Anita Samal", designation: "Professor", department: "Political Science" },
  { slNo: 37, name: "Dr. Sandhya Tiwari", designation: "Professor", department: "Political Science" },
  { slNo: 38, name: "Dr. Manoj Mathew P", designation: "Assistant Professor", department: "Social Work/Sociology" },
  { slNo: 39, name: "Dr. Esha Chatterjee", designation: "Assistant Professor", department: "Social Work/Sociology" },
  { slNo: 40, name: "Dr. Manoj Singh", designation: "Assistant Professor", department: "Zoology" },
  { slNo: 41, name: "Dr. Ajay Kumar Harit", designation: "Associate Professor", department: "Zoology" },
];

const researchAdvisoryCommitteeColumns = [
  { key: "slNo", label: "S.No.", width: "w-20" },
  { key: "name", label: "Name of the Member", width: "flex-1" },
  { key: "designation", label: "Designation", width: "w-48" },
  { key: "department", label: "Department", width: "flex-1" },
];

export default function ResearchSixGridButtons({ buttons = defaultButtons }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Set up PDF.js worker - use jsdelivr CDN with version that matches react-pdf
  useEffect(() => {
    // react-pdf@10.2.0 uses pdfjs-dist@5.4.296, so we need to match that version
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;
  }, []);

  const isPdfLink = (href) => {
    return href && href.startsWith("http") && href.toLowerCase().endsWith(".pdf");
  };

  const handleButtonClick = (e, button) => {
    // Check if this button should show a table modal
    if (button.isTable) {
      e.preventDefault();
      setSelectedTitle(button.text);
      setIsTableModalOpen(true);
      return;
    }
    
    // Check if this is a PDF link
    if (isPdfLink(button.href)) {
      e.preventDefault();
      setSelectedPdf(button.href);
      setSelectedTitle(button.text);
      setPageNumber(1);
      setNumPages(null);
      setLoading(false);
      setError(null);
      setIsModalOpen(true);
    }
    // For non-PDF links, let the default anchor behavior handle it
  };

  const handleOpenExternal = () => {
    if (selectedPdf) {
      window.open(selectedPdf, "_blank", "noopener,noreferrer");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
    setSelectedTitle("");
    setPageNumber(1);
    setNumPages(null);
    setLoading(false);
    setError(null);
  };

  const handleCloseTableModal = () => {
    setIsTableModalOpen(false);
    setSelectedTitle("");
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setError("Failed to load PDF. Please try opening it in a new tab.");
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(numPages || 1, prev + 1));
  };

  return (
    <>
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buttons.map((button) => {
              const isPdf = isPdfLink(button.href);
              const isTable = button.isTable;
              return (
                <div key={button.id} className="block">
                  {isPdf || isTable ? (
                    <GlobalArrowButton
                      onClick={(e) => handleButtonClick(e, button)}
                      className="!w-full h-[60px] justify-between"
                      arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                      arrowSize={29}
                    >
                      {button.text}
                    </GlobalArrowButton>
                  ) : (
                    <a
                      href={button.href}
                      className="block"
                      target={button.href.startsWith("http") ? "_blank" : undefined}
                      rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <GlobalArrowButton
                        className="!w-full h-[60px] justify-between"
                        arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                        arrowSize={29}
                      >
                        {button.text}
                      </GlobalArrowButton>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {isModalOpen && selectedPdf && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)] pr-4">
                {selectedTitle}
              </h3>
              <div className="flex items-center gap-3">
                {/* External Link Button */}
                <button
                  onClick={handleOpenExternal}
                  className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors text-sm font-semibold flex items-center gap-2"
                  aria-label="Open PDF in new tab"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Open in New Tab
                </button>
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5 transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[calc(90vh-100px)] bg-gray-100 flex flex-col overflow-hidden">
              {/* Navigation Controls */}
              <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 flex-shrink-0">
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Previous
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    Page {pageNumber} of {numPages || "..."}
                  </span>
                </div>

                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= (numPages || 1)}
                  className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* PDF Document Viewer */}
              <div className="flex-1 overflow-y-auto overflow-x-auto w-full">
                <div className="min-h-full flex items-start justify-center p-4 md:p-6">
                  {error ? (
                    <div className="text-center p-8">
                      <p className="text-red-600 mb-4">{error}</p>
                      <button
                        onClick={handleOpenExternal}
                        className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors"
                      >
                        Open in New Tab
                      </button>
                    </div>
                  ) : (
                    <Document
                      file={selectedPdf}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      loading={
                        <div className="text-center py-20">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
                          <p className="text-gray-600">Loading PDF...</p>
                        </div>
                      }
                      className="flex flex-col items-center"
                    >
                      <div className="shadow-2xl bg-white p-2 rounded-lg my-4">
                        <Page
                          pageNumber={pageNumber}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          className="max-w-full h-auto"
                          width={Math.min(900, typeof window !== 'undefined' ? window.innerWidth - 80 : 900)}
                        />
                      </div>
                    </Document>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Table Modal */}
      {isTableModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseTableModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)] pr-4">
                {selectedTitle}
              </h3>
              <button
                onClick={handleCloseTableModal}
                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Table Content */}
            <div className="w-full max-h-[calc(90vh-100px)] overflow-y-auto p-4 md:p-6">
              <DataTable
                columns={researchAdvisoryCommitteeColumns}
                data={researchAdvisoryCommitteeData}
                overflowX={true}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

