export type Inquiry = {
    title : string
    body? : string
    status : InquiryStatus
    create_at : string
}

export type InquiryStatus = "pending" | "doing" | "done"