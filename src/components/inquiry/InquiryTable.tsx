import type { Inquiry, InquiryStatusUpdateInput } from "../../types/Inquiry";
import { InquiryRow } from "./InquiryRow";

type InquiryTableProps = {
  inquiries: Inquiry[];
  onSelect: (id: number) => void;
  onUpdate: (id: number, status: InquiryStatusUpdateInput) => void;
};

export const InquiryTable = ({
  inquiries,
  onSelect,
  onUpdate,
}: InquiryTableProps) => {
  return (
    <table className="mx-auto w-full max-w-5xl border border-gray-200 rounded-md overflow-hidden">
      <thead className="bg-gray-100 text-gray-700 text-sm">
        <tr>
          <th className="px-4 py-3 text-left font-semibold">ID</th>
          <th className="px-4 py-3 text-left font-semibold">タイトル</th>
          <th className="px-4 py-3 text-left font-semibold">ステータス</th>
          <th className="px-4 py-3 text-left font-semibold">投稿者</th>
          <th className="px-4 py-3 text-left font-semibold">日時</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
        {inquiries.map((inquiry) => (
          <InquiryRow
            key={inquiry.id}
            inquiry={inquiry}
            onSelect={onSelect}
            onUpdate={onUpdate}
          />
        ))}
      </tbody>
    </table>
  );
};
