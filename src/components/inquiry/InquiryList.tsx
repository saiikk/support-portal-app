import { useState } from "react";
import type { Inquiry, InquiryStatusUpdateInput } from "../../types/Inquiry";
import type { FilterValue } from "../../types/Filter";
import { InquiryTable } from "./InquiryTable";
import InquiryFilter from "./InquiryFilter";

type InquiryListProps = {
  inquiries: Inquiry[];
  onSelectInquiry: (id: number) => void;
  onUpdate: (id: number, input: InquiryStatusUpdateInput) => void
};

export const InquiryList = ({
  inquiries,
  onSelectInquiry,
  onUpdate
}: InquiryListProps) => {

  const [filter, setFilter] = useState<FilterValue>("all");
  const filteredInquiries =
    filter === "all" ? inquiries : inquiries.filter((i) => i.status === filter);

  return (
    <div className="flex flex-col items-center">
      <h2>お問い合わせ件数（{filteredInquiries.length} 件）</h2>

     <InquiryFilter filter={filter} setFilter={setFilter}/>

      {inquiries.length === 0 ? (
        <p>問い合わせがありません。</p>
      ) : (
        <InquiryTable
          inquiries={filteredInquiries}
          onSelect={onSelectInquiry}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};
