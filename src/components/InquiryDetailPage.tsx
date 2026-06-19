import { inquiryStatusLabel, type Inquiry } from "../types/Inquiry";
import type { InquiryStatusUpdateInput,InquiryStatus } from "../types/Inquiry";
type Props = {
  inquiries: Inquiry[];
  selectedId: number | null;
  updateInquiryStatus: (id: number, input: InquiryStatusUpdateInput) => void;
};

function InquiryDetailPage({ inquiries, selectedId, updateInquiryStatus }: Props) {
  const inquiry = inquiries.find((i) => i.id === selectedId);
  if (!inquiry) {
    return <p>問い合わせが見つかりません</p>;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h1 style={{ marginBottom: "24px" }}>お問い合わせ詳細</h1>

      <div style={{ marginBottom: "16px" }}>
        <h2 style={{ color: "#666", fontSize: "14px", marginBottom: "4px" }}>
          タイトル
        </h2>
        <p>{inquiry.title}</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h2 style={{ color: "#666", fontSize: "14px", marginBottom: "4px" }}>
          説明
        </h2>
        <p>{inquiry.content}</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h2 style={{ color: "#666", fontSize: "14px", marginBottom: "4px" }}>
          送信者
        </h2>
        <p>{inquiry.requester}</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h2 style={{ color: "#666", fontSize: "14px", marginBottom: "4px" }}>
          状態
        </h2>

        <select
          style={{
            display: "inline-block",
            padding: "4px 12px",
            backgroundColor: "#e3f2fd",
            borderRadius: "16px",
          }}
          value={inquiry.status}
          onChange={(e) =>
            updateInquiryStatus(inquiry.id, {
              status: e.target.value as InquiryStatus,
            })
          }
        >
          {Object.entries(inquiryStatusLabel).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 style={{ color: "#666", fontSize: "14px", marginBottom: "4px" }}>
          送信日付
        </h2>
        <p>{inquiry.created_at}</p>
      </div>
    </div>
  );
}

export default InquiryDetailPage;
