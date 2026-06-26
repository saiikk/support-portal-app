import type { FilterValue } from "../../types/Filter";

type Props = {
  filter: FilterValue;
  setFilter: (value: FilterValue) => void;
};

function InquiryFilter({ filter, setFilter }: Props) {
  return (
    <div className="flex border border-gray-300 w-fit mb-8">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 text-sm transition
      ${
        filter === "all"
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
      >
        すべて
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 text-sm transition border-l border-gray-300
      ${
        filter === "pending"
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
      >
        未対応
      </button>

      <button
        onClick={() => setFilter("in_progress")}
        className={`px-4 py-2 text-sm transition border-l border-gray-300
      ${
        filter === "in_progress"
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
      >
        対応中
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 text-sm transition border-l border-gray-300
      ${
        filter === "completed"
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }
    `}
      >
        完了
      </button>
    </div>
  );
}

export default InquiryFilter;
