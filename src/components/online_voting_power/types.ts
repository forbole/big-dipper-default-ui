export interface OnlineVotingPowerProps {
  className?: string;
  linearGradient?: Gradient[],
  cartesianGrid?: {
    stroke?: string;
  }
  data: Data[];
}

export type Gradient = {
  offset: number;
  color: string;
}

export type Data = {
  date: string;
  value: number
}
