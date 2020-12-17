import React from 'react';

export type Data = {
  address: React.ReactNode;
  amount: string;
};

export type OnClick = (data: Data) => void;

export interface ValidatorDelegationsDesktopProps {
  className?: string;
  labels: {
    address: string;
    amount: string;
  }
  data: Data[]
  onClick?: OnClick;
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}
