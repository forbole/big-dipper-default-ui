import React from 'react';

export interface ValidatorListMobileProps {
  className?: string;
  labels: Labels;
  data: Data[];
  onClick?: (data: Data) => void;
}

export type Labels = {
  commission: string;
}

export type Data = {
  operatorAddress: string;
  status: {
    rawValue: string;
    className: string;
    display: string;
  }
  commission?: {
    rawValue: number;
    display: string;
  };
  votingPower: {
    rawValue: number;
    display: string;
    percentDisplay: string;
    visual?: React.ReactNode;
  };
  moniker: {
    display: string;
    imageUrl: string;
  },
}
