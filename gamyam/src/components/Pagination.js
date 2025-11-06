export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  perPage,
}) {
  if (totalItems === 0) {
    return (
      <div className="pagination-container">
        <div className="pagination-info">No results found</div>
      </div>
    );
  }

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalItems);

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        Showing {start}–{end} of {totalItems}
      </div>

      <div className="pagination-buttons">
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>

        <span className="page-status">
          Page {currentPage} / {totalPages}
        </span>

        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
