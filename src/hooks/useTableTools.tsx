/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react';

const useTableTools = () => {
  const [orderField, setOrderField] = useState<string>('name');
  const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  function onSortChange(params: string): void {
    setOrderField(params);
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc');
  }

  function onPageChange(page: number): void {
    setPage(page);
  }

  function onRowsPerPageChange(perPage: number): void {
    setRowsPerPage(perPage);
  }

  return {
    onSortChange,
    onPageChange,
    onRowsPerPageChange,
    orderField,
    orderBy,
    page,
    rowsPerPage,
    setPage,
  };
};

export default useTableTools;
