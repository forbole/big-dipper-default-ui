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

export interface TablePaginatedProps {
  className?: string;
  columns: Columns[];
  data: Data[];
  onRowClick?: (data: Data) => void;
  rowsPerPage?: number;
  initialActiveSort?: string;
}
