import React from 'react';
import { TableDefaultProps } from './components/table/types';

export type ChartData = {
  type: string;
  title: string;
  value: number;
  display: string;
};

export type DataType = {
  display: string;
  rawValue: string | number;
};

export type Votor = {
  display: React.ReactNode;
  rawValue: string;
};

export interface TableData {
  voter: React.ReactNode;
  votingPower: DataType;
  votingPowerPercentage: DataType;
  votingPowerOverride: DataType;
  answer: DataType;
}

export type Label = {
  voter: string;
  votingPower: string;
  votingPowerPercentage: string;
  votingPowerOverride: string;
  answer: string;
};

export type Table = {
  label: Label;
  data: TableData[];
};

export type Chart = {
  title: string;
  amount: string;
  subTitle: string;
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

export interface ProposalResultProps {
  className?: string;
  tableDefaultProps: TableDefaultProps;
  chart: Chart;
  tabProps: TabProps;
}
