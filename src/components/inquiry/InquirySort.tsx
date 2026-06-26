type Props = {
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
};

function InquirySort({ sortOrder, setSortOrder }: Props) {
  return (
    <button
      className="ml-auto px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-xs text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition"
      onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
    >
      {sortOrder === "asc" ? "新しい順" : "古い順"}
    </button>
  );
}

export default InquirySort;
