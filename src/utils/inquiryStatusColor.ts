import type { InquiryStatus } from "../types/Inquiry";

export const inquiryStatusColor: Record<InquiryStatus, string> = {
  pending: "#e97676",
  in_progress: "#aadafc",
  completed: "#93e174",
};