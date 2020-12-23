import React from 'react';

export type Data = {
  address: React.ReactNode;
  redelegate?: {
    from: React.ReactNode;
    to: React.ReactNode;
  }
  amount: string;
};

export interface ValidatorStakingDesktopProps {
  className?: string;
  labels: {
    address: string;
    from?: string;
    redelegateTo?: string;
    amount: string;
  };
  data: Data[];
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}
