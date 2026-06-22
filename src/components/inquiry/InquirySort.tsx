type Props = {
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
};

function InquirySort({ sortOrder, setSortOrder }: Props) {
  return (
    <button
      onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
      style={{ marginLeft: "auto" }}
    >
      {sortOrder === "asc" ? "新しい順" : "古い順"}
    </button>
  );
}

export default InquirySort;
