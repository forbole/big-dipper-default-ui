import { ChartData } from '../../types';

export interface ChartProps {
  className?: string;
  title: string;
  amount: string;
  subTitle: string;
  data: ChartData[];
  colors: string[];
}
