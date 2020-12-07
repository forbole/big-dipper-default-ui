export interface ValidatorListProps {
  className?: string;
  labels: ValidatorListLabels;
  active: ValidatorListData[];
  inactive: ValidatorListData[];
  onClick: () => void;
}

export type ValidatorListLabels = {
  commission: string;
  active: string;
  inactive: string;
}

export type ValidatorListData = {
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
