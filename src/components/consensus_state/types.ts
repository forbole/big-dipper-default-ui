export interface Props {
  title: string;
  height: Detail;
  proposer: Detail;
  votingPower: Data;
  colors: string[];
  classname?: string;
  round: Detail;
  step: Detail;
}

type Detail = {
  title: string;
  display: string;
}

type Data = {
  title: string;
  value: number;
}
