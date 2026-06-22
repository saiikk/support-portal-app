import { usePage } from "../hooks/usePage";
import { useInquiry } from "../hooks/useInquiry";
import { InquiryList } from "../components/inquiry/InquiryList";
import InquiryDetail from "../components/inquiry/InquiryDetail";
import { InquiryCreate } from "../components/inquiry/InquiryCreate";
import type { InquiryCreateInput } from "../types/Inquiry";
import PageNavigation from "../components/navigation/PageNavigation.tsx";
import InquirySort from "../components/inquiry/InquirySort.tsx";

function HomePage() {
  const { inquiries, addInquiry, updateInquiryStatus } = useInquiry();

  const {
    currentPage,
    setCurrentPage,
    selectedId,
    handleSelectInquiry,
    handleBack,
  } = usePage();

  const handleAdd = (input: InquiryCreateInput) => {
    addInquiry(input);
    setCurrentPage("list");
  };

  return (
    <>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBack={handleBack}
      />

      <InquirySort />

      <main>
        {currentPage === "list" && (
          <InquiryList
            inquiries={inquiries}
            onSelectInquiry={handleSelectInquiry}
            onUpdate={updateInquiryStatus}
          />
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
      </main>
    </>
  );
}

export default HomePage;
