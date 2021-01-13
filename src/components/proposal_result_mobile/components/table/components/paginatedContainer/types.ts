import { Data } from '../../../../../table_paginated/types';

export interface PaginatedContainerProps {
  data: Data[];
  overrideLabel: string;
  pagination?: {
    rowsPerPage: number | undefined;
  };
}

export interface useTableDefaultHookProps {
  rowsPerPageCount?: number;
  onRowClick?: (data:Data) => void,
  initialActiveSort?: string,
  data: Data[];
}
