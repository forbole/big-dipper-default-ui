import React from 'react';
import { useState } from 'react';

export const useTablePaginationHook = (data) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    if (newPage < 0) {
      setPage(0);
    } else if (newPage > Math.ceil(data.length / rowsPerPage) - 1) {
      setPage(Math.ceil(data.length / rowsPerPage) - 1);
    } else {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event?.target?.value, 10));
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
