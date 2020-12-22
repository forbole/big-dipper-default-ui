import React from 'react';

export type Data = {
  address: React.ReactNode;
  from?: React.ReactNode;
  redelegateTo?: React.ReactNode;
  amount: string;
};

export interface ValidatorStakingMobileProps {
  className?: string;
  data: Data[]
  tablePaginationColor: string
}
export interface TablePaginationActionsMobileProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}
