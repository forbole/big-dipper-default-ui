import React from 'react';
import { TabProps } from '../../types';

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

export interface TableDefaultProps {
  className?: string;
  columns: Columns[];
  absenceColumns: Columns[];
  data: Data[];
  onRowClick?: (data: Data) => void;
  initialActiveSort?: string;
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
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
