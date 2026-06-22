import { inquiryStatusLabel, type Inquiry } from "../../types/Inquiry";
import type {
  InquiryStatusUpdateInput,
  InquiryStatus,
} from "../../types/Inquiry";
type Props = {
  inquiries: Inquiry[];
  selectedId: number | null;
  updateInquiryStatus: (id: number, input: InquiryStatusUpdateInput) => void;
  onBack: () => void;
};
import { formatDate } from "../../utils/formatDate";
import { inquiryStatusColor } from "../../utils/inquiryStatusColor";
import { InquiryDetailRow } from "./InquiryDetailRow";

function InquiryDetail({
  inquiries,
  selectedId,
  updateInquiryStatus,
  onBack,
}: Props) {
  const inquiry = inquiries.find((i) => i.id === selectedId);
  if (!inquiry) {
    return <p>問い合わせが見つかりません</p>;
  }

  return (
    <div
      style={{
        width: "800px",
        textAlign: "left",
        margin: "0 auto",
        gap: "24px"
      }}
    >
      <h1>お問い合わせ詳細</h1>

      <div
        style={{
          padding: "24px",
          textAlign: "left",
          fontWeight: "bold",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff"
        }}
      >
        <InquiryDetailRow label="タイトル" children={inquiry.title} />

        <InquiryDetailRow label="説明" children={inquiry.content} />

        <InquiryDetailRow label="タイトル" children={inquiry.requester} />

        <InquiryDetailRow
          label="状態"
          isStyled={false}
          children={
            <select
              style={{
                display: "inline-block",
                padding: "4px 12px",
                backgroundColor: inquiryStatusColor[inquiry.status],
                borderRadius: "8px",
                fontWeight: "bold",
                height: "36px",
                textAlign: "center",
              }}
              value={inquiry.status}
              onChange={(e) => {
                updateInquiryStatus(inquiry.id, {
                  status: e.target.value as InquiryStatus,
                });
              }}
            >
              {Object.entries(inquiryStatusLabel).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          }
        />
        <InquiryDetailRow
          label="送信日付"
          children={formatDate(inquiry.created_at)}
        />
      </div>
      <button
        style={{
          display: "block",
          margin: "0 auto",
          marginTop: "24px",
          fontSize: "14px",
          color: "white",
          backgroundColor: "orange",
          fontWeight: "bold",
          padding: "24px",
          border: "none",
          opacity: "1",
          width: "250px"
        }}
        onClick={() => onBack()}
      >
        確定
      </button>
    </div>
  );
}

export default InquiryDetail;
