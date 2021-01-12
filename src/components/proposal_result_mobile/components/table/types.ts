import React from 'react';
import { TabProps } from '../../types';

// export type Columns = {
//   label: string;
//   display: string | React.ReactNode;
//   align?: string;
//   sort?: boolean;
// }

export type Data = {
  [key: string]: {
    className?: string;
    rawValue: string | number;
    display: string | React.ReactNode | number;
  }
}

// export interface ContainerProps {
//   validator: React.ReactNode;
//   votingPower: string;
//   votingPowerPercentage: string;
//   votingPowerOverride: string;
//   answer: string;
// }

export interface TableDefaultProps {
  className?: string;
  data: Data[];
  overrideLabel: string;
  // onRowClick?: (data: Data) => void;
  // initialActiveSort?: string;
  pagination?: {
    rowsPerPage: number | undefined;
  };
}

export interface TableProps {
  className?: string;
  tableDefaultProps: TableDefaultProps;
  tabProps: TabProps;
  classNameTab: string;
  classNameIndicator: string;
  pagination?: {
    rowsPerPage: number | undefined;
  };
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
