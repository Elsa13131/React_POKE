interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageInput: string;
  onPageChange: (newPage: number) => void;
  onPageInputChange: (value: string) => void;
  onGoToPage: (e: React.FormEvent) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  pageInput,
  onPageChange,
  onPageInputChange,
  onGoToPage,
}: PaginationProps) {
  return (
    <div
      className="pagination"
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        marginTop: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      <button
        className="secondary-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Précédent
      </button>

      <span>
        Page {currentPage} sur {totalPages}
      </span>

      <button
        className="secondary-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Suivant →
      </button>

      <form onSubmit={onGoToPage} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input
          type="number"
          min={1}
          max={totalPages}
          placeholder="N° page"
          value={pageInput}
          onChange={(e) => onPageInputChange(e.target.value)}
          style={{ width: "80px", padding: "0.4rem" }}
        />
        <button type="submit" className="secondary-button">
          Aller
        </button>
      </form>
    </div>
  );
}