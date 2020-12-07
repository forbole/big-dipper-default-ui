export interface ValidatorListDesktopProps {
  className?: string;
  labels: Labels;
  active: Data[];
  inactive: Data[];
  onClick: () => void;
}

export type Labels = {
  commission: string;
  active: string;
  inactive: string;
}

export type Data = {
  imageUrl: string;
  displayName: string;
  operatorAddress: string;
  status: {
    className: string;
    display: string;
  }
  commission?: string;
  votingPower: {
    rawValue: number;
    display: string;
    percentDisplay: string;
  }
}
