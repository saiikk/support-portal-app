import type { FilterValue } from "../types/Filter";

type Props = {
    filter: FilterValue;
    setFilter: (value: FilterValue) => void;
}

function InquiryFilterButton({ filter, setFilter }: Props) {
    return (
        <div>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>
          すべて
        </button>

        <button
          onClick={() => setFilter("pending")}
          disabled={filter === "pending"}
        >
          未対応
        </button>

        <button
          onClick={() => setFilter("in_progress")}
          disabled={filter === "in_progress"}
        >
          対応中
        </button>

        <button
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          完了
        </button>
      </div>
    )
}

export default InquiryFilterButton