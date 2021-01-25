import React from 'react';
import { TableDefaultProps } from './components/table/types';

export type ChartData = {
  title: string;
  value: number;
  display: string;
};

export type Total = {
  title: string;
  subTitle: string;
}

export type Chart = {
  total: Total
  totalDollar: Total
  data: ChartData[];
  colors: string[];
}

export interface TabProps {
  delegations: string;
  redelegations: string;
  unbondings: string;
}

export type Address = {
  title: string | React.ReactNode;
  display: string;
  rawValue: string;
  dialog?: React.ReactNode;
};

export interface UserInfoMobileProps {
  className?: string;
  classNameTable?: string;
  classNameAddress?: string;
  classNameChart?: string;
  title: string;
  addressContent: {
    img?: string;
    alt?: string;
    address: Address;
    rewardAddress: Address;
  }
  copyCallback?: (value: string) => void;
  chart: Chart;
  tabProps: TabProps;
  tableDefaultProps: TableDefaultProps;
}
