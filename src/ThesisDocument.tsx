import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import thesis from './thesis.pdf';

type NumPagesType = number;

export const ThesisDocument = () => {
    const [numPages, setNumPages] = useState<NumPagesType>(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess(data: { numPages: number }) {
        setNumPages(data.numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div className='flex flex-col items-center h-4/5 overflow-auto'>
            <Document
                file={thesis}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    scale={.70}
                />
            </Document>
            <div className='flex flex-row justify-between w-2/4'>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
}