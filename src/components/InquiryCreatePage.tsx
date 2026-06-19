import type { InquiryCreateInput } from "../types/Inquiry";
import { useState } from "react";

type InquiryCreatePageProps = {
  onAdd: (input: InquiryCreateInput) => void;
};

export const InquiryCreatePage = ({ onAdd }: InquiryCreatePageProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [requester, setRequester] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "" || requester.trim() === "")
      return;
    onAdd({ title, content, requester });
  };

  return (
    <div>
      <h2>新規問い合わせ</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>内容</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>投稿者名</label>
          <input
            type="text"
            value={requester}
            onChange={(e) => setRequester(e.target.value)}
          />
        </div>
        <button type="submit">登録する</button>
      </form>
    </div>
  );
};
