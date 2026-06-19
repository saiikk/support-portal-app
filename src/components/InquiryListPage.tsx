import type { Inquiry } from "../types/Inquiry";
import { InquiryTable } from "../components/InquiryTable";

type InquiryListPageProps = {
  inquiries: Inquiry[];
  onSelectInquiry: (id: number) => void;
};

export const InquiryListPage = ({
  inquiries,
  onSelectInquiry,
}: InquiryListPageProps) => {
  return (
    <div>
      <h2>問い合わせ一覧（{inquiries.length} 件）</h2>
      {inquiries.length === 0 ? (
        <p>問い合わせがありません。</p>
      ) : (
        <InquiryTable inquiries={inquiries} onSelect={onSelectInquiry} />
      )}
    </div>
  );
};
