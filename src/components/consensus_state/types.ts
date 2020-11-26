export interface Props {
  title: string;
  height: Detail;
  proposer: Detail;
  votingPower: Data;
  colors: string[];
  className?: string;
  round: Detail;
  step: Detail;
  icon: string;
}

type Detail = {
  title: string;
  display: string;
}

type Data = {
  title: string;
  value: number;
}
