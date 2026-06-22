import { usePage } from "../hooks/usePage";
import { useInquiry } from "../hooks/useInquiry";
import { InquiryListPage } from "../components/InquiryListPage";
import InquiryDetailPage from "../components/InquiryDetailPage";
import { InquiryCreatePage } from "../components/InquiryCreatePage";
import type { InquiryCreateInput } from "../types/Inquiry";
import ButtonList from "../components/ButtonList";

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
      <ButtonList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBack={handleBack}
      />

      <main>
        {currentPage === "list" && (
          <InquiryListPage
            inquiries={inquiries}
            onSelectInquiry={handleSelectInquiry}
          />
        )}
        {currentPage === "detail" && selectedId !== null && (
          <InquiryDetailPage
            inquiries={inquiries}
            selectedId={selectedId}
            updateInquiryStatus={updateInquiryStatus}
            onBack={handleBack}
          />
        )}
        {currentPage === "create" && <InquiryCreatePage onAdd={handleAdd} />}
      </main>
    </>
  );
}

export default HomePage;
