import React from 'react';

export type Labels = {
  label: string;
  display: string | React.ReactNode;
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
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
  labels: Labels[];
  data: Data[]
}
