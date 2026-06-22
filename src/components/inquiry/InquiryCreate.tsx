import type { InquiryCreateInput } from "../../types/Inquiry";
import { useState } from "react";
import { FormField } from "./InquiryFormField";

type InquiryCreateProps = {
  onAdd: (input: InquiryCreateInput) => void;
};

export const InquiryCreate = ({ onAdd }: InquiryCreateProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [requester, setRequester] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const isDisabled =
    title.trim() === "" || content.trim() === "" || requester.trim() === "";

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabled) {
      setErrMsg("空のフォームがあります。");
      return;
    }
    setErrMsg("");
    onAdd({ title, content, requester });
  };

  return (
    <div
      style={{
        width: "800px",
        textAlign: "left",
        margin: "0 auto",
      }}
    >
      <h1>新規問い合わせ</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          padding: "24px",
          textAlign: "left",
          fontWeight: "bold",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <FormField label="タイトル" required>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ lineHeight: "24px" }}
          />
        </FormField>

        <FormField label="内容" required>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              height: "180px",
              width: "100%",
            }}
          />
        </FormField>

        <FormField label="投稿者名" required>
          <input
            type="text"
            value={requester}
            onChange={(e) => setRequester(e.target.value)}
            style={{ lineHeight: "24px" }}
          />
        </FormField>
        <button
          type="submit"
          disabled={title.trim() === ""}
          style={{
            display: "block",
            margin: "0 auto",
            fontSize: "14px",
            color: "white",
            backgroundColor: isDisabled ? "gray" : "orange",
            fontWeight: "bold",
            padding: "24px",
            border: "none",
            opacity: isDisabled ? "0.4" : "1",
            width: "250px",
          }}
        >
          送信
        </button>
        <p style={{ color: "red" }}>{errMsg}</p>
      </form>
    </div>
  );
};
