export interface ResponsePagination<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
