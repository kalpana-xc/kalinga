'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PDFPage = React.forwardRef((props, ref) => {
    return (
        <div className="bg-white shadow-lg" ref={ref}>
            {props.children}
        </div>
    );
});

PDFPage.displayName = 'PDFPage';

const InlineFlipbook = ({ pdfUrl, title }) => {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageInputValue, setPageInputValue] = useState('1');
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);
    const bookRef = useRef(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [pdfUrl]);

    const onFlip = useCallback((e) => {
        setCurrentPage(e.data);
        setPageInputValue((e.data + 1).toString());
    }, []);

    const handlePageInputChange = (e) => {
        setPageInputValue(e.target.value);
    };

    const handlePageInputBlur = () => {
        const pageNum = parseInt(pageInputValue);
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
            bookRef.current.pageFlip().turnToPage(pageNum - 1);
        } else {
            setPageInputValue((currentPage + 1).toString());
        }
    };

    const handlePageInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePageInputBlur();
        }
    };

    const handlePrev = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();
        }
    };

    const handleNext = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };

    const handleOpenExternal = () => {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Calculate dimensions - balanced for visibility and size
    const pageWidth = containerWidth > 0 ? Math.min((containerWidth - 50) / 2, 650) : 500;
    const pageHeight = pageWidth * 1.414; // A4 aspect ratio

    return (
        <div ref={containerRef} className="w-full">
            {/* Header */}
            <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
                    {title}
                </h3>
                <button
                    onClick={handleOpenExternal}
                    className="px-3 py-1.5 text-xs md:text-sm bg-[var(--button-red)] text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                    Open in New Tab
                </button>
            </div>

            {/* Flipbook Container - No padding, fills entire space */}
            <div
                className="relative bg-gray-100 flex flex-col items-center justify-center"
                style={{ minHeight: `${pageHeight + 50}px` }}
            >
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="flex items-center justify-center" style={{ height: `${pageHeight}px` }}>
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
                                <p className="text-gray-600">Loading PDF...</p>
                            </div>
                        </div>
                    }
                    error={
                        <div className="flex items-center justify-center" style={{ height: `${pageHeight}px` }}>
                            <div className="text-center">
                                <p className="text-red-600 mb-4">Failed to load PDF</p>
                                <button
                                    onClick={handleOpenExternal}
                                    className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-opacity-90"
                                >
                                    Open PDF in New Tab
                                </button>
                            </div>
                        </div>
                    }
                >
                    {numPages && containerWidth > 0 && (
                        <div className="flex justify-center items-center w-full">
                            <HTMLFlipBook
                                ref={bookRef}
                                width={pageWidth}
                                height={pageHeight}
                                size="stretch"
                                minWidth={300}
                                maxWidth={700}
                                minHeight={400}
                                maxHeight={900}
                                showCover={false}
                                mobileScrollSupport={true}
                                onFlip={onFlip}
                                className="shadow-2xl"
                                style={{ margin: '0 auto' }}
                                drawShadow={true}
                                flippingTime={800}
                                usePortrait={false}
                                startPage={0}
                                autoSize={false}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <PDFPage key={`page_${index + 1}`}>
                                        <ReactPdfPage
                                            pageNumber={index + 1}
                                            width={pageWidth}
                                            renderTextLayer={false}
                                            renderAnnotationLayer={false}
                                        />
                                    </PDFPage>
                                ))}
                            </HTMLFlipBook>
                        </div>
                    )}
                </Document>

                {/* Navigation Controls */}
                {numPages && (
                    <div className="mt-4 flex items-center gap-2 md:gap-4 bg-white px-3 md:px-6 py-2 md:py-3 rounded-lg shadow-lg">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className="px-3 md:px-4 py-1.5 md:py-2 text-sm bg-[var(--button-red)] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                        >
                            ← Prev
                        </button>

                        <div className="flex items-center gap-1 md:gap-2">
                            <span className="text-xs md:text-sm text-gray-600">Page</span>
                            <input
                                type="text"
                                value={pageInputValue}
                                onChange={handlePageInputChange}
                                onBlur={handlePageInputBlur}
                                onKeyDown={handlePageInputKeyDown}
                                className="w-12 md:w-16 px-1 md:px-2 py-1 text-xs md:text-sm text-center border border-gray-300 rounded"
                            />
                            <span className="text-xs md:text-sm text-gray-600">of {numPages}</span>
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={currentPage >= numPages - 1}
                            className="px-3 md:px-4 py-1.5 md:py-2 text-sm bg-[var(--button-red)] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InlineFlipbook;
