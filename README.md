# Support Portal App

React + TypeScript で作成した問い合わせ管理アプリです。

## 概要

問い合わせの一覧表示・詳細確認・新規登録・ステータス更新を行うことができます。

## 機能

### 問い合わせ一覧

- 問い合わせ一覧の表示
- 作成日時による並び替え
  - 新しい順
  - 古い順
- ステータスの表示
  - 未対応
  - 対応中
  - 完了

### 問い合わせ詳細

- 問い合わせ内容の確認
- ステータス変更

### 問い合わせ登録

- タイトル入力
- 内容入力
- 投稿者名入力
- 必須項目のバリデーション

## 技術スタック

- React
- TypeScript
- React Hooks
  - useState
  - useMemo

## ディレクトリ構成

```text
src/
├── components/
│   ├── inquiry/
│   └── navigation/
├── hooks/
├── pages/
├── types/
└── utils/
```

## 状態管理

カスタムフックを利用して状態管理を行っています。

### useInquiry

問い合わせデータの管理

- 一覧取得
- 新規登録
- ステータス更新
- 並び替え

### usePage

画面遷移の管理

- 一覧画面
- 詳細画面
- 新規作成画面

## データモデル

```ts
export type Inquiry = {
  id: number;
  title: string;
  content: string;
  requester: string;
  status: InquiryStatus;
  created_at: string;
};
```

```ts
export type InquiryStatus =
  | "pending"
  | "in_progress"
  | "completed";
```

## 起動方法

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

## 今後の改善案

- React Hook Form の導入
- Zod によるバリデーション
- LocalStorage 永続化
- API 連携
- ページネーション
- 検索機能