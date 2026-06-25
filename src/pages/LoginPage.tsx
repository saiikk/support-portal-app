import { LoginForm } from "../components/auth/LoginForm";
import { useAuth } from "../hooks/useAuth";
import HomePage from "./HomePage";

function LoginPage() {
  const { user, isLoggedIn, isLoading, login, logout } = useAuth();

  if (isLoading) return <p>読み込み中...</p>;

  if (!isLoggedIn) {
    return <LoginForm onLogin={login} />;
  }

  return (
    <div>
      <img
        style={{ width: "250px" }}
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODB3bGc3enloaGV4Mmk3b25jZm03MXRpZDN0ejhrYXppZ21tdWZpcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/k56eLJPYZF5lyuitaT/200.webp"
        alt="gif"
      />
      <header>
        <span>ようこそ、{user!.name} さん</span>
        <button onClick={logout}>ログアウト</button>
      </header>
      <main>
        {/* 認証後のコンテンツをここに表示 */}
        <p>ログインしました！</p>
      </main>
      <HomePage />
    </div>
  );
}

export default LoginPage;
