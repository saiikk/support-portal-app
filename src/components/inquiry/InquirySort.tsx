type Props = {
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
};

function InquirySort({ sortOrder, setSortOrder }: Props) {
  return (
    <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
      {sortOrder === "asc" ? "新しい順" : "古い順"}
    </button>
  );
}

export default InquirySort;