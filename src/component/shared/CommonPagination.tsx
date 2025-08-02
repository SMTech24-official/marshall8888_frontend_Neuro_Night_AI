'use client'
import { useState } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  onPageSizeChange?: (size: number) => void;
};

const CommonPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  pageSize = 10,
  onPageSizeChange,
}) => {
  const [inputPage, setInputPage] = useState("");

  const handleGoToPage = () => {
    const page = Number(inputPage);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      onPageChange(page);
      setInputPage("");
    }
  };

  const getPages = () => {
    const pages: (number | "...")[] = [];
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const maxPagesToShow = isMobile ? 3 : 5;

    if (totalPages <= maxPagesToShow + 1) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= maxPagesToShow; i++) {
        pages.push(i);
      }

      if (totalPages > maxPagesToShow + 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };
  // console.log(totalPages)
// ${totalPages < 0 && 'hidden'}
  return (
    <div className={` flex flex-wrap  justify-center items-center gap-2 mt-8 py-4 px-2 sm:px-6  `}>
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center rounded-md bg-red-600 text-white hover:bg-red-700 hover:text-white-600 transition disabled:opacity-40"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      {getPages().map((item, idx) =>
        item === "..." ? (
          <span key={idx} className="px-2 text-gray-400 text-sm select-none">...</span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(Number(item))}
            className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition 
              ${currentPage === item ? "bg-red-600 text-white" : "bg-gray-800  text-white hover:bg-primary cursor-pointer hover:text-white"}`}
          >
            {item}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-md bg-red-600 text-white hover:bg-red-700 hover:text-white-600 transition disabled:opacity-40"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Page Size Selector */}
      {onPageSizeChange && (
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="ml-4 bg-white border border-gray-300 text-gray-700 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary hidden sm:block"
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size} / page
            </option>
          ))}
        </select>
      )}

      {/* Go to Page */}
      <div className="ml-4 hidden sm:flex items-center space-x-2">
        <span className="text-sm text-white">Go to</span>
        <input
          type="number"
          min={1}
          max={totalPages}
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          placeholder="Page"
          className="w-20 px-2 py-1 border-2 border-red-800 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={handleGoToPage}
          className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-red-800 hover:text-white-600 transition"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default CommonPagination;
