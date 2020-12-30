import React from 'react';
import { useState } from 'react';

export const useTablePaginatedHook = (count = 7) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(count);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  };
};
