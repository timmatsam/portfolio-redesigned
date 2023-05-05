// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5.js';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import thesis from './thesis.pdf';

// type NumPagesType = number;

// //TODO: Change the overflow so that the pdf and next/back buttons are always visible
// //TODO: Make the previous and next buttons not visible based on first and last page
// //TODO: Add spinner for pdf when loading
// export const ThesisDocument = () => {
//     const [numPages, setNumPages] = useState<NumPagesType>(0);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess(data: { numPages: number }) {
//         setNumPages(data.numPages);
//         setPageNumber(1);
//     }

//     function changePage(offset: number) {
//         setPageNumber(prevPageNumber => prevPageNumber + offset);
//     }

//     function previousPage() {
//         changePage(-1);
//     }

//     function nextPage() {
//         changePage(1);
//     }

//     return (
//         <div className='flex flex-col items-center h-4/5 overflow-auto'>
//             <Document
//                 file={thesis}
//                 onLoadSuccess={onDocumentLoadSuccess}
//                 onLoadError={console.error}
//             >
//                 <Page
//                     pageNumber={pageNumber}
//                     renderTextLayer={false}
//                     renderAnnotationLayer={false}
//                     scale={.70}
//                 />
//             </Document>
//             <div className='flex flex-row justify-between w-2/4'>
//                 <button
//                     type="button"
//                     disabled={pageNumber <= 1}
//                     onClick={previousPage}
//                 >
//                     Previous
//                 </button>
//                 <p>
//                     Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
//                 </p>
//                 <button
//                     type="button"
//                     disabled={pageNumber >= numPages}
//                     onClick={nextPage}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }
export {}
