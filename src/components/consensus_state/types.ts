export interface Props {
  title: string;
  height: string;
  proposer: string;
  data: Data;
  colors: string[];
  classname?: string;
}

type Data = {
  votingPowerPerentage: Detail[];
  round: number;
  step: number;
}

type Detail = {
  value: number;
}
