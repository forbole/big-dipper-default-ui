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
  all: string;
  yes: string;
  no: string;
  veto: string;
  abstain: string;
  absence: string;
}

export type Address = {
  title: string | React.ReactNode;
  address: string | React.ReactNode;
};

export interface UserInfoProps {
  className?: string;
  title: string;
  address: {
    img?: string;
    alt?: string;
    address: Address;
    rewardAddress: Address;
  }
  chart: Chart;
  tabProps?: TabProps;
  tableDefaultProps?: TableDefaultProps;
}
