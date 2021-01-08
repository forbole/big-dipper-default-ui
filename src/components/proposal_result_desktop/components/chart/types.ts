export type Data = {
  type: string;
  title: string;
  value: number;
  display: string;
};

export interface Props {
  className?: string;
  title: string;
  amount: string;
  subTitle: string;
  data: Data[];
  colors: string[];
}
