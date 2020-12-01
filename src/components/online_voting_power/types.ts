export interface OnlineVotingPowerProps {
  className?: string;
  linearGradient?: Gradient[],
  recharts?: {
    cartesianGrid?: {
      stroke?: string;
    }
    axis?: {
      stroke?: string;
      fontSize?: number | string;
    },
    gridAspect?: number;
    toolTipFormatter?: (value:string) => any;
  }
  data: Data[];
}

export type Gradient = {
  offset: number;
  color: string;
}

export type Data = {
  date: string;
  value: number;
}
