import React from 'react';

export type Columns = {
  label: string;
  display: string | React.ReactNode;
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
  sort?: boolean; // need to imiplement
}

export type Data = {
  [key: string]: {
    className?: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
    rawValue: string | number;
    display: string | React.ReactNode | number;
  }
}

export interface TablePaginatedProps {
  className?: string;
  columns: Columns[];
  data: Data[];
  onRowClick?: (data: Data) => void; // need to implement
  rowsPerPage?: number;
  initialActiveSort?: string;
}

export interface useTablePaginatedHookProps {
  rowsPerPageCount?: number;
  onRowClick?: (data:Data) => void,
  initialActiveSort?: string,
  data: Data[];
}
