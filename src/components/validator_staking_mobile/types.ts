import React from 'react';

export type Data = {
  address: React.ReactNode;
  from?: React.ReactNode;
  redelegateTo?: React.ReactNode;
  amount: string;
};

export type OnClick = (data: Data) => void;

export interface ValidatorStakingMobileProps {
  className?: string;
  data: Data[]
  onClick?: OnClick;
}

export interface TablePaginationActionsMobileProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}
