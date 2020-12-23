import { TablePaginationActionsMobileProps } from './types';

export const useTablePaginationActionsHooks = (props: TablePaginationActionsMobileProps) => {
  const {
    count,
    page,
    rowsPerPage,
    onChangePage,
  } = props;

  const handleFirstPage = () => {
    onChangePage(null, 0);
  };

  const handleNextPage = () => {
    if (page + 1 <= Math.ceil(count / rowsPerPage) - 1) {
      onChangePage(null, page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page - 1 >= 0) {
      onChangePage(null, page - 1);
    }
  };

  const handleLastPage = () => {
    onChangePage(null, Math.ceil(count / rowsPerPage) - 1);
  };

  return {
    handleFirstPage,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
  };
};
