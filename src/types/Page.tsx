export type Page = "list" | "detail" | "create";

export type PaginationMeta = {
  total: number;
  current_page: number;
  last_page: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};