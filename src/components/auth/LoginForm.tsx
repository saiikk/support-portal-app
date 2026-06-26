import { useForm } from "react-hook-form";
import axios from "axios";
import type { LoginInput, User } from "../../types/auth";
import logo from "../../assets/img_coreTama_profile.svg";
import { motion } from "motion/react";

type LaravelValidationError = {
  errors: Record<string, string[]>;
};

type LoginFormProps = {
  onLogin: (input: LoginInput) => Promise<User>;
};

export function LoginForm({ onLogin }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>();

  const onSubmit = async (data: LoginInput) => {
    try {
      await onLogin(data);
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 422) {
        const body = e.response.data as LaravelValidationError;
        Object.entries(body.errors).forEach(([field, messages]) => {
          setError(field as keyof LoginInput, {
            type: "server",
            message: messages[0],
          });
        });
      }
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-no-repeat bg-left translate-x-[364.449px] translate-y-[-159.137px]"
        style={{ backgroundImage: `url(${logo})` }}
        drag
        dragMomentum={false}
      />

      <div className="relative z-10 bg-white rounded-lg shadow p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          問い合わせ管理システム
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              type="email"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("email", {
                required: "メールアドレスを入力してください",
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">パスワード</label>
            <input
              id="password"
              type="password"
              className="border border-gray-300 rounded-md px-3 py-2"
              {...register("password", {
                required: "パスワードを入力してください",
              })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <button
            className="w-full bg-gray-300 text-white py-2 rounded-md mt-4 hover:bg-[#fdc539] disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "ログイン中..." : "ログイン"}
          </button>
        </form>
      </div>
    </div>
  );
}
