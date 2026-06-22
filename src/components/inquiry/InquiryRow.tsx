import type { Inquiry } from "../../types/Inquiry";
import { formatDate } from "../../utils/formatDate";
import { InquiryStatusBadge } from "./InquiryStatusBadge";

type InquiryRowProps = {
  inquiry: Inquiry;
  onSelect: (id: number) => void;
};

export const InquiryRow = ({ inquiry, onSelect }: InquiryRowProps) => {
  return (
    <tr>
      <td>{inquiry.id}</td>
      <td>
        <button onClick={() => onSelect(inquiry.id)}>
          {inquiry.title}
        </button>
      </td>
      <td>
        <InquiryStatusBadge status={inquiry.status} />
      </td>
      <td>{inquiry.requester}</td>
      <td>{formatDate(inquiry.created_at)}</td>
    </tr>
  );
};