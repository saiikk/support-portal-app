import type { Page } from "../types/Page";

type Props = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onBack: () => void;
};

function ButtonList({currentPage, onBack, setCurrentPage} : Props) {
  return (
    <nav>
      {currentPage === "detail" ? (
        <button onClick={onBack}>戻る</button>
      ) : (
        <div>
          <button onClick={() => setCurrentPage("list")}>一覧</button>
          <button onClick={() => setCurrentPage("create")}>新規登録</button>
        </div>
      )}
    </nav>
  );
}

export default ButtonList;
