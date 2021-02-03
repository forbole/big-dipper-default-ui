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
  basecolor?: string;
}

export type Address = {
  title: string | React.ReactNode;
  display: string;
  rawValue: string;
  dialog?: React.ReactNode;
};

export interface UserInfoDesktopProps {
  title: string;
  className?: string;
  classNameChart?: string;
  classNameAddress?: string;
  addressContent: {
    image?: React.ReactNode;
    address: Address;
    rewardAddress: Address;
  }
  copyCallback?: (value: string) => void;
  chart: Chart;
}
