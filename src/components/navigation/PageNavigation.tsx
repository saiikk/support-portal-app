import type { Page } from "../../types/Page";

type Props = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onBack: () => void;
};

function PageNavigation({ currentPage, onBack, setCurrentPage }: Props) {
  return (
    <nav className="px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-xs text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition">
      {currentPage === "list" ? (
        <button onClick={() => setCurrentPage("create")}>新規登録</button>
      ) : (
        <button onClick={onBack}>戻る</button>
      )}
    </nav>
  );
}

export default PageNavigation;