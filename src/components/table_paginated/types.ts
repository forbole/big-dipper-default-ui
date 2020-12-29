import React from 'react';

export type Labels = {
  label: string;
  display: string | React.ReactNode;
  align?: string;
}

export type Data = {
  [key: string]: {
    align?: string;
    rawValue: string | number;
    display: string | React.ReactNode | number;
  }
}

export interface TablePaginatedProps {
  className?: string;
  labels: Labels[];
  data: Data[]
}
