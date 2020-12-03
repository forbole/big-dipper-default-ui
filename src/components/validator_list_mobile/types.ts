export interface ValidatorListMobileProps {
  className?: string;
  labels: Labels;
  active: {
    tab: string;
    data: Data[];
  }
  onClick: () => void;
}

export type Labels = {
  commission: string;
}

export type Data = {
  imageUrl: string;
  displayName: string;
  operatorAddress: string;
  status?: {
    className: string;
    display: string;
  }
  commission: string;
  votingPower: {
    rawValue: number;
    display: string;
    percentDisplay: string;
  }
}
