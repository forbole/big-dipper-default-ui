import React from 'react';

export type Columns = {
  label: string;
  display: string | React.ReactNode;
  align?: string;
  sort?: boolean;
}

export type Data = {
  [key: string]: {
    className?: string;
    rawValue: string | number;
    display: string | React.ReactNode | number;
  }
}

export interface TableDefaultProps {
  className?: string;
  columns: Columns[];
  data: Data[];
  onRowClick?: (data: Data) => void;
  initialActiveSort?: string;
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
