import { useState } from "react";
import type { Inquiry } from "../types/Inquiry";
import type { FilterValue } from "../types/Filter";
import { InquiryTable } from "../components/InquiryTable";
import InquiryFilterButton from "./InquiryFilterButton";

type InquiryListPageProps = {
  inquiries: Inquiry[];
  onSelectInquiry: (id: number) => void;
};

export const InquiryListPage = ({
  inquiries,
  onSelectInquiry,
}: InquiryListPageProps) => {
  const [filter, setFilter] = useState<FilterValue>("all");
  const filteredInquiries =
    filter === "all" ? inquiries : inquiries.filter((i) => i.status === filter);
  return (
    <div>
      <h2>問い合わせ一覧（{inquiries.length} 件）</h2>

     <InquiryFilterButton filter={filter} setFilter={setFilter}/>

      {inquiries.length === 0 ? (
        <p>問い合わせがありません。</p>
      ) : (
        <InquiryTable
          inquiries={filteredInquiries}
          onSelect={onSelectInquiry}
        />
      )}
    </div>
  );
};
