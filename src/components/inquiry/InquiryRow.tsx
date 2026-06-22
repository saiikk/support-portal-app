import type {
  Inquiry,
  InquiryStatus,
  InquiryStatusUpdateInput,
} from "../../types/Inquiry";
import { inquiryStatusLabel } from "../../types/Inquiry";
import { formatDate } from "../../utils/formatDate";
import { inquiryStatusColor } from "../../utils/inquiryStatusColor";

type InquiryRowProps = {
  inquiry: Inquiry;
  onSelect: (id: number) => void;
  onUpdate: (id: number, status: InquiryStatusUpdateInput) => void;
};

export const InquiryRow = ({
  inquiry,
  onSelect,
  onUpdate,
}: InquiryRowProps) => {
  return (
    <tr>
      <td>{inquiry.id}</td>
      <td style={{ width: "300px" }}>
        <button
          style={{ width: "300px", textAlign: "left" }}
          onClick={() => onSelect(inquiry.id)}
        >
          {inquiry.title}
        </button>
      </td>
      <td>
        <select
          style={{
            display: "inline-block",
            padding: "4px 12px",
            backgroundColor: inquiryStatusColor[inquiry.status],
            borderRadius: "16px",
          }}
          value={inquiry.status}
          onChange={(e) => {
            onUpdate(inquiry.id, {
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
      </td>
      <td>{inquiry.requester}</td>
      <td>{formatDate(inquiry.created_at)}</td>
    </tr>
  );
};
