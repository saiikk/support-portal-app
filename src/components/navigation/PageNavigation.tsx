import type { Page } from "../../types/Page";

type Props = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onBack: () => void;
};

function PageNavigation({ currentPage, onBack, setCurrentPage }: Props) {
  return (
    <nav style={{ marginRight: "auto" }}>
      {currentPage === "list" ? (
        <button onClick={() => setCurrentPage("create")}>新規登録</button>
      ) : (
        <button onClick={onBack}>戻る</button>
      )}
    </nav>
  );
}


export default PageNavigation;
