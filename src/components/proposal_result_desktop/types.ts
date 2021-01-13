import { TableDefaultProps } from './components/table/types';

export type ChartData = {
  title: string;
  percentage: string;
  value: number;
  amount: string;
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
