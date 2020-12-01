export interface OnlineVotingPowerProps {
  className?: string;
  linearGradient?: Gradient[],
  recharts?: {
    cartesianGrid?: {
      stroke?: string;
    }
    gridAspect?: number;
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
