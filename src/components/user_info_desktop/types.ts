import React, { ReactElement } from 'react';

export type Data = {
  [key: string]: {
    className?: string;
    rawValue: string | number;
    display: string | React.ReactNode | number;
  }
}

export type Columns = {
  label: string;
  display: string | React.ReactNode;
  align?: string;
  sort?: boolean;
}

export interface TableDefaultProps {
  className?: string;
  delegatdColumns: Columns[];
  redelegatedColumns: Columns[];
  unbondingColumns: Columns[];
  delegatedData: Data[];
  redelegatedData: Data[];
  unbondingData: Data[];
  initialActiveSort?: string;
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
  customComponent?: ReactElement;
}

export interface TabProps {
  delegations: string;
  redelegations: string;
  unbondings: string;
}

export type Address = {
  title: string | React.ReactNode;
  address: string | React.ReactNode;
};

export interface UserInfoMobileProps {
  className?: string;
  title: string;
  address: {
    img?: string;
    alt?: string;
    address: Address;
    rewardAddress: Address;
  }
  chart: Chart;
  tabProps: TabProps;
  tableDefaultProps: TableDefaultProps;
}
