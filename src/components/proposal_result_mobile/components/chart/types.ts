export type Data = {
  type: string;
  title: string;
  percentage: string;
  value: number;
};

export interface ChartProps {
  className?: string;
  title: string;
  amount: string;
  subTitle: string;
  data: Data[];
  colors: string[];
}
