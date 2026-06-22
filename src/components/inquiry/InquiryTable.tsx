import type { Inquiry, InquiryStatusUpdateInput } from "../../types/Inquiry";
import { InquiryRow } from "./InquiryRow";

type InquiryTableProps = {
  inquiries: Inquiry[];
  onSelect: (id: number) => void;
  onUpdate: (id: number, status: InquiryStatusUpdateInput) => void
};

export const InquiryTable = ({ inquiries, onSelect, onUpdate }: InquiryTableProps) => {
  return (
    <table style={{ margin: "0 auto" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ステータス</th>
          <th>投稿者</th>
          <th>日時</th>
        </tr>
      </thead>
      <tbody>
        {inquiries.map((inquiry) => (
          <InquiryRow key={inquiry.id} inquiry={inquiry} onSelect={onSelect} onUpdate={onUpdate} />
        ))}
      </tbody>
    </table>
  );
};