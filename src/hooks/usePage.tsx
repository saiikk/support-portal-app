import { useState } from "react";
import type { Page } from "../types/Page";

export function usePage() {
  const [currentPage, setCurrentPage] = useState<Page>("list");
  const [selectedId, setSelectedId] = useState<number | null>(null);

   // 一覧でタイトルをクリック
  //selectedId をセット、currentPage を "detail" に変更
  const handleSelectInquiry = (id: number) => {
    setSelectedId(id);
    setCurrentPage("detail");
  };


  // 詳細で「戻る」クリック
  //selectedId を null に、currentPage を "list" に変更
  const handleBack = () => {
    setSelectedId(null);
    setCurrentPage("list");
  };

  return { currentPage, setCurrentPage, selectedId, setSelectedId, handleSelectInquiry, handleBack }
}