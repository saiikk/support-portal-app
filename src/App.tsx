import "./App.css";
import InquiryDetail from "./components/Inquiry/InquiryDetail";

import InquiryForm from "./components/Inquiry/InquiryForm";
import InquiryList from "./components/Inquiry/InquiryList";

function App() {
  return (
    <>
      {/* 問い合わせリスト */}
      <InquiryList />

      {/* 詳細画面 */}
      <InquiryDetail />

      {/* フォーム送信画面 */}
      <InquiryForm />
      
    </>
  );
}

export default App;
