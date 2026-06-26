type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
};

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4">

      {/* 前へ */}
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        前へ
      </button>

      {/* ページ番号 */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1
              ? "bg-gray-800 text-white"
              : "bg-white"
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* 次へ */}
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        次へ
      </button>
    </div>
  );
};