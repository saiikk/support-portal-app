import type { Inquiry, InquiryStatusUpdateInput } from "../../types/Inquiry";
import { InquiryTable } from "./InquiryTable";

type InquiryListProps = {
  inquiries: Inquiry[];
  filteredInquiries: Inquiry[];
  onSelectInquiry: (id: number) => void;
  onUpdate: (id: number, input: InquiryStatusUpdateInput) => void;
};

export const InquiryList = ({
  inquiries,
  filteredInquiries,
  onSelectInquiry,
  onUpdate,
}: InquiryListProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2>お問い合わせ件数（{filteredInquiries.length} 件）</h2>

      <InquiryTable
        inquiries={inquiries}
        onSelect={onSelectInquiry}
        onUpdate={onUpdate}
      />
    </div>
  );
};