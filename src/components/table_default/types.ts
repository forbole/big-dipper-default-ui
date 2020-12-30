import React from 'react';

export type Columns = {
  label: string;
  display: string | React.ReactNode;
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
  sort?: boolean;
}

export type Data = {
  [key: string]: {
    className?: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
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
