import type { InquiryCreateInput } from "../../types/Inquiry";
import { FormField } from "./InquiryFormField";
import axios from "axios";
import { inquiryApi } from "../../api/inquiries";
import { useForm } from "react-hook-form";

type LaravelValidationError = {
  message: string;
  errors: Record<string, string[]>;
};

type InquiryCreateProps = {
  onAdd: (input: InquiryCreateInput) => void;
};

export const InquiryCreate = ({ onAdd }: InquiryCreateProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InquiryCreateInput>();

  const onSubmit = async (data: InquiryCreateInput) => {
    try {
      const inquiry = await inquiryApi.create(data);
      onAdd(inquiry);
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 422) {
        const body = e.response.data as LaravelValidationError;
        // Laravel の 422 バリデーションエラーをフィールドに紐付ける
        Object.entries(body.errors).forEach(([field, messages]) => {
          setError(field as keyof InquiryCreateInput, {
            type: "server",
            message: messages[0],
          });
        });
      }
    }
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
        onSubmit={handleSubmit(onSubmit)}
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
          <input {...register("title")} style={{ lineHeight: "24px" }} />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </FormField>

        <FormField label="内容" required>
          <textarea {...register("content")} />
          {errors.content && (
            <p style={{ color: "red" }}>{errors.content.message}</p>
          )}
        </FormField>

        <FormField label="投稿者名" required>
          <input {...register("requester")} />
          {errors.requester && (
            <p style={{ color: "red" }}>{errors.requester.message}</p>
          )}
        </FormField>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "送信中..." : "登録する"}
        </button>
      </form>
    </div>
  );
};
