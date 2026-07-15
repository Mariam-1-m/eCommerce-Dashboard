import { useState } from "react";

function TableFooter({ totalPages, filters, setFilters }) {
  const currentPage = filters.page;

  return (
    <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 dark:border-slate-800">
      <p className="text-xs text-slate-400">
        Page{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-medium text-slate-600 dark:text-slate-300">
          {totalPages}
        </span>
      </p>
      <div className="flex items-center justify-center gap-2">
        {/* Previous */}
        <button
          disabled={currentPage <= 1}
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              page: prev.page - 1,
            }))
          }
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-xs text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:pointer-events-none disabled:hover:bg-transparent dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:disabled:hover:bg-transparent"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;

          return (
            <button
              key={page}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  page,
                }))
              }
              className={`flex h-7 w-7 items-center justify-center rounded-lg border text-xs font-medium transition ${
                currentPage === page
                  ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                  : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          disabled={currentPage >= totalPages}
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              page: prev.page + 1,
            }))
          }
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-xs text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:pointer-events-none disabled:hover:bg-transparent dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:disabled:hover:bg-transparent"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default TableFooter;
