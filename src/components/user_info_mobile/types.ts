import React from 'react';
import { Data } from '../table_paginated/types';

export interface TableDefaultProps {
  className?: string;
  delegatedData: Data[];
  redelegatedData: Data[];
  unbondingData: Data[];
  pagination?: {
    rowsPerPage: number | undefined;
  };
}

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
    address: Address;
    rewardAddress: Address;
    image?: React.ReactNode;
  }
  copyCallback?: (value: string) => void;
  chart: Chart;
  tabProps: TabProps;
  tableDefaultProps: TableDefaultProps;
}
