// import React from 'react';
import { Data } from '../../types';

// export interface ContainerProps {
//   validator: React.ReactNode;
//   votingPower: string;
//   votingPowerPercentage: string;
//   votingPowerOverride: string;
//   answer: string;
// }

export interface PaginatedContainerProps {
  className?: string;
  data: Data[];
  overrideLabel: string;
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
