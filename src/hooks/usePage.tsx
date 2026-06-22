import { useState } from "react";
import type { Page } from "../types/Page";

export function usePage() {
  const [currentPage, setCurrentPage] = useState<Page>("list");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelectInquiry = (id: number) => {
    setSelectedId(id);
    setCurrentPage("detail");
  };

  const handleBack = () => {
    setSelectedId(null);
    setCurrentPage("list");
  };

  return {
    currentPage,
    setCurrentPage,
    selectedId,
    setSelectedId,
    handleSelectInquiry,
    handleBack,
  };
}
