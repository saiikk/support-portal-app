import { useState, useMemo, useEffect } from "react";
import { inquiryApi } from "../api/inquiries";

import type {
  Inquiry,
  InquiryCreateInput,
  InquiryStatusUpdateInput,
} from "../types/Inquiry";

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
    {
      id: 4,
      title: "プリンターから印刷できない",
      content: "印刷ジョブは送信されますが出力されません。",
      requester: "佐藤 美咲",
      status: "pending",
      created_at: "2026-06-04T08:15:00Z",
    },
    {
      id: 5,
      title: "メール送信エラー",
      content: "社外宛てのメールが送信できません。",
      requester: "高橋 健",
      status: "in_progress",
      created_at: "2026-06-05T11:20:00Z",
    },
    {
      id: 6,
      title: "会議室予約システムにログインできない",
      content: "認証エラーが表示されます。",
      requester: "伊藤 直樹",
      status: "completed",
      created_at: "2026-06-06T13:45:00Z",
    },
    {
      id: 7,
      title: "業務システムの動作が遅い",
      content: "ページ遷移に時間がかかっています。",
      requester: "渡辺 優",
      status: "pending",
      created_at: "2026-06-07T09:50:00Z",
    },
    {
      id: 8,
      title: "モニターが映らない",
      content: "電源は入っていますが画面が真っ暗です。",
      requester: "中村 彩",
      status: "in_progress",
      created_at: "2026-06-08T15:10:00Z",
    },
    {
      id: 9,
      title: "共有フォルダへアクセスできない",
      content: "権限エラーが表示されます。",
      requester: "小林 翔",
      status: "completed",
      created_at: "2026-06-09T10:05:00Z",
    },
    {
      id: 10,
      title: "VPN接続に失敗する",
      content: "在宅勤務中にVPNへ接続できません。",
      requester: "加藤 真由",
      status: "pending",
      created_at: "2026-06-10T16:30:00Z",
    },
  ];

  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);

  useEffect(() => {
    inquiryApi.getAll().then((data) => {
      if (data.length > 0) {
        setInquiries(data);
      }
    });
  }, []);

  const addInquiry = (input: InquiryCreateInput) => {
    const newInquiry: Inquiry = {
      id: Date.now(),
      ...input,
      status: "pending",
      created_at: new Date().toISOString(),
    };
    setInquiries([...inquiries, newInquiry]);
  };

  const updateInquiryStatus = async (
    id: number,
    status: InquiryStatusUpdateInput,
  ) => {
    const updatedInquiry = await inquiryApi.updateStatus(id, status);

    setInquiries((prev) =>
      prev.map((inquiry) => (inquiry.id === id ? updatedInquiry : inquiry)),
    );
  };

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedInquiries = useMemo(() => {
    return [...inquiries].sort((a, b) => {
      const diff =
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime();

      return sortOrder === "asc" ? diff : -diff;
    });
  }, [inquiries, sortOrder]);

  return {
    inquiries,
    setInquiries,
    addInquiry,
    updateInquiryStatus,
    sortOrder,
    setSortOrder,
    sortedInquiries,
  };
}
