import { type InquiryStatus, inquiryStatusLabel } from "../types/Inquiry";

type StatusBadgeProps = {
  status: InquiryStatus;
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <span>{inquiryStatusLabel[status]}</span>;
};