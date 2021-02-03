import React from 'react';

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
  baseColor?: string;
}

export type Address = {
  title: string | React.ReactNode;
  display: string;
  rawValue: string;
  dialog?: React.ReactNode;
};

export interface UserInfoMobileProps {
  className?: string;
  title: string;
  addressContent: {
    address: Address;
    rewardAddress: Address;
    image?: React.ReactNode;
  }
  copyCallback?: (value: string) => void;
  chart: Chart;
}
