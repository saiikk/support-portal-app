import { useState } from "react";
import type { Inquiry } from "../types/Inquiry";

export function useInquiry() {
  const INITIAL_INQUIRIES: Inquiry[] = [
    {
      id: 1,
      title: "PC が起動しない",
      content: "朝から電源を入れても反応がありません。",
      requester: "山田 太郎",
      status: "pending",
      created_at: "2026-06-01T09:00:00Z",
    },
    {
      id: 2,
      title: "社内 Wi-Fi に接続できない",
      content: "昨日から急に繋がらなくなりました。",
      requester: "鈴木 花子",
      status: "in_progress",
      created_at: "2026-06-02T10:30:00Z",
    },
    {
      id: 3,
      title: "パスワードをリセットしたい",
      content: "ロックアウトされてしまいました。",
      requester: "田中 次郎",
      status: "completed",
      created_at: "2026-06-03T14:00:00Z",
    },
  ];

  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);

  return {
    inquiries,
    setInquiries
  };
}
