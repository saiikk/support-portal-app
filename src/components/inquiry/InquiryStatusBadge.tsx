import { type InquiryStatus, inquiryStatusLabel } from "../../types/Inquiry";

type StatusBadgeProps = {
  status: InquiryStatus;
  // inquiry: Inquiry
};

export const InquiryStatusBadge = ({ status }: StatusBadgeProps) => {
  return <span>{inquiryStatusLabel[status]}</span>;
};