import { usePage } from "./hooks/usePage";
import { InquiryListPage } from "./components/InquiryListPage";
import { useInquiry } from "./hooks/useInquiry";
import InquiryDetailPage from "./components/InquiryDetailPage";
import type { Inquiry, InquiryCreateInput } from "./types/Inquiry";
import { InquiryCreatePage } from "./components/InquiryCreatePage";
import type { InquiryStatusUpdateInput } from "./types/Inquiry";
function App() {
  const { inquiries, setInquiries } = useInquiry();

  const {
    currentPage,
    setCurrentPage,
    selectedId,
    handleSelectInquiry,
    handleBack,
  } = usePage();

  const handleAdd = (input: InquiryCreateInput) => {
    const newInquiry: Inquiry = {
      id: Date.now(),
      ...input,
      status: "pending",
      created_at: new Date().toISOString(),
    };
    setInquiries([...inquiries, newInquiry]);
    setCurrentPage("list");
  };

  const updateInquiryStatus = (id: number, input: InquiryStatusUpdateInput) => {
    setInquiries((prev) =>
      prev.map((inquiry) =>
        inquiry.id === id
          ? {
              ...inquiry,
              status: input.status,
            }
          : inquiry,
      ),
    );
  };

  return (
    <>
      <nav>
        {currentPage === "detail" ? (
          <button onClick={handleBack}>戻る</button>
        ) : (
          <div>
            <button onClick={() => setCurrentPage("list")}>一覧</button>
            <button onClick={() => setCurrentPage("create")}>新規登録</button>
          </div>
        )}
      </nav>

      <main>
        {currentPage === "list" && (
          <InquiryListPage
            inquiries={inquiries}
            onSelectInquiry={handleSelectInquiry}
          />
        )}
        {currentPage === "detail" && selectedId !== null && (
          <InquiryDetailPage inquiries={inquiries} selectedId={selectedId} updateInquiryStatus={updateInquiryStatus} />
        )}
        {currentPage === "create" && <InquiryCreatePage onAdd={handleAdd} />}
      </main>
    </>
  );
}

export default App;
