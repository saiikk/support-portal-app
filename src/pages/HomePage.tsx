import { usePage } from "../hooks/usePage";
import { useInquiry } from "../hooks/useInquiry";
import { InquiryList } from "../components/inquiry/InquiryList";
import InquiryDetail from "../components/inquiry/InquiryDetail";
import { InquiryCreate } from "../components/inquiry/InquiryCreate";
import type { InquiryCreateInput } from "../types/Inquiry";
import PageNavigation from "../components/navigation/PageNavigation.tsx";
import InquirySort from "../components/inquiry/InquirySort.tsx";
import { useAuth } from "../hooks/useAuth.tsx";
import { LoginForm } from "../components/auth/LoginForm.tsx";
import { useState, useEffect, useMemo } from "react";
import { inquiryApi } from "../api/inquiries";
import { Pagination } from "../components/navigation/Pagination.tsx";
import type { FilterValue } from "../types/Filter.tsx";
import InquiryFilter from "../components/inquiry/InquiryFilter.tsx";

function HomePage() {
  const { inquiries, setInquiries, addInquiry, updateInquiryStatus } =
    useInquiry();

  const {
    currentPage,
    setCurrentPage,
    selectedId,
    handleSelectInquiry,
    handleBack,
  } = usePage();

  const { isLoggedIn, isLoading, login, logout } = useAuth();

  //inquiryのフィルタリング
  const [filter, setFilter] = useState<FilterValue>("all");
  // sort
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  //ページネーション
  const ITEMS_PER_PAGE = 10;
  const [currentPagenation, setCurrentPagenation] = useState(1);

  const filteredInquiries = useMemo(() => {
    return filter === "all"
      ? inquiries
      : inquiries.filter((i) => i.status === filter);
  }, [inquiries, filter]);

  const sortedInquiries = useMemo(() => {
    return [...filteredInquiries].sort((a, b) => {
      const diff =
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime();

      return sortOrder === "asc" ? diff : -diff;
    });
  }, [filteredInquiries, sortOrder]);

  const paginatedInquiries = useMemo(() => {
    const start = (currentPagenation - 1) * ITEMS_PER_PAGE;
    return sortedInquiries.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedInquiries, currentPagenation]);

  const handleFilterChange = (value: FilterValue) => {
    setFilter(value);
    setCurrentPagenation(1);
  };

  const handleSortChange = (value: "asc" | "desc") => {
    setSortOrder(value);
    setCurrentPagenation(1);
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    inquiryApi.getAll().then((data) => {
      setInquiries(data);
    });
  }, [isLoggedIn]);

  if (isLoading) return <p>読み込み中...</p>;

  if (!isLoggedIn) {
    return <LoginForm onLogin={login} />;
  }

  const handleAdd = (input: InquiryCreateInput) => {
    addInquiry(input);
    setCurrentPage("list");
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between py-3 border-b">
        <h1 className="text-lg font-bold text-gray-800">問い合わせ管理</h1>
        <button
          onClick={logout}
          className="ml-auto px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-xs text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition"
        >
          ログアウト
        </button>
      </header>

      {/* Navigation / Sort */}
      <div className="flex justify-center">
        <div className="flex items-center w-[800px] gap-4 py-4">
          <PageNavigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onBack={handleBack}
          />

          {currentPage === "list" && (
            <InquirySort sortOrder={sortOrder} setSortOrder={handleSortChange} />
          )}
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 flex justify-center">
        <div className="w-full">
          {currentPage === "list" && (
            <div>
              <InquiryFilter filter={filter} setFilter={handleFilterChange} />
              <InquiryList
                inquiries={paginatedInquiries}
                filteredInquiries={filteredInquiries}
                onSelectInquiry={handleSelectInquiry}
                onUpdate={updateInquiryStatus}
              />
            </div>
          )}

          {currentPage === "detail" && selectedId !== null && (
            <InquiryDetail
              inquiries={inquiries}
              selectedId={selectedId}
              updateInquiryStatus={updateInquiryStatus}
              onBack={handleBack}
            />
          )}

          {currentPage === "create" && <InquiryCreate onAdd={handleAdd} />}
        </div>
      </main>
      <footer className="mb-8">
        <Pagination
          currentPage={currentPagenation}
          setCurrentPage={setCurrentPagenation}
          totalItems={sortedInquiries.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </footer>
    </div>
  );
}

export default HomePage;
