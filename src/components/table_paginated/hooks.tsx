import React, { useState } from 'react';
import {
  useTablePaginatedHookProps, Data,
} from './types';

export const useTablePaginatedHook = (options: useTablePaginatedHookProps) => {
  const {
    rowsPerPageCount = 10,
    onRowClick,
    initialActiveSort,
    data,
  } = options;
  const [state, setState] = useState<any>({
    data,
    page: 0,
    rowsPerPage: rowsPerPageCount,
    activeSort: initialActiveSort,
    sortDirection: 'asc',
  });

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setState({
      ...state,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setState({
      ...state,
      page: 0,
      rowsPerPage: parseInt(event?.target?.value ?? 0, 10),
    });
  };

  const handleRowClick = (selectedData: Data) => {
    if (onRowClick) {
      onRowClick(selectedData);
    }
  };

  const handleSort = (key:string) => () => {
    const {
      sortDirection,
      activeSort: currentActiveSort,
      data: currentData,
    } = state;
    const newSortDirection = currentActiveSort === key && sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedData = currentData.sort((a:any, b:any) => {
      let compareA = a[key];
      let compareB = b[key];

      if (compareA && typeof compareA === 'string') {
        compareA = compareA?.toLowerCase() ?? '';
        compareB = compareB?.toLowerCase() ?? '';
      } else if (compareA && typeof compareA === 'object') {
        compareA = compareA?.rawValue ?? null;
        compareB = compareB?.rawValue ?? null;
      }
      if (newSortDirection === 'desc') {
        return compareA > compareB ? -1 : 1;
      }
      return compareA > compareB ? 1 : -1;
    });
    setState({
      ...state,
      sortDirection: newSortDirection,
      activeSort: key,
      data: sortedData,
    });
  };

  return {
    handleChangePage,
    handleChangeRowsPerPage,
    state,
    handleSort,
    handleRowClick,
  };
};
